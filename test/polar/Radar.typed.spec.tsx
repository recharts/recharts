import React from 'react';
import { describe, it } from 'vitest';
import { Radar, RadarChart, getRelativeCoordinate, InternalRadarProps } from '../../src';

describe('Radar types', () => {
  it('should allow calling getRelativeCoordinate with the type provided by Recharts event handler', () => {
    return (
      <RadarChart width={100} height={100}>
        <Radar
          dataKey="foo"
          onClick={e => {
            getRelativeCoordinate(e);
          }}
          onMouseDown={e => {
            getRelativeCoordinate(e);
          }}
          onMouseUp={e => {
            getRelativeCoordinate(e);
          }}
          onMouseMove={e => {
            getRelativeCoordinate(e);
          }}
          onMouseLeave={(_data: InternalRadarProps, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseOver={e => {
            getRelativeCoordinate(e);
          }}
          onMouseOut={e => {
            getRelativeCoordinate(e);
          }}
          onMouseEnter={(_data: InternalRadarProps, e) => {
            getRelativeCoordinate(e);
          }}
          onTouchStart={e => {
            getRelativeCoordinate(e);
          }}
          onTouchMove={e => {
            getRelativeCoordinate(e);
          }}
          onTouchEnd={e => {
            getRelativeCoordinate(e);
          }}
        />
      </RadarChart>
    );
  });
});
