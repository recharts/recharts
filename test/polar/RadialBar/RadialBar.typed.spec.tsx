import React from 'react';
import { describe, it } from 'vitest';
import { getRelativeCoordinate, RadialBar, RadialBarChart, RadialBarDataItem } from '../../../src';

describe('RadialBar types', () => {
  it('should allow calling getRelativeCoordinate with the type provided by Recharts event handler', () => {
    return (
      <RadialBarChart>
        <RadialBar
          dataKey="foo"
          onClick={(_data: RadialBarDataItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseDown={(_data: RadialBarDataItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseUp={(_data: RadialBarDataItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseMove={(_data: RadialBarDataItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseLeave={(_data: RadialBarDataItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseOver={(_data: RadialBarDataItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseOut={(_data: RadialBarDataItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseEnter={(_data: RadialBarDataItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onTouchStart={(_data: RadialBarDataItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onTouchMove={(_data: RadialBarDataItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onTouchEnd={(_data: RadialBarDataItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
        />
      </RadialBarChart>
    );
  });
});
