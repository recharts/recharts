import { Global } from '../../src/util/Global';

describe('Global util', () => {
  it('return an object', () => {
    const result = Global;
    expect(typeof result).toEqual('object');
  });

  it('get method returns value when key is isSsr', () => {
    const result = Global;
    expect(result.get('isSsr')).toEqual(false);
  });

  it('set method takes a string and sets value', () => {
    const result = Global;
    const TEST_STRING = 'testing';
    const TEST_VAL = 'test-val';
    expect(result.get(TEST_STRING)).toEqual(undefined);

    result.set(TEST_STRING, TEST_VAL);
    expect(result.get(TEST_STRING)).toEqual(TEST_VAL);
  });

  it('set method takes an object and sets key/val', () => {
    const result = Global;
    const TEST_KEY = 'testingObj';
    const TEST_VAL = 'test-val';
    expect(result.get(TEST_KEY)).toEqual(undefined);
    const TEST_OBJ = {};
    TEST_OBJ[TEST_KEY] = TEST_VAL;

    result.set(TEST_OBJ);
    expect(result.get(TEST_KEY)).toEqual(TEST_VAL);
  });
});
