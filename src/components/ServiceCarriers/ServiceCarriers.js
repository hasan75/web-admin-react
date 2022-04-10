import { Button } from '@mui/material';
import React from 'react';

const serviceCarriers = () => {
  return (
    <section className='serviceCarriers'>
      <Button
        variant='outlined'
        sx={{ float: 'right', color: 'gray', border: '1px solid gray' }}
      >
        Add A New Service Carrier
      </Button>
      <div
        sx={{
          margin: '5px 10px',
          border: '1px solid gray',
          borderRadius: '2px',
        }}
      ></div>
    </section>
  );
};

export default serviceCarriers;
