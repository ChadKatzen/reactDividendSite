import React from 'react';
import {Box} from '@mui/system';
import { Grid, Typography } from '@mui/material';
import ticketImage from '../../images/ticket.png';

let yellow ="#FBD96D";

function HowItWorks(){
    return (
        <Box textAlign="center">
            <Typography variant="h2" style={{color:yellow}} >~How It Works~</Typography>
          


               
                <Box  sx={{display:'flex', justifyContent:'space-around'}}>
                  
                  <Box sx={{display:'flex', justifyContent:'space-evenly', alignItems: 'center', justifyContent: 'center'}}>
                    <Box 
                    component="img"
                    sx={{
                        ml: 0,
                        mr:0,
                        maxHeight:  350,
                        maxWidth: 233,
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
                        maxHeight:  350,
                        maxWidth: 233,
                        flexGrow: 1
                    }}
                    alt="Place Holder Lottery Ticket"
                    src={ticketImage}
                    />
                  </Box>

                  <Box>
                    <Typography variant="h6" style={{color:yellow}} textAlign ="justify" sx={{m: 6}}>
                      Lotto kicks off with an initial mint of up to 10,000 Lotto tickets. 
                      Then, every Saturday at midnight, a percentage of Lotto tickets will be eliminated from the prize pool and will no longer have a chance of taking home the jackpot.
                      Ticket images will be updated to reflect eliminations, and the status of any ticket can always be checked on the check ticket tab. 
                    </Typography>
                  
                    <Typography variant="h6" style={{color:yellow}} textAlign ="justify" sx={{m: 6}}>
                      If your ticket is eliminated, it can be burned to guarantee whitelist access to the next Lotto drop. 
                      See below for a full schedule of eliminations.
                    </Typography>
                  </Box>

                </Box>

                  


        </Box>
    );
}

export default HowItWorks;