import React from 'react';
import MortgageCalculator from '../jsx/MortgageCalculator.jsx';
import {mount, shallow} from 'enzyme';

describe('<MortgageCalculator />', () => {
  it('#HomePriceInput has .textInput', () => {
    const wrapper = mount(<MortgageCalculator />);
    const found = wrapper.find('#HomePriceInput');
    expect(found.hasClass('textInput')).toBe(true);
  });
});

describe('<MortgageCalculator />', () => {
  it('contains output tag', () => {
    const wrapper = mount(<MortgageCalculator />);
    expect(wrapper.containsMatchingElement(<output name="totalMonthlyAmount"></output>)).toEqual(true);
  });
});

