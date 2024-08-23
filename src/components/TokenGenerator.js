import React, { useState, useCallback } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import TokenForm from './TokenForm';
import TokenDisplay from './TokenDisplay';

const TokenGenerator = () => {
  const [blueTokens, setBlueTokens] = useState([]);
  const [redTokens, setRedTokens] = useState([]);
  const [blueSettings, setBlueSettings] = useState({ count: 0, prefix: '', perRow: 1 });
  const [redSettings, setRedSettings] = useState({ count: 0, prefix: '', perRow: 1 });

  const generateTokens = useCallback((count, prefix) =>
    Array.from({ length: count }, (_, i) => `${prefix}${i + 1}`), []);

  const handleGenerate = useCallback((blueSettings, redSettings) => {
    const newBlueTokens = generateTokens(blueSettings.count, blueSettings.prefix);
    const newRedTokens = generateTokens(redSettings.count, redSettings.prefix);

    setBlueTokens(newBlueTokens);
    setRedTokens(newRedTokens);
    
    setBlueSettings(blueSettings);
    setRedSettings(redSettings);
  }, [generateTokens]);

  const handleClear = useCallback(() => {
    setBlueTokens([]);
    setRedTokens([]);
    setBlueSettings({ count: 0, prefix: '', perRow: 1 });
    setRedSettings({ count: 0, prefix: '', perRow: 1 });
  }, []);

  return (
    <Container>
     <Typography variant="h4" className='text-center my-5'>
        Token Generator Application
      </Typography>
      <TokenForm onGenerate={handleGenerate} onClear={handleClear} />
      <Grid container spacing={2} className='mt-3'>
        {blueTokens.length > 0 && (
          <Grid item xs={12}>
            <Typography variant="h5" className='mb-3' style={{ color: '#2196f3' }}>
              Blue Tokens
            </Typography>
            <TokenDisplay tokens={blueTokens} perRow={blueSettings.perRow} color="#2196f3" />
          </Grid>
        )}
        {redTokens.length > 0 && (
          <Grid item xs={12}>
            <Typography variant="h5" className='mb-3' style={{ color: '#f44336' }}>
              Red Tokens
            </Typography>
            <TokenDisplay tokens={redTokens} perRow={redSettings.perRow} color="#f44336" />
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default TokenGenerator;
