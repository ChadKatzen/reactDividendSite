import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MetaMaskIcon from '../images/metamask.png';
import CoinBaseIcon from '../images/coinbase.png';
import WalletConnectIcon from '../images/walletconnect.png';
import Button from '@mui/material/Button';
import { Avatar } from '@mui/material';


const ModalWidth = 400;
const styleModal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: ModalWidth,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: '10px',
  };
export default function WalletModal(props) {

    async function handleConnectToMetaMask(){
        await props.connectToMetaMask();
        props.handleClose();
    }
    async function handleConnectToCoinBase(){
        await props.connectToCoinBase();
        props.handleClose();
    }
    async function handleConnectToWalletConnector(){
        await props.connectToWalletConnector();
        props.handleClose();
    }


  return (
    <Box sx={styleModal}>
        <Typography id="modal-modal-title" variant="h6" component="h2" style={{paddingBottom:'20px'}}>
            Select Wallet
        </Typography>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}>
          <Button 
            sx={{width:ModalWidth}} 
            variant = "outlined" 
            onClick={handleConnectToMetaMask}
            startIcon={<Avatar src={MetaMaskIcon} sx={{ mr: 1 }}/> }
            >
            
                <Typography  sx={{ flexGrow: 1}} align='left' >
                    Metamask
                </Typography>
            </Button>
        </Grid>
        <Grid item xs={12}>
            <Button 
                sx={{width:ModalWidth}} 
                variant = "outlined" 
                onClick={handleConnectToCoinBase}
                startIcon={<Avatar src={CoinBaseIcon} sx={{mr:1}}/> }
                >
          
                <Typography  sx={{ flexGrow: 1}} align='left' >
                    Coinbase Wallet
                </Typography>
            </Button>   
        </Grid>
        
      </Grid>
    </Box>

  );
}

/*<Grid item xs={12}>
            <Button 
                sx={{width:ModalWidth}} 
                variant = "outlined" 
                onClick={handleConnectToWalletConnector}
                startIcon={<Avatar src={WalletConnectIcon} sx={{mr:1}}/> }
                >
                
                    <Typography  sx={{ flexGrow: 1}} align='left' >
                        Wallet Connect
                    </Typography>
                </Button>
        </Grid>
        */