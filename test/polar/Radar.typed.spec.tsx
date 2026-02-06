import React from 'react';
import { describe, it } from 'vitest';
import { Radar, RadarChart, getRelativeCoordinate } from '../../src';

describe('Radar types', () => {
  it('should allow calling getRelativeCoordinate with the type provided by Recharts event handler', () => {
    return (
      <RadarChart width={100} height={100}>
        <Radar
          dataKey="foo"
          onClick={(_data: any, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseDown={(_data: any, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseUp={(_data: any, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseMove={(_data: any, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseLeave={(_data: any, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseOver={(_data: any, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseOut={(_data: any, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseEnter={(_data: any, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onTouchStart={(_data: any, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onTouchMove={(_data: any, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onTouchEnd={(_data: any, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
        />
      </RadarChart>
    );
  });
});
