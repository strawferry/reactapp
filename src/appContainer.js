
/* application components */
import Home from './pages/home';
import Me from './pages/me';


import React from 'react';
import { Route,  BrowserRouter } from 'react-router-dom';
// import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import createHistory from 'history/createBrowserHistory';
const history = createHistory();





export default class AppContainer extends React.Component {
    
  render() {
      return (
          <BrowserRouter history={history}>
              {/*<Route render={({ location }) => {*/}
                  {/*console.log('location.pathname: ', location);*/}
                  {/*let cls = 'normal';*/}
                  {/*if (location.pathname === '/search') {*/}
                      {/*cls = 'left'*/}
                  {/*} else if (location.pathname.indexOf('bookList') > -1) {*/}
                      {/*cls = 'left'*/}
                  {/*}*/}
                  {/*return(*/}
                      {/*<CSSTransitionGroup*/}
                          {/*transitionName={cls}*/}
                          {/*transitionEnter={true}*/}
                          {/*transitionLeave={true}*/}
                          {/*transitionEnterTimeout={400}*/}
                          {/*transitionLeaveTimeout={400}*/}
                      {/*>*/}
                          {/*<div key={location.pathname}>*/}
                              {/*<Route location={location} exact path="/" component={Home} />*/}
                              {/*<Route location={location} path="/me" component={Me} />*/}
                          {/*</div>*/}
                      {/*</CSSTransitionGroup>*/}
                  {/*)*/}
              {/*}}/>*/}
              <div>
              <Route  exact path="/" component={Home} />
              <Route  path="/me" component={Me} />
              </div>
          </BrowserRouter>
    );
  }
}