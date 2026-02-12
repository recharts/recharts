import React from 'react';
import { describe, it } from 'vitest';
import { Cross, getRelativeCoordinate } from '../../src';

describe('Cross types', () => {
  it('should allow calling getRelativeCoordinate with the type provided by Recharts event handler', () => {
    return (
      <Cross
        x={10}
        y={10}
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
