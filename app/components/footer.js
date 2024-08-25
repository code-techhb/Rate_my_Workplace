import { Box, Typography, ThemeProvider } from "@mui/material";

import Theme from "./theme";
const Footer = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Box
        sx={{
          padding: "20px 0",
          textAlign: "center",
          background: Theme.palette.primary.main,
          color: "text.dark",
          // backgroundColor: 'primary.purple',
        }}
      >
        <Typography variant="body1" fontSize="16px">
          © 2024 Rate My WorkPlace. All rights reserved.
        </Typography>
      </Box>
    </ThemeProvider>
  );
};

export default Footer;
