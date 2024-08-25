'use client';
import { useState } from 'react';
import {
  Box,
  Typography,
  ThemeProvider,
  Avatar,
  Link,
  Button,
} from '@mui/material';
import Theme from '../components/theme';
import Navbar from '../components/navbar';
import { useRouter } from 'next/navigation';
import Footer from '../components/footer';

export default function ContactUs() {
  //   // --------------------------------- UI ------------------------------------
  return (
    <ThemeProvider theme={Theme}>
      <Box
        sx={{
          background: Theme.palette.primary.main,
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        {/* Nav bar */}

        <Navbar></Navbar>
        {/* Main Content */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: 2,
          }}
        >
          {/* content */}
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            maxWidth="800px"
            width="100%"
            mb={4}
          >
            <Typography
              variant="h4"
              sx={{
                fontFamily: 'Paytone One',
                fontSize: '32px',
                fontStyle: 'normal',
                fontWeight: 700,
                color: Theme.palette.text.dark,
                mt: 2,
              }}
            >
              Have a Question about Rate My Workplace?
            </Typography>

            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ mt: 2, fontFamily: 'Poppins' }}
            >
              Reach out to the team on LinkedIn.
            </Typography>
          </Box>

          <Box
            display="flex"
            justifyContent="center"
            flexWrap="wrap"
            maxWidth="600px"
            width="100%"
          >
            {/* Avatar boxes */}
            <Box
              display="flex"
              justifyContent="center"
              flexWrap="wrap"
              alignItems="center"
            >
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                mx={2}
              >
                <Avatar
                  alt="Developer of CardCrafter 1"
                  src="/H.JPG"
                  sx={{ width: 100, height: 100, border: '2px solid #1D1632' }}
                />
                <Typography mt={1} align="center">
                  Houlaymatou B.
                </Typography>
                <Button
                  variant="contained"
                  href="https://www.linkedin.com/in/houlaymatoub/"
                  sx={{
                    mt: 1,
                    backgroundColor: Theme.palette.primary.dark,
                    color: 'text.light',
                    fontSize: '14px',
                    fontFamily: 'Poppins',
                    borderRadius: '16px',
                  }}
                >
                  LinkedIn
                </Button>
              </Box>

              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                mx={2}
              >
                <Avatar
                  alt="Developer of CardCrafter 2"
                  src="/g.png"
                  sx={{ width: 100, height: 100, border: '2px solid #1D1632' }}
                />
                <Typography mt={1} align="center">
                  Giovanni G.
                </Typography>

                <Button
                  variant="contained"
                  href="https://www.linkedin.com/in/giovanni-govert/"
                  sx={{
                    mt: 1,
                    backgroundColor: Theme.palette.primary.dark,
                    color: 'text.light',
                    fontSize: '14px',
                    fontFamily: 'Poppins',
                    borderRadius: '16px',
                  }}
                >
                  LinkedIn
                </Button>
              </Box>

              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                mx={2}
              >
                <Avatar
                  alt="Developer of CardCrafter 2"
                  src="/K.jpg"
                  sx={{ width: 100, height: 100, border: '2px solid #1D1632' }}
                />
                <Typography mt={1} align="center">
                  Katherine
                </Typography>
                <Button
                  variant="contained"
                  href="https://www.linkedin.com/in/katherine-lazo-1a8349b2/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  sx={{
                    mt: 1,
                    backgroundColor: Theme.palette.primary.dark,
                    color: 'text.light',
                    fontSize: '14px',
                    fontFamily: 'Poppins',
                    borderRadius: '16px',
                  }}
                >
                  LinkedIn
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Footer */}
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
