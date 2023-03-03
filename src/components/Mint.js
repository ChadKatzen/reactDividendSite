import React from 'react';
import {Box} from '@mui/system';
import { Button, Grid, Typography } from '@mui/material';
import ticketImage from '../images/NFTTicket.gif';
import {globalYellow, globalLightYellow, globalBackBlack, globalFont} from '../globalHelperScripts/ColorsAndFonts.js';
import StatusBar from './MintComponents/StatusBar';
import StatusBarTwo from './MintComponents/StatusBarTwo';
import MintCounter from './MintComponents/MintCounter';
import { OpenSeaLink, DiscordLink, TwitterLink } from '../globalHelperScripts/links';


let yellow =globalYellow;//"#FBD96D";
let myFont =globalFont;//'Poppins';




function Mint(props){
    function buttonHandle(){
      return;
    }

    return (
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={11} xl= {8}>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Box textAlign="center">
                <Grid container wrap='wrap-reverse' justifyContent="center" alignItems="center" justify="space-between">

                  <Grid item xs= {11} sm = {11} md = {6} lg={6}>
                  
                    <Box sx={{mt:10, mb:10, mr:3, ml:3}}>
                      <Grid container sx={{m:2}} justifyContent="space-between" justify="flex-start" wrap='nowrap'>

                        <Grid item sx={{ml:6}} xs={4}>
                          <Typography variant="h5" style={{color:yellow}} textAlign="left">Minted:</Typography>
                          <MintCounter  tokensMinted = {props.tokensMinted}/>
                        </Grid>
                        <Grid item  sx={{mr:10}} xs={4}> 
                           <Typography variant="h5" style={{color:yellow}} textAlign="right">Prize Pool:</Typography>
                           <Typography variant="h5" style={{color:yellow}} textAlign="right" ><span id="currentPrizePool">{props.currentPrizePool}</span> Eth</Typography>

                        </Grid> 

                      </Grid>
                        
                      <StatusBarTwo/>
                    </Box>
                  </Grid>

                  <Grid item xs = {12} sm ={12} md = {6} lg ={6}>
                    <Grid container justifyContent="space-around" alignItems="space-around" spacing={4} >
                      <Grid item xs = {12} >
                        <Typography variant="h2" style={{color:yellow}} textAlign ="center" sx={{ml:3, mt:0, mr:3, fontFamily:myFont,fontWeight: 'bold'}} >Minting Is Live!</Typography>
                      </Grid>
                      <Grid item xs = {12}>
                        <Button color='yellow' sx={{ml:3, mr:3}} style={{ width: 400, height: 50 }} variant={"contained"} onClick={props.handleMint}>
                          <Typography sx={{fontWeight: 'bold'}}>Mint Now</Typography>
                        </Button>
                      </Grid>
                      <Grid item xs = {12}>
                        <Button color='yellow' sx={{ml:3, mr:3}} style={{ width: 400, height: 50 }} variant={"contained"} onClick={() => window.open(OpenSeaLink, '_blank')} >
                          <Typography sx={{fontWeight: 'bold'}}>View on OpenSea</Typography>
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>






                </Grid>
                

                  


        </Box>
        </Grid>
      </Grid>
    );
}

export default Mint;

/*
<Grid item xs= {11} sm = {11} md = {11} lg={6}>

  <Box 
    component="img"
    
    sx={{
        m:4,
        mr:{md:4, lg:8},
        mb:0,
        maxHeight: { xs: 200, sm: 250 , md: 250, lg: 350, xl: 400},
        flexGrow: 1
    }}
    alt="Place Holder Lottery Ticket"
    src={ticketImage}
  />
</Grid>


*/