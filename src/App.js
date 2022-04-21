import './App.css';
import Login from './pages/Login/Login';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import DashBoard from './pages/DashBoard/DashBoard';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Login></Login>
          </Route>
          <Route exact path='/login'>
            <Login></Login>
          </Route>
          <Route path='/dashboard'>
            <DashBoard></DashBoard>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
