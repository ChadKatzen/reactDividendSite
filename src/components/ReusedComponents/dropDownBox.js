import React, {useState} from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import {Grid} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import jQuery from "jquery";

//SETUP JQUERRY
let $ = window.$ = window.jQuery = jQuery;

let yellow ="#FBD96D";
let lightYellow="#fcf2d2";
const backBlack = '#000000';//#2a2a2a';


function DropDownBox(props){
    const [ButtonColor, setButtonColor] = useState(yellow);

    function handleToggle(){
        $(`#${props.id}DescriptionBox`).slideToggle();

        if($(`#${props.id}QuestionBox`).css('background-color')=="rgb(251, 217, 109)")
        {
            $(`#${props.id}QuestionBox`).css("background-color", backBlack);
            $(`#${props.id}QuestionText`).css("color", yellow)
            setButtonColor(yellow);
        }
        else {
            $(`#${props.id}QuestionBox`).css("background-color", yellow);
            $(`#${props.id}QuestionText`).css("color", backBlack)
            setButtonColor(backBlack);
        }
    }

   return(
   <Grid item xs = {12} sm={11} lg={11} xl={8}>
                <Box id={`${props.id}QuestionBox`} bgcolor={backBlack} sx={{ ml:1.5, mr:1.5 , display:'flex', justifyContent: "space-between"}} onClick = {handleToggle} >
                        <Typography id = {`${props.id}QuestionText`} variant="h5" sx={{ ml:3, pt:1, pb: 1}} style={{color:yellow}} >{props.question}</Typography>
                        <IconButton
                        size="large"
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 0.5 }}
                        >
                           <MenuIcon sx ={{'color':ButtonColor}} />
                        </IconButton>
                </Box>

                <Box bgcolor={lightYellow} sx={{ ml:1.5, mr:1.5}} style={{display:"none"}} id={`${props.id}DescriptionBox`}>
                    <Typography variant="h6" sx={{ ml:3, pt:1, pb: 1}} style={{color:backBlack}} >{props.answer}</Typography>
                </Box>
    </Grid>
   );

};

export default DropDownBox;
