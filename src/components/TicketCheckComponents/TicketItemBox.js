import React, {useState} from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import {Grid} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@mui/styles';

import jQuery from "jquery";
import {globalYellow, globalLightYellow, globalBackBlack, globalFont} from '../../globalHelperScripts/ColorsAndFonts.js';

const useStyles = makeStyles((input) => ({
    container: {
      borderTop: `1px solid ${globalYellow}`,

    },
  }));
  

function TicketItemBox(props){
    const classes = useStyles();
    return (
        <Grid item xs = {11} md={8} lg={8}>
            <Box className={classes.container}  bgcolor={globalBackBlack} sx={{ display:'flex', justifyContent: "space-center", alignItems: 'center'}} >
              <Box width={80}><Typography color={globalYellow}>{props.Ticket_Object.Ticket_id}</Typography></Box>
              <Box 
                component="img"
                
                sx={{
                    mt:2,
                    mb:2,
                    
                    maxHeight: { xs: 80, sm: 80 , md: 80, lg: 80, xl: 80},
                }}
                alt="Place Holder Lottery Ticket"
                src={props.Ticket_Object.Ticket_imageURL}
                />


              <Box sx={{ml:6}}>
                <Typography color={globalYellow} >Status:</Typography>
                <Typography color={props.Ticket_Object.Ticket_status == "Valid" ? '#92d192' : 'red'} >{props.Ticket_Object.Ticket_status}</Typography>

              </Box>
              
              
             <Box width='100%'>
              <Typography textAlign="right" color={globalYellow}>{props.Ticket_Object.Ticket_status == "Valid"? props.effectiveValue.toString().substring(0,5) : 0} Eth</Typography>  
             </Box>


            </Box>
        </Grid>
    );
}

export default TicketItemBox;