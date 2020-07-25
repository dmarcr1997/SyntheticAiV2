import React, {Component} from 'react';

class Signup extends Component{
    componentDidMount(){
        this.props.linkGen(['home', 'login'])
    }
    render(){
        return(
            <div>Signup</div>
        )
    }
}

export default Signup