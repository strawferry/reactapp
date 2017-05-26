import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import rootReducer from '../reducers/index';


const history = createHistory();
const middleware = routerMiddleware(history);
const logger = createLogger({ collapsed: true });

let store;
if(process.env.NODE_ENV === 'development') {
    store = createStore(rootReducer, composeWithDevTools(applyMiddleware(
        thunk,
        logger,
        middleware
    )));
} else {
    store = createStore(rootReducer, composeWithDevTools(applyMiddleware(
        thunk,
        middleware
    )));
}

export default store;