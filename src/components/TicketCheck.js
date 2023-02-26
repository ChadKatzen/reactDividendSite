import React, {useState, useEffect} from 'react';
import TicketItemBox from './ReusedComponents/TicketItemBox';
import { Grid, Typography } from '@mui/material';
import {Box} from '@mui/material';
import {globalYellow, globalLightYellow, globalBackBlack, globalFont} from '../globalHelperScripts/ColorsAndFonts.js';




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


    
  if (ticketList.length < numberOfTickets){ 
    return (<Typography color="#FFFFFF">Loading</Typography>)
  } else {
 
    console.log(ticketList)
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
 
 
        <Grid item xs = {11} md={8} lg={8}> 
            <Box  bgcolor={globalBackBlack} sx={{ display:'flex', mb:2}} >
              <Box width={220}><Typography color={globalYellow}>#</Typography></Box>
              <Box width={'100%'} bgcolor={globalBackBlack} display="flex" justifyContent="space-between" >
                <Box width={160} sx={{ml:2}}><Typography color={globalYellow}>Elimination Status</Typography></Box>
                <Typography textAlign="right" color={globalYellow}>Effective Value</Typography>
              </Box>
            </Box>
        </Grid>

          {ticketList.map((Ticket_Object) => (
            <TicketItemBox Ticket_Object={Ticket_Object}/>
          ))}
     

      </Grid>
    </div>

);
  }

  

  
}

export default TicketCheck;