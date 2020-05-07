import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Figure from './Figure.jsx';
import Table from './Table.jsx';
import Form from './Form.jsx';
const colors = [
  "rgb(5, 34, 134)",
  "rgb(0, 173, 187)",
  "rgb(194, 213, 0)",
  "rgb(250, 140, 104)",
  "rgb(206, 182, 255)"
];
export default class MortgageCalculator extends React.Component {
  constructor(props) {
    super(props);
    const setState = this.setState.bind(this);
    if(props.id) {
      fetch('/home/' + props.id)
      .then(response => response.json())
      .then(data => data[0])
      .then(({id, price, hoaFees, zipCode}) => {
        const home = {
          id,
          zipCode,
          homePrice: price,
          hoa: hoaFees,
          downPaymentPercent: 20,
          propertyTaxRate: .0067,
          homeInsurance: 75,
          mortgageInsurance: 0
        }
        home.downPayment = price * home.downPaymentPercent / 100;
        home.principal = price - home.downPayment;
        home.propertyTaxes = price * home.propertyTaxRate / 12;
        return home;
      })
      .then(home => fetch('/rate/' + home.zipCode)
        .then(response => response.json())
        .then(data => data[0].rates)
        .then(rates => {
          home.rates = rates;
          home.loanType = rates[0].rateType;
          home.loanDuration = this.getDuration(home.loanType);
          home.interestRate = Math.round(rates[0].rate * 100) / 100;
          home.principalPlusInterest = this.calculatePrincipalPlus(home.principal, home.interestRate / 1200, home.loanDuration * 12);
          home.monthlyPayment = this.calculateMonthlyPayment(home);
          home.init = true;
          return home;
        })
        .then(setState)
      );
    } else {
      this.state = {
        init: true,
        id: 0,
        zipCode: 12345,
        principal: 212012,
        homePrice: 265015,
        downPayment: 53003,
        downPaymentPercent: 20,
        interestRate: 3.92,
        loanType: '30-year fixed',
        loanDuration: 30,
        monthlyPayment: 2106,
        principalPlusInterest : 1002,
        propertyTaxes: 148,
        propertyTaxRate: .0067,
        homeInsurance: 75,
        hoa: 879,
        mortgageInsurance: 0,
        rates: [
          {"_id":"5eacb07355fec14695a7ee1b","rateType":"30-year fixed","rate":2.6241629055795475},
          {"_id":"5eacb07355fec14695a7ee1c","rateType":"20-year fixed","rate":2.5170805748129426},
          {"_id":"5eacb07355fec14695a7ee1d","rateType":"15-year fixed","rate":2.5819652902530565},
          {"_id":"5eacb07355fec14695a7ee1e","rateType":"10-year fixed","rate":2.394145607015703},
          {"_id":"5eacb07355fec14695a7ee1f","rateType":"FHA 30-year fixed","rate":2.6047485337141323},
          {"_id":"5eacb07355fec14695a7ee20","rateType":"FHA 15-year fixed","rate":2.8296213240182855},
          {"_id":"5eacb07355fec14695a7ee21","rateType":"VA 30-year fixed","rate":2.0810076640794524},
          {"_id":"5eacb07355fec14695a7ee22","rateType":"VA 15-year fixed","rate":2.126239025719446}
        ]
      };
    }
    this.handlePriceText = this.handlePriceText.bind(this);
    this.handlePriceRange = this.handlePriceRange.bind(this);
    this.handleDownPaymentText = this.handleDownPaymentText.bind(this);
    this.handleDownPaymentPercent = this.handleDownPaymentPercent.bind(this);
    this.handleDownPaymentRange = this.handleDownPaymentRange.bind(this);
    this.handleInterestRate = this.handleInterestRate.bind(this);
    this.handleLoanType = this.handleLoanType.bind(this);
  }
  calculateMonthlyPayment({principalPlusInterest, propertyTaxes, homeInsurance, hoa, mortgageInsurance}) {
    return principalPlusInterest + propertyTaxes + homeInsurance + hoa + mortgageInsurance;
  }
  //https://en.wikipedia.org/wiki/Mortgage_calculator#Monthly_payment_formula
  calculatePrincipalPlus(principal, monthlyRate, nPayments) {
    return monthlyRate
      ? monthlyRate * principal * ((1 + monthlyRate) ** nPayments) / ((1 + monthlyRate) ** nPayments - 1)
      : (principal / nPayments);
  }
  getElements() {
    return [
      this.state.principalPlusInterest,
      this.state.propertyTaxes,
      this.state.homeInsurance,
      this.state.hoa,
      this.state.mortgageInsurance
    ];
  }
  makeTableElements() {
    return this.getElements().map(this.formatCurrency);
  }
  makeFigureElements() {
    const elements = this.getElements();
    const proportions = elements.map(e => 100 * e / this.state.monthlyPayment);
    const complements = proportions.map(e => 100 - e);
    const offsets = complements.map((_, i) => complements.slice(0, i).reduce((a, e) => (a + e) % 100, 25));
    return offsets.map((e, i) => ({
      value: '' + proportions[i],
      complement: '' + complements[i],
      offset: '' + offsets[i],
      color: colors[i]
    }));
  }
  formatCurrency(value) {
    return '$' + Math.round(value).toLocaleString();
  }
  parseCurrency(string) {
    return +string.match(/[0-9]/g).join('');
  }
  setHomePrice(homePrice) {
    const downPayment = Math.round(homePrice * this.state.downPaymentPercent / 100);
    const principal = homePrice - downPayment;
    const propertyTaxes = this.state.propertyTaxRate * homePrice / 12;
    const principalPlusInterest = this.calculatePrincipalPlus(principal, this.state.interestRate / 1200, this.state.loanDuration * 12);
    const monthlyPayment = principalPlusInterest + this.state.propertyTaxes + this.state.homeInsurance + this.state.hoa + this.state.mortgageInsurance;
    this.setState({
      monthlyPayment,
      principalPlusInterest,
      propertyTaxes,
      principal,
      homePrice,
      downPayment
    });
  }
  handlePriceText(event) {
    const homePrice = this.parseCurrency(event.target.value);
    this.setHomePrice(homePrice);
  }
  handlePriceRange(event) {
    const homePrice = +event.target.value;
    this.setHomePrice(homePrice);
  }
  setDownPayment(downPayment, downPaymentPercent) {
    const principal = this.state.homePrice - downPayment;
    const principalPlusInterest = this.calculatePrincipalPlus(principal, this.state.interestRate / 1200, this.state.loanDuration * 12);
    const monthlyPayment = principalPlusInterest + this.state.propertyTaxes + this.state.homeInsurance + this.state.hoa + this.state.mortgageInsurance;
    this.setState({
      monthlyPayment,
      principalPlusInterest,
      principal,
      downPayment,
      downPaymentPercent
    });
  }
  handleDownPaymentText(event) {
    const downPayment = Math.round(this.parseCurrency(event.target.value));
    const downPaymentPercent = Math.round(100 * downPayment / this.state.homePrice);
    this.setDownPayment(downPayment, downPaymentPercent);
  }
  handleDownPaymentPercent(event) {
    const downPaymentPercent = +event.target.value.match(/[0-9]/g).join('');
    const downPayment = Math.round(this.state.homePrice * downPaymentPercent / 100);
    this.setDownPayment(downPayment, downPaymentPercent);
  }
  handleDownPaymentRange(event) {
    const downPaymentPercent = +event.target.value;
    const downPayment = Math.round(this.state.homePrice * downPaymentPercent / 100);
    this.setDownPayment(downPayment, downPaymentPercent);
  }
  handleInterestRate(event) {
    const interestRate = (Math.round(parseFloat(event.target.value) * 100) / 100) || 0;
    const principalPlusInterest = this.calculatePrincipalPlus(this.state.principal, interestRate / 1200, this.state.loanDuration * 12);
    const monthlyPayment = principalPlusInterest + this.state.propertyTaxes + this.state.homeInsurance + this.state.hoa + this.state.mortgageInsurance;
    this.setState({
      monthlyPayment,
      principalPlusInterest,
      interestRate
    });
  }
  getDuration(loanType) {
    return +loanType.match(/([0-9]{2})-year/)[1];
  }
  handleLoanType(event) {
    const loanType = event.target.value;
    const loanDuration = this.getDuration(loanType);
    const interestRate = Math.round(this.state.rates.find(rate=>rate.rateType === loanType).rate * 100) / 100;
    const principalPlusInterest = this.calculatePrincipalPlus(this.state.principal, interestRate / 1200, loanDuration * 12);
    const monthlyPayment = principalPlusInterest + this.state.propertyTaxes + this.state.homeInsurance + this.state.hoa + this.state.mortgageInsurance;
    this.setState({
      monthlyPayment,
      principalPlusInterest,
      loanType,
      loanDuration,
      interestRate
    });
  }
  render() {
    return this.state.init ? (
      <section id="mortgage-calculator" role="application">
        <Header monthlyPayment={this.formatCurrency(this.state.monthlyPayment)} />

        <Form
          handlers={{
            priceText: this.handlePriceText,
            priceRange: this.handlePriceRange,
            downPaymentText: this.handleDownPaymentText,
            downPaymentPercent: this.handleDownPaymentPercent,
            downPaymentRange: this.handleDownPaymentRange,
            interestRate: this.handleInterestRate,
            loanType: this.handleLoanType
          }}
          values={{
            homePrice: this.state.homePrice,
            downPayment: this.state.downPayment,
            downPaymentPercent: this.state.downPaymentPercent,
            interestRate: this.state.interestRate
          }}
          format={this.formatCurrency}
        />

        <Table elements={this.makeTableElements()} />

        <Figure elements={this.makeFigureElements()} monthlyPayment={this.formatCurrency(this.state.monthlyPayment)} />

        <Footer />
      </section>
    ) : 'Loading';
  }
}
