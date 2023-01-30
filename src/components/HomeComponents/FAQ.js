import React, {useState} from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import {Grid} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import jQuery from "jquery";
import DropDownBox from '../ReusedComponents/dropDownBox';

//SETUP JQUERRY
let $ = window.$ = window.jQuery = jQuery;

let yellow ="#FBD96D";
let lightYellow="#fcf2d2";
const backBlack = '#000000';//#2a2a2a';
let buttonBlack = false;

function FAQ(){
    const [ButtonColor, setButtonColor] = useState(yellow);



    function handleCostToggle(){
        $('#CostToMint').slideToggle();

        if($('#CostToMintQ').css('background-color')=="rgb(251, 217, 109)")
        {
            $('#CostToMintQ').css("background-color", backBlack);
            $('#CostToMintText').css("color", yellow)
            setButtonColor(yellow);
        }
        else {
            $('#CostToMintQ').css("background-color", yellow);
            $('#CostToMintText').css("color", backBlack)
            setButtonColor(backBlack);
   }
        
    }
    
    function handleMintNumberToggle(){
        $('#MintNumber').slideToggle();
    }
    function handleJackpotToggle(){
        $('#Jackpot').slideToggle();
    }
    function handleEliminationsToggle(){
        $('#Eliminations').slideToggle();
    }
    function handleWinnerToggle(){
        $('#Winner').slideToggle();
    }

    function renderCostToMintButton(){
        if (buttonBlack){
            console.log("return black button")
            return(
                <MenuIcon sx ={{'color':backBlack}}  />
            );
        } else {
            console.log("return yellow button")

            return (
                <MenuIcon sx ={{'color':yellow}} />
            );
        }
    }

    return (
        <Box sx={{m:2}}>
        <Grid container
        spacing={1}
        direction="row"
        justifyContent="center"
        alignItems="center" 
        wrap ="wrap" 
         >
            <Grid item xs={12}>
                <Box textAlign='center'>
                    <Typography variant="h2" style={{color:yellow}}>~FAQ~</Typography>
                    <br/>
                    <br/>
                </Box>
            </Grid>



            <DropDownBox 
                id="CostToMintTest"
                question="testQ"
                answer="testAnswer"
            />

            <Grid item xs = {12} sm={11} lg={11} xl={8}>
                <Box id="CostToMintQ" bgcolor={backBlack} sx={{ ml:1.5, mr:1.5 , display:'flex', justifyContent: "space-between"}} onClick = {handleCostToggle} >
                        <Typography id = "CostToMintText" variant="h5" sx={{ ml:3, pt:1, pb: 1}} style={{color:yellow}} >#1 What is the cost to mint?</Typography>
                        <IconButton id = "CostToMintButton"
                        size="large"
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 0.5 }}
                        >
                           <MenuIcon sx ={{'color':ButtonColor}} />
                        </IconButton>
                </Box>

                <Box bgcolor={lightYellow} sx={{ ml:1.5, mr:1.5}} style={{display:"none"}} id="CostToMint">
                    <Typography variant="h6" sx={{ ml:3, pt:1, pb: 1}} style={{color:backBlack}} >0.1 Eth</Typography>
                </Box>
            </Grid>





            <Grid item xs = {12} sm={11} lg={11} xl={8}>
                <Box bgcolor={yellow} sx={{ ml:1.5, mr:1.5 , display:'flex', justifyContent: "space-between"}} onClick = {handleMintNumberToggle}>
                        <Typography variant="h5" sx={{ ml:3, pt:1, pb: 1}} style={{color:backBlack}} >#2 How many mints per wallet?</Typography>
                        <IconButton
                        size="large"
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 0.5 }}
                        
                        >
                            <MenuIcon />
                        </IconButton>
                </Box>

                <Box bgcolor={lightYellow} sx={{ ml:1.5, mr:1.5}} style={{display:"none"}} id="MintNumber">
                    <Typography variant="h6" sx={{ ml:3, pt:1, pb: 1}} style={{color:backBlack}} >There is no limit to the amount of tickets minted per wallet</Typography>
                </Box>

            </Grid>
            <Grid item xs = {12} sm={11} lg={11} xl={8}>
                <Box bgcolor={yellow} sx={{ ml:1.5, mr:1.5 , display:'flex', justifyContent: "space-between"}} onClick = {handleJackpotToggle}>
                        <Typography variant="h5" sx={{ ml:3, pt:1, pb: 1}} style={{color:backBlack}} >#3 What is the jackpot?</Typography>
                        <IconButton
                        size="large"
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 0.5 }}
                        >
                            <MenuIcon />
                        </IconButton>
                </Box>

                <Box bgcolor={lightYellow} sx={{ ml:1.5, mr:1.5}} style={{display:"none"}} id="Jackpot">
                    <Typography variant="h6" sx={{ ml:3, pt:1, pb: 1}} style={{color:backBlack}} >The prize will be 100% of the mint. If the full 10,000 Lotto NFTs are minted, the jackpot will be 1,000 eth.</Typography>
                </Box>

            
            </Grid>

            <Grid item xs = {12} sm={11} lg={11} xl={8}>
                <Box bgcolor={yellow} sx={{ ml:1.5, mr:1.5 , display:'flex', justifyContent: "space-between"}} onClick = {handleEliminationsToggle} >
                        <Typography variant="h5" sx={{ ml:3, pt:1, pb: 1}} style={{color:backBlack}} >#4 Are eliminations random?</Typography>
                        <IconButton
                        size="large"
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 0.5 }}
                        >
                            <MenuIcon />
                        </IconButton>
                </Box>

                <Box bgcolor={lightYellow} sx={{ ml:1.5, mr:1.5}} style={{display:"none"}} id="Eliminations">
                    <Typography variant="h6" sx={{ ml:3, pt:1, pb: 1}} style={{color:backBlack}} >All eliminations are entirely random and pulled from the Lotto smart contract itself (we use a random number generating oracle). Because everything is on-chain, this might be the most transparent online lottery to date. For the remaining skeptics, you can find the smart contract code here on Etherscan.</Typography>
                </Box>
            
            </Grid>

            <Grid item xs = {12} sm={11} lg={11} xl={8} >
                <Box bgcolor={yellow} sx={{ ml:1.5, mr:1.5 , display:'flex', justifyContent: "space-between"}} onClick = {handleWinnerToggle}>
                        <Typography variant="h5" sx={{ ml:3, pt:1, pb: 1}} style={{color:backBlack}} >#5 How is the winner paid?</Typography>
                        <IconButton
                        size="large"
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 0.5 }}
                        
                        >
                            <MenuIcon />
                        </IconButton>
                </Box>

                <Box bgcolor={lightYellow} sx={{ ml:1.5, mr:1.5}} style={{display:"none"}} id="Winner">
                    <Typography variant="h6" sx={{ ml:3, pt:1, pb: 1}} style={{color:backBlack}} >The wallet holding the winning ticket will be able to withdraw directly from the Lotto smart contract. If you’ve won, you can withdraw using the ‘Check Ticket’ page of this site.</Typography>
                </Box>
             
            </Grid>



        </Grid>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </Box>
    );
}

export default FAQ;