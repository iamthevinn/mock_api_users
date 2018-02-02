import { createStore, compose, applyMiddleware } from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
    reducer,
    composeEnhancers(
      applyMiddleware(thunk.withExtraArgument('https://5a747e5b61c2a40012894ab4.mockapi.io/api/v1/users')),
    )
)