import React, {useState} from 'react';
import {Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container} from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import ButtonAppBar from './AppBar';
import NavMenu from './NavMenu';

//NEED TO IMPORT WEB 3 here
//NEED TO IMPORT NFTABI As a variable

const App = () => {
    
    //Contract State Globals
    const [NFTAddress, setNFTAddress] = useState("0x7DAfAC25D7FF95f878B9bb08E9bA3fAEd5f72418");
    const [MetaMaskEnabled, setMetaMaskEnabled] = useState(false);
    const [NFTContract, setNFTContract] = useState(null);

    React.useEffect(() => {
        window.addEventListener('load', function() {

            // Checking if Web3 has been injected by the browser (Mist/MetaMask)
            if (typeof web3 !== 'undefined') {
                // Use Mist/MetaMask's provider
                web3js = new Web3(web3.currentProvider);
                setMetaMaskEnabled(true);
                setNFTContract(new web3js.eth.Contract(NFTABI, NFTAddress));
            } else {
              // Handle the case where the user doesn't have Metamask installed
              // Probably show them a message prompting them to install Metamask
            }
            })
    });
    


    const [activeAccount, setActiveAccount] = useState(0);

    function connectWallet() {
        if(MetaMaskEnabled){
            ethereum.request({ method: 'eth_requestAccounts'}).then((accounts) => {
                if(accounts && accounts[0] > 0){
                  setActiveAccount(accounts[0]);
                }
              })
        }
    }
    //NAV MENU FUNCTIONS
        const [navMenuActive, setNavMenuActive] = useState(false);

        //Transition Times not working yet
        const navMenuStyleActive = {
            visibility : 'visible',
            transition: 'height 0.3s ease'
        };
        const navMenuStyleHidden = {
            visibility : 'hidden',
            transition: 'height 0.3s ease'
        };

        function navMenuStyle(){
            if(navMenuActive){
                return navMenuStyleActive;
            }
            return navMenuStyleHidden;
        }

        function handleNavMenuDisplay(){
            setNavMenuActive(navMenuActive? false: true);
        }


    

    return (
        <div>
            <ButtonAppBar activateNavMenu = {handleNavMenuDisplay}/>
            <div style={navMenuStyle()}>
                <NavMenu />
            </div>

        </div>
    );
}

export default App;
