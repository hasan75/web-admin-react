import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import companyImg from '../../assets/images/logo.png';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from 'react-router-dom';
import { Button, Menu, MenuItem } from '@mui/material';
import DashBoardHome from '../../components/DashBoardHome/DashBoardHome';
import AllSimCard from '../../components/AllSimCard/AllSimCard';
import SimCards from '../../components/SimCards/SimCards';

const drawerWidth = 250;

const DashBoard = (props) => {
  let { path, url } = useRouteMatch();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar>
        <Box
          sx={{
            width: 200,
            p: 1,
            ms: 1,
            textAlign: 'center',
            fontSize: '0.875rem',
          }}
          component='img'
          alt='img for logo'
          src={companyImg}
        ></Box>
      </Toolbar>
      <Divider />
      {/* <Link to={`${url}`}>
        {' '}
        <Button variant='text' color='inherit'>
          All Sim Card
        </Button>
      </Link>
      <Link to={`${url}`}>
        {' '}
        <Button variant='text' color='inherit'>
          All Sim Card
        </Button>
      </Link>
      <Link to={`${url}/allSimCard`}>
        {' '}
        <Button variant='text' color='inherit'>
          All Sim Card
        </Button>
      </Link> */}
      <List>
        <ListItem
          button
          color='success'
          component={Link}
          to={`${url}/simCards`}
        >
          <ListItemText>Sim Cards</ListItemText>
        </ListItem>
        <ListItem
          button
          sx={{ ml: 2, py: 0 }}
          component={Link}
          to={`${url}/allSimCard`}
        >
          <ListItemText>All Sim Card</ListItemText>
        </ListItem>
        <ListItem
          button
          sx={{ ml: 2, py: 0 }}
          component={Link}
          to={`${url}/addSimCards`}
        >
          <ListItemText>Add Sim Cards</ListItemText>
        </ListItem>
        <ListItem
          button
          sx={{ ml: 2, py: 0 }}
          component={Link}
          to={`${url}/simCardOperations`}
        >
          <ListItemText>Sim Card Operations</ListItemText>
        </ListItem>
        <ListItem
          button
          sx={{ ml: 2, py: 0 }}
          component={Link}
          to={`${url}/serviceCarriers`}
        >
          <ListItemText>Service Carriers</ListItemText>
        </ListItem>
        <ListItem
          button
          sx={{ ml: 2, py: 0 }}
          component={Link}
          to={`${url}/phonePlans`}
        >
          <ListItemText>Phone Plans</ListItemText>
        </ListItem>
        <ListItem
          button
          sx={{ ml: 2, py: 0 }}
          component={Link}
          to={`${url}/simCardReturns`}
        >
          <ListItemText>Sim Card Returns</ListItemText>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button color='success' component={Link} to={`${url}/devices`}>
          <ListItemText>Devices</ListItemText>
        </ListItem>
        <ListItem
          button
          sx={{ ml: 2, py: 0 }}
          component={Link}
          to={`${url}/allDevices`}
        >
          <ListItemText>All Devices</ListItemText>
        </ListItem>
        <ListItem
          button
          sx={{ ml: 2, py: 0 }}
          component={Link}
          to={`${url}/deviceReturns`}
        >
          <ListItemText>Device Returns</ListItemText>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button color='success' component={Link} to={`${url}/vendors`}>
          <ListItemText>Vendors</ListItemText>
        </ListItem>
        <ListItem
          button
          sx={{ ml: 2, py: 0 }}
          component={Link}
          to={`${url}/simCardsOrders`}
        >
          <ListItemText>Sim Cards Orders</ListItemText>
        </ListItem>
        <ListItem
          button
          sx={{ ml: 2, py: 0 }}
          component={Link}
          to={`${url}/deviceOrders`}
        >
          <ListItemText>Device Orders</ListItemText>
        </ListItem>
      </List>
      <Divider></Divider>
      <List>
        <ListItem
          button
          color='success'
          component={Link}
          to={`${url}/Operations`}
        >
          <ListItemText>Operations</ListItemText>
        </ListItem>
      </List>
      <List>
        <ListItem
          button
          color='success'
          component={Link}
          to={`${url}/customers`}
        >
          <ListItemText>Customers</ListItemText>
        </ListItem>
      </List>
      <List>
        <ListItem
          button
          color='success'
          component={Link}
          to={`${url}/applications`}
        >
          <ListItemText>Applications</ListItemText>
        </ListItem>
      </List>
      <List>
        <ListItem
          button
          color='success'
          component={Link}
          to={`${url}/distributors&agents`}
        >
          <ListItemText>Distributors & Agents</ListItemText>
        </ListItem>
      </List>
      <List>
        <ListItem button color='success' component={Link} to={`${url}/reports`}>
          <ListItemText>Reports</ListItemText>
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position='fixed'
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
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
          <Route path={`${path}/allSimCard`}>
            <AllSimCard></AllSimCard>
          </Route>
          <Route path={`${path}/allSimCard`}>
            <AllSimCard></AllSimCard>
          </Route>
          <Route path={`${path}/allSimCard`}>
            <AllSimCard></AllSimCard>
          </Route>
          <Route path={`${path}/allSimCard`}>
            <AllSimCard></AllSimCard>
          </Route>
          <Route path={`${path}/allSimCard`}>
            <AllSimCard></AllSimCard>
          </Route>
          <Route path={`${path}/allSimCard`}>
            <AllSimCard></AllSimCard>
          </Route>
          <Route path={`${path}/allSimCard`}>
            <AllSimCard></AllSimCard>
          </Route>
          <Route path={`${path}/allSimCard`}>
            <AllSimCard></AllSimCard>
          </Route>
          <Route path={`${path}/allSimCard`}>
            <AllSimCard></AllSimCard>
          </Route>
          <Route path={`${path}/allSimCard`}>
            <AllSimCard></AllSimCard>
          </Route>
          <Route path={`${path}/allSimCard`}>
            <AllSimCard></AllSimCard>
          </Route>
          <Route path={`${path}/allSimCard`}>
            <AllSimCard></AllSimCard>
          </Route>
          <Route path={`${path}/allSimCard`}>
            <AllSimCard></AllSimCard>
          </Route>
          <Route path={`${path}/allSimCard`}>
            <AllSimCard></AllSimCard>
          </Route>
          <Route path={`${path}/allSimCard`}>
            <AllSimCard></AllSimCard>
          </Route>
          <Route path={`${path}/allSimCard`}>
            <AllSimCard></AllSimCard>
          </Route>
          <Route path={`${path}/allSimCard`}>
            <AllSimCard></AllSimCard>
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
