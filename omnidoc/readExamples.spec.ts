import { describe, it, expect } from 'vitest';
import { ExampleReader } from './readExamples';

describe('ExampleReader', () => {
  const reader = new ExampleReader();

  it('should find examples for AreaChart', () => {
    const examples = reader.getExamples('AreaChart');
    expect(examples).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          url: '/examples/SimpleAreaChart/',
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
    expect(examples).toEqual(expect.arrayContaining([expect.objectContaining({ url: '/examples/SimpleAreaChart/' })]));
    expect(examples.length).toBeGreaterThan(0);
  });

  it('should find examples for YAxis', () => {
    const examples = reader.getExamples('YAxis');
    expect(examples.length).toBeGreaterThan(0);
  });

  it('should find examples for YAxis width prop', () => {
    const examples = reader.getExamples('YAxis', 'width');
    expect(examples).toEqual(expect.arrayContaining([expect.objectContaining({ url: '/examples/SimpleAreaChart/' })]));
    expect(examples.length).toBeGreaterThan(0);
  });

  it('should find examples for LineChart from API examples', () => {
    const examples = reader.getExamples('LineChart');
    expect(examples).toContainEqual({
      url: '/api/LineChart/',
      name: 'Simple Line Chart Example',
    });
    expect(examples).toContainEqual({
      name: 'Multiple X Axes',
      url: '/examples/MultiXAxisExample/',
    });
  });
});
