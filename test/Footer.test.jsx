import React from 'react';
import {mount, shallow} from 'enzyme';
import Footer from '../jsx/Footer.jsx';
describe('<Footer />', () => {
  it('should exist', () => {
    const wrapper = shallow(<Footer />);
    const found = wrapper.find('footer');
    expect(found).toExist();
  });
  it('should link to zipCode', () => {
    const zipCode = 12345;
    const wrapper = shallow(<Footer />);
    wrapper.setProps({zipCode});
    expect(wrapper.find({href: '/rate/12345'})).toExist();
  });
});

