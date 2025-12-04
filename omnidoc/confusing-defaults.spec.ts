import { describe, expect, test } from 'vitest';
import { ProjectDocReader } from './readProject';
import { ApiDocReader } from './readApiDoc';
import { StorybookDocReader } from './readStorybookDoc';

describe('confusing defaults', () => {
  const projectReader = new ProjectDocReader();
  const apiDocReader = new ApiDocReader();
  const storybookReader = new StorybookDocReader();

  /*
   * These are string values that look like primitives,
   * but are actually strings.
   * They behave differently than the actual primitives!
   * For example, a default value of 'false' (string) will render the literal string "false",
   * but the primitive false will render nothing.
   * Never use these as default values!
   *
   * '0' is here as well because the default Axis id is `0` (number), not `'0'` (string).
   * Passing a string '0' may match to non-existent axis, causing confusion.
   */
  const bannedValues: ReadonlyArray<unknown> = ['null', 'undefined', 'NaN', '[]', '{}', 'true', 'false', '0'];

  describe('never use primitives as strings, always use booleans', () => {
    describe('in project', () => {
      test.each(projectReader.getPublicComponentNames())('%s', component => {
        const problematicProps: Array<{ component: string; prop: string; defaultValue: unknown }> = [];
        const allProps = projectReader.getRechartsPropsOf(component);
        for (const prop of allProps) {
          /*
           * Because everything coming out of JSDoc is inevitably a string,
           * we ignore JSDoc here as the type definition is not reliable.
           */
          const defaultValue = projectReader.getDefaultValueOf(component, prop, false);
          if (defaultValue.type === 'known') {
            if (bannedValues.includes(defaultValue.value)) {
              problematicProps.push({ component, prop, defaultValue: defaultValue.value });
            }
          }
        }
        expect(problematicProps).toEqual([]);
      });
    });

    describe('API docs', () => {
      test.each(apiDocReader.getPublicComponentNames())('%s', component => {
        const problematicProps: Array<{ component: string; prop: string; defaultValue: unknown }> = [];
        const allProps = apiDocReader.getRechartsPropsOf(component);
        for (const prop of allProps) {
          const defaultValue = apiDocReader.getDefaultValueOf(component, prop);
          if (defaultValue.type === 'known') {
            if (bannedValues.includes(defaultValue.value)) {
              problematicProps.push({ component, prop, defaultValue: defaultValue.value });
            }
          }
        }
        expect(problematicProps).toEqual([]);
      });
    });

    describe('Storybook', () => {
      test.each(storybookReader.getPublicComponentNames())('%s', component => {
        const problematicProps: Array<{ component: string; prop: string; defaultValue: unknown }> = [];
        const allProps = storybookReader.getRechartsPropsOf(component);
        for (const prop of allProps) {
          const defaultValue = storybookReader.getDefaultValueOf(component, prop);
          if (defaultValue.type === 'known') {
            if (bannedValues.includes(defaultValue.value)) {
              problematicProps.push({ component, prop, defaultValue: defaultValue.value });
            }
          }
        }
        expect(problematicProps).toEqual([]);
      });
    });
  });
});
