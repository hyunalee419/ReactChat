import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import List from 'pages/List';
import Room from 'pages/Room';


export default () => (
  <BrowserRouter>
    <Route exact path="/list" component={List} />
    <Route exact path="/room/:id" component={Room} />
  </BrowserRouter>
);
