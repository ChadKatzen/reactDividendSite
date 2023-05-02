import React, {useState, useEffect} from 'react';
import TicketItemBox from './TicketCheckComponents/TicketItemBox';
import { Grid, LinearProgress, Typography, CircularProgress } from '@mui/material';
import {Box} from '@mui/material';
import {globalYellow, globalLightYellow, globalBackBlack, globalFont} from '../globalHelperScripts/ColorsAndFonts.js';
import TicketCheckSortButtonsTwo from './TicketCheckComponents/TicketCheckSortButtonsTwo';
import Modal from '@mui/material/Modal';
import WalletModal from './WalletModal';

function TicketCheck(props) {
  const [ticketList, setTicketList] = useState([]);
  const [ticketListData, setTicketListData] = useState([])
  const [activeSort, setActiveSort] = useState("All");
  const [numValidTickets, setNumValidTickets] = useState(0);


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  function handleClose(){
    setOpen(false); 
  }

  function handleConnectWallet(){
    handleOpen();
  }


  function filterData(sortMethod){ //Returns if the filter worked
    let tempTicketList = ticketListData.slice();
    if (sortMethod == "All"){
      tempTicketList.sort(function(a, b){return a.Ticket_id - b.Ticket_id})
      setTicketList(tempTicketList);
    } 
    if (sortMethod == "Valid"){
      for (let t = 0; t < tempTicketList.length; t++){
        if(tempTicketList[t].Ticket_status != "Valid"){
          tempTicketList.splice(t,1);
          t = t-1;
        }
        setTicketList(tempTicketList);
      }
    }
    if (sortMethod == "Eliminated"){
      for (let t = 0; t < tempTicketList.length; t++){
        if(tempTicketList[t].Ticket_status != "Eliminated"){
          tempTicketList.splice(t,1);
          t = t-1;
        }
        setTicketList(tempTicketList);
      }
    }
    if (sortMethod == "My Tickets"){
      //If there is no wallet connected tell them
    if(props.activeAccount == ""){
        handleConnectWallet();
        return false; //Don't let the sort happen until a wallet is connected
    }

      for (let t = 0; t < tempTicketList.length; t++){
        if(tempTicketList[t].Ticket_owner.toLowerCase() != props.activeAccount){ 
          tempTicketList.splice(t,1);
          t = t-1;
        }
        setTicketList(tempTicketList);
      }
    }

    return true;
  }
  

 

  let numberOfTickets = props.tokensMinted;
  useEffect(() => {
    let tempTicketList = [];
    let counterVaidTickets = 0;

    for (let id = 1; id <= numberOfTickets; id++) {
      props.constructTicketObject(id).then((TempTicket_Object) => {
        tempTicketList.push(TempTicket_Object);
        if(TempTicket_Object.Ticket_status === "Valid"){
          counterVaidTickets++;
        }
        if (tempTicketList.length == numberOfTickets) {
          tempTicketList.sort(function(a, b){return a.Ticket_id - b.Ticket_id})
          let tempTicketList2 = tempTicketList.slice();
          let tempTicketList3 = tempTicketList.slice()
          setTicketList(tempTicketList2);
          setTicketListData(tempTicketList3);
          setNumValidTickets(counterVaidTickets);
        }
      });
    }
  
  }, []);


  function handleSortClick(event){
    let filterWorked = filterData(event.target.innerHTML);
    if (filterWorked){
      setActiveSort(event.target.innerHTML);
    }
  }

    
  if ((ticketList.length < numberOfTickets) && (activeSort == "All")){ //Still loading
    console.log(ticketList.length)
    console.log(numberOfTickets)
    return (
    <div>
      <br/>
      <br/>
      <br/>
      <Typography textAlign="Center" variant="h1"color={globalYellow}>Loading</Typography>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
        <LinearProgress color='specialTry' />
        <LinearProgress color='specialTry' />
        <LinearProgress color='specialTry' />
        <LinearProgress color='specialTry' />
        <LinearProgress color='specialTry' />
    </div>
    )
 
  } else {
 
 
    return (
    <div>
      <br/>
      <br/>
      <br/>
      <Grid container
        spacing={0}
        padding={0}
        direction="row"
        justifyContent="center"
        alignItems="center" 
        wrap ="wrap" >

        <TicketCheckSortButtonsTwo name="All" activeSort={activeSort} handleSortClick={handleSortClick}/>
        <TicketCheckSortButtonsTwo name="Valid" activeSort={activeSort} handleSortClick={handleSortClick}/>
        <TicketCheckSortButtonsTwo name="Eliminated" activeSort={activeSort} handleSortClick={handleSortClick}/>
        <TicketCheckSortButtonsTwo name="My Tickets" activeSort={activeSort} handleSortClick={handleSortClick}/>

      </Grid>
      <br/>
      <br/>
      <br/>
      <br/>
      <Grid container
        spacing={0}
        padding={0}
        direction="row"
        justifyContent="center"
        alignItems="center" 
        wrap ="wrap" > 

        <Grid item xs = {11} md={8} lg={8}> 
            <Box  bgcolor={globalBackBlack} sx={{ display:'flex', mb:2}} >
              <Box width={90}><Typography color={globalYellow}>#</Typography></Box>
              <Box width={'100%'} bgcolor={globalBackBlack} display="flex" justifyContent="space-between" >
                <Box width={160} ><Typography color={globalYellow}> </Typography></Box>
                <Typography textAlign="right" color={globalYellow}>Effective Value</Typography>
              </Box>
            </Box>
        </Grid>

          {ticketList.map((Ticket_Object) => (
            <TicketItemBox Ticket_Object={Ticket_Object} effectiveValue={(numValidTickets/numberOfTickets)*(props.mintPrice) } numValidTickets={numValidTickets} claimPrize={props.claimPrize}/>
          ))}
     
      </Grid>  




      <br/>
      <br/>


      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <WalletModal 
          connectToMetaMask={props.connectToMetaMask}
          connectToCoinBase={props.connectToCoinBase}
          connectToWalletConnector={props.connectToWalletConnector}
          handleClose={handleClose}
        />
      </Modal>

    </div>

);
}

  

  
}

export default TicketCheck;