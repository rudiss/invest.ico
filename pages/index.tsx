import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import BuyTable from '../components/BuyTable';

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function AutoGrid() {
  return (
    <Box sx={{ flexGrow: 1, padding: '16px'}}>
      <Grid container spacing={3}>
        <Grid item xs>
          <BuyTable/>
          <BuyTable/>
        </Grid>
        <Grid item xs={6}>
          Trade Placeholder
        </Grid>
        <Grid item xs>
          Trade INPUT
        </Grid>
      </Grid>
    </Box>
  );
}