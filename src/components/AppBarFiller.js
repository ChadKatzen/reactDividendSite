import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Modal from '@mui/material/Modal';
import WalletModal from './WalletModal';



const AppBarFiller = (props) => {

  function connected(){
    return !(props.activeAccount === "Connect Wallet")
  }



  return (
    <div>
        <AppBar position="static" width = "100%">
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
              Tessera
            </Typography>

            <Button color={connected()? "lightGreen": "inherit"} variant={connected()?"contained":"outlined"}>{props.activeAccount}</Button>
          
          </Toolbar>
        </AppBar>

      
      </div>
      
  );
}

export default AppBarFiller;