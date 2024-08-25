import { NextResponse } from 'next/server';
import { Pinecone } from '@pinecone-database/pinecone';
import OpenAI from 'openai';

// System Prompt
const systemPrompt = `You are a Rate My Workplace agent designed to help students make informed decisions about internships and job offers by providing insights about companies they are interested in. You assist students by answering their QUERIES about SPECIFIC companies they want to intern at. Using Retrieval-Augmented Generation (RAG), you will retrieve the most relevant information and provide answers based on company reviews, culture, work-life balance, growth opportunities, and other important factors. If the company in query isn't in the database, refer to the internet.

For each student query:
-Identify the key aspects of the student's question (e.g., work culture, benefits, diversity).
-Retrieve and analyze relevant data about potential companies.
-Provide a concise summary of the top 2 companies that best align with the student's concerns.
-Offer any additional relevant advice that could help the student make a more informed decision in a succint response.

Your goal is to empower students with accurate, actionable insights tailored to their specific queries about potential internships or job opportunities.
Remember that your role is to inform and guide, not to make decisions for the students. Always encourage them to use the information you provide as part of a broader decision-making process that includes their own research and personal considerations.
Maintain a friendly, professional and approachable tone, and tailor your language to be appropriate for college students seeking internships.
`;

// Post request
export async function POST(req) {
  const data = await req.json();

  // pinecone client
  const pc = new Pinecone({
    apiKey: process.env.PINECONE_API_KEY,
  });

  // get the index from pinecone
  const index = pc.index('rmw').namespace('ns1');

  // OpenAI instance
  const openai = new OpenAI();

  const text = data[data.length - 1].content; //last message from the data
  // create an embedding
  const embedding = await openai.embeddings.create({
    model: 'text-embedding-3-small',
    input: text,
    encoding_format: 'float',
  });

  // Query the vdb using the embedding above
  const results = await index.query({
    topK: 2, //# of output
    includeMetadata: true,
    vector: embedding.data[0].embedding,
  });

  // Check if the VDB returned any meaningful results
  let relevantResults =
    results.matches &&
    results.matches.length > 0 &&
    results.matches.some((match) => match.score > 0.5);

  let resultString = '';
  if (relevantResults) {
    // Format VDB results if relevant
    resultString = '\n\nResults from vector db: ';
    results.matches.forEach((match) => {
      resultString += `
        Company: ${match.id}\n
        Work-Life Balance: ${match.metadata['Work-Life Balance']}\n
        Compensation and Benefits: ${match.metadata['Compensation and Benefits']}\n
        Career Growth and Development Opportunities: ${match.metadata['Career Growth and Development Opportunities']}\n
        Company Culture: ${match.metadata['Company Culture']}\n
        Leadership and Management: ${match.metadata['Leadership and Management']}\n
        Stars: ${match.metadata['Stars']}\n\n\n
     `;
    });
  } else {
    // If no relevant results, add a message indicating reliance on general knowledge
    resultString =
      "\n\nNo relevant results were found in the database. Here's what I know based on general information:";
  }

  // Construct the conversation data
  const lastMessage = data[data.length - 1];
  const lastMessageContent = lastMessage.content + resultString;
  const lastDataWithoutLastMessage = data.slice(0, data.length - 1);

  // Send request to OpenAI
  const completion = await openai.chat.completions.create({
    messages: [
      { role: 'system', content: systemPrompt },
      ...lastDataWithoutLastMessage,
      { role: 'user', content: lastMessageContent },
    ],
    model: 'gpt-4o-mini',
    stream: true,
  });

  // Stream the response from OpenAI
  const stream = new ReadableStream({
    async start(controller) {
      const encoder = new TextEncoder();
      try {
        for await (const chunk of completion) {
          const content = chunk.choices[0]?.delta?.content;
          if (content) {
            const text = encoder.encode(content);
            controller.enqueue(text);
          }
        }
      } catch (err) {
        controller.error();
        alert('Error');
      } finally {
        controller.close();
      }
    },
  });

  // Send result of request back to client
  return new NextResponse(stream);
}
