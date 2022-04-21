import React from 'react';
import { useParams } from 'react-router-dom';
import Simcard from './Simcard/Simcard';
// import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Phonecarrier from './Phonecarrier/Phonecarrier';
import Returns from './Returns/Returns';
import ACPOperations from './ACPOpetaions/ACPOperations';
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
// tab ends

const SimCardDetails = () => {
  const id = useParams();

  // for tab change
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <h1 align='center'>Details of {id.ssId}</h1>
      <Container style={{ marginTop: '30px' }} fixed>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label='basic tabs example'
            >
              <Tab label='SIM Card Details' {...a11yProps(0)} />
              <Tab label='Service carrier operations' {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Simcard />
            <Phonecarrier />
            <ACPOperations></ACPOperations>
            <Returns />
            <Note />
            <Simop />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <ServiceCarrier />
          </TabPanel>
        </Box>
      </Container>
    </div>
  );
};

export default SimCardDetails;
