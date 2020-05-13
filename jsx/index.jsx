import React from 'react';
import ReactDOM from 'react-dom';
import MortgageCalculator from './MortgageCalculator.jsx';
const id = +window.location.pathname.substr(1) || 0;
ReactDOM.render(
  <MortgageCalculator id={id} />,
  document.getElementById('mortgage-calculator')
);
