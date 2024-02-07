import * as fs from 'fs';
import * as path from 'path';

/**
 * test utility function to recursively read all files in a folder, particularly /types
 * requires tsc to be run in order to be accurate
 * @param dir directory to read files from
 * @returns list of files
 */
const getFiles = async (dir = 'types'): Promise<string[]> => {
  const dirents = await fs.promises.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    dirents.map(dirent => {
      const res = path.resolve(dir, dirent.name);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      return dirent.isDirectory() ? getFiles(res) : res;
    }),
  );
  return Array.prototype.concat(...files);
};

const files = await getFiles('types');

files.forEach(fileName => {
  const content = fs.readFileSync(fileName).toString();
  const testDisambiguator = fileName.split('/types/')[1];
  test(`should match ${testDisambiguator} snapshot`, () => {
    const stringContent = JSON.stringify(content);
    expect(stringContent).toMatchSnapshot();
  });
});

/**
 *
 * Uncomment this test to create a snapshot for all .d.ts files concatenated. When large diffs come through from TS upgrades this can be used
 * instead of copy-pasting the diffs from the above into a diff-checker 1 by 1.
 *
let total = '';
files.forEach(fileName => {
  const content = fs.readFileSync(fileName).toString();
  total += content;
});

test(`should match ALL snapshot`, () => {
  const stringContent = JSON.stringify(total);
  expect(stringContent).toMatchSnapshot();
});
 */
