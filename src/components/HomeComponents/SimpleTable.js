import React from 'react';
import { makeStyles } from '@mui/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid, Typography } from '@mui/material';
import { tableCellClasses } from "@mui/material/TableCell";
import {globalYellow, globalLightYellow, globalBackBlack, globalTableHighlightYellow, globalFont} from '../../globalHelperScripts/ColorsAndFonts.js';

import { createTheme, ThemeProvider } from '@mui/material/styles';

//COLORS
let yellow =globalYellow;//"#FBD96D";
let lightYellow=globalLightYellow;//"#fcf2d2";
const backBlack =globalBackBlack;// '#000000';//#2a2a2a';

const theme = createTheme({
  overrides: {
    TableCell: {
      root: {
        border: "1px solid black",
        borderBottom: "1px solid black",
      },
    },
  },
});


const useStyles = makeStyles({
  table: {
    minWidth: 650,
    tableLayout: 'fixed',
  },
  cell: {
    border: '2px solid black',
    
  },
  headerCell: {
    border: '2px solid black',
  },
  tableRow: {
    backgroundColor: lightYellow,
    '&:hover': {
      backgroundColor: globalTableHighlightYellow,
    }
  },

});



export default function SimpleTable() {
  const classes = useStyles();

  const data = [
    { week: 0, amountLeft: '10,000', expectedValue: 0.1 },
    { week: 1, amountLeft: '7,500', expectedValue: 0.13 },
    { week: 2, amountLeft: '5,000', expectedValue: 0.20 },
    { week: 3, amountLeft: '2,500', expectedValue: 0.4 },
    { week: 4, amountLeft: '1,000', expectedValue: 1 },
    { week: 5, amountLeft: 500, expectedValue: 2 },
    { week: 6, amountLeft: 250, expectedValue: 4 },
    { week: 7, amountLeft: 100, expectedValue: 10 },
    { week: 8, amountLeft: 50, expectedValue: 20 },
    { week: 9, amountLeft: 25, expectedValue: 40 },
    { week: 10, amountLeft: 10, expectedValue: 100 },
    { week: 11, amountLeft: 5, expectedValue: 200 },
    { week: 12, amountLeft: 2, expectedValue: 500 },
  ];

  return (
    <Grid container justifyContent="center" alignItems="center" >
      <Grid item xs={12} sm ={11} md = {11} lg={11} xl={8}>
        <TableContainer component={Paper}>
          <ThemeProvider theme={theme}>

          
            <Table  sx={{ borderRadius: 200 }} className={classes.table} aria-label="simple table" >
              <TableHead>
                <TableRow style={{backgroundColor: yellow}}>
                  <TableCell sx={{p:0}} className={classes.headerCell} align="center" style={{ width: '33%', height:'50px',borderBottom: '2px solid black' }}>
                    <Typography variant="h5" sx={{fontWeight:'bold'}}>Week</Typography>
                  </TableCell>
                  <TableCell sx={{p:0}} className={classes.headerCell} align="center" style={{ width: '33%',height:'50px',borderBottom: '2px solid black' }}>
                    <Typography variant="h5" sx={{fontWeight:'bold'}}>Tickets Left</Typography>
                  </TableCell>
                  <TableCell sx={{p:0}} className={classes.headerCell} align="center" style={{ width: '33%',height:'50px',borderBottom: '2px solid black' }}>
                    <Typography variant="h5" sx={{fontWeight:'bold'}}>Ticket Value</Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
                  <TableRow key={row.week} className={classes.tableRow} >
                    <TableCell sx={{p:0}} className={classes.cell} align="center" component="th" scope="row" style={{borderBottom: '1px solid black', height:'40px'}}>
                      <Typography variant="h6">{row.week}</Typography> 
                    </TableCell>
                    <TableCell sx={{p:0}} className={classes.cell} align="center" style={{borderBottom: '1px solid black'}}>
                      <Typography variant="h6">{row.amountLeft}</Typography>
                    </TableCell>
                    <TableCell  sx={{p:0}} className={classes.cell} align="center" style={{borderBottom: '1px solid black'}}>
                      <Typography variant="h6">{row.expectedValue} Eth</Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

          </ThemeProvider>
        </TableContainer>
      </Grid>
    </Grid>
  );
}