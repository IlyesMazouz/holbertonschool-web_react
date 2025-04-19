import { getCurrentYear, getFooterCopy, getLatestNotification } from './utils';

describe('utils.js', () => {
  test('getCurrentYear returns the current year', () => {
    const currentYear = new Date().getFullYear();
    expect(getCurrentYear()).toBe(currentYear);
  });

  test('getFooterCopy returns "Holberton School" when true', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
  });

  test('getFooterCopy returns "Holberton School main dashboard" when false', () => {
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
  });

  test('getLatestNotification returns the correct HTML string', () => {
    const expected = '<strong>Urgent requirement</strong> - complete by EOD';
    expect(getLatestNotification()).toBe(expected);
  });
});
