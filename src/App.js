import React from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'
import { createContext, useState } from 'react';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import Admin from './Components/Dashboard/Admin/Admin/Admin';
import BookingList from './Components/Dashboard/Traveller/BookingList/BookingList';
import AddReview from './Components/Dashboard/Traveller/AddReview/AddReview';
import OrderList from './Components/Dashboard/Admin/OrderList/OrderList';
import Manage from './Components/Dashboard/Admin/Manage/Manage';
import AddAdmin from './Components/Dashboard/Admin/AddAdmin/AddAdmin';
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
            <Route path="/dashboard/book">
              <Dashboard/>
            </Route>
            <Route path="/dashboard/bookingList">
              <BookingList/>
            </Route>
            <Route path="/dashboard/addReview">
              <AddReview/>
            </Route>
            <PrivateRoute path="/admin/addService">
              <Admin/>
            </PrivateRoute>
            <Route path="/admin/orderList">
              <OrderList/>
            </Route>
            <Route path="/admin/manage">
              <Manage/>
            </Route>
            <Route path="/admin/makeAdmin">
              <AddAdmin/>
            </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
