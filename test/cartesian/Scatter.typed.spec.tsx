import React from 'react';
import { describe, it } from 'vitest';
import { Scatter, ScatterChart, getRelativeCoordinate, ScatterPointItem } from '../../src';

describe('Scatter types', () => {
  it('should allow calling getRelativeCoordinate with the type provided by Recharts event handler', () => {
    return (
      <ScatterChart width={100} height={100}>
        <Scatter
          dataKey="foo"
          onClick={(_data: ScatterPointItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseDown={(_data: ScatterPointItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseUp={(_data: ScatterPointItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseMove={(_data: ScatterPointItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseLeave={(_data: ScatterPointItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseOver={(_data: ScatterPointItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseOut={(_data: ScatterPointItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseEnter={(_data: ScatterPointItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onTouchStart={(_data: ScatterPointItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onTouchMove={(_data: ScatterPointItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onTouchEnd={(_data: ScatterPointItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
        />
      </ScatterChart>
    );
  });
});
