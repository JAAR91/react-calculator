import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/home';
import Calculator from './pages/Calculator';
import Quote from './pages/Quote';
import NotMatch from './pages/NotMatch';

const MathContainer = () => (
  <>
    <Navbar />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/calculator/">
        <Calculator />
      </Route>
      <Route exact path="/quotes/">
        <Quote />
      </Route>
      <Route path="*">
        <NotMatch />
      </Route>
    </Switch>
  </>
);

export default MathContainer;
