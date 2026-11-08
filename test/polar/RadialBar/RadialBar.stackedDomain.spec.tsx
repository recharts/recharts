import React from 'react';
import { describe, expect, it } from 'vitest';
import { PolarAngleAxis, PolarRadiusAxis, RadialBar, RadialBarChart } from '../../../src';
import { createSelectorTestCase } from '../../helper/createSelectorTestCase';
import { selectPolarAxisDomain } from '../../../src/state/selectors/polarSelectors';

/**
 * Reads the outer arc of a sector path, `M x,y A rx,ry,rot,large,sweep,x2,y2 ...`,
 * and returns the angle of its end point in degrees, counterclockwise from 3 o'clock.
 */
function getEndAngleOfOuterArc(d: string, cx: number, cy: number): number {
  const match = /A\s*[\d.]+,[\d.]+,[\d.-]+,\s*[01],\s*[01],\s*([\d.-]+),\s*([\d.-]+)/.exec(d);
  if (match == null) {
    throw new Error(`No arc found in ${d}`);
  }
  const degrees = (Math.atan2(cy - Number(match[2]), Number(match[1]) - cx) * 180) / Math.PI;
  return (degrees + 360) % 360;
}

/**
 * https://github.com/recharts/recharts/issues/8159
 * The numeric axis of a stacked RadialBarChart must cover the stack totals,
 * not the largest single value.
 */
const data = [
  { name: 'A', a: 20, b: 20 },
  { name: 'B', a: 30, b: 0 },
];

describe('RadialBarChart stacked numeric domain', () => {
  describe('layout=radial', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <RadialBarChart width={400} height={400} data={data}>
        <PolarAngleAxis type="number" />
        <PolarRadiusAxis dataKey="name" type="category" />
        <RadialBar dataKey="a" stackId="s" isAnimationActive={false} />
        <RadialBar dataKey="b" stackId="s" isAnimationActive={false} />
        {children}
      </RadialBarChart>
    ));

    it('should make the angle axis domain cover the largest stack total', () => {
      const { spy } = renderTestCase(state => selectPolarAxisDomain(state, 'angleAxis', 0));
      expect(spy).toHaveBeenLastCalledWith([0, 40]);
    });

    it('should end each stack at the angle that matches its own total', () => {
      const { container } = renderTestCase();
      // The sector of series `a` in stack B covers 30 of the 40 domain: 270 degrees.
      const sectorB = container.querySelector('.recharts-radial-bar-sector[name="B"]');
      expect(sectorB).not.toBeNull();
      expect(getEndAngleOfOuterArc(sectorB?.getAttribute('d') ?? '', 200, 200)).toBeCloseTo(270, 0);
    });
  });

  describe('layout=centric', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <RadialBarChart width={400} height={400} data={data} layout="centric">
        <PolarAngleAxis dataKey="name" type="category" />
        <PolarRadiusAxis type="number" />
        <RadialBar dataKey="a" stackId="s" isAnimationActive={false} />
        <RadialBar dataKey="b" stackId="s" isAnimationActive={false} />
        {children}
      </RadialBarChart>
    ));

    it('should make the radius axis domain cover the largest stack total', () => {
      const { spy } = renderTestCase(state => selectPolarAxisDomain(state, 'radiusAxis', 0));
      expect(spy).toHaveBeenLastCalledWith([0, 40]);
    });
  });

  describe('when the user sets a domain', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <RadialBarChart width={400} height={400} data={data}>
        <PolarAngleAxis type="number" domain={[0, 100]} />
        <PolarRadiusAxis dataKey="name" type="category" />
        <RadialBar dataKey="a" stackId="s" isAnimationActive={false} />
        <RadialBar dataKey="b" stackId="s" isAnimationActive={false} />
        {children}
      </RadialBarChart>
    ));

    it('should keep the user domain', () => {
      const { spy } = renderTestCase(state => selectPolarAxisDomain(state, 'angleAxis', 0));
      expect(spy).toHaveBeenLastCalledWith([0, 100]);
    });
  });

  describe('without stackId', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <RadialBarChart width={400} height={400} data={data}>
        <PolarAngleAxis type="number" />
        <PolarRadiusAxis dataKey="name" type="category" />
        <RadialBar dataKey="a" isAnimationActive={false} />
        <RadialBar dataKey="b" isAnimationActive={false} />
        {children}
      </RadialBarChart>
    ));

    it('should still use the largest single value', () => {
      const { spy } = renderTestCase(state => selectPolarAxisDomain(state, 'angleAxis', 0));
      expect(spy).toHaveBeenLastCalledWith([0, 30]);
    });
  });
});
