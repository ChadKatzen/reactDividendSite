import React from 'react';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';

function TicketCheck(props) {
  return (
    <Box textAlign = "center">
        <br/>
        <br/>
        <Button variant="contained" alignment = "center" onClick={props.handleClick}>Ticket Check</Button>
    </Box>
  );
}

export default TicketCheck;