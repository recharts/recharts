import { existsSync } from 'fs';
import { describe, it, expect } from 'vitest';
import { globSync } from 'glob';

import packageJson from '../package.json';

/**
 * If you see this test failing it means the build output has changed.
 *
 * If that is intentional - for example, you added a new file, or a new Chart type, all good!
 * Change the test and run build again.
 * If the test failure is in snapshots, then update the snapshots by running this command:
 *
 *    npm run test-build-output -- --update
 *
 * If you did not expect the output to change, then consider going back and review your changes.
 * We do not want to npm publish too many files, or not enough files.
 */
describe('expected folder structure', () => {
  describe('package.json', () => {
    it('should include output files', () => {
      expect(packageJson.files).toHaveLength(5);
      expect(packageJson.files).toContain('*.md');
      expect(packageJson.files).toContain('types');
      expect(packageJson.files).toContain('es6');
      expect(packageJson.files).toContain('umd');
      expect(packageJson.files).toContain('lib');
    });

    it('should point to a main file', () => {
      expect(packageJson.main).toEqual('lib/index.js');
      expect(existsSync(`./${packageJson.main}`)).toBe(true);
    });

    it('should point to a main module file', () => {
      expect(packageJson.module).toEqual('es6/index.js');
      expect(existsSync(`./${packageJson.module}`)).toBe(true);
    });

    it('should point to a jsnext:main file', () => {
      expect(packageJson['jsnext:main']).toEqual('es6/index.js');
      expect(existsSync(`./${packageJson['jsnext:main']}`)).toBe(true);
    });

    it('should point to a types file', () => {
      expect(packageJson.types).toEqual('types/index.d.ts');
      expect(existsSync(`./${packageJson.types}`)).toBe(true);
    });
  });

  describe('types folder output', () => {
    it('should have expected files and no more', () => {
      expect(globSync('types/**/*', { dot: true })).toMatchFileSnapshot('./snapshots/typesFiles.txt');
    });
  });

  describe('es6 folder output', () => {
    it('should have expected files and no more', () => {
      expect(globSync('es6/**/*', { dot: true })).toMatchFileSnapshot('./snapshots/es6Files.txt');
    });
  });

  describe('markdown files output', () => {
    it('should have expected files and no more', () => {
      expect(globSync('*.md', { dot: true })).toMatchFileSnapshot('./snapshots/markdownFiles.txt');
    });
  });

  describe('umd folder output', () => {
    it('should have expected files and no more', () => {
      expect(globSync('umd/**/*', { dot: true })).toMatchFileSnapshot('./snapshots/umdFiles.txt');
    });
  });

  describe('lib folder output', () => {
    it('should have expected files and no more', () => {
      expect(globSync('lib/**/*', { dot: true })).toMatchFileSnapshot('./snapshots/libFiles.txt');
    });
  });
});
