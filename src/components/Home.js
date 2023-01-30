import React from 'react';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Description from './HomeComponents/Description';
import Banner from './HomeComponents/Banner';
import Schedule from './HomeComponents/Schedule';
import FAQ from './HomeComponents/FAQ';


let yellow ="#FBD96D";
const backBlack = '#2a2a2a';

const useStyles = makeStyles((theme) => ({
  container: {
    border: '4px dashed #FBD96D',
   
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

 



function Home(props) {
  const classes = useStyles();
  return (
    <div>
      <Banner/>
      <Description/>
      <br/>
      <Schedule/>
      <br/>
      <FAQ/>
    </div>

  );
}

export default Home;