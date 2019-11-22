import React from 'react';
 import './App.css';
 import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import Login from "./components/login.component";
import SignUp from "./components/signup.component";



import Navbar from "./components/Navbar";

function App() {
  return (
  <div>
  <Navbar />
  <Switch>
  <Route exact path="/" component={Home} />
  <Route exact path="/rooms/" component={Rooms} />
  <Route exact path="/rooms/:bluedream" component={SingleRoom} />
  <Route exact path="/signup" component={SignUp} />
  <Route path="/sign-in" component={Login} />
  <Route path="/sign-up" component={SignUp} />
  <Route component={Error} />      
  
  </Switch>
  </div>


  )
  
}

export default App;
