import React, { useState } from 'react';
import { Grid, TextField, Typography, Button } from '@mui/material';

const TokenForm = ({ onGenerate, onClear }) => {
  const [blueSettings, setBlueSettings] = useState({ count: '', prefix: '', perRow: '' });
  const [redSettings, setRedSettings] = useState({ count: '', prefix: '', perRow: '' });
  const [isGenerated, setIsGenerated] = useState(false);

  const handleBlueChange = (e) => {
    const { name, value } = e.target;
    setBlueSettings({ ...blueSettings, [name]: value });
  };

  const handleRedChange = (e) => {
    const { name, value } = e.target;
    setRedSettings({ ...redSettings, [name]: value });
  };

  const handleSubmit = () => {
    onGenerate(blueSettings, redSettings);
    setIsGenerated(true);
  };

  const handleClear = () => {
    setBlueSettings({ count: '', prefix: '', perRow: '' });
    setRedSettings({ count: '', prefix: '', perRow: '' });
    onClear();
    setIsGenerated(false);
  };

  const isValidCount = (count) => count !== '' && count > 0;

  const canGenerate = isValidCount(blueSettings.count) || isValidCount(redSettings.count);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <Typography variant="h5" className='text-center mb-3 fw-bold'>
          <span style={{ color: '#2196f3' }}>Blue</span> Tokens
        </Typography>
        <TextField
          label="Number of Blue Tokens"
          type="number"
          fullWidth
          name="count"
          className='mb-3'
          value={blueSettings.count}
          onChange={handleBlueChange}
          required
          error={blueSettings.count !== '' && !isValidCount(blueSettings.count)}
          helperText={blueSettings.count !== '' && !isValidCount(blueSettings.count) ? "Number of tokens must be greater than 0" : ""}
        />
        <TextField
          label="Prefix for Blue Tokens"
          fullWidth
          name="prefix"
          className='mb-3'
          value={blueSettings.prefix}
          onChange={handleBlueChange}
        />
        <TextField
          label="Blue Tokens per Row"
          type="number"
          fullWidth
          name="perRow"
          className='mb-3'
          value={blueSettings.perRow}
          onChange={handleBlueChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="h5" className='text-center mb-3 fw-bold'>
          <span style={{ color: '#f44336' }}>Red</span> Tokens
        </Typography>
        <TextField
          label="Number of Red Tokens"
          type="number"
          fullWidth
          name="count"
          className='mb-3'
          value={redSettings.count}
          onChange={handleRedChange}
          required
          error={redSettings.count !== '' && !isValidCount(redSettings.count)}
          helperText={redSettings.count !== '' && !isValidCount(redSettings.count) ? "Number of tokens must be greater than 0" : ""}
        />
        <TextField
          label="Prefix for Red Tokens"
          fullWidth
          name="prefix"
          className='mb-3'
          value={redSettings.prefix}
          onChange={handleRedChange}
        />
        <TextField
          label="Red Tokens per Row"
          type="number"
          fullWidth
          name="perRow"
          className='mb-3'
          value={redSettings.perRow}
          onChange={handleRedChange}
        />
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item xs={12} sm={6} md={4}>
            <Button
              variant="contained"
              color="primary"
              className='button w-100'
              onClick={handleSubmit}
              disabled={!canGenerate}
            >
              Generate
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Button
              variant="contained"
              color="secondary"
              className='button w-100'
              onClick={handleClear}
              disabled={!isGenerated}
            >
              Clear
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TokenForm;
