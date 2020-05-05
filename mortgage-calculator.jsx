class MortgageCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.rates = [
      {"_id":"5eacb07355fec14695a7ee1b","rateType":"30-year fixed","rate":2.6241629055795475},
      {"_id":"5eacb07355fec14695a7ee1c","rateType":"20-year fixed","rate":2.5170805748129426},
      {"_id":"5eacb07355fec14695a7ee1d","rateType":"15-year fixed","rate":2.5819652902530565},
      {"_id":"5eacb07355fec14695a7ee1e","rateType":"10-year fixed","rate":2.394145607015703},
      {"_id":"5eacb07355fec14695a7ee1f","rateType":"FHA 30-year fixed","rate":2.6047485337141323},
      {"_id":"5eacb07355fec14695a7ee20","rateType":"FHA 15-year fixed","rate":2.8296213240182855},
      {"_id":"5eacb07355fec14695a7ee21","rateType":"VA 30-year fixed","rate":2.0810076640794524},
      {"_id":"5eacb07355fec14695a7ee22","rateType":"VA 15-year fixed","rate":2.126239025719446}
    ];
    this.state = {
      homePrice: 265015,
      downPayment: 53003,
      downPaymentPercent: 20,
      interestRate: 3.92,
      loanType: '30-year fixed',
      loanDuration: 30,
      monthlyPayment: 2106,
      principalPlusInterest : 1004,
      propertyTaxes: 148,
      homeInsurance: 75,
      hoa: 879,
      mortgageInsurance: 0
    }
    this.handlePriceText = this.handlePriceText.bind(this);
    this.handlePriceRange = this.handlePriceRange.bind(this);
    this.handleDownPaymentText = this.handleDownPaymentText.bind(this);
    this.handleDownPaymentPercent = this.handleDownPaymentPercent.bind(this);
    this.handleDownPaymentRange = this.handleDownPaymentRange.bind(this);
    this.handleRate = this.handleRate.bind(this);
    this.handleLoanType = this.handleLoanType.bind(this);
  }
  formatCurrency(value) {
    return '$' + value.toLocaleString();
  }
  parseCurrency(string) {
    return +string.match(/[0-9]/g).join('');
  }
  handlePriceText(event) {
    let homePrice = this.parseCurrency(event.target.value);
    let downPayment = Math.round(homePrice * this.state.downPaymentPercent / 100);
    this.setState({
      homePrice,
      downPayment
    });
  }
  handlePriceRange(event) {
    let homePrice = +event.target.value;
    let downPayment = Math.round(homePrice * this.state.downPaymentPercent / 100);
    this.setState({
      homePrice,
      downPayment
    });
  }
  handleDownPaymentText(event) {
    let downPayment = Math.round(this.parseCurrency(event.target.value));
    let downPaymentPercent = Math.round(100 * downPayment / this.state.homePrice);
    this.setState({
      downPayment,
      downPaymentPercent
    });
  }
  handleDownPaymentPercent(event) {
    let downPaymentPercent = +event.target.value.match(/[0-9]/g).join('');
    let downPayment = Math.round(this.state.homePrice * downPaymentPercent / 100);
    this.setState({
      downPayment,
      downPaymentPercent
    });
  }
  handleDownPaymentRange(event) {
    let downPaymentPercent = +event.target.value;
    let downPayment = Math.round(this.state.homePrice * downPaymentPercent / 100);
    this.setState({
      downPayment,
      downPaymentPercent
    });
  }
  handleRate(event) {
    let interestRate = (Math.round(parseFloat(event.target.value) * 100) / 100) || 0;
    this.setState({
      interestRate
    });
  }
  handleLoanType(event) {
    let loanType = event.target.value;
    let loanDuration = +loanType.match(/([0-9]{2})-year/)[1];
    let interestRate = Math.round(this.rates.find(rate=>rate.rateType === loanType).rate * 100) / 100;
    this.setState({
      loanType,
      loanDuration,
      interestRate
    });
  }
  render() {
    return (
      <section id="mortgage-calculator" role="application">
        <header>
          <h3>Affordability</h3>
          <h4>Calculate your monthly mortgage payments</h4>
          <h5>Your est. payment:
            <output name="monthlyPayment">
              {this.formatCurrency(this.state.monthlyPayment)}
            </output>
            /month
          </h5>
        </header>

        <form id="AffordabilityInputControls">
          <fieldset id="HomePrice">
            <legend>Home Price</legend>
            <label htmlFor="HomePriceInput">Home Price</label>
            <input className="textInput" id="HomePriceInput" type="text"
              value={this.formatCurrency(this.state.homePrice)}
              onChange={this.handlePriceText}
            />
            <input className="range" type="range" min="0" step="10" aria-label="Home Price"
              max={Math.max(1500000, this.state.homePrice*1.25)}
              value={this.state.homePrice}
              onChange={this.handlePriceRange}
            />
          </fieldset>

          <fieldset id="DownPayment">
            <legend>Down Payment</legend>
            <label htmlFor="DownPaymentInput">Down Payment</label>
            <input className="textInput rightSplit" id="DownPaymentInput" type="text"
              value={this.formatCurrency(this.state.downPayment)}
              onChange={this.handleDownPaymentText}
            />
            <input className="textInput leftSplit" id="DownPaymentPercentage" aria-label="Down Payment Percentage" type="text"
              value={'' + this.state.downPaymentPercent + '%'}
              onChange={this.handleDownPaymentPercent}
            />
            <input className="range" type="range" min="0" max="30" step="1" aria-label="Down Payment"
              value={this.state.downPaymentPercent}
              onChange={this.handleDownPaymentRange}
            />
          </fieldset>

          <fieldset id="InterestRate">
            <legend>Interest Rate</legend>
            <label htmlFor="InterestRateInput">Interest Rate</label>
            <input className="textInput" id="InterestRateInput" type="text"
              value={'' + this.state.interestRate + '%'}
              onChange={this.handleRate}
            />
            <input className="range" type="range" min="0" max="6.5" step="0.1" aria-label="Interest Rate"
              value={this.state.interestRate}
              onChange={this.handleRate}
            />
          </fieldset>

          <fieldset id="LoanType">
            <legend>Loan Type</legend>
            <label htmlFor="LoanTypeInput">Loan Type</label>
            <select id="LoanTypeInput"
              onChange={this.handleLoanType}
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

        <table className="AffordabilityTable">
          <thead>
            <tr>
              <th>Legend</th>
              <th>Expense</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> <div className="AffordabilityTableTitleDot color1"></div> </td>
              <td> Principal &amp; Interest </td>
              <td> {this.formatCurrency(this.state.principalPlusInterest)} </td>
            </tr>

            <tr>
              <td> <div className="color2 AffordabilityTableTitleDot"></div> </td>
              <td> Property Taxes </td>
              <td> {this.formatCurrency(this.state.propertyTaxes)} </td>
            </tr>

            <tr>
              <td> <div className="color3 AffordabilityTableTitleDot"></div> </td>
              <td> Home Insurance </td>
              <td> {this.formatCurrency(this.state.homeInsurance)} </td>
            </tr>

            <tr>
              <td> <div className="color4 AffordabilityTableTitleDot"></div> </td>
              <td> HOA </td>
              <td> {this.formatCurrency(this.state.hoa)} </td>
            </tr>

            <tr>
              <td> <div className="color5 AffordabilityTableTitleDot"></div> </td>
              <td> Mortgage ins. &amp; other </td>
              <td> {this.formatCurrency(this.state.mortgageInsurance)} </td>
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

        <figure className="DonutChartGraphContainer">
          <svg viewBox="0 0 36 36">
            <circle cx="18" cy="18" r="12" fill="#fff" role="presentation">
            </circle>
            <circle cx="18" cy="18" r="16" fill="transparent" stroke="rgb(5, 34, 134)" strokeWidth="3.8"
              strokeDasharray="47.673314339981005 52.326685660018995" strokeDashoffset="25">
            </circle>
            <circle cx="18" cy="18" r="16" fill="transparent" stroke="rgb(0, 173, 187)" strokeWidth="3.8"
              strokeDasharray="7.027540360873694 92.9724596391263" strokeDashoffset="77.326685660019">
            </circle>
            <circle cx="18" cy="18" r="16" fill="transparent" stroke="rgb(194, 213, 0)" strokeWidth="3.8"
              strokeDasharray="3.561253561253561 96.43874643874643" strokeDashoffset="70.2991452991453">
            </circle>
            <circle cx="18" cy="18" r="16" fill="transparent" stroke="rgb(250, 140, 104)" strokeWidth="3.8"
              strokeDasharray="41.73789173789174 58.26210826210826" strokeDashoffset="66.73789173789174">
            </circle>
          </svg>

          <figcaption className="DonutChartLabelContainer">
            <h1>
              <output name="MonthlyPayment" className="DonutChartLabelAmount">
                {this.formatCurrency(this.state.monthlyPayment)}
              </output>
            </h1>
            <p className="DonutChartLabelUnit">/month</p>
          </figcaption>
        </figure>

        <footer className="AffordabilityTableButtonContainer">
          <button type="button">Get Pre-Qualified</button>
          or
          <small><a href="/rates"> See today&#39;s mortgage rates </a></small>
        </footer>

      </section>
    );
  }
}
