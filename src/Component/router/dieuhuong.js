import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import login from '../login/login';


class dieuhuong extends Component {
  render() {
    return (
     <Router>
              <div>
              <Route exact path="/login" component={login}/>
      
              </div>


     </Router>
    );
  }
}

export default dieuhuong;
