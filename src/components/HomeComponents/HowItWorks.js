import React from 'react';
import {Box} from '@mui/system';
import { Grid, Typography } from '@mui/material';
import ticketImage from '../../images/ticket.png';

let yellow ="#FBD96D";

function HowItWorks(){
    return (
        <Box textAlign="center">
            
          
            

                <Grid container justifyContent="center" alignItems="center" >
                  <Grid item xs= {6} sm = {3} md = {3} lg={3}>

                      <Box 
                      component="img"
                      sx={{
                          m:4,
                          maxHeight: { xs: 200, sm: 200 , md: 260, lg: 300, xl: 400},
                          flexGrow: 1
                      }}
                      alt="Place Holder Lottery Ticket"
                      src={ticketImage}
                      />
                  </Grid>

                  <Grid item xs= {6} sm= {3} md = {3} lg ={3}>
                      <Box 
                      component="img"
                      sx={{
                          m:4,
                          maxHeight: { xs: 200, sm: 200 , md: 260, lg: 300, xl: 400},
                          flexGrow: 1
                      }}
                      alt="Place Holder Lottery Ticket"
                      src={ticketImage}
                      />

                  </Grid>
                    
                  <Grid item xs = {12} sm ={6} md = {6} lg ={6}>
                    <Box>
                      <Typography variant="h2" style={{color:yellow}} textAlign ="left" sx={{ml:6, mt:3, fontFamily:"Clarkson"}} >How It Works</Typography>
                      <Typography variant="h6" style={{color:yellow}} textAlign ="justify" sx={{ml: 6, mr:6, mt:3,fontFamily:"Clarkson"}}>
                        Lotto kicks off with an initial mint of up to 10,000 Lotto tickets. 
                        Then, every Saturday at midnight, a percentage of Lotto tickets will be eliminated from the prize pool and will no longer have a chance of taking home the jackpot.
                        Ticket images will be updated to reflect eliminations, and the status of any ticket can always be checked on the check ticket tab. 
                      </Typography>
                    
                      <Typography variant="h6" style={{color:yellow}} textAlign ="justify" sx={{mt: 3,ml: 6, mr:6,mb:6 ,fontFamily:"Clarkson"}}>
                        If your ticket is eliminated, it can be burned to guarantee whitelist access to the next Lotto drop. 
                        See below for a full schedule of eliminations.
                      </Typography>
                    </Box>
                  </Grid>

                </Grid>
                

                  


        </Box>
    );
}

export default HowItWorks;