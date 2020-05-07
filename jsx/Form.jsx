import React from 'react';
const Form = ({handlers, values, format}) => (
  <form id="AffordabilityInputControls">
    <fieldset id="HomePrice">
      <legend>Home Price</legend>
      <label htmlFor="HomePriceInput">Home Price</label>
      <input className="textInput" id="HomePriceInput" type="text"
        value={format(values.homePrice)}
        onChange={handlers.priceText}
      />
      <input className="range" type="range" min="0" step="10" aria-label="Home Price"
        max={Math.max(1500000, values.homePrice*1.25)}
        value={values.homePrice}
        onChange={handlers.priceRange}
      />
    </fieldset>

    <fieldset id="DownPayment">
      <legend>Down Payment</legend>
      <label htmlFor="DownPaymentInput">Down Payment</label>
      <input className="textInput rightSplit" id="DownPaymentInput" type="text"
        value={format(values.downPayment)}
        onChange={handlers.downPaymentText}
      />
      <input className="textInput leftSplit" id="DownPaymentPercentage" aria-label="Down Payment Percentage" type="text"
        value={'' + values.downPaymentPercent + '%'}
        onChange={handlers.downPaymentPercent}
      />
      <input className="range" type="range" min="0" max="30" step="1" aria-label="Down Payment"
        value={values.downPaymentPercent}
        onChange={handlers.downPaymentRange}
      />
    </fieldset>

    <fieldset id="InterestRate">
      <legend>Interest Rate</legend>
      <label htmlFor="InterestRateInput">Interest Rate</label>
      <input className="textInput" id="InterestRateInput" type="text"
        value={'' + values.interestRate + '%'}
        onChange={handlers.interestRate}
      />
      <input className="range" type="range" min="0" max="6.5" step="0.1" aria-label="Interest Rate"
        value={values.interestRate}
        onChange={handlers.interestRate}
      />
    </fieldset>

    <fieldset id="LoanType">
      <legend>Loan Type</legend>
      <label htmlFor="LoanTypeInput">Loan Type</label>
      <select id="LoanTypeInput"
        onChange={handlers.loanType}
      >
        <optgroup label="Standard">
          <option value="30-year fixed">30-year fixed</option>
          <option value="20-year fixed">20-year fixed</option>
          <option value="15-year fixed">15-year fixed</option>
          <option value="10-year fixed">10-year fixed</option>
        </optgroup>
        <optgroup label="FHA">
          <option value="FHA 30-year fixed">FHA 30-year fixed</option>
          <option value="FHA 15-year fixed">FHA 15-year fixed</option>
        </optgroup>
        <optgroup label="VA">
          <option value="VA 30-year fixed">VA 30-year fixed</option>
          <option value="VA 15-year fixed">VA 15-year fixed</option>
        </optgroup>
      </select>
    </fieldset>
  </form>
);
export default Form;
