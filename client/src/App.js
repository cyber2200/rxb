import React from 'react'
import {ConnectedRouter} from 'connected-react-router'
import MainCont from './containers/MainCont'

const App = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <MainCont />
    </ConnectedRouter>
  )
}

export default App
