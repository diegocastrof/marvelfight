import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import DashboardPage from '../pages/DashboardPage';
import CharacterPage from '../pages/CharacterPage'
import FightPage from '../pages/FightPage';
import NotFoundPage from '../pages/NotFoundPage';
import Header from '../components/Header'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header></Header>
      <Switch>
        <Route path="/" component={DashboardPage} exact={true}></Route>
        <Route path="/character/:id" component={CharacterPage}></Route>
        <Route path="/fight" component={FightPage}></Route>
        <Route component={NotFoundPage}></Route>
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter