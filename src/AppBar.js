import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { lightGreen } from '@mui/material/colors';


const ButtonAppBar = (props) => {
  const { palette } = createTheme();
  const { augmentColor } = palette;
  const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
  const theme = createTheme({
    palette: {
      lightGreen: createColor('#aed581'),
    },
  });

  function connected(){
    return !(props.activeAccount === "Connect Wallet");
  }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick = {props.activateNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Typography component="div" sx={{ flexGrow: 1 }}>
              TIKET
            </Typography>
            <Button color={connected()? "lightGreen": "inherit"} variant={connected()?"contained":"outlined"} onClick={props.connectToMetaMask}>{props.activeAccount}</Button>
          </Toolbar>
        </AppBar>
      </Box>
      
      </ThemeProvider>
  );
}

export default ButtonAppBar;