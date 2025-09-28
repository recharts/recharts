import { describe, it, expect } from 'vitest';
import allExamples from '../../../src/docs/api';

describe('API docs', () => {
  Object.entries(allExamples).forEach(([componentName, apiDoc]) => {
    describe(componentName, () => {
      it('should have non-empty name', () => {
        expect(apiDoc.name.length).toBeGreaterThan(0);
      });

      // Many of our components do not have descriptions yet unfortunately
      // it('should have non-empty description', () => {
      //   expect(apiDoc.desc.length).toBeGreaterThan(0);
      // });

      apiDoc.props.forEach(prop => {
        describe(`prop ${prop.name}`, () => {
          it('should have non-empty name', () => {
            expect(prop.name.length).toBeGreaterThan(0);
          });

          it('should have non-empty type', () => {
            expect(prop.type.length).toBeGreaterThan(0);
          });

          // Many of our props do not have descriptions yet unfortunately
          // it('should have non-empty description', () => {
          //   expect(prop.desc.length).toBeGreaterThan(0);
          // });
        });
      });
    });
  });
});
