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


const theme = createTheme({


})



function Description() {
    const classes = useStyles();
    return (



        <Box textAlign = "center" >
            
            

            <Box sx={{ flexGrow: 1,m:4}}>
            <Typography variant="h2" style={{color:yellow}} >~Lotto~</Typography>
            <br/>
            <br/>
            <br/>

              <Grid container
              
              direction="row"
              justifyContent="center"
              alignItems="center" 
              wrap ="wrap-reverse" 
              >

                <Grid item lg={0} xl={1}></Grid>

                <Grid item xs ={12} sm ={12} md ={5} lg={8} xl={5} >
                  <Box className={classes.container}>
                  <Typography variant="h6" style={{color:yellow}} textAlign ="left" sx={{m: 4}}>
                    Your chance at up to 1,000 eth
                    <br/><br/>
                    Week by week, Lotto tickets will be eliminated until one lucky winner remains 
                    <br/><br/>
                    Each week your Lotto ticket survives, it’s value goes up 
                    <br/><br/>
                    Take profits early or sweat it to the end - For paper and diamond hands alike
                  </Typography>
                  </Box>
                </Grid>

                <Grid item xs={12} sm = {12} md={1} lg={1} xl={0}>
                  <br/>
                  <br/>
                
                  <br/>
                </Grid>

                <Grid item xs={12} sm = {12} md ={5} lg={3} xl ={2}>
                      <Box 
                      component="img"
                      sx={{
                        m: 4,
                        
                        maxHeight: { xs: 350, sm: 400 , md: 400, lg: 300 },
                        maxWidth: { xs: 233, sm: 300, md: 300, lg: 230 },
                        flexGrow: 1
                      }}
                      alt="Place Holder Lottery Ticket"
                      src={ticketImage}
                    />
                </Grid>

                <Grid item lg={0} xl={1}></Grid>


              </Grid>
              
            </Box>
        </Box>
    );
  }
  
  export default Description;