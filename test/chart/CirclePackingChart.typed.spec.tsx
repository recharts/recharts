import React from 'react';
import { describe, it } from 'vitest';
import { CirclePackingChart, CirclePackingNode, getRelativeCoordinate } from '../../src';

describe('CirclePackingChart types', () => {
  it('should allow event coordinates to be processed', () => {
    return (
      <CirclePackingChart
        width={400}
        height={400}
        data={[]}
        dataKey="value"
        onMouseEnter={(_node: CirclePackingNode, e) => {
          getRelativeCoordinate(e);
        }}
        onMouseLeave={(_node: CirclePackingNode, e) => {
          getRelativeCoordinate(e);
        }}
        onClick={(_node: CirclePackingNode, e) => {
          getRelativeCoordinate(e);
        }}
      />
    );
  });
});
