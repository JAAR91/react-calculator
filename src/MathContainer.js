import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './pages/home';
import Calculator from './pages/Calculator';
import Quote from './pages/Quote';

const MathContainer = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/calculator/">
          <Calculator />
        </Route>
        <Route exact path="/about/">
          <Quote />
        </Route>
      </Switch>
    </>
  );
};

export default MathContainer;