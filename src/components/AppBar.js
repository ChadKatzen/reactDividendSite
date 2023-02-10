import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Modal from '@mui/material/Modal';
import WalletModal from './WalletModal';
import TwitterIcon from '@mui/icons-material/Twitter'
import { ReactComponent as DiscordIcon } from '../images/discord.svg';
import {ReactComponent as OpenSeaSVG} from '../images/OpenSeaTransparent2.svg';
import { SvgIcon } from '@mui/material';


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

  function OpenSeaIcon(props){
    return (
        <SvgIcon {...props} component={OpenSeaSVG} inheritViewBox>

        </SvgIcon> 
        );
    }


  function handleLogoClick(){
    props.handlePageChangeNoToggle("Home")
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

            <Typography style={{ 'cursor': 'pointer'}} component="div"  onClick={handleLogoClick}>
              Lotto
            </Typography>
            <Typography component="div" sx={{ flexGrow: 1 }} >
              
            </Typography>


            <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mt: 0.3, mb: 0.3, mr:0.2, ml:0.2}}
                    >
                    <TwitterIcon />
                    </IconButton>   
                    <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mt: 0.3, mb: 0.3, mr:0.2, ml:0.2}}
                    >
                    <SvgIcon component={DiscordIcon}  inheritViewBox>
                    </SvgIcon>   
                    </IconButton>   
                    <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mt: 0.3, mb: 0.3,  mr:0.2, ml:0.2}} 
                    >
                        <OpenSeaIcon color="blue" />
                    </IconButton> 
            <Button sx={{ml:1}} color={connected()? "yellow": "inherit"} variant={connected()?"contained":"outlined"} onClick={handleConnectWallet}>{props.activeAccount}</Button>
          
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

