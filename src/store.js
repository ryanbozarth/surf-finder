import reducers from './reducers'
import routes from './routes'
import promise from 'redux-promise'
import { createStore, applyMiddleware } from 'redux'

const createStoreWithMiddleware = applyMiddleware(
  promise
)(createStore)

export default createStoreWithMiddleware(reducers)
