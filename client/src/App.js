import React from 'react'
import PropTypes from 'prop-types'
import {ConnectedRouter} from 'connected-react-router'
import MainCont from './containers/MainCont'

const App = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <MainCont />
    </ConnectedRouter>
  )
}

App.propTypes = {
  history: PropTypes.object,
}

export default App
