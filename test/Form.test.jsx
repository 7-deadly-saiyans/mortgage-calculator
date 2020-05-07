import React from 'react';
import {mount, shallow} from 'enzyme';
import Form from '../jsx/Form.jsx';
describe('<Form />', () => {
  xit('should exist', () => {
    const wrapper = shallow(<Form />);
    const found = wrapper.find('form');
    expect(found).toExist();
  });
  xit('should call handlers on change', () => {
    let calls = 0
    const priceText = () => calls++;
    const handlers = {
      priceText
    };
    const wrapper = shallow(<Form />);
    wrapper.setProps({handlers});
    //force change
    //expect(calls).toEqual(1);
  });
});

