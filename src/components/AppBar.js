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



const styleModal = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
};


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
              Tessera
            </Typography>
            <Button color={connected()? "lightGreen": "inherit"} variant={connected()?"contained":"outlined"} onClick={handleConnectWallet}>{props.activeAccount}</Button>
          </Toolbar>
        </AppBar>
      </Box>
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
/*
<Paper sx={styleModal}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Select Wallet
          </Typography>
          <Button color="inherit" variant="outlined" onClick={handleConnectWallet}>
            <Box sx={{ display: 'flex',flexDirection: 'row'}}>
              <img src={MetaMaskIcon} style={{width: '30px', padding: '5px'}}/>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                metamask
              </Typography>
            </Box>
            
          </Button>


        </Paper>





              <List sx={styleModal}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <img src = {MetaMaskIcon}/>
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Photos"  />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <WorkIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Work"  />
        </ListItem>
        <ListItem style={{border:"2px"}}>
          <ListItemAvatar>
            <Avatar>
              <BeachAccessIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Vacation"  />
        </ListItem>
      </List>
*/
export default ButtonAppBar;

