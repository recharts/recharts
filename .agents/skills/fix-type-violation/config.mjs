import path from 'node:path';
import { fileURLToPath } from 'node:url';

/** @type {import('../../shared/suppression-targets/lib.mjs').SkillConfig} */
export const config = {
  name: 'fix-type-violation',
  description: 'type-safety',
  /**
   * In the order of preference when two targets have the same violation count.
   */
  rules: [
    '@typescript-eslint/no-non-null-assertion',
    '@typescript-eslint/consistent-type-assertions',
    '@typescript-eslint/no-explicit-any',
  ],
  skipListFile: path.join(path.dirname(fileURLToPath(import.meta.url)), 'skipped.json'),
  uncheckedFolders: ['omnidoc/', 'scripts/'],
};
