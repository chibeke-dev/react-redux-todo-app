import { createStore, compose, applyMiddleware } from 'redux';
import rootReduceswr from './reducers/RootReducers';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReduceswr, composeEnhancers(
    applyMiddleware()
))
export default store;