'use client';

// --------------------------------- Imports ------------------------------------
import { useState } from 'react';
import {
  Box,
  Typography,
  ThemeProvider,
  Button,
  TextField,
  Stack,
  Avatar,
} from '@mui/material';
import Theme from '../components/theme';
import Navbar from '../components/navbar';
import { MuiMarkdown } from 'mui-markdown';

export default function Home() {
  // --------------------------------- State Management vars -----------------------
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: `Hey! I am your AI advisor, here to help you find the perfect spot for your internship, first job 😊`,
    },
  ]);

  const [message, setMessage] = useState('');

  // --------------------------------- event handler functions -------------------------------
  // function to send message to chatbot
  const sendMessage = async () => {
    setMessages((messages) => [
      ...messages,
      { role: 'user', content: message },
      { role: 'assistant', content: '' },
    ]);
    setMessage('');

    // fetch api
    const response = fetch('/api/chat', {
      method: 'POST',
      headers: {
        'content-Type': 'application/json',
      },
      body: JSON.stringify([...messages], { role: 'user', content: message }),
    }).then(async (res) => {
      const reader = res.body.getReader();
      const decoder = new TextDecoder(); //decode the text from api

      let result = '';
      return reader.read().then(function processText({ done, value }) {
        if (done) {
          return result;
        }
        const text = decoder.decode(value || new Uint8Array(), {
          stream: true,
        });
        setMessages((messages) => {
          let lastMessage = messages[messages.length - 1];
          let otherMessages = messages.slice(0, messages.length - 1);
          return [
            ...otherMessages,
            {
              ...lastMessage,
              content: lastMessage.content + text,
            },
          ];
        });
        return reader.read().then(processText);
      });
    });
  };
  // ----------------- UI --------------------------
  return (
    <ThemeProvider theme={Theme}>
      {/* background */}
      <Navbar></Navbar>

      <Box
        width="100wh"
        height="100vh"
        sx={{ bgcolor: Theme.palette.primary.main }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={3}
      >
        {/* chat window */}
        <Stack
          sx={{
            height: '700px',
            width: '55%', // change this later
            borderRadius: '12px',
          }}
        >
          {/* messages window */}
          <Box
            sx={{
              backgroundColor: 'background.default',
              flexGrow: '1',
              borderRadius: '12px',
              height: '85%',
              border: (theme) => `1px solid ${theme.palette.primary.border}`,
              marginBottom: '15px',
              overflow: 'auto',
              boxShadow: '1',
            }}
          >
            {/* Chat  */}
            {messages.map((message, index) => (
              <Stack
                key={index}
                direction="row"
                spacing={3}
                flexDirection="row"
                alignItems="center"
                padding="20px"
                justifyContent={
                  message.role === 'assistant' ? 'flex-start' : 'flex-end'
                }
              >
                <Avatar
                  sx={{
                    bgcolor: Theme.palette.text.yellow,
                    width: 50,
                    height: 50,
                  }}
                  src={message.role === 'assistant' ? 'advisor.png' : ''}
                />
                <Typography
                  sx={{
                    bgcolor:
                      message.role === 'assistant'
                        ? Theme.palette.primary.dark
                        : Theme.palette.primary.beige2,
                    color:
                      message.role === 'assistant'
                        ? Theme.palette.text.light
                        : Theme.palette.text.black,
                    borderRadius: '12px',
                    padding: '20px',
                    whiteSpace: 'normal', // Ensures that text wraps and doesn't overflow
                    wordBreak: 'break-word', // Ensures long words break to fit the container
                    overflowWrap: 'break-word', // Ensures that text breaks at the end of lines
                    maxWidth: '100%', // Limits width to the container's width
                  }}
                >
                  <MuiMarkdown>{message.content}</MuiMarkdown>
                </Typography>
              </Stack>
            ))}
          </Box>

          {/* chat input space */}
          <Stack
            direction={'row'}
            spacing={2}
            sx={{
              backgroundColor: 'background.default',
              padding: '10px',
              borderRadius: '12px',
              border: (theme) => `1px solid ${theme.palette.primary.border}`,
              boxShadow: '1',
            }}
          >
            <TextField
              width="80%"
              variant="standard"
              fullWidth
              placeholder="Type here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <Button
              variant="contained"
              disableElevation="true"
              sx={{
                borderRadius: '20px',
                px: '15px',
                width: '120px',
                fontFamily: 'Poppins',
                bgcolor: Theme.palette.text.dark,
                fontWeight: 'Bold',
                color: Theme.palette.text.light,
                border: (theme) => `1px solid ${theme.palette.primary.border}`,
                textAlign: 'right',
              }}
              onClick={sendMessage}
            >
              Send
            </Button>
          </Stack>
        </Stack>
      </Box>
    </ThemeProvider>
  );
}
