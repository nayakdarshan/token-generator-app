import React, { useState } from 'react';
import { Grid, TextField,Typography,Button } from '@mui/material';

const TokenForm = ({ onGenerate, onClear }) => {
  const [blueSettings, setBlueSettings] = useState({count: 0, prefix: '', perRow: 1 });
  const [redSettings, setRedSettings] = useState({count: 0, prefix: '', perRow: 1 });

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
  };

  const handleClear = () => {
    setBlueSettings({count: 0, prefix: '', perRow: 1 });
    setRedSettings({count: 0, prefix: '', perRow: 1 });
    onClear();
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <Typography variant="h5" className='text-center mb-3 fw-bold'><span style={{color: '#2196f3'}}>Blue</span> Tokens</Typography>
        <TextField
          label="Number of Blue Tokens"
          type="number"
          fullWidth
          name="count"
          className='mb-3'
          value={blueSettings.count}
          onChange={handleBlueChange}
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
        <Typography variant="h5" className='text-center mb-3 fw-bold'><span style={{color: '#f44336'}}>Red</span> Tokens</Typography>
        <TextField
          label="Number of Red Tokens"
          type="number"
          fullWidth
          name="count"
          className='mb-3'
          value={redSettings.count}
          onChange={handleRedChange}
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
            <Button variant="contained" color="primary" className='button w-100' onClick={handleSubmit}>
              Generate
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Button variant="contained" color="secondary" className='button w-100' onClick={handleClear}>
              Clear
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TokenForm;
