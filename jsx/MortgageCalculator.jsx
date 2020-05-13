import React from 'react';
import styled from 'styled-components';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Figure from './Figure.jsx';
import Table from './Table.jsx';
import Form from './Form.jsx';
import dummyData from '../db/dummyData.js';

export default class MortgageCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.handlePriceText = this.handlePriceText.bind(this);
    this.handlePriceRange = this.handlePriceRange.bind(this);
    this.handleDownPaymentText = this.handleDownPaymentText.bind(this);
    this.handleDownPaymentPercent = this.handleDownPaymentPercent.bind(this);
    this.handleDownPaymentRange = this.handleDownPaymentRange.bind(this);
    this.handleInterestRate = this.handleInterestRate.bind(this);
    this.handleLoanType = this.handleLoanType.bind(this);
    const setState = this.setState.bind(this);

    if(!props.id) {
      this.state = dummyData;
    } else {
      fetch('http://localhost:3004/home/' + props.id)
      .then(response => response.json())
      .then(data => data[0])
      .then(({price, hoaFees, zipCode}) => {
        const home = {
          id: props.id,
          zipCode,
          homePrice: price,
          hoa: hoaFees,
          downPaymentPercent: 20,
          propertyTaxRate: .0067,
          homeInsurance: 75,
          mortgageInsurance: 0
        }
        home.downPayment = price * home.downPaymentPercent / 100;
        home.propertyTaxes = price * home.propertyTaxRate / 12;
        return home;
      })
      .then(home => fetch('http://localhost:3004/rate/' + home.zipCode)
        .then(response => response.json())
        .then(data => data[0].rates)
        .then(rates => {
          home.rates = rates;
          home.loanType = rates[0].rateType;
          home.loanDuration = this.getDuration(home.loanType);
          home.interestRate = this.formatPercent(rates[0].rate);
          home.init = true;
          return home;
        })
        .then(setState)
      );
    }
  }

  calculateMonthlyPayment() {
    return this.getElements().reduce((a, b) => a + b);
  }

  //https://en.wikipedia.org/wiki/Mortgage_calculator#Monthly_payment_formula
  calculatePrincipalPlus() {
    const p = this.state.homePrice - this.state.downPayment;
    const r = this.state.interestRate / 1200;
    const n = this.state.loanDuration * 12;
    return r ? r * p * ((1 + r) ** n) / ((1 + r) ** n - 1) : (p / n);
  }

  getElements() {
    return [
      this.calculatePrincipalPlus(),
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
    const monthlyPayment = this.calculateMonthlyPayment();
    const proportions = elements.map(e => 100 * e / monthlyPayment);
    const complements = proportions.map(e => 100 - e);
    const offsets = complements.map(this.makeOffsets);
    return offsets.map((e, i) => ({
      value: '' + proportions[i],
      complement: '' + complements[i],
      offset: '' + offsets[i]
    }));
  }

  makeOffsets(_, i, a) {
    return a.slice(0, i).reduce((a, e) => (a + e) % 100, 25);
  }

  formatCurrency(value) {
    return '$' + Math.round(value).toLocaleString();
  }

  formatPercent(value) {
    return Math.round(value * 100) / 100;
  }

  parseCurrency(string) {
    return +string.match(/[0-9]/g).join('');
  }

  setHomePrice(homePrice) {
    const downPayment = Math.round(homePrice * this.state.downPaymentPercent / 100);
    const propertyTaxes = this.state.propertyTaxRate * homePrice / 12;
    this.setState({
      propertyTaxes,
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
    this.setState({
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
    const interestRate = this.formatPercent(parseFloat(event.target.value)) || 0;
    this.setState({
      interestRate
    });
  }

  getDuration(loanType) {
    return +loanType.match(/([0-9]{2})-year/)[1];
  }

  handleLoanType(event) {
    const loanType = event.target.value;
    const loanDuration = this.getDuration(loanType);
    const interestRateRaw = this.state.rates.find(rate=>rate.rateType === loanType).rate;
    const interestRate = this.formatPercent(interestRateRaw);
    this.setState({
      loanType,
      loanDuration,
      interestRate
    });
  }

  render() {
    if (!this.state) { return 'Loading...' } //following line errors while awaiting fetch results
    const monthlyPayment = this.calculateMonthlyPayment();
    return (
      <Section role="application">
        <Header
          monthlyPayment={this.formatCurrency(monthlyPayment)}
        />

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

        <Table
          elements={this.makeTableElements()}
        />

        <Figure
          elements={this.makeFigureElements()}
          monthlyPayment={this.formatCurrency(monthlyPayment)}
        />

        <Footer />
      </Section>
    );
  }
}

const Section = styled.section`
  width: 880px;
  color: #222;
  font-family: sans-serif;
  font-size: small;
  margin: auto;
`;
