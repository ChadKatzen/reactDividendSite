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
      width:'170px',
      backgroundColor: globalBackBlack,
    },
    active: {
      border: `1px solid ${globalYellow}`,
      width:'170px',
      backgroundColor: globalYellow,
    },
  }));



function TicketCheckSortButtons(props){
    const [Open, setOpen]= useState(true);
    const classes = useStyles();


    function handleMouseIn(){
        if(Open){

        }else{
       
            $(`#${props.id}box`).css("background-color", globalLightYellow);
            $(`#${props.id}text`).css("color", globalBackBlack)
        }
         
        }
        
        function handleMouseOut(){
            if(Open){ 

            } else {

                $(`#${props.id}box`).css("background-color", globalBackBlack);
                $(`#${props.id}text`).css("color", globalYellow)
            }
        }
        
        function handleClick(event){
            props.handleSortClick(event)
            if(Open){
                setOpen(false);
                $(`#${props.id}box`).css("background-color", globalBackBlack);
                $(`#${props.id}text`).css("color", globalYellow)

            } else {
                setOpen(true);
                $(`#${props.id}box`).css("background-color", globalYellow);
                $(`#${props.id}text`).css("color", globalBackBlack)
            }
            
      
        }


    return(
        <Grid item>
            <Box id={`${props.id}box`} className={Open? classes.active : classes.container} onMouseOver ={handleMouseIn} onMouseLeave={handleMouseOut} onClick={handleClick}>
                <Typography id={`${props.id}text`} color={Open? globalBackBlack : globalYellow} textAlign="center" sx={{mt:1,mb:1}}>{props.name}</Typography>
            </Box>
        </Grid>
    );
    
}

export default TicketCheckSortButtons;