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
                id="CostToMint"
                question="#1 What is the cost to mint?"
                answer="0.1 Eth"
            />

            <DropDownBox 
              id="MintsPerWallet"
              question="#2 How many mints per wallet?"
              answer="There is no limit to the amount of tickets minted per wallet"
            />

            <DropDownBox 
              id="Jackpot"
              question="#3 What is the jackpot?"
              answer="The prize will be 100% of the mint. If the full 10,000 Lotto NFTs are minted, the jackpot will be 1,000 eth."
            />

            <DropDownBox 
              id="Eliminations"
              question="#4 Are eliminations random?"
              answer="All eliminations are entirely random and pulled from the Lotto smart contract itself (we use a random number generating oracle). Because everything is on-chain, this might be the most transparent online lottery to date. For the remaining skeptics, you can find the smart contract code here on Etherscan."
            />


            <DropDownBox 
              id="Winner"
              question="#5 How is the winner paid?"
              answer="The wallet holding the winning ticket will be able to withdraw directly from the Lotto smart contract. If you’ve won, you can withdraw using the ‘Check Ticket’ page of this site."
            />
            

        </Grid>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </Box>
    );
}

export default FAQ;