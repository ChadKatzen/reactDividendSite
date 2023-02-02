import React from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Grid from '@mui/material/Grid';
import ticketImage from '../../images/ticket.png';

let yellow ="#FBD96D";

const useStyles = makeStyles((input) => ({
  container: {
    border: '4px dashed #FBD96D',
  },
}));





function DescriptionTwo() {
    const classes = useStyles();
    return (



        <Box textAlign = "center" >
            <Box sx={{ flexGrow: 1,m:4}}>
            <Typography variant="h2" sx={{fontFamily: 'Clarkson'}} style={{color:yellow}} >~Lotto~</Typography>
            <br/>
         

              <Grid container
              justifyContent="center"
              alignItems="center" 
              >
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Box sx={{display:'flex', justifyContent: "space-around", flexWrap:"wrap-reverse"}} >
                        <Box  sx={{m:3}}>
                            <Box sx={{borderRadius:'20px'}} className={classes.container}>
                            <Typography variant="h6" style={{color:yellow}} textAlign ="left" sx={{fontFamily: 'Clarkson', m: 6}}>
                                Your chance at up to 1,000 eth
                                <br/><br/>
                                Week by week, Lotto tickets will be eliminated until one lucky winner remains
                                <br/><br/>
                                Each week your Lotto ticket survives, it’s value goes up
                                <br/><br/>
                                Take profits early or sweat it to the end - For paper and diamond hands alike
                            </Typography>
                            </Box>
                        </Box>
                        <Box sx={{display: {xs: 'none', sm: 'none', md: 'none', lg: 'flex'}, alignItems: 'center', justifyContent: 'center', m:3}}>
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
                        

                    </Box>
                </Grid>
            </Grid>
             
           
            </Box>
        </Box>
    );
  }
  
  export default DescriptionTwo;