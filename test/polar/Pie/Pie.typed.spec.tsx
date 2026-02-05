import React from 'react';
import { describe, it } from 'vitest';
import { getRelativeCoordinate, Pie, PieChart, PieSectorDataItem } from '../../../src';

describe('Pie types', () => {
  it('should allow calling getRelativeCoordinate with the type provided by Recharts event handler', () => {
    return (
      <PieChart>
        <Pie
          onClick={(_data: PieSectorDataItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseDown={(_data: PieSectorDataItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseUp={(_data: PieSectorDataItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseMove={(_data: PieSectorDataItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseLeave={(_data: PieSectorDataItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseOver={(_data: PieSectorDataItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseOut={(_data: PieSectorDataItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseEnter={(_data: PieSectorDataItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onTouchStart={(_data: PieSectorDataItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onTouchMove={(_data: PieSectorDataItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onTouchEnd={(_data: PieSectorDataItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
        />
      </PieChart>
    );
  });
});
