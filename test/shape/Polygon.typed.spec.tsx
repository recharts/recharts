import React from 'react';
import { describe, it } from 'vitest';
import { Polygon, getRelativeCoordinate } from '../../src';

describe('Polygon types', () => {
  it('should allow calling getRelativeCoordinate with the type provided by Recharts event handler', () => {
    return (
      <Polygon
        points={[
          { x: 10, y: 10 },
          { x: 20, y: 20 },
        ]}
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
        onMouseLeave={e => {
          getRelativeCoordinate(e);
        }}
        onMouseOver={e => {
          getRelativeCoordinate(e);
        }}
        onMouseOut={e => {
          getRelativeCoordinate(e);
        }}
        onMouseEnter={e => {
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
    );
  });
});
