import React, {Component} from 'react'
import {auth} from '../actions/auth'
import { Redirect } from 'react-router-dom'
import SecuredPathRoutes from './secured/SecuredPathRoutes'

class SecuredPaths extends Component {
    
    constructor(props) {
        super();
    }
    
    componentWillMount() {
        if (! this.props.auth.processing && this.props.auth.sessionId === '') {
            this.props.dispatch(auth());
        }
    }
    
    render() {
        console.log(this.props.auth);
        if (this.props.auth.processing || this.props.auth.status === '') {
            return(
                <div>Loading...</div>
            )   
        } else if (this.props.auth.status === 'secured') {
            return(
                <div>
                   <SecuredPathRoutes state={this.props.auth} />
                </div>
            )   
        } else if (this.props.auth.status === 'no-session') {
            return(
                <Redirect to="/login" />
            )
        }
    }
}

export default SecuredPaths
