import React from 'react';
import {Box} from '@mui/system';
import { Button, Grid, Typography } from '@mui/material';
import ticketImage from '../../images/NFTTicket.gif';
import {globalYellow, globalLightYellow, globalBackBlack, globalFont} from '../../globalHelperScripts/ColorsAndFonts.js';



let yellow =globalYellow;//"#FBD96D";
let myFont =globalFont;//'Poppins';



function HowItWorksTwo(){
    function buttonHandle(){
      return;
    }

    return (
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={11}>


      
        <Box textAlign="center">
                <Grid container wrap='wrap-reverse' justifyContent="center" alignItems="center" justify="space-between">
                  <Grid item xs= {11} sm = {11} md = {6} lg={6}>

                      <Box 
                      component="img"
                     
                      sx={{
                          m:4,
                          mr:6,
                          maxHeight: { xs: 300, sm: 280 , md: 350, lg: 350, xl: 400},
                          flexGrow: 1
                      }}
                      alt="Place Holder Lottery Ticket"
                      src={ticketImage}
                      />
                  </Grid>

                  <Grid item xs = {12} sm ={12} md = {6} lg ={6}>
                    <Box>
                      <Typography variant="h2" style={{color:yellow}} textAlign ="left" sx={{ml:3, mt:3, fontFamily:myFont,fontWeight: 'bold'}} >How It Works</Typography>
                      <Typography variant="h6" style={{color:yellow}} textAlign ="justify" sx={{ml: 3, mr:3, mt:3,fontFamily:myFont}}>
                        Lotto kicks off with an initial mint of up to 10,000 Lotto tickets. 
                        Then, every Saturday at midnight, a percentage of Lotto tickets will be eliminated from the prize pool and will no longer have a chance of taking home the jackpot.
                        Ticket images will be updated to reflect eliminations, and the status of any ticket can always be checked on the check ticket tab. 
                      </Typography>
                      
                      <Typography variant="h6" style={{color:yellow}} textAlign ="justify" sx={{mt: 3,ml: 3, mr:3,mb:6 ,fontFamily:myFont}}>
                        If your ticket is eliminated, it can be burned to guarantee whitelist access to the next Lotto drop. 
                        See below for a full schedule of eliminations.
                      </Typography>

                      

                    </Box>
                  </Grid>

                </Grid>
                

                  


        </Box>
        </Grid>
      </Grid>
    );
}

export default HowItWorksTwo;