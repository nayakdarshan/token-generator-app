import React from 'react';
import { Container, Grid,Typography } from '@mui/material';
import Token from './Token';

const TokenDisplay = ({ tokens, perRow, color }) => {
  return (
    <Container>
        <Grid container spacing={2} className='my-3'>
        {tokens.map((token, index) => (
            <Token key={index} value={token} perRow={perRow} color={color} />
        ))}
        </Grid>
    </Container>
  );
};

export default TokenDisplay;
