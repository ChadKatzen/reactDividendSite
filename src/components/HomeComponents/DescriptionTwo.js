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
                
                <Box sx={{display:'flex', justifyContent: "space-between"}} >

                    <Grid item xs ={12} sm ={12} md ={5} lg={8} xl={5}  >
                    <Box  sx={{mt:4, mb:4}}>
                        <Box className={classes.container}>
                        <Typography variant="h6" style={{color:yellow}} textAlign ="left" sx={{m: 6}}>
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
                    </Grid>

                    <Grid item xs={12} sm = {12} md ={5} lg={3} xl ={2}>
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
                    </Grid>

                </Box>

            </Grid>
             
           
            </Box>
        </Box>
    );
  }
  
  export default DescriptionTwo;