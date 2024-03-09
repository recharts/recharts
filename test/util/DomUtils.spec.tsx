import { render } from '@testing-library/react';
import React from 'react';
import { getStringSize } from '../../src/util/DOMUtils';
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
});
