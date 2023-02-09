import React from 'react';
import { Box } from '@mui/system';
import { IconButton } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter'
import { SvgIcon } from '@mui/material';
import {globalYellow, globalLightYellow, globalBackBlack, globalFont} from '../globalHelperScripts/ColorsAndFonts.js';

function Footer(){
    return(
        <Box bgcolor={globalYellow} >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <TwitterIcon />
            </IconButton>        
        </Box>
    );
}

export default Footer;