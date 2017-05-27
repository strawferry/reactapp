

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
// import AppContainer from './appContainer';
import AppContainer from './pages/AppContainer';
import store from './config/store';

import FastClick from 'fastclick';
//解决移动端300毫秒延迟
FastClick.attach(document.body);

const render = (Component) => {
    ReactDOM.render(
        <Provider store={store}>
            <Component />
        </Provider>,
        document.getElementById('root')
    );
};

render(AppContainer);

if(module.hot) {
    module.hot.accept('./appContainer', () => { render(AppContainer) });
}

registerServiceWorker();