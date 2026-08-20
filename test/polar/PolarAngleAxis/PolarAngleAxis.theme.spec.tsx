import { describe, expect, it } from 'vitest';
import React from 'react';
import { rechartsTestRender } from '../../helper/createSelectorTestCase';
import { PolarAngleAxis, Radar, RadarChart, RechartsThemeProvider } from '../../../src';
import { assertNotNull } from '../../helper/assertNotNull';

const data = [
  { subject: 'Math', A: 120 },
  { subject: 'Chinese', A: 98 },
  { subject: 'English', A: 86 },
  { subject: 'Geography', A: 99 },
  { subject: 'Physics', A: 85 },
  { subject: 'History', A: 65 },
];

const MyChart = ({ children }: { children: React.ReactNode }) => (
  <RadarChart width={500} height={500} data={data}>
    <Radar dataKey="A" isAnimationActive={false} />
    {children}
  </RadarChart>
);

function getAxisLine(container: HTMLElement): Element {
  const axisLine = container.querySelector('.recharts-polar-angle-axis-line');
  assertNotNull(axisLine);
  return axisLine;
}

function getFirstTickLine(container: HTMLElement): Element {
  const tickLine = container.querySelector('.recharts-polar-angle-axis-tick-line');
  assertNotNull(tickLine);
  return tickLine;
}

function getFirstTickLabel(container: HTMLElement): Element {
  const label = container.querySelector('.recharts-polar-angle-axis-tick-value');
  assertNotNull(label);
  return label;
}

describe('PolarAngleAxis theme', () => {
  describe('axis line and tick lines', () => {
    describe('when not defined at all', () => {
      it('should use the legacy theme defaults', () => {
        const { container } = rechartsTestRender(
          <MyChart>
            <PolarAngleAxis dataKey="subject" />
          </MyChart>,
        );
        [getAxisLine(container), getFirstTickLine(container)].forEach(line => {
          expect(line).not.toHaveAttribute('stroke');
          expect(line).toHaveAttribute('fill', 'none');
          expect(line).not.toHaveAttribute('stroke-width');
          expect(line).not.toHaveAttribute('stroke-opacity');
          expect(line).not.toHaveAttribute('stroke-dasharray');
        });
      });
    });

    describe('when defined as a theme', () => {
      it('should follow the theme for stroke and related attributes', () => {
        const { container } = rechartsTestRender(
          <RechartsThemeProvider
            value={{
              graphicalItems: [],
              axis: { stroke: 'gold', strokeWidth: 2, strokeOpacity: 0.5, strokeDasharray: '1 3' },
            }}
          >
            <MyChart>
              <PolarAngleAxis dataKey="subject" />
            </MyChart>
          </RechartsThemeProvider>,
        );
        [getAxisLine(container), getFirstTickLine(container)].forEach(line => {
          expect(line).toHaveAttribute('stroke', 'gold');
          expect(line).toHaveAttribute('stroke-width', '2');
          expect(line).toHaveAttribute('stroke-opacity', '0.5');
          expect(line).toHaveAttribute('stroke-dasharray', '1 3');
        });
      });
    });

    describe('when defined as both a prop and a theme', () => {
      it('should follow the prop for stroke and related attributes', () => {
        const { container } = rechartsTestRender(
          <RechartsThemeProvider value={{ graphicalItems: [], axis: { stroke: 'purple', strokeWidth: 9 } }}>
            <MyChart>
              <PolarAngleAxis dataKey="subject" stroke="gold" strokeWidth={2} />
            </MyChart>
          </RechartsThemeProvider>,
        );
        [getAxisLine(container), getFirstTickLine(container)].forEach(line => {
          expect(line).toHaveAttribute('stroke', 'gold');
          expect(line).toHaveAttribute('stroke-width', '2');
        });
      });

      it('should merge theme stroke with prop strokeDasharray', () => {
        const { container } = rechartsTestRender(
          <RechartsThemeProvider value={{ graphicalItems: [], axis: { stroke: 'purple' } }}>
            <MyChart>
              <PolarAngleAxis dataKey="subject" strokeDasharray="1 3" />
            </MyChart>
          </RechartsThemeProvider>,
        );
        [getAxisLine(container), getFirstTickLine(container)].forEach(line => {
          expect(line).toHaveAttribute('stroke', 'purple');
          expect(line).toHaveAttribute('stroke-dasharray', '1 3');
        });
      });
    });
  });

  describe('tick labels', () => {
    describe('when not defined at all', () => {
      it('should keep the legacy font appearance and label fill', () => {
        const { container } = rechartsTestRender(
          <MyChart>
            <PolarAngleAxis dataKey="subject" />
          </MyChart>,
        );
        const label = getFirstTickLabel(container);
        expect(label).not.toHaveAttribute('fill');
        expect(label).toHaveStyle({ fontSize: '', fill: 'rgb(128, 128, 128)' });
      });
    });

    describe('when defined as a theme', () => {
      it('should follow the theme typography and axis stroke for the fill', () => {
        const { container } = rechartsTestRender(
          <RechartsThemeProvider
            value={{
              graphicalItems: [],
              axis: { stroke: 'gold' },
              typography: { fontSize: 14, fontFamily: 'cursive', letterSpacing: '0.5px' },
            }}
          >
            <MyChart>
              <PolarAngleAxis dataKey="subject" />
            </MyChart>
          </RechartsThemeProvider>,
        );
        const label = getFirstTickLabel(container);
        expect(label).toHaveAttribute('fill', 'gold');
        expect(label).toHaveStyle({ fontSize: '14', fontFamily: 'cursive', letterSpacing: '0.5px' });
      });
    });

    describe('when defined as both a prop and a theme', () => {
      it('should follow the prop style if there is a conflict', () => {
        const { container } = rechartsTestRender(
          <RechartsThemeProvider value={{ graphicalItems: [], typography: { fontSize: 24 } }}>
            <MyChart>
              <PolarAngleAxis dataKey="subject" style={{ fontSize: 16 }} />
            </MyChart>
          </RechartsThemeProvider>,
        );
        const label = getFirstTickLabel(container);
        expect(label).toHaveStyle({ fontSize: '16' });
      });

      it('should merge the prop style with the theme typography', () => {
        const { container } = rechartsTestRender(
          <RechartsThemeProvider value={{ graphicalItems: [], typography: { fontSize: 24 } }}>
            <MyChart>
              <PolarAngleAxis dataKey="subject" style={{ letterSpacing: '2px' }} />
            </MyChart>
          </RechartsThemeProvider>,
        );
        const label = getFirstTickLabel(container);
        expect(label).toHaveStyle({ fontSize: '24', letterSpacing: '2px' });
      });
    });
  });
});
