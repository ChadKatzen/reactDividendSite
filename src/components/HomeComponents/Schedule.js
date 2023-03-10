import React from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';

import jQuery from "jquery";

//SETUP JQUERRY
let $ = window.$ = window.jQuery = jQuery;

//COLORS
let yellow ="#FBD96D";
let lightYellow="#fcf2d2";
const backBlack = '#000000';//#2a2a2a';


function Schedule(props){

    //Schedule MENU FUNCTIONS
    function handleScheduleToggle(){
        $('#ScheduleDescription').slideToggle();
    }


    return(
        <Box  bgcolor={backBlack} sx={{m:2}} >
            <Grid container justifyContent="center" alignItems="center" >
                <Grid item xs={12} sm ={11} md = {11} lg={11} xl={8}>


                    

                        <Box bgcolor={yellow} sx={{ ml:1.5, mr:1.5 , display:'flex', justifyContent: "space-between"}} >
                                    <Typography variant="h5" sx={{ ml:3, pt:1, pb: 1}} style={{color:backBlack}} >Schedule</Typography>
                                   
                        </Box>

                        <Box bgcolor={lightYellow} sx={{ ml:1.5, mr:1.5}} style={{}} id="ScheduleDescription">
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                        </Box>







                    


                    
                </Grid>

            </Grid>
        



        </Box>
    )
}

export default Schedule;