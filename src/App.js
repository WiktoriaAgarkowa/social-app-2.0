import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import UserProfile from './pages/user-profile/user-profile.component';
import Login from './pages/log-in/log-in.component';
import SignUp from './pages/sign-up/sign-up.component';


import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }
  render() {
     const { currentUser } = this.state;
      return (
      <div className="App">
        <Header currentUser={currentUser}/>
   
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/profile' component={UserProfile}/>
          <Route path='/login' component={Login}/>
          <Route path='/signup' component={SignUp}/>
        </Switch>
      </div>
    );}
  }

export default App;
