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
      fontWeight: 800
    },
    h2: {
      fontSize: '3rem',
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 800
    },
    h4: {
      fontSize: '1.7rem',
    },
    button: {
      fontSize: '0.8rem',
      fontStyle: 'capitalize',
    },
  },
  spacing: 4,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          border: 0,
          borderRadius: 3,
        },
      },
    },
  },
  shape: {
    borderRadius: 4,
  },
};

export const theme = createTheme({ ...themeOptions });
