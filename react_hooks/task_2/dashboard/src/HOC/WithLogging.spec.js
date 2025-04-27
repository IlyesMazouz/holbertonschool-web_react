import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import WithLogging from './WithLogging';

afterEach(cleanup);

class MockApp extends React.Component {
  render () {
    return <h1>Hello from Mock App Component</h1>;
  }
}

describe('WithLogging HOC', () => {
  it('renders the component and logs lifecycle events', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    const Wrapped = WithLogging(MockApp);
    const { unmount } = render(<Wrapped />);

    expect(screen.getByText(/hello from mock app component/i)).toBeInTheDocument();
    expect(consoleSpy).toHaveBeenCalledWith('Component MockApp is mounted');

    unmount();
    expect(consoleSpy).toHaveBeenCalledWith('Component MockApp is going to unmount');

    consoleSpy.mockRestore();
  });

  it('sets correct displayName', () => {
    const Wrapped = WithLogging(MockApp);
    expect(Wrapped.displayName).toBe('WithLogging(MockApp)');
  });
});
