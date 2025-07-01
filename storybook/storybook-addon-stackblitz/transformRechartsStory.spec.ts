import { describe, it, expect } from 'vitest';
import { transformRechartsStory } from './transformRechartsStory';

describe('transformRechartsStory', () => {
  it('should extract the render function from the code snippet and strip the type', () => {
    const codeSnippet =
      '{\n  render: (args: Record<string, any>) => {\n    return <p>expected</p>;\n  },\n  args: {\n    ...getStoryArgsFromArgsTypesObject(BarChartProps)  }\n}';
    const expected = 'export default () => {\n    return <p>expected</p>;\n  }';
    const actual = transformRechartsStory(codeSnippet);
    expect(actual).toBe(expected);
  });

  it('should extract the render function from the code snippet even if the code snippet has } in it', () => {
    const codeSnippet =
      '{\n  render: (args: Record<string, any>) => {\n    return <p>{args.name}</p>;\n  },\n  args: {\n    ...getStoryArgsFromArgsTypesObject(BarChartProps)  }\n}';
    const expected = 'export default () => {\n    return <p>{args.name}</p>;\n  }';
    const actual = transformRechartsStory(codeSnippet);
    expect(actual).toBe(expected);
  });
});
