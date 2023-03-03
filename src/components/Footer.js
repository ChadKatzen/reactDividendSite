import React from 'react';
import { Box } from '@mui/system';
import {Grid, Typography} from '@mui/material';
import { IconButton } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter'
import { ReactComponent as DiscordIcon } from '../images/discord.svg';
import {ReactComponent as OpenSeaSVG} from '../images/OpenSeaTransparent.svg';
import { SvgIcon } from '@mui/material';
import {globalYellow, globalLightYellow, globalBackBlack, globalFont} from '../globalHelperScripts/ColorsAndFonts.js';
import { OpenSeaLink, DiscordLink, TwitterLink } from '../globalHelperScripts/links';

function Footer(){
    function OpenSeaIcon(props){
        return (
            <SvgIcon {...props} component={OpenSeaSVG} inheritViewBox>

            </SvgIcon> 
            );
    }
    return(


        <Box bgcolor={globalYellow} >
            <Grid container alignItems="center" justifyContent="center">
                <Grid item xs={12}>
                    <Typography sx={{ml:1.2, mt:2}} variant="h6" textAlign ="center">STAY UPDATED | DONT MISS OUT</Typography>
                </Grid>

                    <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mt: 0.3, mb: 0.3, mr:0.5, ml:0.5}}
                    onClick={() => window.open(TwitterLink, '_blank')} 
                    >
                    <TwitterIcon />
                    </IconButton>   
                    <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mt: 0.3, mb: 0.3, mr:0.5, ml:0.5}}
                    onClick={() => window.open(DiscordLink, '_blank')} 

                    >
                    <SvgIcon component={DiscordIcon}  inheritViewBox>
                    </SvgIcon>   
                    </IconButton>   
                    <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mt: 0.3, mb: 0.3,  mr:0.5, ml:0.5}} 
                    onClick={() => window.open(OpenSeaLink, '_blank')} 

                    >
                        <OpenSeaIcon color="blue" />
                    </IconButton> 

                </Grid>
                
        </Box>
    );
}

export default Footer;