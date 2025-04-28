import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';

describe('BodySectionWithMarginBottom Component', () => {
  it('renders a div with the class bodySectionWithMargin', () => {
    const wrapper = shallow(<BodySectionWithMarginBottom title="title" />);
    expect(wrapper.find('.bodySectionWithMargin').exists()).toBe(true);
  });

  it('renders the BodySection component inside', () => {
    const wrapper = shallow(<BodySectionWithMarginBottom title="title"><p>test</p></BodySectionWithMarginBottom>);
    expect(wrapper.find(BodySection).exists()).toBe(true);
  });
});
