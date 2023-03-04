//Big Libraries
import React, {useState, useEffect} from 'react';
import Web3 from 'web3';
import { useWeb3React } from '@web3-react/core'
import jQuery from "jquery";
import gsap from 'gsap';



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
import Footer from './Footer.js';
import { makeStyles } from '@mui/styles';
import { Grid } from '@mui/material';


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
const useStyles = makeStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
    main: {
      flex: '0',
    },
  });
  


const App = () => {
    const classes = useStyles();
    //Contract State & Wallet Globals 
        const [NFTAddress, setNFTAddress] = useState("0x7DAfAC25D7FF95f878B9bb08E9bA3fAEd5f72418");
        const [WalletConnected, setWalletConnected] = useState(false);
        const [accountDisplay, setAccountDisplay] = useState("");
        const [activeProvider, setActiveProvider] = useState({});
        let { activate, deactivate, account } = useWeb3React();

        async function defaultWalletConnection(){
            let providerUrl = new Web3.providers.HttpProvider('https://goerli.infura.io/v3/464484cbf0584186b87d9e3d1abde1e0');
            setActiveProvider(providerUrl);
        }

        useEffect(() => {
            defaultWalletConnection();
          }, []);

        async function handleConnectToMetaMask(){
            let provider;
            try {
                provider = window.ethereum.providers.find((provider) => provider.isMetaMask);
            } catch (error) {
                provider = window.ethereum;
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

    //MINT Functions -> Used by Mint Tab
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

    //Construct Ticket Object -> Used by Check Ticket Tab
        async function constructTicketObject(id){
            
            let myWeb3js = new Web3(activeProvider); ///Switch this to work when not connected
            console.log(activeProvider);
            let NFTContract =new myWeb3js.eth.Contract(ABI, NFTAddress);
            let tokenURI = await NFTContract.methods.tokenURI(id).call();
            let tokenOwner = await NFTContract.methods.ownerOf(id).call();

            let imageURL;
            let status;
            if(Math.random() < 0.5) {
                status = "Valid";
            } else {
                status = "Eliminated"
            }
            await $.getJSON(tokenURI, function(data) {
                imageURL = data.image;
                //status = data.status; //THIS WON'T Work UNITL SETUP
            });
            //console.log(`${id} ${imageURL} ${status}`) 
            return ({
                Ticket_id: id,
                Ticket_imageURL: imageURL,
                Ticket_status: status,
                Ticket_owner: tokenOwner,
            }); 
        }
      
    //Display the Body
        const [displayPage, setDisplayPage] = useState("Home")

        function handlePageChange(pageName){
            setDisplayPage(pageName);
            $('#navMenu').slideToggle();
        }

        function handlePageChangeNoToggle(pageName){
            setDisplayPage(pageName);
        }


     

        function renderBody(){
            if (displayPage === "Home"){
                return (
                    <div onClick={handleHideNavMenu}>
                        <Home handlePageChangeNoToggle ={handlePageChangeNoToggle}/>
                    </div>
                    );
            }
            if (displayPage === "Mint"){
                

                let tokensMinted = 6179;
                let mintPercentage = 100*tokensMinted/10000;
                let currentPrizePool = tokensMinted*0.08;


                let secondsToLoadBar = 2; //seconds
                let delayBeforeBar = 50;  //miliseconds
                setTimeout(() => {
                    let progressBar = $('#mint-progress-bar'); //captured in StatusBarTwo
                    gsap.to(progressBar, {
                        x: `${mintPercentage}%`,
                        duration: secondsToLoadBar,
                    });

                    let ticker = $('#mintTicker')
                    gsap.from(ticker, {
                        textContent: 0,
                        duration: secondsToLoadBar,
                        
                        snap: { textContent: 1 },
                        stagger: {
                          each: 1.0,
                          onUpdate: function() {
                            this.targets()[0].innerHTML = numberWithCommas(Math.ceil(this.targets()[0].textContent));
                          },
                        }
                      });
                      
                      let prizeTicker = $('#currentPrizePool');
                      gsap.from(prizeTicker, {
                        textContent: 0,
                        duration: secondsToLoadBar,
                        
                        snap: { textContent: 1 },
                        stagger: {
                          each: 1.0,
                          onUpdate: function() {
                            this.targets()[0].innerHTML = numberWithCommas(Math.ceil(this.targets()[0].textContent));
                          },
                        }
                      });

                    
                      
                      function numberWithCommas(x) {
                        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                      }

                }, delayBeforeBar);
                    
                return (
                <div onClick={handleHideNavMenu}>
                    <Mint handleMint = {handleMint} tokensMinted = {tokensMinted} currentPrizePool={currentPrizePool}/> 
                </div>
                );
            }

                
            

            if (displayPage === "Check Ticket"){

                let tokensMinted = 6179;
                let currentPrizePool = tokensMinted*0.08;
                let numberOfEliminated = 2134;

                let effectiveValue = currentPrizePool/(tokensMinted-numberOfEliminated);
    
               
                return (
                    <div onClick={handleHideNavMenu}>
                        <TicketCheck tokensMinted={tokensMinted} activeAccount={String(accountDisplay)}  constructTicketObject={constructTicketObject} effectiveValue = {effectiveValue}/> 
                    </div>
                    );
            }
            return <div></div>;
        }





    
    return ( 
        <div >
            <Grid container justifyContent='space-between' style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}} > 
                <Grid item xs={12} className={classes.main}>
                    <ButtonAppBar  

                        activateNavMenu = {handleNavMenuToggle} 
                        connectToMetaMask = {handleConnectToMetaMask} 
                        connectToCoinBase ={handleConnectToCoinBase}
                        connectToWalletConnector = {handleConnectToWalletConnector}
                        activeAccount = {accountDisplay? `${String(accountDisplay).substring(0,5)}...${String(accountDisplay).substring(String(accountDisplay).length -5)}` : "Connect Wallet"}
                        handlePageChangeNoToggle ={handlePageChangeNoToggle}
                    />

                    <div id='navMenu' style={{display:"none"}}>
                        <NavMenu changePage = {handlePageChange}/>                
                    </div>
                    <div>
                        {renderBody()}
                    </div>
                
                </Grid>

                <Grid item xs={12}>
                    <Footer id="footer" />  
                </Grid>
            </Grid>
        </div>
    );
}

export default App;
