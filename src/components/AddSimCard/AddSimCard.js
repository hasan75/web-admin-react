import React from 'react';
// import MaterialTable from 'material-table';
// import addSimStyles from './AddSimCard.module.css';
// import { Link } from 'react-router-dom';
// import { Button } from '@material-ui/core';
import { Typography } from '@mui/material';
import Container from '@material-ui/core/Container';
import AddSimManually from './AddSimManually/AddSimManually';
// TAB
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
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

const AddSimCard = () => {
  // for tab change
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // const handleOnclick = e => console.log(e.target.value);
  return (
    <Container style={{ marginTop: '5px' }} fixed>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label='basic tabs example'
          >
            <Tab label='Add A New Sim Card' {...a11yProps(0)} />
            <Tab label='Import SIm Cards' {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <AddSimManually></AddSimManually>
        </TabPanel>
        <TabPanel value={value} index={1}>
          {/* have to add code for import from csv  */}
        </TabPanel>
      </Box>
    </Container>
  );
};

export default AddSimCard;
