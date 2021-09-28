import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from 'react-dom';
import './index.css';
import MathContainer from './MathContainer';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <MathContainer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
)