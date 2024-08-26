import { createTheme } from '@mui/material';

const Theme = createTheme({
  palette: {
    primary: {
      main: '#F1F0EB',
      dark: '#4056A1',
      beige: '#DCD9D5',
      beige2: '#EFE9E6',
    },
    text: {
      dark: '#4056A1',
      darker: '#2E3E76',
      light: '#F1F0EB',
      black: '#000000',
      yellow: '#F3B846',
      darkYellow: '#EA8C00',
    },
    background: {
      gradient:
        'radial-gradient(circle, rgba(173,216,230,0.7) 0%, rgba(221,160,221,0.7) 100%)',
    },
  },

  typography: {
    fontFamily: 'Paytone One, Poppins, Arial, sans-serif',
    h1: {
      fontFamily: 'Paytone One',
    },
    h2: {
      fontFamily: 'Paytone One',
    },
    h3: {
      fontFamily: 'Paytone One',
    },
    h4: {
      fontFamily: 'Paytone One',
    },
    h5: {
      fontFamily: 'Paytone One',
    },
    h6: {
      fontFamily: 'Paytone One',
    },
    body1: {
      fontFamily: 'Poppins',
      fontSize: '24px',
    },
  },
});

export default Theme;
