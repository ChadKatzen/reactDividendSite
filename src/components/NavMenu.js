import React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import Cloud from '@mui/icons-material/Cloud';


function NavMenu(props) {

  function handleClick(event){
    props.changePage(event.target.innerHTML);
  }

  return (
    <Paper sx={{ width: 1}} square={true}>
      <MenuList>
        <MenuItem style ={{padding:0}}>
            <ListItemText style={{ textAlign: "center" }} onClick={handleClick}>Home</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem style ={{padding:0}}>
            <ListItemText style={{ textAlign: "center" }} onClick={handleClick}>Mint</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem style ={{padding:0}}>
            <ListItemText style={{ textAlign: "center" }} onClick={handleClick}>Check Ticket</ListItemText>
        </MenuItem>
    
      </MenuList>
    </Paper>
  );
}

export default NavMenu;