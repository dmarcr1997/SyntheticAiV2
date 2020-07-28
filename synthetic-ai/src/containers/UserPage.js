import React, {Component} from 'react';
import AIs from './AIs';
import { connect } from 'react-redux';
class UserPage extends Component{
    render(){
        return(
            <div>
                <h2>{this.props.user}'s AIs<button onClick={() => this.props.logout()}>Logout</button></h2>
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