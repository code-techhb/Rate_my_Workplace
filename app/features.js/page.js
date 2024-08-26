import {
  Box,
  ThemeProvider,
  Grid,
  Typography,
  Button,
  Paper,
  Link,
} from '@mui/material';
import Theme from '../components/theme';

const FeaturesAI = () => {
  return (
    <ThemeProvider theme={Theme}>
      {/* Purple bg */}
      <Box
        padding="60px 20px"
        sx={{
          //backgroundColor: Theme.palette.primary.main,
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        {/* Feature cards*/}
        <Box mb={6}>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              textAlign: 'center',
              fontFamily: 'Paytone One',
              fontSize: '40px',
              fontStyle: 'normal',
              fontWeight: 700,
              color: Theme.palette.text.dark,
            }}
          >
            Features
          </Typography>
        </Box>

        {/* cards grid */}
        <Grid
          container
          spacing={3}
          justifyContent="center"
          alignItems="center"
          sx={{
            maxWidth: 'md', // Limits the width on larger screens
            margin: '0 auto',
            mb: 6,
          }}
        >
          {/* AI Powered */}
          <Grid item xs={12} sm={6} md={4}>
            <Paper
              elevation={3}
              sx={{
                backgroundColor: 'primary.main',
                p: 4,
                borderRadius: 4,
                width: '100%',
                height: 450,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
                mx: 'auto', // Center the Paper item
                mb: 3, // Margin bottom to add spacing
              }}
            >
              <Box>
                <img
                  src="/ai.png"
                  width={50}
                  style={{ marginBottom: '8px' }}
                ></img>
              </Box>
              <Typography
                variant="h5"
                color="primary.light_purple"
                sx={{ fontWeight: 600, mb: 2, fontFamily: 'Poppins' }}
              >
                AI-Powered Recommendations
              </Typography>

              <Typography
                sx={{
                  fontFamily: 'Poppins',
                  color: 'primary.light_purple',
                  fontSize: '16px',
                }}
              >
                Our AI matches your preferences and work style with workplaces
                that suit you best, using a constantly updated database to
                provide the latest, most relevant recommendations.
              </Typography>
            </Paper>
          </Grid>

          {/* Effortless Experience */}
          <Grid item xs={12} sm={6} md={4}>
            <Paper
              elevation={3}
              sx={{
                backgroundColor: 'primary.main',
                p: 4,
                borderRadius: 4,
                width: '100%',
                height: 450,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
                mx: 'auto', // Center the Paper item
                mb: 3, // Margin bottom to add spacing
              }}
            >
              <Box>
                <img
                  src="/ipad.png"
                  width={40}
                  style={{ marginBottom: '16px' }}
                ></img>
              </Box>
              <Typography
                variant="h5"
                color="primary.light_purple"
                sx={{ fontWeight: 600, mb: 2, fontFamily: 'Poppins' }}
              >
                Effortless Experience
              </Typography>

              <Typography
                sx={{
                  fontFamily: 'Poppins',
                  color: 'primary.light_purple',
                  fontSize: '16px',
                }}
              >
                Designed with simplicity in mind, our platform is intuitive and
                easy to navigate. Rating workplaces and exploring options is a
                breeze, so you can focus on finding the perfect fit without any
                hassle.
              </Typography>
            </Paper>
          </Grid>

          {/* Personalized Insights */}
          <Grid item xs={12} sm={6} md={4}>
            <Paper
              elevation={3}
              sx={{
                backgroundColor: 'primary.main',
                p: 4,
                borderRadius: 4,
                width: '100%',
                height: 450,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
                mx: 'auto', // Center the Paper item
                mb: 3, // Margin bottom to add spacing
              }}
            >
              <Box>
                <img
                  src="/user.png"
                  width={40}
                  style={{ marginBottom: '16px' }}
                ></img>
              </Box>
              <Typography
                variant="h5"
                color="primary.light_purple"
                sx={{ fontWeight: 600, mb: 2, fontFamily: 'Poppins' }}
              >
                Personalized Insights
              </Typography>

              <Typography
                sx={{
                  fontFamily: 'Poppins',
                  color: 'primary.light_purple',
                  fontSize: '16px',
                }}
              >
                Receive detailed insights and reviews tailored to your specific
                criteria. Our system provides a clear overview of how each
                workplace aligns with your needs and expectations, helping you
                make informed decisions.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Typography variant="body1" fontSize={16}>
          🔔 Rate My Workplace's new features coming soon.{' '}
          <Link
            href="https://forms.gle/82ytLLNY69yLXmEx8"
            sx={{ color: Theme.palette.text.dark }}
          >
            Join the waitlist
          </Link>{' '}
          to be the first to know when they are released!
        </Typography>
      </Box>
    </ThemeProvider>
  );
};

export default FeaturesAI;
