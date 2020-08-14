import React, {Component} from 'react';
import AIs from './AIs';
import { connect } from 'react-redux';
import { Button, Text } from "@chakra-ui/core";
class UserPage extends Component{
    render(){
        return(
            <div>
                <Text fontSize='5xl'>AIs<Button onClick={() => this.props.logout()}>Logout</Button></Text>
                <AIs/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return({
        user: state.user
    })
}

const mapDispatchToProps = (dispatch) => {
    return({
        logout: () => dispatch({type: 'LOGOUT'})
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage)