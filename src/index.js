import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function getLibrary(provider) {
    return new Web3Provider(provider);
  }

  const { palette } = createTheme();
  const { augmentColor } = palette;
  const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });

const theme = createTheme({
    palette:{
       
      lightGreen: createColor('#aed581'),

    },
    typography: {
      button: {
        textTransform: 'none'
      }
    }
})

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Web3ReactProvider getLibrary={getLibrary}>
            <App />
        </Web3ReactProvider>
    </ThemeProvider>
    , document.getElementById('root'));