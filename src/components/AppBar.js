import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Modal from '@mui/material/Modal';
import WalletModal from './WalletModal';



const ButtonAppBar = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function connected(){
    return !(props.activeAccount === "Connect Wallet")
  }

  function handleConnectWallet(){
    handleOpen();
  }


  return (
    <div>
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
              Lotto
            </Typography>

            <Button color={connected()? "yellow": "inherit"} variant={connected()?"contained":"outlined"} onClick={handleConnectWallet}>{props.activeAccount}</Button>
          
          </Toolbar>
        </AppBar>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <WalletModal 
          connectToMetaMask={props.connectToMetaMask}
          connectToCoinBase={props.connectToCoinBase}
          connectToWalletConnector={props.connectToWalletConnector}
          handleClose={handleClose}
        />
      </Modal>
    </div>
      
  );
}

export default ButtonAppBar;

