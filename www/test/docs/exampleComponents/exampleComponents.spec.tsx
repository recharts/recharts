import * as React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import { allExamples } from '../../../src/docs/exampleComponents';
// eslint-disable-next-line import/no-relative-packages
import { mockGetBoundingClientRect } from '../../../../test/helper/mockGetBoundingClientRect';

class MockResizeObserver {
  observe() {}

  unobserve() {}

  disconnect() {}
}

describe('Example Components', () => {
  Object.entries(allExamples).forEach(([componentName, { examples }]) => {
    describe(componentName, () => {
      it('should have at least one example', () => {
        expect(Object.values(examples).length).toBeGreaterThan(0);
      });

      Object.entries(examples).forEach(([key, example]) => {
        describe(`example ${key}`, () => {
          beforeEach(() => {
            window.ResizeObserver = MockResizeObserver;
            mockGetBoundingClientRect({ width: 100, height: 100 });
          });

          it('should have a non-empty name', () => {
            expect(example.name.length).toBeGreaterThan(0);
          });

          it(`should have a demo source code`, () => {
            expect(example.sourceCode.length).toBeGreaterThan(0);
          });

          it('should have an example that renders something and does not throw', () => {
            const { Component } = example;
            expect(() => render(<Component />)).not.toThrow();
          });
        });
      });
    });
  });
});
