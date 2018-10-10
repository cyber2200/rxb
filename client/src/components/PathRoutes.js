import React, {Component} from 'react'
import Nav from './Nav'
import { Route, Switch } from 'react-router'
import Home from '../containers/Home'
import Login from '../containers/Login'
import SignUp from '../containers/SignUp'
import LangSwitcher from '../containers/LangSwitcher'
import Page1 from '../components/Page1'
import NoMatch from '../containers/NoMatch'

class PathRoutes extends Component {
    constructor(props) {
        super();
    }
    
    render() {
        return(
            <div>
                <Nav />
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/login" component={Login} />
                  <Route path="/signup" component={SignUp} />
                  <Route path="/langs" component={LangSwitcher} />
                  <Route path="/page1" component={Page1} />
                  <Route component={NoMatch} />
                </Switch>
            </div>
        )   
        
    }
}

export default PathRoutes
