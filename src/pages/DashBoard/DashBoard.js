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
import { Image } from 'mui-image';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from 'react-router-dom';
import companyImg from '../../assets/images/logo.png';
// component import
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
import SimCardReturn from '../../components/SimCardReturn/SimCardReturn';

const drawerWidth = 220;

const DashBoard = (props) => {
  let { path, url } = useRouteMatch();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [open, setOpen] = React.useState(true);
  const [deviceOpen, setDeviceOpen] = React.useState(true);
  const [vendorOpen, setVendorOpen] = React.useState(true);

  const handleSimClick = () => {
    setOpen(!open);
  };
  const handleVendorClick = () => {
    setVendorOpen(!vendorOpen);
  };
  const handleDeviceClick = () => {
    setDeviceOpen(!deviceOpen);
  };

  const drawer = (
    <div>
      <Toolbar>
        <Box component={Link} to={`${url}/simCards`}>
          <Image
            sx={{
              width: 180,
              fontSize: '0.875rem',
            }}
            component='img'
            alt='img for logo'
            src={companyImg}
          ></Image>
        </Box>
      </Toolbar>
      <Divider />
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component='nav'
      >
        <ListItemButton onClick={handleSimClick}>
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
        <ListItemButton onClick={handleDeviceClick}>
          <ListItemText primary='Device' />
          {deviceOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={deviceOpen} timeout='auto' unmountOnExit>
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
          {vendorOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={vendorOpen} timeout='auto' unmountOnExit>
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
        {/* the navigation drawer begins  */}
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
        {/* routes to the components begins with path */}
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
          <Route exact path={`${path}/simCardReturns`}>
            <SimCardReturns></SimCardReturns>
          </Route>
          <Route path={`${path}/simCardReturns/:id`}>
            <SimCardReturn></SimCardReturn>
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
