import React from 'react';
import FormPrice from './FormPrice.jsx';
import FormPayment from './FormPayment.jsx';
import FormRate from './FormRate.jsx';
import FormType from './FormType.jsx';
const Form = ({handlers, values, format}) => (
  <form id="AffordabilityInputControls">

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

  </form>
);
export default Form;
