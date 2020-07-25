import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Signup from './components/Signup';
import AIs from './containers/AIs';
import UserPage from './containers/UserPage';
import Admin from './Adm/Admin';
class App extends Component{
  state = {
     links: ['login', 'signup']
  }
  changeLinks = lnks => {
    this.setState({
      links: lnks
    })
  }
  render(){
    return (
      <div className="App">
        <h1>SyntheticAiV2</h1>
        <Router>
          <NavBar links ={this.state.links} />
          <Route path = "/login" exact render={ props => <Login {...props} linkGen={this.changeLinks}/> } />
          <Route path ="/signup" exact render={ props => <Signup {...props} linkGen={this.changeLinks}/> } />
          <Route path ="/home" exact render={ props => <UserPage {...props} linkGen={this.changeLinks}/>} />
          <Route path ="/AI" exact render={props => <AIs {...props} linkGen={this.changeLinks}/>} /> 
        </Router>
      </div>
    );
  }
}
export default App;
