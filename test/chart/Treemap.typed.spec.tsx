import React from 'react';
import { describe, it } from 'vitest';
import { Treemap, getRelativeCoordinate, TreemapNode } from '../../src';

describe('Treemap types', () => {
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
});
