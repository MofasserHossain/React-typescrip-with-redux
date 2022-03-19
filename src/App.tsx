import React, { FC } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import { HomePage } from './Pages/Home';
import { RQSuperHeroesPage } from './Pages/RQSuperHeroes';
import SuperHeroesPage from './Pages/SuperHeroes';
import TodoPage from './Pages/TodoPage';

const App: FC = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/super-heroes">Traditional Super Heroes</Link>
          </li>
          <li>
            <Link to="/rq-super-heroes">RQ Super Heroes</Link>
          </li>
          <li>
            <Link to="/todo">Todo</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/super-heroes" exact>
          <SuperHeroesPage />
        </Route>
        <Route path="/rq-super-heroes" exact>
          <RQSuperHeroesPage />
        </Route>
        <Route path="/todo" exact>
          <TodoPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
