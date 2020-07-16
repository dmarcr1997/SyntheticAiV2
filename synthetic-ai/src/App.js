import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Signup from './components/Signup';
import AIs from './containers/AIs';
import UserPage from './containers/UserPage';
import Admin from './Adm/Admin';
function App() {
  return (
    <div className="App">
      <h1>SyntheticAiV2</h1>
      <Router>
        <NavBar links ={['login', 'signup']} />
        <Route path = "/login" exact component={Login} />
        <Route path ="/signup" exact component={Signup} />
        <Route path ="/home" exact component={UserPage} />
        <Route path ="/AI" exact component={AIs} /> 
      </Router>
    </div>
  );
}

export default App;
