export function transformRechartsStory(code: string): string {
  // Find the position of 'render:'
  const renderIndex = code.indexOf('render:');
  if (renderIndex === -1) return code;

  // Find the start of the function (should be '(' after 'render:')
  const fnStart = code.indexOf('(', renderIndex);
  if (fnStart === -1) return code;

  // Find the arrow '=>'
  const arrowIndex = code.indexOf('=>', fnStart);
  if (arrowIndex === -1) return code;

  // Find the opening brace '{' after the arrow
  const bodyStart = code.indexOf('{', arrowIndex);
  if (bodyStart === -1) return code;

  // Now, find the matching closing brace for the function body
  let braceCount = 1;
  let i = bodyStart + 1;
  while (i < code.length && braceCount > 0) {
    if (code[i] === '{') braceCount++;
    else if (code[i] === '}') braceCount--;
    i++;
  }
  if (braceCount !== 0) return code;

  // Extract the function string
  let fnString = code.slice(fnStart, i).trim();

  // Strip all arguments from the default function: (args: Record<string, any>) => { ... } -> () => { ... }
  fnString = fnString.replace(/^\(.*?\)\s*=>/, '() =>');

  return `export default ${fnString}`;
}
