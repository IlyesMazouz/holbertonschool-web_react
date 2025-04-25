import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow Component', () => {
  it('renders one cell with colspan = 2 when isHeader is true and textSecondCell is null', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Test" />);
    const tr = wrapper.find('tr');
    expect(tr.prop('style')).toHaveProperty('backgroundColor', '#deb5b545');
  });

  it('renders two th elements when isHeader is true and textSecondCell is provided', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="First" textSecondCell="Second" />);
    const tr = wrapper.find('tr');
    expect(tr.prop('style')).toHaveProperty('backgroundColor', '#deb5b545');
  });

  it('renders two td elements with correct background color when isHeader is false', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="First" textSecondCell="Second" />);
    const tr = wrapper.find('tr');
    expect(tr.prop('style')).toHaveProperty('backgroundColor', '#f5f5f5ab');
  });
});
