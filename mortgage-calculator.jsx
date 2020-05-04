class MortgageCalculator extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section id="mortgage-calculator" role="application">
        <header>
          <h3>Affordability</h3>
          <h4>Calculate your monthly mortgage payments</h4>
          <h5>Your est. payment: <output name="monthlyPayment">$2,106</output>/month</h5>
        </header>

        <form id="AffordabilityInputControls"> 
          <fieldset id="HomePrice">
            <legend>Home Price</legend>
            <label for="HomePriceInput">Home Price</label>
            <input class="textInput" id="HomePriceInput" type="text" value="$265,015" />
            <input class="range" type="range" min="0" max="1500000" step="10" aria-label="Home Price" value="265015" />
          </fieldset>

          <fieldset id="DownPayment">
            <legend>Down Payment</legend>
            <label for="DownPaymentInput">Down Payment</label>
            <input class="textInput rightSplit" id="DownPaymentInput" type="text" value="$53,003" />
            <input class="textInput leftSplit" id="DownPaymentPercentage" aria-label="Down Payment Percentage" type="text" value="20%" />
            <input class="range" type="range" min="0" max="30" step="1" aria-label="Down Payment" value="20" />
          </fieldset>

          <fieldset id="InterestRate">
            <legend>Interest Rate</legend>
            <label for="InterestRateInput">Interest Rate</label>
            <input class="textInput" id="InterestRateInput" type="text" value="3.93%" />
            <input class="range" type="range" min="0" max="6.5" step="0.1" aria-label="Interest Rate" value="3.932" />
          </fieldset>

          <fieldset id="LoanType">
            <legend>Loan Type</legend>
            <label for="LoanTypeInput">Loan Type</label>
            <select id="LoanTypeInput">
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

        <table class="AffordabilityTable">
          <thead>
            <tr>
              <th>Legend</th>
              <th>Expense</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> <div class="AffordabilityTableTitleDot color1"></div> </td>
              <td> Principal &amp; Interest </td>
              <td> $1,004 </td>
            </tr>
            
            <tr>
              <td> <div class="color2 AffordabilityTableTitleDot"></div> </td>
              <td> Property Taxes </td>
              <td> $148 </td>
            </tr>
            
            <tr>
              <td> <div class="color3 AffordabilityTableTitleDot"></div> </td>
              <td> Home Insurance </td>
              <td> $75 </td>
            </tr>
            
            <tr>
              <td> <div class="color4 AffordabilityTableTitleDot"></div> </td>
              <td> HOA </td>
              <td> $879 </td>
            </tr>

            <tr>
              <td> <div class="color5 AffordabilityTableTitleDot"></div> </td>
              <td> Mortgage ins. &amp; other </td>
              <td> $0 </td>
            </tr>
          </tbody>

          <tfoot>
            <tr>
              <td></td>
              <td>Total</td>
              <td><output name="totalMonthlyAmount"></output></td>
            </tr>
          </tfoot>
        </table>

        <figure class="DonutChartGraphContainer">
          <svg viewBox="0 0 36 36">
            <circle cx="18" cy="18" r="12" fill="#fff" role="presentation">
            </circle>
            <circle cx="18" cy="18" r="16" fill="transparent" stroke="rgb(5, 34, 134)" stroke-width="3.8" 
              stroke-dasharray="47.673314339981005 52.326685660018995" stroke-dashoffset="25">
            </circle>
            <circle cx="18" cy="18" r="16" fill="transparent" stroke="rgb(0, 173, 187)" stroke-width="3.8" 
              stroke-dasharray="7.027540360873694 92.9724596391263" stroke-dashoffset="77.326685660019">
            </circle>
            <circle cx="18" cy="18" r="16" fill="transparent" stroke="rgb(194, 213, 0)" stroke-width="3.8" 
              stroke-dasharray="3.561253561253561 96.43874643874643" stroke-dashoffset="70.2991452991453">
            </circle>
            <circle cx="18" cy="18" r="16" fill="transparent" stroke="rgb(250, 140, 104)" stroke-width="3.8" 
              stroke-dasharray="41.73789173789174 58.26210826210826" stroke-dashoffset="66.73789173789174">
            </circle>
          </svg>

          <figcaption class="DonutChartLabelContainer">
            <h1><output name="MonthlyPayment" class="DonutChartLabelAmount">$2,106</output></h1>
            <p class="DonutChartLabelUnit">/month</p>
          </figcaption>
        </figure>

        <footer class="AffordabilityTableButtonContainer">
          <button type="button">Get Pre-Qualified</button>
          or
          <small><a href="/rates"> See today's mortgage rates </a></small>
        </footer>

      </section>
    );
  }
}