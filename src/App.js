import React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import TokenGenerator from './components/TokenGenerator';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#f44336',
    },
  },
  typography: {
    h4: {
      fontWeight: 600,
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TokenGenerator />
    </ThemeProvider>
  );
};

export default App;
