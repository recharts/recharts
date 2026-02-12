import React from 'react';
import { describe, it } from 'vitest';
import { Dot, DotProps, getRelativeCoordinate } from '../../src';

describe('Dot types', () => {
  it('should allow calling getRelativeCoordinate with the type provided by Recharts event handler', () => {
    return (
      <Dot
        cx={10}
        cy={10}
        r={5}
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
    );
  });
});
