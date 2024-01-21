import { render, screen } from '@testing-library/react';
import React from 'react';
import { vi } from 'vitest';
import { getStringSize } from '../../src/util/DOMUtils';

/**
 * getBoundingClientRect always returns 0 in jsdom, we can't test for actual returned string size
 * Execution order matters
 * https://github.com/jsdom/jsdom/issues/1590#issuecomment-578350151
 * */
describe('DOMUtils', () => {
  test('getStringSize() returns 0', () => {
    expect(getStringSize(undefined)).toEqual({ width: 0, height: 0 });
  });

  test('getStringSize() with value returns mocked getBoundingClientRect values', () => {
    render(<span id="recharts_measurement_span">test</span>);
    const span = screen.getByText('test');
    span.getBoundingClientRect = vi.fn(() => ({
      x: 200,
      y: 100,
      width: 25,
      height: 17,
      top: 10,
      right: 10,
      bottom: 10,
      left: 10,
      toJSON: vi.fn(),
    }));

    expect(getStringSize('test')).toEqual({
      width: 25,
      height: 17,
    });
  });
});
