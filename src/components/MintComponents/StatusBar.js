import React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { Typography } from '@mui/material';
import {globalYellow, globalLightYellow, globalBackBlack, globalFont} from '../../globalHelperScripts/ColorsAndFonts.js';

export default function StatusBar() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress variant="determinate" 
      thickness={1}
      value={progress} 
      color='specialTry'
      size="lg"
      />  
      <br/>
      <LinearProgress color="success"   style={{
            "--LinearProgress-radius": "13px",
            "--LinearProgress-progressThickness": "30px" }} />  
  
    </Box>
  );
}