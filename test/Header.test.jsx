import React from 'react';
import {mount, shallow} from 'enzyme';
import Header from '../jsx/Header.jsx';
describe('<Header />', () => {
  it('should exist', () => {
    const wrapper = shallow(<Header />);
    const found = wrapper.find('header');
    expect(found).toExist();
  });
  it('should render monthlyPayment in <output>', () => {
    const monthlyPayment = '$1,234';
    const wrapper = shallow(<Header />);
    wrapper.setProps({monthlyPayment});
    expect(wrapper.find('output').text()).toEqual(monthlyPayment);
  });
});
