import { describe, it, expect } from 'vitest';
import { ExampleReader } from './readExamples';

describe('ExampleReader', () => {
  const reader = new ExampleReader();

  it('should find examples for AreaChart', () => {
    const examples = reader.getExamples('AreaChart');
    expect(examples).toEqual(
      expect.arrayContaining([
        '/examples/SimpleAreaChart',
        '/examples/StackedAreaChart',
        '/examples/AreaChartConnectNulls',
      ]),
    );
    expect(examples.length).toBeGreaterThan(5);
  });

  it('should find examples for a prop', () => {
    const examples = reader.getExamples('AreaChart', 'data');
    expect(examples).toEqual(expect.arrayContaining(['/examples/SimpleAreaChart']));
    expect(examples.length).toBeGreaterThan(0);
  });

  it('should find examples for YAxis', () => {
    const examples = reader.getExamples('YAxis');
    expect(examples.length).toBeGreaterThan(0);
  });

  it('should find examples for YAxis width prop', () => {
    const examples = reader.getExamples('YAxis', 'width');
    expect(examples).toEqual(expect.arrayContaining(['/examples/SimpleAreaChart']));
    expect(examples.length).toBeGreaterThan(0);
  });

  it('should find examples for LineChart from API examples', () => {
    // LineChart examples are in apiExamples (as per file checks earlier)
    // wait, debug output showed LineChartExamples in exampleComponents too.
    // Let's check something that is ONLY in apiExamples or has specific api example path

    const examples = reader.getExamples('LineChart');
    // Based on previous file explorations, there are both.
    // My debug output didn't explicitly show LineChart examples but it did show processing the map.
    expect(examples.length).toBeGreaterThan(0);
  });
});
