import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from '../../config/page-route';

function Content() {
  return (
    <Switch>
      {routes.map(route => (
        <Route
          key={route.id}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  );
}

export default Content;
