import React from 'react';
import {mount, shallow} from 'enzyme';
import Figure from '../jsx/Figure.jsx';
describe('<Figure />', () => {
  it('should exist', () => {
    const wrapper = shallow(<Figure />);
    const found = wrapper.find('figure');
    expect(found).toExist();
  });
  it('should contain a monthly payment', () => {
    const monthlyPayment = '$1,234';
    const wrapper = shallow(<Figure />);
    wrapper.setProps({monthlyPayment});
    expect(wrapper.find('output').text()).toEqual(monthlyPayment);
  });
});

