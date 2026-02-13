import React from 'react';
import { describe, it } from 'vitest';
import { getRelativeCoordinate, LineChart, TickItem, XAxis } from '../../../src';

describe('XAxis types', () => {
  it('should allow calling getRelativeCoordinate with the type provided by Recharts event handler', () => {
    return (
      <LineChart width={100} height={100}>
        <XAxis
          onClick={(_tick: TickItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseDown={(_tick: TickItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseUp={(_tick: TickItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseMove={(_tick: TickItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseLeave={(_tick: TickItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseOver={(_tick: TickItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseOut={(_tick: TickItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseEnter={(_tick: TickItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onTouchStart={(_tick: TickItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onTouchMove={(_tick: TickItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onTouchEnd={(_tick: TickItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
        />
      </LineChart>
    );
  });
});
