import React, {useState, useEffect} from 'react';
import TicketItemBox from './TicketCheckComponents/TicketItemBox';
import { Grid, LinearProgress, Typography, CircularProgress } from '@mui/material';
import {Box} from '@mui/material';
import {globalYellow, globalLightYellow, globalBackBlack, globalFont} from '../globalHelperScripts/ColorsAndFonts.js';
import TicketCheckSortButtonsTwo from './TicketCheckComponents/TicketCheckSortButtonsTwo';


function TicketCheck(props) {
  const [ticketList, setTicketList] = useState([]);
  const [ticketListData, setTicketListData] = useState([])
  const [activeSort, setActiveSort] = useState("All");

  function filterData(sortMethod){
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
      if(tempTicketList[t].Ticket_owner.toLowerCase() == ""){
        //set some state variable that causes a pop up to render a connection modal
        //probably use the connect wallet modal I've been using
      }

      for (let t = 0; t < tempTicketList.length; t++){
        if(tempTicketList[t].Ticket_owner.toLowerCase() != props.activeAccount){ 
          tempTicketList.splice(t,1);
          t = t-1;
        }
        setTicketList(tempTicketList);
      }
    }
  }
  

  let numberOfTickets = 7; //props.tokensMinted

  useEffect(() => {
    let tempTicketList = [];
    for (let id = 1; id <= numberOfTickets; id++) {
      props.constructTicketObject(id).then((TempTicket_Object) => {
        tempTicketList.push(TempTicket_Object);
        if (tempTicketList.length === numberOfTickets) {
          tempTicketList.sort(function(a, b){return a.Ticket_id - b.Ticket_id})
          let tempTicketList2 = tempTicketList.slice();
          let tempTicketList3 = tempTicketList.slice()
          setTicketList(tempTicketList2);
          setTicketListData(tempTicketList3);
        }
      });
    }
    filterData();
  }, []);


  

  
  function handleSortClick(event){
    filterData(event.target.innerHTML);
    setActiveSort(event.target.innerHTML);
    
  }

  


    
  if ((ticketList.length < numberOfTickets) && (activeSort == "All")){ //Still loading
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
            <TicketItemBox Ticket_Object={Ticket_Object} effectiveValue={props.effectiveValue}/>
          ))}
     
      </Grid>


      <br/>
      <br/>
    </div>

);
}

  

  
}

export default TicketCheck;