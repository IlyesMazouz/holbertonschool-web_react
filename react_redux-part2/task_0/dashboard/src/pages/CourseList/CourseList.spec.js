import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import CourseList from './CourseList';
import { newContext } from '../../Context/context';

jest.mock('../api', () => ({
  fetchCourses: jest.fn(),
}));

const sampleCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];

describe('CourseList', () => {
  beforeEach(() => {
    fetchCourses.mockReset();
  });

  it('renders 5 rows when passed a list of courses', async () => {
    fetchCourses.mockResolvedValueOnce(sampleCourses);

    render(<CourseList />);

    await waitFor(() => expect(fetchCourses).toHaveBeenCalledTimes(1));

    expect(screen.getAllByRole('row').length).toBe(5);
  });

  it('renders 1 row when passed an empty array', async () => {
    fetchCourses.mockResolvedValueOnce([]);

    render(<CourseList />);

    await waitFor(() => expect(fetchCourses).toHaveBeenCalledTimes(1));

    expect(screen.getAllByText('No course available yet').length).toBe(1);
  });

  it('resets the courses list when the user logs out', async () => {
    const contextWithUserLoggedIn = {
      user: {
        isLoggedIn: true,
        email: 'test@example.com',
      },
      logOut: jest.fn(),
    };

    const contextWithUserLoggedOut = {
      user: {
        isLoggedIn: false,
        email: '',
      },
      logOut: jest.fn(),
    };

    fetchCourses.mockResolvedValueOnce(sampleCourses);
    render(
      <newContext.Provider value={contextWithUserLoggedIn}>
        <CourseList />
      </newContext.Provider>
    );

    await waitFor(() => expect(fetchCourses).toHaveBeenCalledTimes(1));

    expect(screen.getAllByRole('row').length).toBe(5);

    contextWithUserLoggedIn.logOut();

    render(
      <newContext.Provider value={contextWithUserLoggedOut}>
        <CourseList />
      </newContext.Provider>
    );

    expect(screen.getAllByText('No course available yet').length).toBe(1);
  });
});
