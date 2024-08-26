'use client';

import { ThemeProvider, Box } from '@mui/material';
import Head from 'next/head';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Theme from './components/theme';
import Hero from './components/hero';
import FeaturesAI from './features.js/page';
import GradientOverlay from './components/gradientOverlay';
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
      >
        <Navbar></Navbar>
        <GradientOverlay />
        <Box sx={{ position: 'relative', zIndex: 2, flex: 1 }}>
          <Hero />
          <FeaturesAI />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
