import { Box, Typography, Button, ThemeProvider } from '@mui/material';
//import StarIcon from "@mui/icons-material/Star";
import Theme from './theme';

const Hero = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={4}
        p={3}
        sx={{ background: Theme.palette.primary.main }}
      >
        <Box
          display="flex"
          flexDirection={{ xs: 'column', sm: 'row' }}
          alignItems="center"
          gap={1}
          mb={4}
        >
          <Box sx={{ textAlign: 'left', maxWidth: '500px' }}>
            <Typography
              variant="h6"
              sx={{
                marginTop: 2,
                marginBottom: 2,
                fontFamily: 'Paytone One',
                fontSize: '68px',
                fontWeight: 'bold',
                color: Theme.palette.text.dark,
                lineHeight: 1.3,
              }}
            >
              Rate My Workplace
            </Typography>

            <Typography variant="body1" fontSize={19}>
              Discover Your Ideal Workplace with AI-Powered Insights
            </Typography>

            <Button
              variant="contained"
              sx={{
                marginTop: 3,
                width: '200px',
                borderRadius: '16px',
                fontFamily: 'Poppins',
                fontSize: '16px',
                color: Theme.palette.text.black,
                bgcolor: Theme.palette.text.yellow,
                '&:hover': {
                  bgcolor: Theme.palette.text.darkYellow,
                },
                fontWeight: 700,
              }}
              href="/chatbot"
            >
              TRY NOW
            </Button>
          </Box>
          {/* Image */}

          <Box
            component="img"
            src="/women_picture.png"
            sx={{
              width: { xs: '70px', sm: '400px' },
              height: 'auto',
              alignItems: 'flex-end',
              //borderRadius: '10%',
              //boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.45)',
            }}
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Hero;
