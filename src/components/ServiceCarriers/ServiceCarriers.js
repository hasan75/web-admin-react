import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';

const serviceCarriers = () => {
  return (
    <Box
      sx={{
        p: 2,
        minWidth: 300,
      }}
    >
      <Button
        sx={{
          my: 'auto',
          border: '1px solid gray',
          variant: 'outlined',
          color: 'black',
        }}
      >
        Add A New Service Carrier
      </Button>
      <Box
        sx={{ border: '1px solid gray', margin: '4px', borderRadius: '2px' }}
      ></Box>
    </Box>
  );
};

export default serviceCarriers;
