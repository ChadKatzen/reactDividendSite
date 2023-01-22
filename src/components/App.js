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
import ABI from '../globalHelperScripts/NFTABI.js';

//Components
import ButtonAppBar from './AppBar';
import NavMenu from './NavMenu';
import Mint from './Mint';
import Home from'./Home';
import TicketCheck from './TicketCheck.js';
import { makeStyles } from '@mui/styles';



//CSS
import '../css/App.css';


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

///Full Screen
   const useStyles = makeStyles((theme) => ({
    root:{
     
      height: '100vh',
      width:'100vw',
      zIndex: 999,
      alignItems: 'left',
      justifyContent: 'left',
    },
  }));
  


const App = () => {
    const classes = useStyles();
    //Contract State & Wallet Globals 
        const [NFTAddress, setNFTAddress] = useState("0x7DAfAC25D7FF95f878B9bb08E9bA3fAEd5f72418");
        const [WalletConnected, setWalletConnected] = useState(false);
        const [accountDisplay, setAccountDisplay] = useState("");
        const [activeProvider, setActiveProvider] = useState({});
        let { activate, deactivate, account } = useWeb3React();

        async function handleConnectToMetaMask(){
            let provider;
            //Filter through all injected providers to get Metamask
            let providers = await Injected.getProvider();
            if (providers.providers.length) {
                providers.providers.forEach(async (p) => {
                    console.log(p)
                if (p.isMetaMask) provider = p;
                });
            }
            account = await provider.request({ method: 'eth_requestAccounts'});
            setWalletConnected(true);
            setAccountDisplay(account);
            setActiveProvider(provider);
        }
        async function handleConnectToCoinBase(){
            await activate(CoinbaseWallet);
            setWalletConnected(true);

            let tempProvider = await CoinbaseWallet.getProvider();
            account = await tempProvider.request({ method: 'eth_requestAccounts'});
            setAccountDisplay(account);
            setActiveProvider(tempProvider);
        }
        async function handleConnectToWalletConnector(){
            setTimeout(() => activate(WalletConnect), 500);
            setWalletConnected(true);

            let tempProvider = await WalletConnect.getProvider();
            account = await tempProvider.request({ method: 'eth_requestAccounts'});
            setAccountDisplay(account);
            setActiveProvider(tempProvider);
        }

    

    //NAV MENU FUNCTIONS
        function handleNavMenuToggle(){
            $('#navMenu').slideToggle();
        }
        function handleHideNavMenu(){
            $('#navMenu').slideUp();
        }

    //MINT Functions
        async function handleMint(){
            if(WalletConnected === false){
                window.alert("Connect your wallet first")
                return;
            }
            let myWeb3js = new Web3(activeProvider);
            let NFTContract =new myWeb3js.eth.Contract(ABI, NFTAddress);
            let accounts = await activeProvider.request({ method: 'eth_requestAccounts'});
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
                return (
                    <div onClick={handleHideNavMenu}>
                        <Home />
                    </div>
                    );
            }
            if (displayPage === "Mint"){
                return (
                    <div onClick={handleHideNavMenu}>
                        <Mint handleClick = {handleMint}/>
                    </div>
                    );
            }
            if (displayPage === "Check Ticket"){
                return (
                    <div onClick={handleHideNavMenu}>
                        <TicketCheck/>
                    </div>
                    );
            }
            return <div></div>;
        }





    
    return (
        <div className={classes.root}>

            
            <ButtonAppBar 
                activateNavMenu = {handleNavMenuToggle} 
                connectToMetaMask = {handleConnectToMetaMask} 
                connectToCoinBase ={handleConnectToCoinBase}
                connectToWalletConnector = {handleConnectToWalletConnector}
                activeAccount = {accountDisplay? `${String(accountDisplay).substring(0,5)}...${String(accountDisplay).substring(String(accountDisplay).length -5)}` : "Connect Wallet"}
                
            />

            <div id='navMenu' style={{display:"none"}}>
                <NavMenu changePage = {handlePageChange}/>                
            </div>
            <div>
                {renderBody()}
            </div>
            
        </div>
    );
}

export default App;
