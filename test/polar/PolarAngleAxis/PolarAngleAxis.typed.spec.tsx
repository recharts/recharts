import React from 'react';
import { describe, it } from 'vitest';
import { PolarAngleAxis, RadialBarChart, getRelativeCoordinate, TickItem } from '../../../src';

describe('PolarAngleAxis types', () => {
  it('should allow calling getRelativeCoordinate with the type provided by Recharts event handler', () => {
    return (
      <RadialBarChart width={100} height={100}>
        <PolarAngleAxis
          onClick={(_axisProps: TickItem, _index: number, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseDown={(_axisProps: TickItem, _index: number, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseUp={(_axisProps: TickItem, _index: number, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseMove={(_axisProps: TickItem, _index: number, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseLeave={(_axisProps: TickItem, _index: number, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseOver={(_axisProps: TickItem, _index: number, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseOut={(_axisProps: TickItem, _index: number, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseEnter={(_axisProps: TickItem, _index: number, e) => {
            getRelativeCoordinate(e);
          }}
          onTouchStart={(_axisProps: TickItem, _index: number, e) => {
            getRelativeCoordinate(e);
          }}
          onTouchMove={(_axisProps: TickItem, _index: number, e) => {
            getRelativeCoordinate(e);
          }}
          onTouchEnd={(_axisProps: TickItem, _index: number, e) => {
            getRelativeCoordinate(e);
          }}
        />
      </RadialBarChart>
    );
  });
});
