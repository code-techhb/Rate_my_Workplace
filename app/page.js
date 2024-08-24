"use client";

import { ThemeProvider, Box } from "@mui/material";
import { ClerkProvider } from "@clerk/nextjs";
import Head from "next/head";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Theme from "./components/theme";
import Hero from "./components/hero";

export default function Home() {
  return (
    // MUI coming soon
    <ThemeProvider theme={Theme}>
      <Head>
        <title>Rate My Workplace</title>
        <meta name="description" content="Rate My Workplace"></meta>
        <link rel="icon" href="/logo.png" type="image/png" />
      </Head>
      <Box
        sx={{
          background: Theme.palette.primary.main,
        }}
        width="100%"
        height="100%"
      ></Box>

      <Navbar></Navbar>
      <Hero></Hero>
      <Footer></Footer>
    </ThemeProvider>
  );
}
