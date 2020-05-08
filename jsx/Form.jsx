import React from 'react';
import styled from 'styled-components';
import FormPrice from './FormPrice.jsx';
import FormPayment from './FormPayment.jsx';
import FormRate from './FormRate.jsx';
import FormType from './FormType.jsx';

export default ({handlers, values, format}) => (
  <Form>

    <FormPrice
      format={format}
      homePrice={values.homePrice}
      textHandler={handlers.priceText}
      rangeHandler={handlers.priceRange}
    />

    <FormPayment
      format={format}
      downPayment={values.downPayment}
      downPaymentPercent={values.downPaymentPercent}
      textHandler={handlers.downPaymentText}
      textHandlerPercent={handlers.downPaymentPercent}
      rangeHandler={handlers.downPaymentRange}
    />

    <FormRate
      interestRate={values.interestRate}
      handleRate={handlers.interestRate}
    />

    <FormType
      handler={handlers.loanType}
    />

  </Form>
);

const Form = styled.form`
  border-radius: 6px;
  height: 120px;
  background-color: rgba(0,0,0,.05);
  padding: 9px;
`;
