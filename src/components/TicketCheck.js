import React from 'react';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import TicketItemBox from './ReusedComponents/TicketItemBox';
import { Grid } from '@mui/material';
import DropDownBox from './ReusedComponents/DropDownBox';

function TicketCheck(props) {
  return (
    <Box textAlign = "center">
        <br/>
        <br/>
        <Button variant="contained" alignment = "center" color="yellow" onClick={props.handleClick}>Ticket Check</Button>
        <br/>
        <br/>
        <Grid container
          spacing={1}
          direction="row"
          justifyContent="center"
          alignItems="center" 
          wrap ="wrap" >

            <TicketItemBox/>
            
        </Grid>
     

    </Box>
  );
}

export default TicketCheck;