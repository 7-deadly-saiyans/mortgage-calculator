import React from 'react';
import styled from 'styled-components';

export default ({monthlyPayment}) => (
  <Header>
    <H3>Affordability</H3>
    <H4>Calculate your monthly mortgage payments</H4>
    <H5>Your est. payment:
      <output name="monthlyPayment">
        {monthlyPayment}
      </output>

      /month
    </H5>
  </Header>
);

const Header = styled.header`
  padding: 13px;
`;

const H3 = styled.h3`
  font-weight: 500;
`;

const H4 = styled.h4`
  font-weight: 300;
`;

const H5 = styled.h5`
  font-weight: 100;
  margin-top: -12px;
  margin-bottom: -5px;
`;
