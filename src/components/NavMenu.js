import React from 'react';
import Divider from '@mui/material/Divider';
import { Box } from '@mui/system';
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
import { yellow } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';


function NavMenu(props) {

  function handleClick(event){
    props.changePage(event.target.innerHTML);
  }
  let textColor = "#FBD96D";
  let backgroundColor = '#2a2a2a';
  const MyTheme = createTheme({
    palette: {
      primary:{
        main:backgroundColor,
        contrastText:textColor,
      },
        action: {
            hover: textColor,
            //disabled: '#9B9B9B'selected: '#E7A615',
        }
    }
    });

  const [hoverButton, setHoverButton] = React.useState("");

  function handleHoverHome(){
    setHoverButton("Home");
  }
  function handleHoverMint(){
    setHoverButton("Mint");
  }
  function handleHoverTicketCheck(){
    setHoverButton("Check Ticket");
  }
  function handleMouseOut(){
    setHoverButton("");
  }


  return (
    <Box 
      sx={{ width: 1, backgroundColor:'backBlack'}} square={true} >
      <ThemeProvider theme={MyTheme}>
      <MenuList  >
        <MenuItem style ={{padding:0 }} >
            <ListItemText  style={{ textAlign: "center", color:((hoverButton==="Home")? backgroundColor :textColor) }} onMouseOver={handleHoverHome} onMouseLeave={handleMouseOut} onClick={handleClick}>Home</ListItemText>
        
        </MenuItem>

        <Divider />
        <MenuItem style ={{padding:0}}>
            <ListItemText style={{ textAlign: "center", color:((hoverButton==="Mint")? backgroundColor :textColor) }} onMouseOver={handleHoverMint} onMouseLeave={handleMouseOut} onClick={handleClick}>Mint</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem style ={{padding:0}}>
            <ListItemText style={{ textAlign: "center" ,color:((hoverButton==="Check Ticket")? backgroundColor :textColor) }} onMouseOver={handleHoverTicketCheck} onMouseLeave={handleMouseOut} onClick={handleClick}>Check Ticket</ListItemText>
        </MenuItem>
        <Divider/>
      </MenuList>
      </ThemeProvider>
    </Box>
  );
}

export default NavMenu;