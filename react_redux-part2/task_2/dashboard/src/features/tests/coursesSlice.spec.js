import { configureStore } from '@reduxjs/toolkit';
import coursesReducer, { fetchCourses } from '../courses/coursesSlice';
import axiosMock from 'axios';

const mockCourses = [
  { id: 1, name: 'Course 1' },
  { id: 2, name: 'Course 2' },
  { id: 3, name: 'Course 3' },
];

jest.mock('axios');

describe('coursesSlice', () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        courses: coursesReducer,
      },
    });
  });

  it('should return the correct initial state', () => {
    const state = store.getState().courses;
    expect(state.courses).toEqual([]);
  });

  it('should handle fetching courses correctly', async () => {
    axiosMock.get.mockResolvedValue({ data: mockCourses });

    await store.dispatch(fetchCourses());

    const state = store.getState().courses;
    expect(state.courses).toEqual(mockCourses);
    expect(axiosMock.get).toHaveBeenCalledWith('http://localhost:5173/courses.json');
  });

  it('should reset courses array on logout', () => {
    store.dispatch({
      type: 'courses/fetchCourses/fulfilled',
      payload: mockCourses,
    });

    store.dispatch({ type: 'auth/logout' });

    const state = store.getState().courses;
    expect(state.courses).toEqual([]);
  });
});
