import React from 'react';
const Header = ({monthlyPayment}) => (
  <header>
    <h3>Affordability</h3>
    <h4>Calculate your monthly mortgage payments</h4>
    <h5>Your est. payment:
      <output name="monthlyPayment">
        {monthlyPayment}
      </output>
      /month
    </h5>
  </header>
);
export default Header;
