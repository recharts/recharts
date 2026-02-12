import React from 'react';
import { describe, it } from 'vitest';
import { Curve, CurveProps, getRelativeCoordinate } from '../../src';

describe('Curve types', () => {
  it('should allow calling getRelativeCoordinate with the type provided by Recharts event handler', () => {
    return (
      <Curve
        onClick={(_curveProps: CurveProps, e) => {
          getRelativeCoordinate(e);
        }}
        onMouseDown={(_curveProps: CurveProps, e) => {
          getRelativeCoordinate(e);
        }}
        onMouseUp={(_curveProps: CurveProps, e) => {
          getRelativeCoordinate(e);
        }}
        onMouseMove={(_curveProps: CurveProps, e) => {
          getRelativeCoordinate(e);
        }}
        onMouseLeave={(_curveProps: CurveProps, e) => {
          getRelativeCoordinate(e);
        }}
        onMouseOver={(_curveProps: CurveProps, e) => {
          getRelativeCoordinate(e);
        }}
        onMouseOut={(_curveProps: CurveProps, e) => {
          getRelativeCoordinate(e);
        }}
        onMouseEnter={(_curveProps: CurveProps, e) => {
          getRelativeCoordinate(e);
        }}
        onTouchStart={(_curveProps: CurveProps, e) => {
          getRelativeCoordinate(e);
        }}
        onTouchMove={(_curveProps: CurveProps, e) => {
          getRelativeCoordinate(e);
        }}
        onTouchEnd={(_curveProps: CurveProps, e) => {
          getRelativeCoordinate(e);
        }}
      />
    );
  });
});
