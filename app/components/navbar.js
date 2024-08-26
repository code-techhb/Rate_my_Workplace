import { AppBar, Toolbar, Button, Box, ThemeProvider } from '@mui/material';
import Theme from './theme';
import {
  SignedIn,
  SignedOut,
  UserButton,
  isSignedIn,
  useAuth,
  ClerkProvider,
} from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const Navbar = () => {
  const router = useRouter();
  const handleRedirectChatbot = () => {
    router.push('/chatbot');
  };
  const handleRedirectContactUs = () => {
    router.push('/contact-us');
  };
  const handleRedirectFaq = () => {
    router.push('/faq');
  };

  // __________________________ redirect if signed in_____________________
  //   useEffect(() => {
  //     if (isSignedIn) {
  //       const hasRedirected = localStorage.getItem("hasRedirected");

  //       if (!hasRedirected) {
  //         router.push("/generateCards");
  //         localStorage.setItem("hasRedirected", "true");
  //       }
  //     }
  //   }, [isSignedIn, router]);

  // _____________________________ Nav Bar UI _____________________________

  return (
    <ThemeProvider theme={Theme}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: Theme.palette.primary.main,
          boxShadow: 'none',
        }}
      >
        <Toolbar>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <Box>
              <a href="/">
                <img
                  src="/logo.png"
                  href="/"
                  width={107}
                  height={31}
                  alt="logo rate my workplace"
                />
              </a>
            </Box>
            <Box>
              <Button
                variant="outlined"
                sx={{
                  borderRadius: '16px',
                  boxShadow: 'none',
                  fontFamily: 'Poppins',
                  backgroundColor: Theme.palette.primary.dark,
                  '&:hover': {
                    bgcolor: Theme.palette.text.darker,
                  },
                }}
                onClick={handleRedirectChatbot}
              >
                Chat with AI
              </Button>
              <Button
                variant="outlined"
                sx={{
                  boxShadow: 'none',
                  fontFamily: 'Poppins',
                  color: Theme.palette.text.dark,
                  textDecoration: 'none', // Ensure no underline by default
                  '&:hover': {
                    textDecoration: 'underline', // Add underline on hover
                  },
                }}
                onClick={handleRedirectFaq}
              >
                FAQ
              </Button>
              <Button
                variant="outlined"
                sx={{
                  boxShadow: 'none',
                  fontFamily: 'Poppins',
                  color: Theme.palette.text.dark,
                  textDecoration: 'none', // Ensure no underline by default
                  '&:hover': {
                    textDecoration: 'underline', // Add underline on hover
                  },
                }}
                onClick={handleRedirectContactUs}
              >
                Contact US
              </Button>
              
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Navbar;
