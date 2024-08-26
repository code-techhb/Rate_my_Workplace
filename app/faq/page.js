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
    question: "What is 'Rate My Workplace'?",
    answer: '"Rate My Workplace" is a platform where employees can anonymously share their experiences and rate their workplaces. The goal is to provide insights and transparency about various companies\' work environments.',
  }, {
    question: "How can I submit a rating or review?",
    answer: 'To submit a rating or review, simply navigate to the review section of the site. Fill out the required fields with your feedback, select a rating, and submit. Your review will be processed and added to the database.',
  }, {
    question: "Can I remain anonymous when submitting a review?",
    answer: 'Yes, all reviews are submitted anonymously to protect your privacy. We do not collect personal information that could identify you.',
  }, {
    question: "How do you ensure the authenticity of reviews?",
    answer: 'We use a combination of automated and manual moderation processes to review and verify submissions. This helps ensure that the feedback we publish is authentic and valuable.',
  }, {
    question: "How can I contact support if I have an issue?",
    answer: 'If you have any issues or questions, please use the "Contact Us" section on the site. Fill out the contact form, and our support team will get back to you as soon as possible.',
  }, {
    question: "Can I edit or delete my review after submission?",
    answer: 'Once a review is submitted, it cannot be edited or deleted by the user. If you need to make changes, please contact our support team with the details of your request.',
  }, {
    question: "How is the data used by the chatbot?",
    answer: 'The chatbot uses semantic search embeddings to provide relevant responses based on the data stored in our database. It helps users find information quickly and accurately by understanding the context of their queries.',
  }, {
    question: "What is Pinecone, and how is it used here?",
    answer: 'Pinecone is a vector database used for semantic search. We use Pinecone to manage and search the embeddings of our data, allowing the chatbot to retrieve and provide precise answers based on user queries.',
  }, {
    question: "Can I rate multiple workplaces?",
    answer: 'Yes, you can rate multiple workplaces. Each review is considered individually and contributes to the overall rating of the respective workplace.',
  }, {
    question: "How can I provide feedback about the website?",
    answer: 'If you have feedback about the website, please use the "Contact Us" section to share your thoughts. We welcome suggestions and comments to help improve our platform.',
  }].map((faq, index) => (
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
      <FeaturesAI></FeaturesAI>

<Footer></Footer> 
    </ThemeProvider>
  );
}
