import React from 'react';
import { useParams } from 'react-router-dom';
import Simcard from './Simcard/Simcard';
// import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Phonecarrier from './Phonecarrier/Phonecarrier';
import ACP from './ACP Operations/ACP Operations';
import Note from './Note/Note';
import ServiceCarrier from './SerivceCarrier/ServiceCarrier';
import Simop from './Simop/Simop';
// TAB
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// END

const SimCardDetails = () => {
  const id = useParams();
  console.log(id);
  return (
    <div>
      <h1 align='center'>Details of {id.ssId}</h1>
    </div>
  );
};

export default SimCardDetails;
