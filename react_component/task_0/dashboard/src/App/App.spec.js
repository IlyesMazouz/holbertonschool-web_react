import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App Component', () => {
  let wrapper;
  let mockLogOut;

  beforeEach(() => {
    mockLogOut = jest.fn();
    wrapper = shallow(<App logOut={mockLogOut} />);
    jest.spyOn(window, 'alert').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('calls logOut when Ctrl+H is pressed', () => {
    const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
    window.dispatchEvent(event);
    expect(mockLogOut).toHaveBeenCalled();
  });

  it('calls alert with "Logging you out" when Ctrl+H is pressed', () => {
    const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
    window.dispatchEvent(event);
    expect(window.alert).toHaveBeenCalledWith('Logging you out');
  });
});
