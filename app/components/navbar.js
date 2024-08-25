import { AppBar, Toolbar, Button, Box, ThemeProvider } from "@mui/material";
import Theme from "./theme";
import {
  SignedIn,
  SignedOut,
  UserButton,
  isSignedIn,
  useAuth,
  ClerkProvider,
} from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const router = useRouter();
  //   const { isSignedIn } = useAuth();

  const handleRedirectLoginPage = () => {
    router.push("/sign-in");
  };

  const handleRedirectSignupPage = () => {
    router.push("/sign-up");
  };

  const handleRedirectChatbot = () => {
    router.push("/chatbot");
  };
  const handleRedirectContactUs = () => {
    router.push("/contact-us");
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
          boxShadow: "none",
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
            <Button
              variant="outlined"
              sx={{
                borderRadius: "16px",
                boxShadow: "none",
                backgroundColor: Theme.palette.primary.dark,
              }}
              onClick={handleRedirectChatbot}
            >
              Chat with AI
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Navbar;
