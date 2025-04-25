import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';

describe('BodySection Component', () => {
  it('renders an h2 with the title prop value', () => {
    const wrapper = shallow(<BodySection title="test"><p>child</p></BodySection>);
    expect(wrapper.find('h2').text()).toEqual('test');
  });

  it('renders children properly', () => {
    const wrapper = shallow(
      <BodySection title="title">
        <p>child 1</p>
        <p>child 2</p>
      </BodySection>
    );
    expect(wrapper.find('p')).toHaveLength(2);
  });
});
