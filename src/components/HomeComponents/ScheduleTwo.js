import React from 'react';
import SimpleTable from './SimpleTable.js';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import {globalYellow, globalLightYellow, globalBackBlack, globalFont} from '../../globalHelperScripts/ColorsAndFonts.js';

//COLORS
let yellow =globalYellow;//"#FBD96D";
let lightYellow=globalLightYellow;//"#fcf2d2";
let backBlack =globalBackBlack;// '#000000';//#2a2a2a';
let myFont=globalFont;

function ScheduleTwo(){
    return(
        <Box textAlign='center'>
            <Typography variant="h2" style={{color:yellow}} sx={{fontFamily:myFont}}>Schedule</Typography>
            <br/>
           
        </Box>
    )
    
}

export default ScheduleTwo;