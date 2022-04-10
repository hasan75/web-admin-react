import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import companyImg from '../../assets/images/logo.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from 'react-router-dom';
import { Button, Menu, MenuItem } from '@mui/material';
import AllSimCard from '../../components/AllSimCard/AllSimCard';
import SimCards from '../../components/SimCards/SimCards';
import AddSimCard from '../../components/AddSimCard/AddSimCard';
import Customers from '../../components/Customers/Customers';
import SimCardOperations from '../../components/SimCardOperations/SimCardOperations';
import ServiceCarriers from '../../components/ServiceCarriers/ServiceCarriers';
import PhonePlans from '../../components/PhonePlans/PhonePlans';
import SimCardReturns from '../../components/SimCardReturns/SimCardReturns';
import Devices from '../../components/Devices/Devices';
import AllDevices from '../../components/AllDevices/AllDevices';
import DeviceReturns from '../../components/DeviceReturns/DeviceReturns';
import Vendors from '../../components/Vendors/Vendors';
import SimCardsOrders from '../../components/SimCardsOrders/SimCardsOrders';
import DeviceOrders from '../../components/DeviceOrders/DeviceOrders';
import Operations from '../../components/Operations/Operations';
import Applications from '../../components/Applications/Applications';
import DistributionsAgents from '../../components/DistributionsAgents/DistributionsAgents';
import Reports from '../../components/Reports/Reports';
import SimCardDetails from '../../components/SimCardDetails/SimCardDetails';
import { Image } from 'mui-image';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const drawerWidth = 220;

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
  backgroundColor: `${theme.palette.background.default}`,
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const DashBoard = (props) => {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  let { path, url } = useRouteMatch();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [open, setOpen] = React.useState(true);

  const handleSimClick = () => {
    setOpen(!open);
  };
  const handleVendorClick = () => {
    setOpen(!open);
  };
  const handleDeviceClick = () => {
    setOpen(!open);
  };

  const drawer = (
    <div>
      <Toolbar>
        <Image
          sx={{
            width: 180,
            fontSize: '0.875rem',
          }}
          component='img'
          alt='img for logo'
          src={companyImg}
        ></Image>
      </Toolbar>
      <Divider />
      <Accordion
        sx={{ backgroundColor: 'white' }}
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary
          sx={{ backgroundColor: 'white' }}
          aria-controls='panel1d-content'
          id='panel1d-header'
        >
          <Typography
            sx={{
              textDecoration: 'none',
              color: 'black',
            }}
            component={Link}
            to={`${url}/simCards`}
          >
            Sim Cards
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MenuItem component={Link} to={`${url}/allSimCard`}>
            All Sim Cards
          </MenuItem>
          <MenuItem component={Link} to={`${url}/addSimCards`}>
            Add Sim Cards
          </MenuItem>
          <MenuItem component={Link} to={`${url}/simCardOperations`}>
            Sim Card Operations
          </MenuItem>
          <MenuItem component={Link} to={`${url}/serviceCarriers`}>
            Service Carriers
          </MenuItem>
          <MenuItem component={Link} to={`${url}/phonePlans`}>
            Phone Plans
          </MenuItem>
          <MenuItem component={Link} to={`${url}/simCardReturns`}>
            Sim Card Returns
          </MenuItem>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <AccordionSummary
          sx={{
            backgroundColor: 'white',
          }}
          aria-controls='panel2d-content'
          id='panel2d-header'
        >
          <Typography
            sx={{
              textDecoration: 'none',
              color: 'black',
            }}
            component={Link}
            to={`${url}/devices`}
          >
            Devices
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MenuItem component={Link} to={`${url}/allDevices`}>
            All Devices
          </MenuItem>
          <MenuItem component={Link} to={`${url}/deviceReturns`}>
            Device Returns
          </MenuItem>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <AccordionSummary
          sx={{ backgroundColor: 'white' }}
          aria-controls='panel3d-content'
          id='panel3d-header'
        >
          <Typography
            sx={{
              textDecoration: 'none',
              color: 'black',
            }}
            component={Link}
            to={`${url}/vendors`}
          >
            Vendors
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MenuItem component={Link} to={`${url}/simCardsOrders`}>
            Sim Cards Orders
          </MenuItem>
          <MenuItem component={Link} to={`${url}/deviceOrders`}>
            Device Orders
          </MenuItem>
        </AccordionDetails>
      </Accordion>
      <Divider></Divider>
      <MenuItem sx={{ ml: '7px' }} component={Link} to={`${url}/operations`}>
        Operations
      </MenuItem>
      <Divider></Divider>
      <MenuItem sx={{ ml: '7px' }} component={Link} to={`${url}/customers`}>
        Customers
      </MenuItem>
      <Divider></Divider>
      <MenuItem sx={{ ml: '7px' }} component={Link} to={`${url}/applications`}>
        Applications
      </MenuItem>
      <Divider></Divider>
      <MenuItem
        sx={{ ml: '7px' }}
        component={Link}
        to={`${url}/distributorsagents`}
      >
        DIstributors & Agents
      </MenuItem>
      <Divider></Divider>
      <MenuItem sx={{ ml: '7px' }} component={Link} to={`${url}/reports`}>
        Reports
      </MenuItem>
      <Divider></Divider>
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component='nav'
      >
        <ListItemButton
          component={Link}
          to={`${url}/simCards`}
          onClick={handleSimClick}
        >
          <ListItemText primary='Sim Cards' />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            <ListItemButton
              sx={{ pl: 3 }}
              component={Link}
              to={`${url}/allSimCard`}
            >
              <ListItemText primary='All Sim Cards' />
            </ListItemButton>
            <ListItemButton
              component={Link}
              to={`${url}/addSimCards`}
              sx={{ pl: 3 }}
            >
              <ListItemText primary='Add Sim Cards' />
            </ListItemButton>
            <ListItemButton
              component={Link}
              to={`${url}/simCardOperations`}
              sx={{ pl: 3 }}
            >
              <ListItemText primary='Sim Card Operations' />
            </ListItemButton>
            <ListItemButton
              component={Link}
              to={`${url}/serviceCarriers`}
              sx={{ pl: 3 }}
            >
              <ListItemText primary='Service Carrier' />
            </ListItemButton>
            <ListItemButton
              component={Link}
              to={`${url}/phonePlans`}
              sx={{ pl: 3 }}
            >
              <ListItemText primary='Phone Plans' />
            </ListItemButton>
            <ListItemButton
              component={Link}
              to={`${url}/simCardReturns`}
              sx={{ pl: 3 }}
            >
              <ListItemText primary='Sim Card Returns' />
            </ListItemButton>
          </List>
        </Collapse>
        <Divider></Divider>
        <ListItemButton
          component={Link}
          to={`${url}/devices`}
          onClick={handleDeviceClick}
        >
          <ListItemText primary='Device' />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            <ListItemButton
              component={Link}
              to={`${url}/allDevices`}
              sx={{ pl: 3 }}
            >
              <ListItemText primary='All Devices' />
            </ListItemButton>
            <ListItemButton
              component={Link}
              to={`${url}/deviceReturns`}
              sx={{ pl: 3 }}
            >
              <ListItemText primary='Device Returns' />
            </ListItemButton>
          </List>
        </Collapse>
        <Divider></Divider>
        <ListItemButton
          component={Link}
          to={`${url}/vendors`}
          onClick={handleVendorClick}
        >
          <ListItemText primary='Vendors' />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            <ListItemButton
              component={Link}
              to={`${url}/simCardsOrders`}
              sx={{ pl: 3 }}
            >
              <ListItemText primary='Sim Cards Orders' />
            </ListItemButton>
            <ListItemButton
              component={Link}
              to={`${url}/deviceOrders`}
              sx={{ pl: 3 }}
            >
              <ListItemText primary='Device Orders' />
            </ListItemButton>
            <ListItemButton
              component={Link}
              to={`${url}/simCardOperations`}
              sx={{ pl: 3 }}
            >
              <ListItemText primary='Sim Card Operations' />
            </ListItemButton>
          </List>
        </Collapse>
        <Divider></Divider>
        <ListItemButton component={Link} to={`${url}/operations`}>
          <ListItemText primary='Operations' />
        </ListItemButton>
        <Divider></Divider>
        <ListItemButton component={Link} to={`${url}/customers`}>
          <ListItemText primary='Customers' />
        </ListItemButton>
        <Divider></Divider>
        <ListItemButton>
          <ListItemText
            component={Link}
            to={`${url}/applications`}
            primary='Applications'
          />
        </ListItemButton>
        <Divider></Divider>
        <ListItemButton component={Link} to={`${url}/distributorsagents`}>
          <ListItemText primary='Distributors & Agents' />
        </ListItemButton>
        <Divider></Divider>
        <ListItemButton component={Link} to={`${url}/reports`}>
          <ListItemText primary='Reports' />
        </ListItemButton>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      {/* <CssBaseline /> */}
      <AppBar
        position='fixed'
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{ bgcolor: 'gray' }}>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap component='div'>
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component='nav'
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label='mailbox folders'
      >
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant='permanent'
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Switch>
          <Route exact path={path}>
            <SimCards></SimCards>
          </Route>
          <Route exact path={`${path}/simCards`}>
            <SimCards></SimCards>
          </Route>
          <Route exact path={`${path}/allSimCard`}>
            <AllSimCard></AllSimCard>
          </Route>
          <Route path={`${path}/simCardDetails/:ssId`}>
            <SimCardDetails></SimCardDetails>
          </Route>
          <Route path={`${path}/addSimCards`}>
            <AddSimCard></AddSimCard>
          </Route>
          <Route path={`${path}/simCardOperations`}>
            <SimCardOperations></SimCardOperations>
          </Route>
          <Route path={`${path}/serviceCarriers`}>
            <ServiceCarriers></ServiceCarriers>
          </Route>
          <Route path={`${path}/phonePlans`}>
            <PhonePlans></PhonePlans>
          </Route>
          <Route path={`${path}/simCardReturns`}>
            <SimCardReturns></SimCardReturns>
          </Route>
          <Route path={`${path}/devices`}>
            <Devices></Devices>
          </Route>
          <Route path={`${path}/allDevices`}>
            <AllDevices></AllDevices>
          </Route>
          <Route path={`${path}/deviceReturns`}>
            <DeviceReturns></DeviceReturns>
          </Route>
          <Route path={`${path}/vendors`}>
            <Vendors></Vendors>
          </Route>
          <Route path={`${path}/simCardsOrders`}>
            <SimCardsOrders></SimCardsOrders>
          </Route>
          <Route path={`${path}/deviceOrders`}>
            <DeviceOrders></DeviceOrders>
          </Route>
          <Route path={`${path}/operations`}>
            <Operations></Operations>
          </Route>
          <Route path={`${path}/customers`}>
            <Customers></Customers>
          </Route>
          <Route path={`${path}/applications`}>
            <Applications></Applications>
          </Route>
          <Route path={`${path}/distributorsagents`}>
            <DistributionsAgents></DistributionsAgents>
          </Route>
          <Route path={`${path}/reports`}>
            <Reports></Reports>
          </Route>
        </Switch>
      </Box>
    </Box>
  );
};

DashBoard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DashBoard;
