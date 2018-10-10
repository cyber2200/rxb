import React from 'react'
import { Route, Switch } from 'react-router'

import Paths from '../containers/Paths'
import SecuredPaths from '../containers/SecuredPaths'

const routes = (
  <div>
    <Switch>
      <Route path="/secured" component={SecuredPaths} />
      <Route path="/" component={Paths} />
    </Switch>
  </div>
)

export default routes