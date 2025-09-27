import { describe, it, expect } from 'vitest';
import allApiExamples from '../../../src/docs/apiExamples';

describe('API Examples', () => {
  Object.entries(allApiExamples).forEach(([componentName, examples]) => {
    describe(componentName, () => {
      it('should have at least one example', () => {
        expect(examples.length).toBeGreaterThan(0);
      });

      examples.forEach((example, index) => {
        it(`example ${index + 1} should have a demo source code`, () => {
          expect(example.code.length).toBeGreaterThan(0);
        });
      });
    });
  });
});
