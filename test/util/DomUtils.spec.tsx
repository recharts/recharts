import { render } from '@testing-library/react';
import React from 'react';
import { getStringSize, MAX_CACHE_NUM } from '../../src/util/DOMUtils';
import { mockGetBoundingClientRect } from '../helper/mockGetBoundingClientRect';

describe('DOMUtils', () => {
  test('getStringSize() returns 0', () => {
    expect(getStringSize(undefined)).toEqual({ width: 0, height: 0 });
  });

  test('getStringSize() with value returns mocked getBoundingClientRect values', () => {
    render(<span id="recharts_measurement_span">test</span>);
    mockGetBoundingClientRect({
      x: 200,
      y: 100,
      width: 25,
      height: 17,
      top: 10,
      right: 10,
      bottom: 10,
      left: 10,
    });

    expect(getStringSize('test')).toEqual({
      width: 25,
      height: 17,
    });
  });

  test('getStringSize() reuses cached value', () => {
    render(<span id="recharts_measurement_span">hello</span>);
    mockGetBoundingClientRect({
      width: 100,
      height: 20,
    });

    const first = getStringSize('hello');
    expect(first).toEqual({ width: 100, height: 20 });

    // Change mocked values to see if cache is used
    mockGetBoundingClientRect({
      width: 999,
      height: 999,
    });

    const second = getStringSize('hello');
    expect(second).toEqual({ width: 100, height: 20 }); // cached value
  });

  test('getStringSize() evicts oldest cache entry when exceeding limit', () => {
    render(<span id="recharts_measurement_span">eviction</span>);

    for (let i = 0; i < MAX_CACHE_NUM + 1; i++) {
      mockGetBoundingClientRect({ width: i, height: 10 });
      getStringSize(`text-${i}`);
    }

    // expected the evicted key to be calculated again
    mockGetBoundingClientRect({ width: 9999, height: 999 });
    const result = getStringSize('text-0');

    expect(result).toEqual({ width: 9999, height: 999 }); // not cached
  });
});
