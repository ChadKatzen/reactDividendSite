import React from 'react';
import { makeStyles } from '@mui/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid } from '@mui/material';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

//COLORS
let yellow ="#FBD96D";
let lightYellow="#fcf2d2";
const backBlack = '#000000';//#2a2a2a';

export default function SimpleTable() {
  const classes = useStyles();

  const data = [
    { week: 0, amountLeft: 10000, expectedValue: 0.1 },
    { week: 1, amountLeft: 7500, expectedValue: 0.13 },
    { week: 2, amountLeft: 5000, expectedValue: 0.20 },
    { week: 3, amountLeft: 2500, expectedValue: 0.4 },
    { week: 4, amountLeft: 1000, expectedValue: 1 },
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
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow style={{backgroundColor: yellow}}>
                <TableCell>Week</TableCell>
                <TableCell align="right">Amount Left</TableCell>
                <TableCell align="right">Expected Value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.week} style={{backgroundColor: lightYellow}}>
                  <TableCell component="th" scope="row">
                    {row.week}
                  </TableCell>
                  <TableCell align="right">{row.amountLeft}</TableCell>
                  <TableCell align="right">{row.expectedValue}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}