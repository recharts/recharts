import React from 'react';
import { describe, it } from 'vitest';
import { ReferenceDot, LineChart, getRelativeCoordinate, DotProps } from '../../src';

describe('ReferenceDot types', () => {
  it('should allow calling getRelativeCoordinate with the type provided by Recharts event handler', () => {
    return (
      <LineChart width={100} height={100}>
        <ReferenceDot
          x={10}
          y={10}
          onClick={(_dotProps: DotProps, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseDown={(_dotProps: DotProps, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseUp={(_dotProps: DotProps, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseMove={(_dotProps: DotProps, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseLeave={(_dotProps: DotProps, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseOver={(_dotProps: DotProps, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseOut={(_dotProps: DotProps, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseEnter={(_dotProps: DotProps, e) => {
            getRelativeCoordinate(e);
          }}
          onTouchStart={(_dotProps: DotProps, e) => {
            getRelativeCoordinate(e);
          }}
          onTouchMove={(_dotProps: DotProps, e) => {
            getRelativeCoordinate(e);
          }}
          onTouchEnd={(_dotProps: DotProps, e) => {
            getRelativeCoordinate(e);
          }}
        />
      </LineChart>
    );
  });
});
