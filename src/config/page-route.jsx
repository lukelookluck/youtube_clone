import React from 'react';
// import { Redirect } from 'react-router';

import Home from '../pages/home';
import Explore from '../pages/feed/explore';

const routes = [
  // {
  //   id: 1,
  //   path: '/',
  //   exact: true,
  //   component: () => <Redirect to="/home" />,
  // },
  {
    id: 2,
    path: '/',
    exact: true,
    component: () => <Home />,
  },
  {
    id: 3,
    path: '/feed/explore',
    component: () => <Explore amount={4} />,
  },
];

export default routes;
