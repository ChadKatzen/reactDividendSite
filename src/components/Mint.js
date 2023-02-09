import React from 'react';
import {Box} from '@mui/system';
import { Button, Grid, Typography } from '@mui/material';
import ticketImage from '../images/NFTTicket.gif';
import {globalYellow, globalLightYellow, globalBackBlack, globalFont} from '../globalHelperScripts/ColorsAndFonts.js';



let yellow =globalYellow;//"#FBD96D";
let myFont =globalFont;//'Poppins';



function Mint(){
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

                  <Grid item xs = {11} sm ={12} md = {12} lg ={6}>

                    <Grid container justifyContent="space-around" alignItems="space-around" spacing={4} >
                      <Grid item xs = {12}>
                        <Typography variant="h2" style={{color:yellow}} textAlign ="center" sx={{ml:3, mt:0, fontFamily:myFont,fontWeight: 'bold'}} >Minting Is Live!</Typography>
                      </Grid>
                      <Grid item xs = {12}>
                        <Button color='yellow' sx={{ml:3}} style={{ width: 400, height: 50 }} variant={"contained"} onClick={buttonHandle}>
                          <Typography sx={{fontWeight: 'bold'}}>Mint Now</Typography>
                        </Button>
                      </Grid>
                      <Grid item xs = {12}>
                        <Button color='yellow' sx={{ml:3}} style={{ width: 400, height: 50 }} variant={"contained"} onClick={buttonHandle}>
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