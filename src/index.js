import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, browserHistory} from 'react-router'
import { Provider } from 'react-redux'
import store from './store'


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import App from './components/app'
import GamesListView from './components/games-list-view/games-list-view'
import GameProfileView from './components/game-profile-view/game-profile-view'

import UsersListView from './components/users-list-view/users-list-view'
import UserProfileView from './components/user-profile-view/user-profile-view'


ReactDOM.render(
  (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <Route path="/games-list" component={GamesListView}/>
          <Route path="/game-profile/:id" component={GameProfileView}/>
          <Route path="/users-list" component={UsersListView}/>
          <Route path="/user-profile/:userId" component={UserProfileView}/>
        </Route>
      </Router>
    </Provider>
  ),
  document.getElementById('root')
);