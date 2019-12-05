import * as React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { AnimatedRoute } from 'react-router-transition';
import List from 'pages/List';
import Room from 'pages/Room';

export default () => (
  <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/list" component={List} />
      {/*<Route exact path="/room/:id" component={Room} />*/}
      <AnimatedRoute
        path="/room/:id"
        component={Room}
        atEnter={{ offset: 100 }}
        atLeave={{ offset: 100 }}
        atActive={{ offset: 0 }}
        mapStyles={(styles) => ({
          transform: `translateX(${styles.offset}%)`,
        })}
      />
  </BrowserRouter>
);

const Home = () => (
  <Link to="/list">채팅 목록 페이지</Link>
);
