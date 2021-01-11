import { warn } from '../../src/util/LogUtils';


describe('LogUtils', () => {
  it('warn when format is null', () => {
    expect(() => {
      warn(true);
    }).not.toThrow();
  });

  it('warn when condition is false', () => {
    warn(false, 'format');
    expect(() => {
      warn(false);
    }).not.toThrow();
    warn(false, 'format width variable %s', 0);
  });
});
