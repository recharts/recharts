import React from 'react';
import { describe, it } from 'vitest';
import { Bar, BarChart, BarRectangleItem, getRelativeCoordinate } from '../../../src';

describe('Bar types', () => {
  it('should allow calling getRelativeCoordinate with the type provided by Recharts event handler', () => {
    return (
      <BarChart width={100} height={100}>
        <Bar
          dataKey="foo"
          onClick={(_data: BarRectangleItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseDown={(_data: BarRectangleItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseUp={(_data: BarRectangleItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseMove={(_data: BarRectangleItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseLeave={(_data: BarRectangleItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseOver={(_data: BarRectangleItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseOut={(_data: BarRectangleItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseEnter={(_data: BarRectangleItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onTouchStart={(_data: BarRectangleItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onTouchMove={(_data: BarRectangleItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onTouchEnd={(_data: BarRectangleItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
        />
      </BarChart>
    );
  });
});
