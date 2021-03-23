import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { Favorites } from './components/Favorites/Favorites';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Mylist } from './components/MyList/Mylist';
import Watchlist from './components/Watchlist/Watchlist';

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route exact path='/mylist'>
          <Mylist />
        </Route>

        <Route exact path='/watchlist'>
          <Watchlist />
        </Route>

        <Route exact path='/favorites'>
          <Favorites />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;