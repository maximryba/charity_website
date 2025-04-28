import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF6B6B', // Используем ваш фирменный цвет
    },
    secondary: {
      main: '#4ecdc4',
    },
    error: {
      main: '#ff5252',
    },
    background: {
      default: '#f9f9f90',
    },
  },
  typography: {
    fontFamily: '"Montserrat", "Nunito", sans-serif',
    h4: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        fullWidth: true,
      },
    },
  },
});

export default theme;