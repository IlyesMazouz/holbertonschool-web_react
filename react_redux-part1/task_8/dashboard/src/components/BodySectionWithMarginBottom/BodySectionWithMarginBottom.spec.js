import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';

describe('BodySectionWithMarginBottom Component', () => {
  
  it('renders a div with the class bodySectionWithMargin', () => {
    const wrapper = shallow(<BodySectionWithMarginBottom title="title" />);
    expect(wrapper.find('.bodySectionWithMargin').exists()).toBe(true);
  });

  it('renders the BodySection component inside', () => {
    const wrapper = shallow(<BodySectionWithMarginBottom title="title"><p>test</p></BodySectionWithMarginBottom>);
    expect(wrapper.find(BodySection).exists()).toBe(true);
  });

  it('renders with title and children properly', () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="Test Title">
        <p>Test Child</p>
      </BodySectionWithMarginBottom>
    );
    expect(wrapper.find('h2').text()).toEqual('Test Title');
    expect(wrapper.find('p').text()).toEqual('Test Child');
  });
});
