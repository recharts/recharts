/**
 * @fileOverview runs both omnidoc generators in a single process.
 *
 * Both generators walk the same exports, and `generateStorybookArgs` calls `generateApiDoc` on
 * every component just like `generateApiDoc` does. Running them as two processes meant paying for
 * two cold `ProjectDocReader` and `ExampleReader` instances and doing that shared work twice.
 * Sharing both readers lets the second generator read the caches the first one warmed up.
 */
import { ProjectDocReader } from './readProject';
import { ExampleReader } from './readExamples';
import { main as generateApiDocs } from './generateApiDoc';
import { main as generateStorybookArgs } from './generateStorybookArgs';

async function main() {
  const projectReader = new ProjectDocReader();
  const exampleReader = new ExampleReader();

  await generateApiDocs(projectReader, exampleReader);
  await generateStorybookArgs(projectReader, exampleReader);
}

main();
