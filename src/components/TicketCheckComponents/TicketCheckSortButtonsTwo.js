import React, {useState, useEffect} from 'react';
import { Grid, Typography } from '@mui/material';
import {Box} from '@mui/material';
import {globalYellow, globalLightYellow, globalBackBlack, globalFont} from '../../globalHelperScripts/ColorsAndFonts.js';
import {CircularProgress} from '@mui/material';
import { makeStyles } from '@mui/styles';
import jQuery from "jquery";
//SETUP JQUERRY
let $ = window.$ = window.jQuery = jQuery;


const useStyles = makeStyles((input) => ({
    container: {
      border: `1px solid ${globalYellow}`,
      width: '170px',
      backgroundColor: globalBackBlack,
      [input.breakpoints.down('md')]: {
        width: '145px',
      },
      [input.breakpoints.down('sm')]: {
        width: '100px',
      },
    },
    active: {
      border: `1px solid ${globalYellow}`,
      width:'170px',
      backgroundColor: globalYellow,
      [input.breakpoints.down('md')]: {
        width: '145px',
      },
      [input.breakpoints.down('sm')]: {
        width: '100px',
      },
    },
  }));



function TicketCheckSortButtonsTwo(props){
  
    const classes = useStyles();


        
    function handleClick(event){
        props.handleSortClick(event)
    }


    return(
        <Grid item>
            <Box  className={props.activeSort == props.name? classes.active : classes.container} onClick={handleClick}>
                <Typography  color={props.activeSort == props.name? globalBackBlack : globalYellow} textAlign="center" sx={{pt:1,pb:1}}>{props.name}</Typography>
            </Box>
        </Grid>
    );
    
}

export default TicketCheckSortButtonsTwo;