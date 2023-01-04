import { warn } from '../../src/util/LogUtils';

describe('LogUtils', () => {
  test('dont log when condition is true', () => {
    const logSpy = jest.spyOn(console, 'warn');
    warn(true, 'test');
    expect(logSpy).not.toHaveBeenCalledWith('test');
  });

  test('warn when condition is false', () => {
    const logSpy = jest.spyOn(console, 'warn');
    // log 'format'
    warn(false, 'format');

    expect(logSpy).toHaveBeenCalledWith('format');

    // log empty string
    warn(false, '');
    expect(logSpy).toHaveBeenCalledWith('');

    // log string with a numerical variable
    warn(false, 'format width variable %s', 0);
    expect(logSpy).toHaveBeenCalledWith('format width variable 0');
  });
});
