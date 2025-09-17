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

  // Find the first non-whitespace character after the arrow
  const bodyStartIndex = arrowIndex + 2;
  let firstCharAfterArrow = '';
  let firstCharIndex = -1;
  for (let i = bodyStartIndex; i < cleanedCode.length; i++) {
    if (cleanedCode[i].trim() !== '') {
      firstCharAfterArrow = cleanedCode[i];
      firstCharIndex = i;
      break;
    }
  }

  let i: number;

  if (firstCharAfterArrow === '{') {
    // Function with a block body
    let braceCount = 1;
    i = firstCharIndex + 1;
    while (i < cleanedCode.length && braceCount > 0) {
      if (cleanedCode[i] === '{') braceCount++;
      else if (cleanedCode[i] === '}') braceCount--;
      i++;
    }
    if (braceCount !== 0) return cleanedCode;
  } else {
    // Concise body, ends at a comma
    const closingBracketIndex = cleanedCode.lastIndexOf('>');
    const commaIndex = cleanedCode.indexOf(',', closingBracketIndex + 1);
    if (commaIndex === -1) {
      // Assume it ends at the end of the object
      i = cleanedCode.lastIndexOf('}');
    } else {
      i = commaIndex;
    }
  }

  // Extract the function string
  let result = cleanedCode.slice(fnStart, i).trim();

  const argsIndex = result.indexOf(',\n  args:');
  if (argsIndex > -1) {
    result = result.substring(0, argsIndex);
  }

  // Strip all arguments from the default function: (args: Record<string, any>) => { ... } -> () => { ... }
  result = result.replace(/^\(.*?\)\s*=>/, '() =>');

  // Remove {...args} from JSX, e.g. <Brush {...args} /> -> <Brush />
  result = result.replace(/\{\.\.\.args\}/g, '');

  return `export default ${result}`;
}
