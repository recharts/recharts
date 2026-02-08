import React from 'react';
import { describe, it } from 'vitest';
import { Sankey, getRelativeCoordinate, SankeyNodeProps, SankeyLinkProps, SankeyElementType } from '../../src';

describe('Sankey types', () => {
  it('should allow calling getRelativeCoordinate with the type provided by Recharts event handler', () => {
    return (
      <Sankey
        data={{ nodes: [], links: [] }}
        onClick={(_item: SankeyNodeProps | SankeyLinkProps, _type: SankeyElementType, e) => {
          getRelativeCoordinate(e);
        }}
        onMouseEnter={(_item: SankeyNodeProps | SankeyLinkProps, _type: SankeyElementType, e) => {
          getRelativeCoordinate(e);
        }}
        onMouseLeave={(_item: SankeyNodeProps | SankeyLinkProps, _type: SankeyElementType, e) => {
          getRelativeCoordinate(e);
        }}
      />
    );
  });
});
