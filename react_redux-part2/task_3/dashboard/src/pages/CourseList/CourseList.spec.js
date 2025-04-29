import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import CourseList from './CourseList';
import { newContext } from '../../Context/context';
import { selectCourse, unSelectCourse } from '../../features/courses/coursesSlice';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

jest.mock('../api', () => ({
  fetchCourses: jest.fn(),
}));

const sampleCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];

const mockStore = configureStore([]);
let store;

describe('CourseList', () => {
  beforeEach(() => {
    store = mockStore({
      courses: { courses: sampleCourses },
    });
  });

  it('renders 5 rows when passed a list of courses', async () => {
    render(
      <Provider store={store}>
        <CourseList />
      </Provider>
    );

    await waitFor(() => expect(screen.getAllByRole('row')).toHaveLength(5));
  });

  it('renders 1 row when passed an empty array', async () => {
    render(
      <Provider store={store}>
        <CourseList />
      </Provider>
    );

    await waitFor(() => expect(screen.getAllByText('No course available yet')).toHaveLength(1));
  });

  it('updates the selected state when a checkbox is checked', () => {
    render(
      <Provider store={store}>
        <CourseList />
      </Provider>
    );

    const checkbox = screen.getByLabelText('ES6');
    fireEvent.click(checkbox);

    const actions = store.getActions();
    expect(actions).toEqual([selectCourse(1)]);
  });

  it('updates the selected state when a checkbox is unchecked', () => {
    render(
      <Provider store={store}>
        <CourseList />
      </Provider>
    );

    const checkbox = screen.getByLabelText('ES6');
    fireEvent.click(checkbox);

    const actions1 = store.getActions();
    expect(actions1).toEqual([selectCourse(1)]);

    fireEvent.click(checkbox);

    const actions2 = store.getActions();
    expect(actions2).toEqual([selectCourse(1), unSelectCourse(1)]);
  });

  it('resets the courses list when the user logs out', async () => {
    const contextWithUserLoggedIn = {
      user: { isLoggedIn: true, email: 'test@example.com' },
      logOut: jest.fn(),
    };

    const contextWithUserLoggedOut = {
      user: { isLoggedIn: false, email: '' },
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
