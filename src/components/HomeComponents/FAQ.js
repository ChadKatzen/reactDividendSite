import React, {useState} from 'react';
import {Box} from '@mui/system';
import {Grid, Typography} from '@mui/material';
import DropDownBox from '../ReusedComponents/DropDownBox';

import {globalYellow, globalLightYellow, globalBackBlack, globalFont} from '../../globalHelperScripts/ColorsAndFonts.js';


let yellow =globalYellow;//"#FBD96D";
let myFont =globalFont;//'Poppins';

function FAQ(){

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
                    <Typography variant="h2" style={{color:yellow}} sx={{fontFamily:myFont}}>FAQ</Typography>
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
              answer="There is no limit to the amount of tickets minted per wallet."
            />

            <DropDownBox 
              id="Jackpot"
              question="#3 What is the jackpot?"
              answer="The prize will be 100% of the mint. If the full 10,000 Lotto NFTs are minted, the jackpot will be 1,000 Eth."
            />

            <DropDownBox 
              id="Eliminations"
              question="#4 Are eliminations random?"
              answer="All eliminations are entirely random and pulled from the Lotto smart contract itself (we use a random number generating oracle). Because everything is on-chain, this might be the most transparent online lottery to date. For the remaining skeptics, you can find the smart contract code here on Etherscan."
            />


            <DropDownBox 
              id="Winner"
              question="#5 How is the winner paid?"
              answer="The wallet holding the winning ticket will be able to withdraw directly from the Lotto smart contract. If you’ve won, you can withdraw using the check ticket tab."
            />
            

        </Grid>
        <br/><br/><br/><br/><br/><br/><br/><br/>
        </Box>
    );
}

export default FAQ;