import { describe, expect, it } from 'vitest';
import { ProjectDocReader } from './readProject';

/**
 * Every export from src/index.ts is public API: changing it can break Recharts users.
 * The `@public` tag makes that visible at the declaration itself, so that nobody has to
 * trace exports back to src/index.ts before deciding how careful a change needs to be.
 *
 * The tag is informational only; the website does not render it.
 */
const HOW_TO_FIX =
  'Add a JSDoc `@public` tag to the declaration. It marks the export as public API; the website does not render it.';

describe('@public tags on public exports', () => {
  const projectReader = new ProjectDocReader();
  const allExports = projectReader.getAllExportedNames();

  it('should read something out of src/index.ts, otherwise the rest of this suite passes vacuously', () => {
    expect(allExports.length).toBeGreaterThan(100);
  });

  it('should have a @public tag on every export', () => {
    const missing = allExports.filter(name => !projectReader.isMarkedPublic(name));

    expect(missing, `${missing.length} export(s) from src/index.ts have no @public tag. ${HOW_TO_FIX}`).toEqual([]);
  });

  it('should not have more than one @public tag on the same export', () => {
    const duplicated = allExports.filter(
      name => (projectReader.getComponentJsDocMeta(name)?.tags.filter(([tag]) => tag === 'public').length ?? 0) > 1,
    );

    expect(duplicated, 'An export must have at most one @public tag - remove the extra one(s).').toEqual([]);
  });
});
