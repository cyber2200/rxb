import React, {Component} from 'react'
import Nav from './Nav'
import { Route, Switch } from 'react-router'
import LangSwitcher from '../../containers/LangSwitcher'
import Logout from '../../containers/Logout'
import SecuredHome from '../../containers/SecuredHome'
import Page2Secured from '../../containers/Page2Secured'

class SecuredPathRoutes extends Component {
    constructor(props) {
        super();
    }
    
    render() {
        return(
            <div>
                <Nav />
                <Switch>
                  <Route exact path="/secured" component={SecuredHome} />
                  <Route exact path="/secured/page2secured" component={Page2Secured} />
                  <Route exact path="/secured/logout" component={Logout} />
                  <Route path="/secured/langs" component={LangSwitcher} />
                </Switch>
            </div>
        )   
        
    }
}

export default SecuredPathRoutes