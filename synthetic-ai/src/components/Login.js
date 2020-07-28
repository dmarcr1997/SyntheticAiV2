import React, {Component} from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/userActions';

class Login extends Component{
    state = {
        username: '',
        password: '',
    };
    componentDidMount(){
        this.props.linkGen(['home', 'signup'])
    };
    handleSubmit = (event) =>{
        event.preventDefault()
        this.props.getUser(this.state)
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
                <h2>Login</h2>
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
        getUser: data => dispatch(login(data)) 
    }
}
export default connect( '', mapDispatchToProps)(Login)