//Big Libraries
import React, {useState, useEffect} from 'react';
import Web3 from 'web3';
import { useWeb3React } from '@web3-react/core'
import jQuery from "jquery";


//Wallet Specific
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { InjectedConnector } from "@web3-react/injected-connector";

//Contract Specific
import ABI from './globalHelperScripts/NFTABI.js';

//Components
import ButtonAppBar from './AppBar';
import NavMenu from './NavMenu';
import Mint from './Mint';
import Home from'./Home';
import TicketCheck from './TicketCheck.js';


//CSS
import './css/App.css';
import { display } from '@mui/system';
import { Visibility } from '@mui/icons-material';

//SETUP JQUERRY
let $ = window.$ = window.jQuery = jQuery;


//SETUP Wallets
    const CoinbaseWallet = new WalletLinkConnector({
    url: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
    appName: "Web3-react Demo",
    supportedChainIds: [1, 3, 4, 5, 42],
   });
   
   const WalletConnect = new WalletConnectConnector({
    rpcUrl: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
    bridge: "https://bridge.walletconnect.org",
    qrcode: true,
   });
   
   const Injected = new InjectedConnector({
    supportedChainIds: [1, 3, 4, 5, 42]
   });



const App = () => {
    
    //Contract State Globals
    const [NFTAddress, setNFTAddress] = useState("0x7DAfAC25D7FF95f878B9bb08E9bA3fAEd5f72418");
    const [WalletConnected, setWalletConnected] = useState(false);

    const { activate, deactivate,active, chainId, account, provider } = useWeb3React();

    async function handleConnectToMetaMask(){
        await activate(Injected);
        setWalletConnected(true);
    }
    async function handleConnectToCoinBase(){
        await activate(CoinbaseWallet);
    }
    async function handleConnectToWalletConnector(){
        await activate(WalletConnect);
    }
    

    //NAV MENU FUNCTIONS
        function handleNavMenuDisplay(){
            $('#navMenu').slideToggle();
        }


    //MINT Functions
        async function handleMint(){
            if(WalletConnected === false){
                window.alert("Connect your wallet first")
                return;
            }
            let provider = await Injected.getProvider();
            let myWeb3js = new Web3(provider);
            let NFTContract =new myWeb3js.eth.Contract(ABI, NFTAddress);
            let accounts = await provider.request({ method: 'eth_requestAccounts'});
            await NFTContract.methods.mintTo(accounts[0]).send({ from: accounts[0], value: myWeb3js.utils.toWei("0.08", "ether") })
        }

    
    //Display the Body
    const [displayPage, setDisplayPage] = useState("Home")

    function handlePageChange(pageName){
        setDisplayPage(pageName);
        $('#navMenu').slideToggle();
    }

    function renderBody(){
        if (displayPage === "Home"){
            return <Home />;
        }
        if (displayPage === "Mint"){
            return <Mint handleClick = {handleMint}/>;
        }
        if (displayPage === "Check Ticket"){
            return <TicketCheck />;
        }
        return <div></div>;
    }
    
        //right now the button only connects to metamask... need to create a modal to pop up when clicking that can handle all three
    return (
        <div>
            
            <ButtonAppBar activateNavMenu = {handleNavMenuDisplay} connectToMetaMask = {handleConnectToMetaMask} activeAccount = {account? `${account.substring(0,5)}...${account.substring(account.length -5)}` : "Connect Wallet"}/>
            <div id='navMenu' style={{display:"none"}}>
                <NavMenu changePage = {handlePageChange}/>                
            </div>
            <div>
                {renderBody()}
            </div>
            
        </div>
    );
}
/*
  <div style={navMenuStyle()}>
                <NavMenu />
            </div>

            <div className={`navMenu ${navMenuActive? 'active' : 'inactive'}`}>
                <NavMenu />
            </div>
            const [navMenuActive, setNavMenuActive] = useState(false);
        //Transition Times not working yet
        const navMenuStyleActive = {
            visibility : 'visible',
            maxHeight: '10000',
            transition: 'maxHeight 3s ease'
        };
        const navMenuStyleHidden = {
            visibility : 'hidden',
            maxHeight: '0',
            transition: 'maxHeight 3s ease'
        };
        function navMenuStyle(){
            if(navMenuActive){
                return navMenuStyleActive;
            }
            return navMenuStyleHidden;
        }
*/

export default App;
