import React, {Component} from 'react';

class Login extends Component{
    componentDidMount(){
        this.props.linkGen(['home', 'signup'])
    }
    render(){
       
        return(
            <div>
                <h1>Login</h1>
            </div>
        )
    }
}

export default Login