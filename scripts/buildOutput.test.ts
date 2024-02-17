import { existsSync } from 'fs';
import { describe, test, expect } from 'vitest';

import packageJson from '../package.json';

describe('expected folder structure', () => {
  const expectedFolders: ReadonlyArray<string> = ['lib', 'es6', 'umd', 'types'];

  test.each(expectedFolders)('build output should include folder %s', folderName => {
    expect(existsSync(folderName)).toBe(true);
  });

  test.each(expectedFolders)('package.json should include folder %s', folderName => {
    expect(packageJson.files).toContain(folderName);
  });
});
