import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MetaMaskIcon from '../images/metamask.png';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';





const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


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
          <Button sx={{width:ModalWidth}} variant = "outlined" onClick={handleConnectToMetaMask}>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                
                >
                <MenuIcon />
                </IconButton>
                <Typography  sx={{ flexGrow: 1}} align='left' >
                    Metamask
                </Typography>
            </Button>
        </Grid>
        <Grid item xs={12}>
            <Button sx={{width:ModalWidth}} variant = "outlined" onClick={handleConnectToCoinBase}>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography  sx={{ flexGrow: 1}} align='left' >
                    Coinbase Wallet
                </Typography>
            </Button>   
        </Grid>
        <Grid item xs={12}>
            <Button sx={{width:ModalWidth}} variant = "outlined" onClick={handleConnectToWalletConnector}>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    >
                    <MenuIcon />
                    </IconButton>
                    <Typography  sx={{ flexGrow: 1}} align='left' >
                        Wallet Connect
                    </Typography>
                </Button>
        </Grid>
      </Grid>
    </Box>

  );
}