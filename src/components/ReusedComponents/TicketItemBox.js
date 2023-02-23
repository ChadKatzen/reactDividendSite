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
      border: `1px solid ${globalYellow}`,
    },
  }));
  

function TicketItemBox(props){
    const classes = useStyles();

    return (
        <Grid item xs = {11} md={8} lg={8}>
            <Box className={classes.container}  bgcolor={globalBackBlack} sx={{ display:'flex', justifyContent: "space-between"}} >
                   <Typography color={globalYellow}>test</Typography>
            </Box>
        </Grid>
    );
}

export default TicketItemBox;