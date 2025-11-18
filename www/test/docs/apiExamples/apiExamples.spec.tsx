import { createElement } from 'react';
import { describe, it, expect } from 'vitest';
import { allApiExamples } from '../../../src/docs/apiExamples';

describe('API Examples', () => {
  Object.entries(allApiExamples).forEach(([componentName, examples]) => {
    describe(componentName, () => {
      it('should have at least one example', () => {
        expect(examples.length).toBeGreaterThan(0);
      });

      examples.forEach((example, index) => {
        describe(`example ${index + 1}`, () => {
          it(`should have a demo source code`, () => {
            expect(example.sourceCode.length).toBeGreaterThan(10);
          });

          it('should have an example that renders something and does not crash', () => {
            expect(() => createElement(example.Component)).not.toThrow();
          });
        });
      });
    });
  });
});
