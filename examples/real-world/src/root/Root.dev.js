import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import Routes from './Routes'
import DevTools from './containers/DevTools'

const Root = ({ store, history }) => (
  <Provider store={store}>
    <div>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
      <DevTools />
    </div>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default Root
