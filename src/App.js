import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { Favorites } from './components/Favorites/Favorites';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import MovieInformation from './components/MovieInformation/MovieInformation';
import { Mylist } from './components/MyList/Mylist';
import Watchlist from './components/Watchlist/Watchlist';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
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

          <Route exact path='/MovieInformation'>
            <MovieInformation />
          </Route>
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
