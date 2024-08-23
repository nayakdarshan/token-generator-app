import React from 'react';
import { Grid, Paper } from '@mui/material';
import '../App.css';
const Token = ({ value, perRow, color }) => {
  return (
    <Grid item xs={12 / perRow}>
      <Paper
        elevation={3}
        style={{backgroundColor: color}}
        className='token'
      >
        {value}
      </Paper>
    </Grid>
  );
};

export default React.memo(Token);
