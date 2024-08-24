"use client";

// --------------------------------- Imports ------------------------------------
import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  ThemeProvider,
  List,
  ListItemText,
  ListItemButton,
  Button,
  TextField,
  Stack,
  Avatar,
  Container,
} from "@mui/material";
import Theme from "../components/theme";
import Navbar from "../components/navbar";
import { useRouter } from "next/navigation";
//import UserProfile from "./components/avatar";

export default function Home() {
  // --------------------------------- State Management vars -----------------------
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [message, setMessage] = useState(""); //user

  // --------------------------------- event handler functions -------------------------------
  const sendMessage = async () => {
    if (message.trim() === "") return;

    const newChatHistory = [
      ...chatHistory,
      { role: "user", parts: [{ text: message }] },
    ];
    setChatHistory(newChatHistory);
    setMessage("");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newChatHistory),
      });

      const data = await response.json();
      setChatHistory([
        ...newChatHistory,
        { role: "model", parts: [{ text: data.text }] },
      ]);
    } catch (error) {
      console.error("Error:", error);
      setError("Failed to send message");
    }
  };

  return (
    <ThemeProvider theme={Theme}>
      {/* background */}
      <Navbar></Navbar>

      <Box
        width="100wh"
        height="100vh"
        backgroundColor="background.default"
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={3}
      >
        {/* profile sidebar */}
        <Box
          sx={{
            backgroundColor: "primary.sidebar",
            width: "20%",
            borderRadius: "12px",
            height: "700px",
            boxShadow: 2,
          }}
        >
          <Stack margin="20px">
            {/* avatar/profile */}
            {/* <UserProfile userEmail={user?.email} /> */}

            {/* previous chats */}
            <Box>
              {/* Will have to create a sort of loop here to retrieve all chats from db */}
              <List>
                {/* will need to manage the button here so that when the user clicks, it displays the chat in the chat window */}
                <Typography variant="h5" textAlign="center" marginBottom="15px">
                  🚧 Coming soon 🚧
                </Typography>
                <ListItemButton
                  sx={{
                    borderRadius: "8px",
                    border: (theme) =>
                      `1px solid ${theme.palette.primary.border}`,
                  }}
                >
                  <ListItemText primary="Previous chats will be displayed in this sidebar in case you want to return to them later 📥" />
                </ListItemButton>
              </List>
            </Box>
          </Stack>
        </Box>
        {/* end of profile sidebar */}

        {/* chat window */}
        <Stack
          sx={{
            height: "700px",
            width: "55%",
            borderRadius: "12px",
          }}
        >
          {/* messages window */}
          <Box
            sx={{
              backgroundColor: "background.default",
              flexGrow: "1",
              borderRadius: "12px",
              height: "85%",
              border: (theme) => `1px solid ${theme.palette.primary.border}`,
              marginBottom: "15px",
              overflow: "auto",
              boxShadow: "1",
            }}
          >
            {/* user icon and text box*/}
            <Stack
              direction="row"
              spacing={3}
              flexDirection="row"
              alignItems="center"
              padding="20px"
            >
              <Avatar
                sx={{
                  bgcolor: "primary.main",
                  width: 50,
                  height: 50,
                }}
                src="logo.png"
              />
              <Typography
                sx={{
                  bgcolor: "primary.main",
                  borderRadius: "12px",
                  padding: "20px",
                }}
              >
                {` 
Hey! I am your AI advisor, here to help you find the perfect spot for your internship, first job, or even when you're ready to move on to a new role. Just tell me what kind of job or company you are interested in, and I will give you the scoop on everything you need to know—perks, career growth, development opportunities, company culture, leadership, and whether they truly support work-life balance. We will find your dream gig together! 😊`}
              </Typography>
            </Stack>

            {chatHistory.map((message, index) => (
              <Stack
                key={index}
                direction="row"
                spacing={3}
                flexDirection="row"
                alignItems="center"
                padding="20px"
                justifyContent={
                  message.role === "model" ? "flex-start" : "flex-end"
                }
              >
                <Avatar
                  sx={{
                    bgcolor: "primary.main",
                    width: 50,
                    height: 50,
                  }}
                  src={message.role === "model" ? "logo.png" : ""}
                />
                <Typography
                  sx={{
                    bgcolor:
                      message.role === "model"
                        ? "primary.main"
                        : "primary.userChat",
                    borderRadius: "12px",
                    padding: "20px",
                  }}
                >
                  {message.parts[0].text}
                </Typography>
              </Stack>
            ))}
          </Box>

          {/* chat input space */}
          <Stack
            direction={"row"}
            spacing={2}
            sx={{
              backgroundColor: "background.default",
              padding: "10px",
              borderRadius: "12px",
              border: (theme) => `1px solid ${theme.palette.primary.border}`,
              boxShadow: "1",
            }}
          >
            <TextField
              width="80%"
              variant="standard"
              fullWidth
              placeholder="Let's make something yummy...."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            {/* display error message */}
            {error && <Typography color="error">{error}</Typography>}
            <Button
              variant="contained"
              disableElevation="true"
              sx={{
                borderRadius: "20px",
                px: "15px",
                width: "120px",
                border: (theme) => `1px solid ${theme.palette.primary.border}`,
                textAlign: "right",
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
