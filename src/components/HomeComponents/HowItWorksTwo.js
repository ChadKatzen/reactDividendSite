import React from 'react';
import {Box} from '@mui/system';
import { Button, Grid, Typography } from '@mui/material';
import ticketImage from '../../images/NFTTicket.gif';
import {globalYellow, globalLightYellow, globalBackBlack, globalFont} from '../../globalHelperScripts/ColorsAndFonts.js';



let yellow =globalYellow;//"#FBD96D";
let myFont =globalFont;//'Poppins';



function HowItWorksTwo(props){
    function checkTicketHandle(){
      props.handlePageChangeNoToggle("Check Ticket");
    }

    return (
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={11} xl= {8}>


      
        <Box textAlign="center">
                <Grid container wrap='wrap-reverse' justifyContent="center" alignItems="center" justify="space-between">
                  <Grid item xs= {11} sm = {11} md = {11} lg={6}>

                      <Box 
                      component="img"
                     
                      sx={{
                          m:4,
                          mr:{md:4, lg:8},
                          maxHeight: { xs: 200, sm: 250 , md: 250, lg: 350, xl: 400},
                          flexGrow: 1
                      }}
                      alt="Place Holder Lottery Ticket"
                      src={ticketImage}
                      />
                  </Grid>

                  <Grid item xs = {11} sm ={12} md = {12} lg ={6}>
                    <Box>
                      <Typography variant="h2" style={{color:yellow}} textAlign ="left" sx={{ml:3, mt:3, fontFamily:myFont,fontWeight: 'bold'}} >How It Works</Typography>
                      <Typography variant="h6" style={{color:yellow}} textAlign ="justify" sx={{ml: 3, mr:3, mt:3,fontFamily:myFont}}>
                        Lotto kicks off with an initial mint of up to 10,000 Lotto tickets. 
                        Every Saturday at midnight, a percentage of Lotto tickets will be eliminated from the prize pool and will no longer have a chance of taking home the jackpot.
                        Ticket images will be updated to reflect eliminations, and the status of any ticket can always be checked on 
                        the <span style={{ 'cursor': 'pointer', 'text-decoration':'underline'}} onClick={checkTicketHandle}>check ticket</span> tab. 
                      </Typography>
                      <Typography variant="h6" style={{color:yellow}} textAlign ="justify" sx={{ml: 3, mr:3, mt:3,fontFamily:myFont}}>
                        As tickets are eliminated, the value of remaining tickets go up! They now have a better chance of taking home the prize pool. See below for a full schedule of eliminations and estimated Lotto ticket values.
                      </Typography>
                      <Typography variant="h6" style={{color:yellow}} textAlign ="justify" sx={{mt: 3,ml: 3, mr:3,mb:6 ,fontFamily:myFont}}>
                        
                        If your ticket is eliminated, don't worry. It can still be burned to guarantee whitelist access to the next Lotto drop. 
                        
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