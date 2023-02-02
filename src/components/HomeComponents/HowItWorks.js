import React from 'react';
import {Box} from '@mui/system';
import { Grid, Typography } from '@mui/material';
import ticketImage from '../../images/ticket.png';

let yellow ="#FBD96D";

function HowItWorks(){
    return (
        <Box textAlign="center">
            <Typography variant="h2" style={{color:yellow}} >~How It Works~</Typography>
          

            <Grid container 
            justifyContent="center"
            alignItems="center" >
                <Grid item xs = {12} sm = {12} md ={11} lg={11}>
                <Box  sx={{m:1}}>
                      <Typography variant="h6" style={{color:yellow}} textAlign ="justify" sx={{m: 6}}>
                        Lotto kicks off with an initial mint of up to 10,000 Lotto tickets. 
                        Then, every Saturday at midnight, a percentage of Lotto tickets will be eliminated from the prize pool and will no longer have a chance of taking home the jackpot.
                        Ticket images will be updated to reflect eliminations, and the status of any ticket can always be checked on the check ticket tab. 
                      </Typography>
                      <Box sx={{display:'flex', justifyContent:'space-around'}}>
                        <Box 
                        component="img"
                        sx={{
                            ml: 0,
                            mr:0,
                            maxHeight: { xs: 350, sm: 400 , md: 400, lg: 300, xl: 400},
                            maxWidth: { xs: 233, sm: 300, md: 300, lg: 230, xl: 300 },
                            flexGrow: 1
                        }}
                        alt="Place Holder Lottery Ticket"
                        src={ticketImage}
                        />
                        <Box 
                        component="img"
                        sx={{
                            ml: 0,
                            mr:0,
                            maxHeight: { xs: 350, sm: 400 , md: 400, lg: 300, xl: 400},
                            maxWidth: { xs: 233, sm: 300, md: 300, lg: 230, xl: 300 },
                            flexGrow: 1
                        }}
                        alt="Place Holder Lottery Ticket"
                        src={ticketImage}
                        />
                      </Box>
                      

                      <Typography variant="h6" style={{color:yellow}} textAlign ="justify" sx={{m: 6}}>
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