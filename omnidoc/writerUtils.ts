import * as fs from 'fs';
import * as prettier from 'prettier';

/**
 * Writes content to a file, optionally formatting it with Prettier.
 *
 * @param outputPath The path to write the file to
 * @param content The content to write
 * @param prettierConfig The Prettier configuration to use (optional)
 * @param parser The Prettier parser to use (default: 'typescript')
 */
export async function writeFormattedFile(
  outputPath: string,
  content: string,
  prettierConfig: prettier.Options | null,
  parser: string = 'typescript',
): Promise<void> {
  const formattedContent = prettierConfig ? await prettier.format(content, { ...prettierConfig, parser }) : content;

  fs.writeFileSync(outputPath, formattedContent, 'utf-8');
  console.log(`✓ Generated ${outputPath}`);
}
