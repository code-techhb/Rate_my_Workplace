import { Box, Typography, Button, ThemeProvider } from "@mui/material";
//import StarIcon from "@mui/icons-material/Star";
import Theme from "./theme";

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
          flexDirection={{ xs: "column", sm: "row" }}
          alignItems="center"
          gap={10}
          mb={4}
        >
          <Box sx={{ textAlign: "left", maxWidth: "500px" }}>
            <Typography
              variant="h6"
              sx={{
                marginTop: 2,
                marginBottom: 2,
                fontFamily: "Payton One",
                fontSize: "60px",
                fontWeight: "bold",
              }}
            >
              Rate My professor
            </Typography>
            <Typography variant="body1">
              Our AI-driven system extracts key concepts from your reading
              materials and converts them into smart flashcards tailored for
              effective studying.
            </Typography>

            <Button
              variant="contained"
              sx={{
                marginTop: 2,
                borderRadius: "16px",
                bgcolor: "primary.purple",
                "&:hover": {
                  bgcolor: "primary.purple",
                },
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
              width: { xs: "70%", sm: "300px" },
              height: "auto",
              borderRadius: "10%",
              boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.45)",
            }}
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Hero;
