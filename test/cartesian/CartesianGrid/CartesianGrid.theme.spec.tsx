import { describe, it, expect } from 'vitest';
import { generateMockData } from '@recharts/devtools';
import React from 'react';
import { rechartsTestRender } from '../../helper/createSelectorTestCase';
import { CartesianGrid, CartesianGridProps, ComposedChart } from '../../../src';
import { RechartsThemeProvider } from '../../../src/theme/RechartsThemeContext';

const mockData = generateMockData(5, 2);

const MyChart = ({ children }: { children: React.ReactNode }) => (
  <ComposedChart width={400} height={400} data={mockData}>
    {children}
  </ComposedChart>
);

describe('CartesianGrid theme', () => {
  describe('lines and strokes', () => {
    describe('when not defined at all', () => {
      it('should use defaults', () => {
        const { container } = rechartsTestRender(
          <MyChart>
            <CartesianGrid />
          </MyChart>,
        );
        const allLines = container.querySelectorAll('.recharts-cartesian-grid line');
        allLines.forEach(line => {
          expect(line.getAttribute('stroke')).toBe('#ccc');
          expect(line.getAttribute('stroke-width')).toBe(null);
          expect(line.getAttribute('stroke-opacity')).toBe(null);
          expect(line.getAttribute('stroke-dasharray')).toBe(null);
        });
      });
    });

    describe('when defined as a prop', () => {
      it('should follow the prop', () => {
        const { container } = rechartsTestRender(
          <MyChart>
            <CartesianGrid stroke="gold" strokeWidth={2} strokeOpacity={0.9} strokeDasharray={[1, 2, 3, 4]} />
          </MyChart>,
        );
        const allLines = container.querySelectorAll('.recharts-cartesian-grid line');
        allLines.forEach(line => {
          expect(line.getAttribute('stroke')).toBe('gold');
          expect(line.getAttribute('stroke-width')).toBe('2');
          expect(line.getAttribute('stroke-opacity')).toBe('0.9');
          expect(line.getAttribute('stroke-dasharray')).toBe('1,2,3,4');
        });
      });
    });

    describe('when defined as a theme', () => {
      it('should follow the theme', () => {
        const { container } = rechartsTestRender(
          <RechartsThemeProvider
            value={{ grid: { stroke: 'gold', strokeWidth: 2, strokeOpacity: 0.9, strokeDasharray: [1, 2, 3, 4] } }}
          >
            <MyChart>
              <CartesianGrid />
            </MyChart>
          </RechartsThemeProvider>,
        );
        const allLines = container.querySelectorAll('.recharts-cartesian-grid line');
        allLines.forEach(line => {
          expect(line.getAttribute('stroke')).toBe('gold');
          expect(line.getAttribute('stroke-width')).toBe('2');
          expect(line.getAttribute('stroke-opacity')).toBe('0.9');
          expect(line.getAttribute('stroke-dasharray')).toBe('1,2,3,4');
        });
      });
    });

    describe('when defined as both a prop and a theme', () => {
      it('should follow the prop', () => {
        const { container } = rechartsTestRender(
          <RechartsThemeProvider
            value={{ grid: { stroke: 'red', strokeWidth: 21, strokeOpacity: 0.11, strokeDasharray: [1, 12, 3, 4] } }}
          >
            <MyChart>
              <CartesianGrid stroke="gold" strokeWidth={2} strokeOpacity={0.9} strokeDasharray={[1, 2, 3, 4]} />
            </MyChart>
          </RechartsThemeProvider>,
        );
        const allLines = container.querySelectorAll('.recharts-cartesian-grid line');
        allLines.forEach(line => {
          expect(line.getAttribute('stroke')).toBe('gold');
          expect(line.getAttribute('stroke-width')).toBe('2');
          expect(line.getAttribute('stroke-opacity')).toBe('0.9');
          expect(line.getAttribute('stroke-dasharray')).toBe('1,2,3,4');
        });
      });
    });

    describe('strokeDasharray', () => {
      function renderDasharray(input: CartesianGridProps['strokeDasharray']): string | null {
        const { container } = rechartsTestRender(
          <MyChart>
            <CartesianGrid strokeDasharray={input} />
          </MyChart>,
        );
        const firstLine = container.querySelector('.recharts-cartesian-grid line');
        return firstLine?.getAttribute('stroke-dasharray') ?? null;
      }

      it('should use strings as-is', () => {
        expect(renderDasharray('1')).toBe('1');
      });

      it('should convert number to string', () => {
        expect(renderDasharray(1)).toBe('1');
      });

      it('should convert array of numbers to string', () => {
        expect(renderDasharray([1, 2, 3])).toBe('1,2,3');
      });
    });
  });
});
