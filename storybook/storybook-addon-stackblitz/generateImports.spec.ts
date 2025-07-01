import { describe, it, expect } from 'vitest';
import { generateImports } from './generateImports';

describe('generateImports', () => {
  it('should add imports to the code snippet', () => {
    const codeSnippet = `() => {
    return <BarChart data={data}>
      <Bar dataKey="foo" />
      <Tooltip />
      <Legend />
      <g />
    </BarChart>
    }`;
    const expected = `import { Bar, BarChart, Legend, Tooltip } from 'recharts';`;
    const actual = generateImports(codeSnippet);
    expect(actual).toBe(expected);
  });
});
