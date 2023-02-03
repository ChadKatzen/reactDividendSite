import React from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Grid from '@mui/material/Grid';
import ticketImage from '../../images/loser.gif';

let yellow ="#FBD96D";

const useStyles = makeStyles((input) => ({
  container: {
    border: '4px dashed #FBD96D',
  },
}));

let myFont = 'Poppins';




function DescriptionThree() {
    const classes = useStyles();
    return (

    <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={11}>


        
            <Box textAlign="center">
                <Grid container justifyContent="center" alignItems="center" justify="space-between">
                    <Grid item xs= {11} sm = {11} md = {6} lg={6}>
                        <Box>
                            <Typography variant="h2" style={{color:yellow}} textAlign ="left" sx={{ml:3, mt:0, fontFamily:myFont, fontWeight: 'bold'}} >Lotto</Typography>
                            
                            <Typography variant="h5" style={{color:yellow}} textAlign ="justify" sx={{mr: 3, ml:3, mt:3, mb:5,fontFamily:myFont}}>
                                Your chance at up to 1,000 eth.

                                Week by week, Lotto tickets will be eliminated until one lucky winner remains.

                                Each week your Lotto ticket survives, it’s value goes up.

                                Take profits early or sweat it to the end.
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs = {11} sm ={11} md = {6} lg ={6}>
                        <Box 
                        component="img"
                        sx={{
                            m:4,
                            maxHeight: { xs: 300, sm: 280 , md: 350, lg: 350, xl: 400},
                            flexGrow: 1
                        }}
                        alt="Place Holder Lottery Ticket"
                        src={ticketImage}
                        />
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    </Grid>
             
    
    );
  }
  
  export default DescriptionThree;