import React from 'react';
import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import { Treemap, getRelativeCoordinate, TreemapNode } from '../../src';
import type { Props as TreemapProps } from '../../src/chart/Treemap';

type ExampleDataPoint = { size: number; name: string };
const data: ReadonlyArray<ExampleDataPoint> = [
  { size: 6308, name: 'aaa' },
  { size: 3908, name: 'bbb' },
];

describe('Treemap with strong typing', () => {
  it('should allow calling getRelativeCoordinate with the type provided by Recharts event handler', () => {
    return (
      <Treemap
        width={400}
        height={400}
        data={[]}
        dataKey="value"
        onMouseEnter={(_node: TreemapNode, e) => {
          getRelativeCoordinate(e);
        }}
        onMouseLeave={(_node: TreemapNode, e) => {
          getRelativeCoordinate(e);
        }}
        // onClick does not provide event in Treemap props currently
        onClick={(_node: TreemapNode) => {}}
      />
    );
  });

  it('should allow dataKey as a string that matches a key in the data', () => {
    const validProps: TreemapProps<ExampleDataPoint> = {
      data,
      dataKey: 'size',
      width: 400,
      height: 400,
    };

    expect(validProps).toBeDefined();
    render(<Treemap data={data} dataKey="size" width={400} height={400} isAnimationActive={false} />);
  });

  it('should allow dataKey as a function that receives the data object', () => {
    const validProps: TreemapProps<ExampleDataPoint> = {
      data,
      dataKey: (d: ExampleDataPoint) => d.size,
      width: 400,
      height: 400,
    };

    expect(validProps).toBeDefined();
  });

  it('should show error when dataKey refers to a property that does not exist in the data objects', () => {
    const invalidProps: TreemapProps<ExampleDataPoint> = {
      data,
      // @ts-expect-error TypeScript is correct here - 'nonExistentKey' is not a key of ExampleDataPoint
      dataKey: 'nonExistentKey',
      width: 400,
      height: 400,
    };

    expect(invalidProps).toBeDefined();
  });
});
