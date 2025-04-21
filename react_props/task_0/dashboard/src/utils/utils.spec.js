import { getCurrentYear, getFooterCopy, getLatestNotification } from './utils';

describe('utils functions', () => {
  test('getCurrentYear returns the current year', () => {
    expect(getCurrentYear()).toBe(new Date().getFullYear());
  });

  test('getFooterCopy returns correct string when isIndex is true', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
  });

  test('getFooterCopy returns correct string when isIndex is false', () => {
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
  });

  test('getLatestNotification returns correct string', () => {
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
  });
});
