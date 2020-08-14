import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Button, Input, Text } from "@chakra-ui/core";
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
                <Text fontSize='3xl'>Signup</Text>
                <form onSubmit={this.handleSubmit}>
                    <label name='usermane'>Username</label>
                    <Input type='text' name='username' onChange={this.handleChange} value={this.state.username}/>
                    <label name='password'>Password</label>
                    <Input type='password' name='password' onChange={this.handleChange} value={this.state.password}/>
                    <Button><input type='submit'/></Button>
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