import React from 'react';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';

function Mint(props) {
  return (
    <Box textAlign = "center">
      <br/>
      <br/>
      <Button variant="contained" alignment = "center" onClick={props.handleClick}>Mint</Button>
    </Box>
  );
}

export default Mint;