import { Typography } from "@mui/material";
import {Grid} from "@mui/material";
import React, { useEffect, useState } from "react";
import {globalYellow, globalLightYellow, globalBackBlack, globalFont} from '../../globalHelperScripts/ColorsAndFonts.js';
let yellow = globalYellow;


export default function Counter(props) {
  
  return (
    <Grid container justify="flex-start" spacing={0}>
        <Grid item xs={6}>
            <Typography variant="h5" style={{color:yellow}} id='mintTicker' textAlign='right'>
                {props.tokensMinted}
            </Typography>
        </Grid>
        <Grid item xs={6}>
            <Typography variant="h5" style={{color:yellow}} textAlign='left'>
                /10,000
            </Typography>
        </Grid>
    </Grid>
    
  )
  ;
}
