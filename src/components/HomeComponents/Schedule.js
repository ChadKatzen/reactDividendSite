import React from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
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
                                    <IconButton
                                    size="large"
                                    edge="end"
                                    color="inherit"
                                    aria-label="menu"
                                    sx={{ mr: 0.5 }}
                                    onClick = {handleScheduleToggle}
                                    >
                                        <MenuIcon />
                                    </IconButton>
                        </Box>

                        <Box bgcolor={lightYellow} sx={{ ml:1.5, mr:1.5}} style={{display:"none"}} id="ScheduleDescription">
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