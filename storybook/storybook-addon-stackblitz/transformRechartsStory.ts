import { removeInspectorFromSource } from '../storybook-addon-recharts/removeInspectorFromSource';

export function transformRechartsStory(code: string): string {
  const cleanedCode = removeInspectorFromSource(code);

  // Find the position of 'render:'
  const renderIndex = cleanedCode.indexOf('render:');
  if (renderIndex === -1) return cleanedCode;

  // Find the start of the function (should be '(' after 'render:')
  const fnStart = cleanedCode.indexOf('(', renderIndex);
  if (fnStart === -1) return cleanedCode;

  // Find the arrow '=>'
  const arrowIndex = cleanedCode.indexOf('=>', fnStart);
  if (arrowIndex === -1) return cleanedCode;

  // Find the opening brace '{' after the arrow
  const bodyStart = cleanedCode.indexOf('{', arrowIndex);
  if (bodyStart === -1) return cleanedCode;

  // Now, find the matching closing brace for the function body
  let braceCount = 1;
  let i = bodyStart + 1;
  while (i < cleanedCode.length && braceCount > 0) {
    if (cleanedCode[i] === '{') braceCount++;
    else if (cleanedCode[i] === '}') braceCount--;
    i++;
  }
  if (braceCount !== 0) return cleanedCode;

  // Extract the function string
  let result = cleanedCode.slice(fnStart, i).trim();

  // Strip all arguments from the default function: (args: Record<string, any>) => { ... } -> () => { ... }
  result = result.replace(/^\(.*?\)\s*=>/, '() =>');

  return `export default ${result}`;
}
