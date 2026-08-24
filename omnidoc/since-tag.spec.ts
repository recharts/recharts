import { describe, expect, it } from 'vitest';
import { ProjectDocReader } from './readProject';
import { exportsGrandfatheredWithoutSinceTag } from './exportsGrandfatheredWithoutSinceTag';

/**
 * A `@since` tag must hold nothing but a plain version number, for example `3.10` or `4.0.1`.
 * Anything else - ranges, prose, `v` prefixes - makes the tag unusable for the website generator
 * which renders it verbatim as "Available since Recharts {version}".
 */
const VERSION_PATTERN = /^\d+\.\d+(\.\d+)?$/;

const HOW_TO_FIX =
  'Add a JSDoc `@since <version>` tag to the declaration, where <version> is the Recharts version that first ships it. Example: `@since 3.11`. Alternatively, mark the export `@experimental` if it is not ready to commit to a version yet.';

describe('@since tags on public exports', () => {
  const projectReader = new ProjectDocReader();
  const allExports = projectReader.getAllExportedNames();
  const grandfathered = new Set(exportsGrandfatheredWithoutSinceTag);

  it('should read something out of src/index.ts, otherwise the rest of this suite passes vacuously', () => {
    expect(allExports.length).toBeGreaterThan(100);
  });

  it('should have a @since tag on every export that is not grandfathered in or marked @experimental', () => {
    const missing = allExports.filter(
      name => !grandfathered.has(name) && projectReader.isStable(name) && projectReader.getSinceVersionOf(name) == null,
    );

    expect(missing, `${missing.length} export(s) from src/index.ts have no @since version. ${HOW_TO_FIX}`).toEqual([]);
  });

  it('should have a plain version number in every @since tag', () => {
    const malformed = allExports
      .map(name => ({ name, since: projectReader.getSinceVersionOf(name) }))
      .filter(({ since }) => since != null && !VERSION_PATTERN.test(since))
      .map(({ name, since }) => `${name}: "${since}"`);

    expect(malformed, 'A @since tag must contain only a version number, such as `@since 3.10`.').toEqual([]);
  });

  describe('tag cardinality', () => {
    function countTag(name: string, tagName: string): number {
      const jsDoc = projectReader.getComponentJsDocMeta(name);
      return jsDoc?.tags.filter(([tag]) => tag === tagName).length ?? 0;
    }

    it('should not have more than one @since tag on the same export', () => {
      const duplicated = allExports.filter(name => countTag(name, 'since') > 1);

      expect(duplicated, 'An export must have at most one @since tag - remove the extra one(s).').toEqual([]);
    });

    it('should not have more than one @experimental tag on the same export', () => {
      const duplicated = allExports.filter(name => countTag(name, 'experimental') > 1);

      expect(duplicated, 'An export must have at most one @experimental tag - remove the extra one(s).').toEqual([]);
    });

    it('should not have both @since and @experimental tags on the same export', () => {
      const both = allExports.filter(name => countTag(name, 'since') >= 1 && countTag(name, 'experimental') >= 1);

      expect(both, 'An export cannot be both stable (@since) and @experimental at the same time - pick one.').toEqual(
        [],
      );
    });
  });

  describe('grandfathered list hygiene', () => {
    it('should only list exports that still exist in src/index.ts', () => {
      const currentExports = new Set(allExports);
      const stale = exportsGrandfatheredWithoutSinceTag.filter(name => !currentExports.has(name));

      expect(stale, 'These are no longer exported from src/index.ts, remove them from the list.').toEqual([]);
    });

    it('should not list exports that already have a @since tag', () => {
      const documented = exportsGrandfatheredWithoutSinceTag.filter(
        name => projectReader.getSinceVersionOf(name) != null,
      );

      expect(documented, 'These are documented now - delete them from the list so they stay documented.').toEqual([]);
    });

    it('should not list exports that are marked @experimental, since those are exempt already', () => {
      const experimental = exportsGrandfatheredWithoutSinceTag.filter(name => !projectReader.isStable(name));

      expect(experimental, 'These are @experimental and do not need a @since tag - delete them from the list.').toEqual(
        [],
      );
    });

    it('should be sorted and free of duplicates so that diffs stay readable', () => {
      const sorted = [...exportsGrandfatheredWithoutSinceTag].sort((a, b) => a.localeCompare(b));

      expect(exportsGrandfatheredWithoutSinceTag).toEqual(sorted);
      expect(new Set(exportsGrandfatheredWithoutSinceTag).size).toEqual(exportsGrandfatheredWithoutSinceTag.length);
    });
  });
});
