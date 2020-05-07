import React from 'react';
const FormRate = ({interestRate, handleRate}) => (
  <fieldset id="InterestRate">
    <legend>
      Interest Rate
    </legend>

    <label htmlFor="InterestRateInput">
      Interest Rate
    </label>

    <input
      type="text"
      id="InterestRateInput"
      className="textInput"
      value={'' + interestRate + '%'}
      onChange={handleRate}
    />

    <input
      type="range"
      className="range"
      aria-label="Interest Rate"
      min="0"
      max="6.5"
      step="0.1"
      value={interestRate}
      onChange={handleRate}
    />
  </fieldset>
);
export default FormRate;
