import React from 'react';
import MaterialTable from 'material-table';
import addSimStyles from './AddSimCard.module.css';
import { Link } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';
import { Button } from '@material-ui/core';

const AddSimCard = () => {
  // const handleOnclick = e => console.log(e.target.value);
  return (
    <Stack
      direction='row'
      spacing={3}
      alignItems='center'
      justifyContent='center'
    >
      <Button variant='outlined'>Add A New Sim Card Manually</Button>
      <Button variant='outlined'>Import Sim Cards</Button>
    </Stack>
  );
};

export default AddSimCard;
