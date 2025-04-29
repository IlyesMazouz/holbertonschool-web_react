import authReducer, { login, logout } from '../auth/authSlice';

describe('authSlice', () => {
  const initialState = {
    user: {
      email: '',
      password: '',
    },
    isLoggedIn: false,
  };

  it('should return the initial state by default', () => {
    expect(authReducer(undefined, { type: undefined })).toEqual(initialState);
  });

  it('should handle login', () => {
    const action = login({ email: 'test@example.com', password: 'password123' });
    const state = authReducer(initialState, action);
    expect(state).toEqual({
      user: {
        email: 'test@example.com',
        password: 'password123',
      },
      isLoggedIn: true,
    });
  });

  it('should handle logout', () => {
    const loggedInState = {
      user: {
        email: 'test@example.com',
        password: 'password123',
      },
      isLoggedIn: true,
    };
    const state = authReducer(loggedInState, logout());
    expect(state).toEqual(initialState);
  });
});
