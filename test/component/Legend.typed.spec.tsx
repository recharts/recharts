import React from 'react';
import { describe, it } from 'vitest';
import { Legend, getRelativeCoordinate } from '../../src';

describe('Legend types', () => {
  it('should allow calling getRelativeCoordinate with the type provided by Recharts event handler', () => {
    return (
      <Legend
        onClick={(_data, _index, e) => {
          getRelativeCoordinate(e);
        }}
        onMouseEnter={(_data, _index, e) => {
          getRelativeCoordinate(e);
        }}
        onMouseLeave={(_data, _index, e) => {
          getRelativeCoordinate(e);
        }}
      />
    );
  });
});
