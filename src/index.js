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

const yellow = "#FBD96D";
const backBlack = '#000000';//'#2a2a2a';


const theme = createTheme({
    palette:{
      primary:{
        main:backBlack,
        contrastText:yellow,
      },
      yellow: createColor(yellow),
      backBlack: createColor(backBlack),

      lightGreen: createColor('#aed581'),
      lightGrey: createColor('#111111'),
    },
    typography: {
      button: {
        textTransform: 'none',
      },
      
    },
})





ReactDOM.render(

  <ThemeProvider theme={theme}>
  <Web3ReactProvider getLibrary={getLibrary}>
      <App />
  </Web3ReactProvider>
</ThemeProvider>

    
    , document.getElementById('root'));