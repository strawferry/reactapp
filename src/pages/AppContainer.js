
/* application components */
// import Home from './home';
import NotMatch from './NotMatch';
import PApp from './pc/App';
import PHome from './pc/Home';
import PMe from './pc/Me';

import WApp from './wap/App';
import WHome from './wap/Home';
import WMe from './wap/Me';


import React from 'react';
import { Route,  BrowserRouter, Switch } from 'react-router-dom';
// import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import createHistory from 'history/createBrowserHistory';
const history = createHistory();





export default class AppContainer extends React.Component {
    
  render() {
      return (
          <BrowserRouter history={history}>
              <Switch>
                  <Route exact path="/" component={PHome} />
                  <Route path="/me" component={PMe} />
                  <Route path="/app" component={PApp} />
                  <Route exact path="/wap" component={WHome}/>
                  <Route path="/wap/me" component={WMe}/>
                  <Route path="/wap/app" component={WApp}/>
              <Route  component={NotMatch} />
              </Switch>
          </BrowserRouter>
    );
  }
}