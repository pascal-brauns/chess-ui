import React from 'react';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import primary from '@material-ui/core/colors/lime';
import secondary from '@material-ui/core/colors/teal';

const theme = createTheme({
  palette: {
    type: 'dark',
    primary,
    secondary
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          margin: '0px'
        },
        '#root': {
          position: 'absolute',
          top: '0px',
          left: '0px',
          background: 'rgb(18, 18, 18)'
        },
        '#overlay': {
          position: 'absolute',
          top: '0px',
          left: '0px'
        }
      }
    }
  }
});

const Theme: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
)

export default Theme;