import React from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';


let yellow ="#FBD96D";
const backBlack = '#000000';//#2a2a2a';

//alignItems="center"

const stylePaper = {

    bgcolor: yellow,
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: '10px',
    m: 8,
  };

function HowItWorks(){

//Next step turn this into a box with top this yellow and bottom light light yellow both with black text
    return(
        <Box textAlign="center" bgcolor={backBlack}>
            <br/>
            <br/>
            <Typography variant="h2" style={{color:yellow}} >~How it works~</Typography>
            <Grid container >
                <Grid item xs={0}></Grid>
                <Grid item xs={12}>
                    <Paper sx={stylePaper}>


                        
                        <br/>
                        <br/>

                        <br/>
                        <br/>
                        <br/>
                        <br/>

                    </Paper>
                </Grid>
                <Grid item xs={0}></Grid>

            </Grid>
        



        </Box>
    )
}

export default HowItWorks;