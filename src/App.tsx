import * as React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import List from 'pages/List';
import Room from 'pages/Room';


export default () => (
  <BrowserRouter>
    <Route exact path="/" component={Home} />
    <Route exact path="/list" component={List} />
    <Route exact path="/room/:id" component={Room} />
  </BrowserRouter>
);

const Home = () => (
  <Link to="/list">채팅 목록 페이지</Link>
);
