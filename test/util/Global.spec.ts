import { Global } from '../../src/util/Global';

describe('Global util', () => {
  it('is an object', () => {
    expect(typeof Global).toEqual('object');
  });

  it('get method returns value when key is isSsr', () => {
    expect(Global.get('isSsr')).toEqual(false);
  });

  it('set method takes a string and sets value', () => {
    const TEST_STRING = 'testing';
    const TEST_VAL = 'test-val';
    // @ts-expect-error the Global util is typed to only work with one key
    expect(Global.get(TEST_STRING)).toEqual(undefined);

    // @ts-expect-error the Global util is typed to only work with one key
    Global.set(TEST_STRING, TEST_VAL);
    // @ts-expect-error the Global util is typed to only work with one key
    expect(Global.get(TEST_STRING)).toEqual(TEST_VAL);
  });

  it('set method takes an object and sets key/val', () => {
    const TEST_KEY = 'testingObj';
    const TEST_VAL = 'test-val';
    // @ts-expect-error the Global util is typed to only work with one key
    expect(Global.get(TEST_KEY)).toEqual(undefined);
    const TEST_OBJ = {};
    // @ts-expect-error the Global util is typed to only work with one key
    TEST_OBJ[TEST_KEY] = TEST_VAL;

    Global.set(TEST_OBJ);
    // @ts-expect-error the Global util is typed to only work with one key
    expect(Global.get(TEST_KEY)).toEqual(TEST_VAL);
  });
});
