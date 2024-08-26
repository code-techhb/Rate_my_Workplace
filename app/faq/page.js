'use client';

// --------------------------------- Imports ------------------------------------
import { useState } from 'react';
import {
  Box,
  Typography,
  ThemeProvider,
  Button,
  Stack,
  Avatar,
  Collapse,
  IconButton,
} from '@mui/material';
import Theme from '../components/theme';
import Navbar from '../components/navbar';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Footer from '../components/footer';
import FeaturesAI from '../features.js/page';

export default function Home() {
  // State to manage expanded questions
  const [expanded, setExpanded] = useState(Array(10).fill(false)); // Assuming 10 questions

  // Toggle expansion
  const handleToggle = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  return (
    <ThemeProvider theme={Theme}>
      <Navbar />

      <Box
        width="100vw"
        minHeight="100vh"
        backgroundColor="background.default"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"

      >
        {/* Main Title */}
        <Typography variant="h5" align="center" 
        sx={{
            fontFamily: 'Paytone One',
            fontSize: '80px',
            fontStyle: 'normal',
            fontWeight: 800,
            color: Theme.palette.text.dark,
          }}>
          Do you have questions?
        </Typography>

        {/* Subtitle */}
        <Typography variant="h4" padding={0} align="center" sx={{
                fontFamily: 'Paytone One',
                fontSize: '30px',
                fontStyle: 'normal',
                margin: 3,
                color: Theme.palette.text.dark,

              }}
        >
          We have answers (well, most of the time)
        </Typography>

        {/* Description */}
        <Typography variant="body1" fontSize={21} width="100%" maxWidth="800px" align="center" marginTop={2}
              >
          Below you'll find answers to the most common questions you may have on Rate My WorkPlace. Also, please feel free to check our contact Us page if you still can't find the answers that you're looking for. 
        </Typography>

        {/* Image */}
        <Box marginTop={4} marginBottom={4}>
          <Avatar
            src="/faq.jpg" 
            alt="FAQ Image"
            sx={{ width: 200, height: 200 }}
          />
        </Box>

        {/* FAQ Section */}
        <Stack spacing={2} width="100%" maxWidth="800px">
          
        <Box>
  {[{
    question: "Can I submit my own review on Rate My Workplace?",
    answer: "No, 'Rate My Workplace' does not accept user-submitted reviews. Instead, the platform uses AI to provide feedback based on a curated list of reviews already in our database.",
  }, {
    question: "How does the AI chatbot provide feedback?",
    answer: "The AI chatbot uses advanced algorithms and Pinecone's vector search to analyze reviews in our database and offer personalized feedback based on your queries.",
  }, {
    question: "What kind of career advice can the chatbot provide?",
    answer: "The chatbot can offer insights on various career paths, company cultures, and workplace environments based on the data stored in our database.",
  }, {
    question: "How accurate is the feedback provided by the chatbot?",
    answer: "The feedback is based on real reviews and AI-driven analysis, aiming to provide reliable and relevant insights. However, it's always good to use this information as one of many resources in your decision-making process.",
  }, {
    question: "Is the information provided by the chatbot confidential?",
    answer: "Yes, the information you provide to the chatbot is confidential and is not stored or shared. The chatbot's responses are generated based on existing data in the database.",
  }, {
    question: "How is Pinecone used on this platform?",
    answer: "Pinecone is utilized for managing and searching vector embeddings of our review data, enabling the AI chatbot to retrieve accurate and contextually relevant feedback.",
  }, {
    question: "Can the chatbot compare multiple companies for career advice?",
    answer: "Yes, you can ask the chatbot to compare different companies, and it will provide feedback based on the reviews and data available in our database.",
  }, {
    question: "Is the chatbot free to use?",
    answer: "Yes, the chatbot is completely free to use for obtaining feedback and career advice.",
  }, {
    question: "What types of companies are included in your database?",
    answer: "Our database includes reviews and feedback on a wide range of companies, from startups to large corporations, across various industries.",
  }, {
    question: "Can the chatbot provide feedback on specific roles within a company?",
    answer: "Yes, the chatbot can provide insights on specific roles within a company based on the data available, helping you make more informed career decisions.",
}]
.map((faq, index) => (
    <Box key={index} marginBottom={3}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6">{faq.question}</Typography>
        <IconButton onClick={() => handleToggle(index)}>
          <ExpandMoreIcon />
        </IconButton>
      </Box>
      <Collapse in={expanded[index]}>
        <Typography variant="body1" fontSize={15} paddingLeft={2} paddingTop={1}>
          {faq.answer}
        </Typography>
      </Collapse>
    </Box>
  ))}
</Box>


        </Stack>

        
      </Box>

<Footer></Footer> 
    </ThemeProvider>
  );
}
