import * as React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { AnimatedRoute } from 'react-router-transition';
import List from 'pages/List';
import Room from 'pages/Room';
import './App.scss';

export default () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/list" component={List} />
      <AnimatedRoute
        path="/room/:id"
        component={Room}
        atEnter={{ offset: 100, height: 0 }}
        atLeave={{ offset: 100, height: 0 }}
        atActive={{ offset: 0, height: 100 }}
        mapStyles={(styles) => ({
          transform: `translateX(${styles.offset}%)`,
          height: `${styles.height}%`
        })}
        wrapperComponent={({ children, ...props }) => (
          <div {...props}>{children}</div>
        )}
        runOnMount={false}
        className="animated-route-root"
      />
    </BrowserRouter>
  );
}

const Home = () => (
  <Link to="/list">채팅 목록 페이지</Link>
);
