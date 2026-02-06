import React from 'react';
import { describe, it } from 'vitest';
import { Funnel, FunnelChart, FunnelTrapezoidItem, getRelativeCoordinate } from '../../src';

describe('Funnel types', () => {
  it('should allow calling getRelativeCoordinate with the type provided by Recharts event handler', () => {
    return (
      <FunnelChart width={100} height={100}>
        <Funnel
          dataKey="foo"
          onClick={(_data: FunnelTrapezoidItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseDown={(_data: FunnelTrapezoidItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseUp={(_data: FunnelTrapezoidItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseMove={(_data: FunnelTrapezoidItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseLeave={(_data: FunnelTrapezoidItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseOver={(_data: FunnelTrapezoidItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseOut={(_data: FunnelTrapezoidItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseEnter={(_data: FunnelTrapezoidItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onTouchStart={(_data: FunnelTrapezoidItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onTouchMove={(_data: FunnelTrapezoidItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onTouchEnd={(_data: FunnelTrapezoidItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
        />
      </FunnelChart>
    );
  });
});
