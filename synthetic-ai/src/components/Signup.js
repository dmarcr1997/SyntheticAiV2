import React, {Component} from 'react';
import {connect} from 'react-redux';
import { signup } from '../actions/userActions';
class Signup extends Component{
    state = {
        username: '',
        password: '',
    };
    componentDidMount(){
        this.props.linkGen(['home', 'login'])
    };
    handleSubmit = (event) =>{
        event.preventDefault()
        this.props.newUser(this.state)
        this.setState({
            username: '',
            password: '',
        })
    };
    handleChange = (event) =>{
        this.setState({
            [`${event.target.name}`]: event.target.value
        });
    };
    render(){
        return(
            <div>
                <h2>Signup</h2>
                <form onSubmit={this.handleSubmit}>
                    <label name='usermane'>Username</label>
                    <input type='text' name='username' onChange={this.handleChange} value={this.state.username}/>
                    <label name='password'>Password</label>
                    <input type='password' name='password' onChange={this.handleChange} value={this.state.password}/>
                    <input type='submit'/>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return{
        newUser: data => dispatch(signup(data)) 
    }
}
export default connect( '', mapDispatchToProps)(Signup)