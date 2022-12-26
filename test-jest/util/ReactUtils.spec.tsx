import React from 'react';
import { filterProps } from '../../src/util/types';

describe('ReactUtils unit tests', () => {
  test('should call filterProps with any boolean and return a null result', () => {
    expect(filterProps(true)).toBeNull();
    expect(filterProps(false)).toBeNull();
  });

  test('should call filterProps with a non-object and return null', () => {
    expect(filterProps(125 as {})).toBeNull();
  });

  test('should call filterProps with a react element extract properties and filter out non-svg properties', () => {
    expect(filterProps(<input id="test" value={1} />)).toEqual({ id: 'test' });
  });

  test('should pass props and filter out non wanted properties', () => {
    expect(filterProps({ test: '1234', helloWorld: 1234, viewBox: '0 0 0 0', dx: 1, dy: 1 })).toEqual({ dx: 1, dy: 1 });
  });

  test('should expect viewBox on type "svg"', () => {
    expect(filterProps({ test: '1234', helloWorld: 1234, viewBox: '0 0 0 0' }, false, 'svg')).toEqual({
      viewBox: '0 0 0 0',
    });
  });

  test('should include events when includeEvents is true', () => {
    expect(
      filterProps({ test: '1234', helloWorld: 1234, viewBox: '0 0 0 0', onClick: jest.fn() }, true, 'svg'),
    ).toEqual({
      viewBox: '0 0 0 0',
      onClick: expect.any(Function),
    });
  });

  test('should filter out "points" attribute when included without an svg type that explicitly uses "points"', () => {
    expect(filterProps({ test: '1234', points: '1234', onClick: jest.fn() }, true)).toEqual({
      onClick: expect.any(Function),
    });
  });
});
