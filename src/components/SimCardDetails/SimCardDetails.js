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

// tab functions for sim card and carriers
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

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
