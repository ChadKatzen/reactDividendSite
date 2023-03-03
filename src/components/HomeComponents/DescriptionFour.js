import React from 'react';
import { Box } from '@mui/system';
import { Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Grid from '@mui/material/Grid';
import ticketImage from '../../images/loser.gif';


import {globalYellow, globalLightYellow, globalBackBlack, globalFont} from '../../globalHelperScripts/ColorsAndFonts.js';
import { OpenSeaLink, DiscordLink, TwitterLink } from '../../globalHelperScripts/links';

let yellow =globalYellow;//"#FBD96D";
let myFont = globalFont;//'Poppins';


const useStyles = makeStyles((input) => ({
  container: {
    border: '4px dashed #FBD96D',
  },
}));






function DescriptionFour(props) {

   async function buttonHandle(){
    await setTimeout(function() {
        props.handlePageChangeNoToggle("Mint");
      }, 100); 
    
    }

    const classes = useStyles();
    return (

    <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={11} xl = {8}>


        
            <Box textAlign="center">
                <Grid container justifyContent="center" alignItems="center" justify="space-between">
                    <Grid item xs= {11} sm = {12} md = {9} lg={9}>
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

                    <Grid item xs = {12} sm ={12} md = {3} lg ={3}>
                        <Box sx={{mt:{md:5 ,lg:6}, ml:4}}>
                            
                            <Button color='yellow' style={{ width: 200, height: 50 }} variant={"contained"} onClick={buttonHandle}>
                               <Typography sx={{fontWeight: 'bold'}}>Mint Now</Typography>
                            </Button>
                            <br/>
                            <br/>
                            <Button color='yellow'style={{ width: 200, height: 50 }} variant={"contained"}  component="a" href={OpenSeaLink} target="_blank">
                                <Typography sx={{fontWeight: 'bold'}}>View on OpenSea</Typography>
                            </Button>

                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    </Grid>
             
    
    );
  }
  
  export default DescriptionFour;