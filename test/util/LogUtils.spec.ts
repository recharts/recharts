import { vi } from 'vitest';
import { warn } from '../../src/util/LogUtils';

describe('LogUtils', () => {
  test('dont log when condition is true', () => {
    const logSpy = vi.spyOn(console, 'warn').mockImplementation((): void => undefined);
    warn(true, 'test');
    expect(logSpy).not.toHaveBeenCalledWith('test');
  });

  test('warn when condition is false', () => {
    const logSpy = vi.spyOn(console, 'warn').mockImplementation((): void => undefined);
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

  test('warns when format is undefined', () => {
    const logSpy = vi.spyOn(console, 'warn').mockImplementation((): void => undefined);

    // condition is true, format is undefined
    // @ts-expect-error - testing undefined format
    warn(true, undefined);
    expect(logSpy).toHaveBeenCalledWith('LogUtils requires an error message argument');

    logSpy.mockClear();

    // condition is false, format is undefined
    // @ts-expect-error - testing undefined format
    warn(false, undefined);
    expect(logSpy).toHaveBeenCalledWith('LogUtils requires an error message argument');
    expect(logSpy).toHaveBeenCalledWith(
      'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.',
    );
  });
});
