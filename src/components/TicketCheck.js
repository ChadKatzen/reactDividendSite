import React, {useState, useEffect} from 'react';
import TicketItemBox from './ReusedComponents/TicketItemBox';
import { Grid, Typography } from '@mui/material';
import {Box} from '@mui/material';
import {globalYellow, globalLightYellow, globalBackBlack, globalFont} from '../globalHelperScripts/ColorsAndFonts.js';
import {CircularProgress} from '@mui/material';
import { makeStyles } from '@mui/styles';
import TicketCheckSortButtons from './ReusedComponents/TicketCheckSortButtons';







function TicketCheck(props) {
  const [ticketList, setTicketList] = useState([]);

  let numberOfTickets = 7;

  useEffect(() => {
    let tempTicketList = [];
    for (let id = 1; id <= numberOfTickets; id++) {
      props.constructTicketObject(id).then((TempTicket_Object) => {
        tempTicketList.push(TempTicket_Object);
        if (tempTicketList.length === numberOfTickets) {
          setTicketList(tempTicketList);
        }
      });
    }
  }, []);

  const [activeSort, setActiveSort] = useState("All");

  function handleSortClick(event){
    setActiveSort(event.target.innerHTML);
    console.log(activeSort);
  }



    
  if (ticketList.length < numberOfTickets){ 
    return (<CircularProgress />)
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

        <TicketCheckSortButtons name="All" id="All_ID" handleSortClick={handleSortClick}/>
        <TicketCheckSortButtons name="Valid" id="Valid_ID" handleSortClick={handleSortClick}/>
        <TicketCheckSortButtons name="Eliminated" id="Eliminated_ID" handleSortClick={handleSortClick}/>
        <TicketCheckSortButtons name="My Tickets" id="MyTickets_ID" handleSortClick={handleSortClick}/>


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
    </div>

);
  }

  

  
}

export default TicketCheck;