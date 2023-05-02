import React, {useState} from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import {Grid} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import jQuery from "jquery";
import {globalYellow, globalLightYellow, globalBackBlack, globalFont} from '../../globalHelperScripts/ColorsAndFonts.js';

//SETUP JQUERRY
let $ = window.$ = window.jQuery = jQuery;

let yellow =globalYellow;//"#FBD96D";
let lightYellow=globalLightYellow;//"#fcf2d2";
const backBlack =globalBackBlack;// '#000000';//#2a2a2a';
let myFont =globalFont;// 'Poppins';

function DropDownBox(props){
    const [ButtonColor, setButtonColor] = useState(yellow);
    const [Open, setOpen]= useState(false);

    function handleToggle(){
        $(`#${props.id}DescriptionBox`).slideToggle();
        setOpen(~Open)
       if(Open)
        {

        }
        else {
            $(`#${props.id}QuestionBox`).css("background-color", yellow);
            $(`#${props.id}QuestionText`).css("color", backBlack)
            setButtonColor(backBlack);
        }
    }

    function handleMouseIn(){
        $(`#${props.id}QuestionBox`).css("background-color", yellow);
        $(`#${props.id}QuestionText`).css("color", backBlack)
        setButtonColor(backBlack);
    }

    function handleMouseOut(){
        if(~Open){
            $(`#${props.id}QuestionBox`).css("background-color", backBlack);
            $(`#${props.id}QuestionText`).css("color", yellow)
            setButtonColor(yellow);
        }

    }

   return(
   <Grid item xs = {12} sm={11} lg={11} xl={8}>
                <Box id={`${props.id}QuestionBox`} bgcolor={backBlack} sx={{ ml:1.5, mr:1.5 , display:'flex', justifyContent: "space-between"}} onClick = {handleToggle} onMouseOver ={handleMouseIn} onMouseLeave={handleMouseOut} >
                        <Typography id = {`${props.id}QuestionText`} variant="h5" sx={{ ml:3, pt:1, pb: 1, fontFamily:myFont}} style={{color:yellow}} >{props.question}</Typography>
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

                <Box bgcolor={lightYellow} sx={{ ml:1.5, mr:1.5, fontFamily:myFont}} style={{display:"none"}} id={`${props.id}DescriptionBox`}>
                    <Typography variant="h6" sx={{ ml:3, pt:1, pb: 1}} style={{color:backBlack}} dangerouslySetInnerHTML={{ __html: props.answer }}/>
                </Box>
    </Grid>
   );

};

export default DropDownBox;
