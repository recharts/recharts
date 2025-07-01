import * as recharts from '../../src';

const availableComponents = Object.keys(recharts).filter(key => !['default', '__esModule'].includes(key));

export function generateImports(sourceCode: string): string {
  // Find used components in the source code
  const used = new Set<string>();
  availableComponents.forEach(component => {
    // Match usage as JSX tag: <Component or </Component
    const regex = new RegExp(`<\\/?${component}\\b`);
    if (regex.test(sourceCode)) {
      used.add(component);
    }
  });
  if (used.size === 0) return '';
  return `import { ${Array.from(used).toSorted().join(', ')} } from 'recharts';`;
}
