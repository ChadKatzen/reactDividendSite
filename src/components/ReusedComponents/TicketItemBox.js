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
    console.log(props.Ticket_Object.Ticket_imageURL)
    return (
        <Grid item xs = {11} md={8} lg={8}>
            <Box className={classes.container}  bgcolor={globalBackBlack} sx={{ display:'flex', justifyContent: "space-center", alignItems: 'center'}} >
              <Box width={60}><Typography color={globalYellow}>{props.Ticket_Object.Ticket_id}</Typography></Box>
              <Box 
                component="img"
                
                sx={{
                    m:2,
                    mr:{md:4, lg:8},
                    maxHeight: { xs: 80, sm: 80 , md: 80, lg: 80, xl: 80},
                }}
                alt="Place Holder Lottery Ticket"
                src={props.Ticket_Object.Ticket_imageURL}
                />

            </Box>
        </Grid>
    );
}

export default TicketItemBox;