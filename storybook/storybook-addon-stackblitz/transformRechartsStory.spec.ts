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

  it('should remove the play function from the code snippet', () => {
    const codeSnippet =
      '{\n  render: (args: Record<string, any>) => {\n    return <p>expected</p>;\n  },\n  args: {\n    ...getStoryArgsFromArgsTypesObject(BarChartProps)  },\n  play: async () => {\n    // some play function\n  }\n}';
    const expected = 'export default () => {\n    return <p>expected</p>;\n  }';
    const actual = transformRechartsStory(codeSnippet);
    expect(actual).toBe(expected);
  });

  it('should return the original code if no render function is found', () => {
    const source = `
export const MassBarChartLogScale = () => {
return (
  <ResponsiveContainer width="100%" height={400}>
    <BarChart data={solarSystem} width={100} height={100}>
      <XAxis dataKey="name" />
      <YAxis
        scale="log"
        domain={[1e22, 3e30]}
        width={100}
        label={{ value: 'Mass log10[kg]', position: 'insideLeft', dx: 0, dy: 20, angle: -90 }}
      />
      <Bar dataKey="massKg" unit="kg" />
      <Tooltip />
    </BarChart>
  </ResponsiveContainer>
);
};`;
    const actual = transformRechartsStory(source);
    expect(actual).toBe(source);
  });

  it('should split recharts hook inspector component, if it is present', () => {
    const source = `
      const data = [{ name: 'Page A', uv: 4000, pv: 2400, amt: 2400 }];
      export default () => (
        <BarChart width={500} height={300} data={data}>
          <Bar dataKey="pv" fill="#8884d8" />
         <RechartsHookInspector rechartsInspectorEnabled={true} some other future='props' />
       </BarChart>
      );
    )`;
    const expected = `
      const data = [{ name: 'Page A', uv: 4000, pv: 2400, amt: 2400 }];
      export default () => (
        <BarChart width={500} height={300} data={data}>
          <Bar dataKey="pv" fill="#8884d8" />
       </BarChart>
      );
    )`;
    const actual = transformRechartsStory(source);
    expect(actual).toBe(expected);
  });
});
