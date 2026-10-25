import path from 'node:path';
import { fileURLToPath } from 'node:url';

/** @type {import('../../shared/suppression-targets/lib.mjs').SkillConfig} */
export const config = {
  name: 'fix-perf-violation',
  description: 'react-perf',
  /**
   * In the order of preference when two targets have the same violation count.
   */
  rules: [
    'react-perf/jsx-no-new-array-as-prop',
    'react-perf/jsx-no-new-function-as-prop',
    'react-perf/jsx-no-new-object-as-prop',
    'react-perf/jsx-no-jsx-as-prop',
  ],
  skipListFile: path.join(path.dirname(fileURLToPath(import.meta.url)), 'skipped.json'),
  uncheckedFolders: ['omnidoc/', 'scripts/'],
};
