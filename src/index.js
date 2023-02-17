import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {globalYellow, globalLightYellow, globalBackBlack, globalFont} from './globalHelperScripts/ColorsAndFonts.js';


function getLibrary(provider) {
    return new Web3Provider(provider);
  }

  const { palette } = createTheme();
  const { augmentColor } = palette;
  const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });

const yellow = globalYellow;//"#FBD96D";
const backBlack = globalBackBlack;//'#000000';//'#2a2a2a';
const myFont = globalFont;

const theme = createTheme({
    palette:{
      primary:{
        main:backBlack,
        contrastText:yellow,
      },
      specialTry:{
        main:yellow,
      },
      yellow: createColor(yellow),
      backBlack: createColor(backBlack),

      lightGreen: createColor('#aed581'),
      lightGrey: createColor('#111111'),
    },
    typography: {
      fontFamily: myFont,
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