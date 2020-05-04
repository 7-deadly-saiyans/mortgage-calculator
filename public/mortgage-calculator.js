class MortgageCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homePrice: 265015,
      downPayment: 53003,
      downPaymentPercent: 21,
      interestRate: 3.92,
      loanType: '30-year fixed',
      monthlyPayment: 2106,
      principalPlusInterest: 1004,
      propertyTaxes: 148,
      homeInsurance: 75,
      hoa: 879,
      mortgageInsurance: 0
    };
    this.handlePriceText = this.handlePriceText.bind(this);
    this.handlePriceRange = this.handlePriceRange.bind(this);
  }
  formatCurrency(value) {
    return '$' + value.toLocaleString();
  }
  parseCurrency(string) {
    return +string.match(/[0-9]/g).join('');
  }
  handlePriceText(event) {
    this.setState({ homePrice: this.parseCurrency(event.target.value) });
  }
  handlePriceRange(event) {
    this.setState({ homePrice: +event.target.value });
  }
  render() {
    return React.createElement(
      'section',
      { id: 'mortgage-calculator', role: 'application' },
      React.createElement(
        'header',
        null,
        React.createElement(
          'h3',
          null,
          'Affordability'
        ),
        React.createElement(
          'h4',
          null,
          'Calculate your monthly mortgage payments'
        ),
        React.createElement(
          'h5',
          null,
          'Your est. payment:',
          React.createElement(
            'output',
            { name: 'monthlyPayment' },
            this.formatCurrency(this.state.monthlyPayment)
          ),
          '/month'
        )
      ),
      React.createElement(
        'form',
        { id: 'AffordabilityInputControls' },
        React.createElement(
          'fieldset',
          { id: 'HomePrice' },
          React.createElement(
            'legend',
            null,
            'Home Price'
          ),
          React.createElement(
            'label',
            { htmlFor: 'HomePriceInput' },
            'Home Price'
          ),
          React.createElement('input', { className: 'textInput', id: 'HomePriceInput', type: 'text',
            defaultValue: this.formatCurrency(this.state.homePrice),
            onChange: this.handlePriceText
          }),
          React.createElement('input', { className: 'range', type: 'range', min: '0', step: '10', 'aria-label': 'Home Price',
            max: Math.max(1500000, this.state.homePrice * 1.25),
            defaultValue: this.state.homePrice,
            onChange: this.handlePriceRange
          })
        ),
        React.createElement(
          'fieldset',
          { id: 'DownPayment' },
          React.createElement(
            'legend',
            null,
            'Down Payment'
          ),
          React.createElement(
            'label',
            { htmlFor: 'DownPaymentInput' },
            'Down Payment'
          ),
          React.createElement('input', { className: 'textInput rightSplit', id: 'DownPaymentInput', type: 'text',
            defaultValue: this.formatCurrency(this.state.downPayment)
          }),
          React.createElement('input', { className: 'textInput leftSplit', id: 'DownPaymentPercentage', 'aria-label': 'Down Payment Percentage', type: 'text',
            defaultValue: '' + this.state.downPaymentPercent + '%'
          }),
          React.createElement('input', { className: 'range', type: 'range', min: '0', max: '30', step: '1', 'aria-label': 'Down Payment',
            defaultValue: this.state.downPaymentPercent
          })
        ),
        React.createElement(
          'fieldset',
          { id: 'InterestRate' },
          React.createElement(
            'legend',
            null,
            'Interest Rate'
          ),
          React.createElement(
            'label',
            { htmlFor: 'InterestRateInput' },
            'Interest Rate'
          ),
          React.createElement('input', { className: 'textInput', id: 'InterestRateInput', type: 'text',
            defaultValue: '' + this.state.interestRate + '%'
          }),
          React.createElement('input', { className: 'range', type: 'range', min: '0', max: '6.5', step: '0.1', 'aria-label': 'Interest Rate',
            defaultValue: this.state.interestRate
          })
        ),
        React.createElement(
          'fieldset',
          { id: 'LoanType' },
          React.createElement(
            'legend',
            null,
            'Loan Type'
          ),
          React.createElement(
            'label',
            { htmlFor: 'LoanTypeInput' },
            'Loan Type'
          ),
          React.createElement(
            'select',
            { id: 'LoanTypeInput' },
            React.createElement(
              'optgroup',
              { label: 'Standard' },
              React.createElement(
                'option',
                { value: '30-year fixed' },
                '30-year fixed'
              ),
              React.createElement(
                'option',
                { value: '20-year fixed' },
                '20-year fixed'
              ),
              React.createElement(
                'option',
                { value: '15-year fixed' },
                '15-year fixed'
              ),
              React.createElement(
                'option',
                { value: '10-year fixed' },
                '10-year fixed'
              )
            ),
            React.createElement(
              'optgroup',
              { label: 'FHA' },
              React.createElement(
                'option',
                { value: 'FHA 30-year fixed' },
                'FHA 30-year fixed'
              ),
              React.createElement(
                'option',
                { value: 'FHA 15-year fixed' },
                'FHA 15-year fixed'
              )
            ),
            React.createElement(
              'optgroup',
              { label: 'VA' },
              React.createElement(
                'option',
                { value: 'VA 30-year fixed' },
                'VA 30-year fixed'
              ),
              React.createElement(
                'option',
                { value: 'VA 15-year fixed' },
                'VA 15-year fixed'
              )
            )
          )
        )
      ),
      React.createElement(
        'table',
        { className: 'AffordabilityTable' },
        React.createElement(
          'thead',
          null,
          React.createElement(
            'tr',
            null,
            React.createElement(
              'th',
              null,
              'Legend'
            ),
            React.createElement(
              'th',
              null,
              'Expense'
            ),
            React.createElement(
              'th',
              null,
              'Amount'
            )
          )
        ),
        React.createElement(
          'tbody',
          null,
          React.createElement(
            'tr',
            null,
            React.createElement(
              'td',
              null,
              ' ',
              React.createElement('div', { className: 'AffordabilityTableTitleDot color1' }),
              ' '
            ),
            React.createElement(
              'td',
              null,
              ' Principal & Interest '
            ),
            React.createElement(
              'td',
              null,
              ' ',
              this.formatCurrency(this.state.principalPlusInterest),
              ' '
            )
          ),
          React.createElement(
            'tr',
            null,
            React.createElement(
              'td',
              null,
              ' ',
              React.createElement('div', { className: 'color2 AffordabilityTableTitleDot' }),
              ' '
            ),
            React.createElement(
              'td',
              null,
              ' Property Taxes '
            ),
            React.createElement(
              'td',
              null,
              ' ',
              this.formatCurrency(this.state.propertyTaxes),
              ' '
            )
          ),
          React.createElement(
            'tr',
            null,
            React.createElement(
              'td',
              null,
              ' ',
              React.createElement('div', { className: 'color3 AffordabilityTableTitleDot' }),
              ' '
            ),
            React.createElement(
              'td',
              null,
              ' Home Insurance '
            ),
            React.createElement(
              'td',
              null,
              ' ',
              this.formatCurrency(this.state.homeInsurance),
              ' '
            )
          ),
          React.createElement(
            'tr',
            null,
            React.createElement(
              'td',
              null,
              ' ',
              React.createElement('div', { className: 'color4 AffordabilityTableTitleDot' }),
              ' '
            ),
            React.createElement(
              'td',
              null,
              ' HOA '
            ),
            React.createElement(
              'td',
              null,
              ' ',
              this.formatCurrency(this.state.hoa),
              ' '
            )
          ),
          React.createElement(
            'tr',
            null,
            React.createElement(
              'td',
              null,
              ' ',
              React.createElement('div', { className: 'color5 AffordabilityTableTitleDot' }),
              ' '
            ),
            React.createElement(
              'td',
              null,
              ' Mortgage ins. & other '
            ),
            React.createElement(
              'td',
              null,
              ' ',
              this.formatCurrency(this.state.mortgageInsurance),
              ' '
            )
          )
        ),
        React.createElement(
          'tfoot',
          null,
          React.createElement(
            'tr',
            null,
            React.createElement('td', null),
            React.createElement(
              'td',
              null,
              'Total'
            ),
            React.createElement(
              'td',
              null,
              React.createElement('output', { name: 'totalMonthlyAmount' })
            )
          )
        )
      ),
      React.createElement(
        'figure',
        { className: 'DonutChartGraphContainer' },
        React.createElement(
          'svg',
          { viewBox: '0 0 36 36' },
          React.createElement('circle', { cx: '18', cy: '18', r: '12', fill: '#fff', role: 'presentation' }),
          React.createElement('circle', { cx: '18', cy: '18', r: '16', fill: 'transparent', stroke: 'rgb(5, 34, 134)', strokeWidth: '3.8',
            strokeDasharray: '47.673314339981005 52.326685660018995', strokeDashoffset: '25' }),
          React.createElement('circle', { cx: '18', cy: '18', r: '16', fill: 'transparent', stroke: 'rgb(0, 173, 187)', strokeWidth: '3.8',
            strokeDasharray: '7.027540360873694 92.9724596391263', strokeDashoffset: '77.326685660019' }),
          React.createElement('circle', { cx: '18', cy: '18', r: '16', fill: 'transparent', stroke: 'rgb(194, 213, 0)', strokeWidth: '3.8',
            strokeDasharray: '3.561253561253561 96.43874643874643', strokeDashoffset: '70.2991452991453' }),
          React.createElement('circle', { cx: '18', cy: '18', r: '16', fill: 'transparent', stroke: 'rgb(250, 140, 104)', strokeWidth: '3.8',
            strokeDasharray: '41.73789173789174 58.26210826210826', strokeDashoffset: '66.73789173789174' })
        ),
        React.createElement(
          'figcaption',
          { className: 'DonutChartLabelContainer' },
          React.createElement(
            'h1',
            null,
            React.createElement(
              'output',
              { name: 'MonthlyPayment', className: 'DonutChartLabelAmount' },
              this.formatCurrency(this.state.monthlyPayment)
            )
          ),
          React.createElement(
            'p',
            { className: 'DonutChartLabelUnit' },
            '/month'
          )
        )
      ),
      React.createElement(
        'footer',
        { className: 'AffordabilityTableButtonContainer' },
        React.createElement(
          'button',
          { type: 'button' },
          'Get Pre-Qualified'
        ),
        'or',
        React.createElement(
          'small',
          null,
          React.createElement(
            'a',
            { href: '/rates' },
            ' See today\'s mortgage rates '
          )
        )
      )
    );
  }
}
