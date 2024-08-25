import { createTheme } from "@mui/material";

const Theme = createTheme({
  palette: {
    primary: {
      main: "#F1F0EB",
      dark: "#4056A1",
    },
    text: {
      dark: "#4056A1",
      light: "#000000",
    },
  },

  typography: {
    fontFamily: "Payton One, Poppins, Arial, sans-serif",
    h1: {
      fontFamily: "Payton One",
    },
    h2: {
      fontFamily: "Payton One",
    },
    h3: {
      fontFamily: "Payton One",
    },
    h4: {
      fontFamily: "Payton One",
    },
    h5: {
      fontFamily: "Payton One",
    },
    h6: {
      fontFamily: "Payton One",
    },
    body1: {
      fontFamily: "Poppins",
      fontSize: "24px",
    },
  },
});

export default Theme;
