import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

const PokemonList = lazy(() => import('../pages/PokemonList'));
const PokemonId = lazy(() => import('../pages/PokemonId'));

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={PokemonList} />
    <Route exact path="/card/:card_id" component={PokemonId} />
  </Switch>
);

export default Routes;
