import React from 'react';
import {mount, shallow} from 'enzyme';
import Table from '../jsx/Table.jsx';
describe('<Table />', () => {
  it('should exist', () => {
    const wrapper = shallow(<Table />);
    const found = wrapper.find('table');
    expect(found).toExist();
  });
  xit('should display five fields', () => {
    const elements = [1, 2, 3, 4, 5]
    const wrapper = shallow(<Footer />);
    wrapper.setProps({elements});
    //expect(wrapper.find('tbody')).toExist();
  });
});

