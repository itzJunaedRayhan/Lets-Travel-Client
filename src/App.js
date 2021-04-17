import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'
import { createContext, useState } from 'react';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import Admin from './Components/Dashboard/Admin/Admin/Admin';
export const userContext = createContext()
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  console.log(loggedInUser, 'from app')
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/home">
              <Home/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <PrivateRoute path="/dashboard/book/:id">
              <Dashboard/>
            </PrivateRoute>
            <Route path="/admin/addService">
              <Admin/>
            </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
