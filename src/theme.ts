import { type ThemeOptions, createTheme } from '@mui/material/styles';
import { purple, pink } from '@mui/material/colors';

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: purple['700'],
    },
    secondary: {
      main: pink['A200'],
    },
  },
  typography: {
    fontFamily: 'Montserrat',
    h1: {
      fontSize: '4rem',
    },
    h2: {
      fontSize: '3rem',
    },
    h3: {
      fontSize: '2rem',
    },
    h4: {
      fontSize: '1.7rem',
    },
    button: {
      fontSize: '0.8rem',
      fontStyle: 'capitalize',
    },
    bold: {
      fontWeight: 800,
    },
    light: {
      fontWeight: 200,
    },
  },
  spacing: 4,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          border: 0,
          borderRadius: 3,
          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
          padding: '10px 30px',
        },
      },
    },
  },
  shape: {
    borderRadius: 4,
  },
};

export const theme = createTheme({ ...themeOptions });
