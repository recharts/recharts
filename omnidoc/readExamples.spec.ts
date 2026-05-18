import { Project } from 'ts-morph';
import { describe, it, expect } from 'vitest';
import { ExampleReader, unwrapObjectLiteralExpression } from './readExamples';

describe('unwrapObjectLiteralExpression', () => {
  it('should unwrap object literals wrapped in satisfies expressions', () => {
    const project = new Project({ useInMemoryFileSystem: true });
    const sourceFile = project.createSourceFile(
      'example.ts',
      `const direct = { example: true };
const wrapped = { example: true } satisfies Record<string, boolean>;`,
    );

    const direct = sourceFile.getVariableDeclarationOrThrow('direct');
    const wrapped = sourceFile.getVariableDeclarationOrThrow('wrapped');

    expect(unwrapObjectLiteralExpression(direct.getInitializer())?.getProperty('example')).toBeDefined();
    expect(unwrapObjectLiteralExpression(wrapped.getInitializer())?.getProperty('example')).toBeDefined();
  });
});

describe('ExampleReader', () => {
  const reader = new ExampleReader();

  it('should find examples for AreaChart', () => {
    const examples = reader.getExamples('AreaChart');
    expect(examples).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          url: '/examples/AreaChartExample/',
          name: 'Simple Area Chart',
        }),
        expect.objectContaining({
          url: '/examples/StackedAreaChart/',
          name: 'Stacked Area Chart',
        }),
      ]),
    );
    expect(examples.length).toBeGreaterThan(5);
  });

  it('should find examples for a prop', () => {
    const examples = reader.getExamples('AreaChart', 'data');
    expect(examples).toEqual(expect.arrayContaining([expect.objectContaining({ url: '/examples/AreaChartExample/' })]));
    expect(examples.length).toBeGreaterThan(0);
  });

  it('should find examples for YAxis', () => {
    const examples = reader.getExamples('YAxis');
    expect(examples.length).toBeGreaterThan(0);
  });

  it('should find examples for YAxis width prop', () => {
    const examples = reader.getExamples('YAxis', 'width');
    expect(examples).toEqual(expect.arrayContaining([expect.objectContaining({ url: '/examples/AreaChartExample/' })]));
    expect(examples.length).toBeGreaterThan(0);
  });

  it('should find examples for LineChart', () => {
    const examples = reader.getExamples('LineChart');
    expect(examples).toContainEqual(
      expect.objectContaining({
        name: 'Multiple X Axes',
        url: '/examples/MultiXAxisExample/',
      }),
    );
    expect(examples.length).toBeGreaterThan(1);
  });

  it('should find API examples from defaultToolTab coverage', () => {
    const examples = reader.getExamples('useXAxisTicks');
    expect(examples).toContainEqual(
      expect.objectContaining({
        name: 'useXAxisTicks API example',
        url: '/api/useXAxisTicks/',
      }),
    );
  });
});
