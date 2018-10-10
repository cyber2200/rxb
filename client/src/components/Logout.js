import React, {Component} from 'react';
import {logout} from '../actions/auth'
import {Redirect} from 'react-router-dom'

class Logout extends Component {
    constructor(props) {
        console.log("constructor")
        super()
        this.state = {"loaded" : true, "t" : 2}
    }
    
    componentWillMount() {
        console.log("componentWillMount")
        // console.log(! this.props.auth.processing);
        if (! this.props.auth.processing) {
            this.setState({"loaded" : true})
            this.props.dispatch(logout())        
        }
    }
    
    render() {
        return(
            <Redirect to='/login' />        
        )
    }
}

export default Logout;