import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/screens/SignIn';
import SignUp from '~/screens/SignUp';

import Dashboard from '~/screens/Dashboard';
import Details from '~/screens/Details';
import Profile from '~/screens/Profile';
import Meetup from '~/screens/Meetup';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/details/:id" component={Details} isPrivate />
      <Route path="/meetup" component={Meetup} isPrivate />
      <Route component={() => <h1>Página não encontrada! - erro 404!</h1>} />
    </Switch>
  );
}
