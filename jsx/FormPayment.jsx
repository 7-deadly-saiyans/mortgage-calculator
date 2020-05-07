import React from 'react';
const FormPayment = ({format, downPayment, downPaymentPercent, textHandler, textHandlerPercent, rangeHandler}) => (
  <fieldset id="DownPayment">
    <legend>
      Down Payment
    </legend>

    <label htmlFor="DownPaymentInput">
      Down Payment
    </label>

    <input
      type="text"
      id="DownPaymentInput"
      className="textInput rightSplit"
      value={format(downPayment)}
      onChange={textHandler}
    />

    <input
      type="text"
      id="DownPaymentPercentage"
      className="textInput leftSplit"
      aria-label="Down Payment Percentage"
      value={'' + downPaymentPercent + '%'}
      onChange={textHandlerPercent}
    />

    <input
      type="range"
      className="range"
      aria-label="Down Payment"
      min="0"
      max="30"
      step="1"
      value={downPaymentPercent}
      onChange={rangeHandler}
    />
  </fieldset>
);
export default FormPayment;
