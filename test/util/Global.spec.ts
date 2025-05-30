import { Global } from '../../src/util/Global';

describe('Global util', () => {
  it('is an object', () => {
    expect(typeof Global).toEqual('object');
  });

  it('has property isSsr', () => {
    expect(Global.isSsr).toEqual(false);
  });
});
