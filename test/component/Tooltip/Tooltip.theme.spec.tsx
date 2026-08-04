import { describe, expect, it } from 'vitest';
import React from 'react';
import { rechartsTestRender } from '../../helper/createSelectorTestCase';
import { Area, AreaChart, RechartsThemeProvider, Tooltip } from '../../../src';

function assertNotNull<T>(value: T | null | undefined, message?: string): asserts value is T {
  if (value === null || value === undefined) {
    throw new Error(`Expected non-null value${message ? `: ${message}` : ''}`);
  }
}

const mockData = [
  { name: 'Page A', uv: 400, pv: 2400 },
  { name: 'Page B', uv: 300, pv: 4567 },
  { name: 'Page C', uv: 300, pv: 1398 },
];

const MyChart = ({ children }: { children: React.ReactNode }) => (
  <AreaChart width={400} height={400} data={mockData}>
    <Area dataKey="uv" id="uv" />
    {children}
  </AreaChart>
);

describe('Tooltip theme', () => {
  describe('contentStyle', () => {
    describe('when not defined at all', () => {
      it('should use defaults from legacy theme', () => {
        const { container } = rechartsTestRender(
          <MyChart>
            <Tooltip contentStyle={{ backgroundColor: 'pink', borderColor: 'purple', padding: 20 }} defaultIndex={0} />
          </MyChart>,
        );
        const content = container.querySelector('.recharts-default-tooltip') as HTMLElement | null;
        expect(content).not.toBeNull();
        assertNotNull(content);
        expect(content.style.backgroundColor).toBe('pink');
        expect(content.style.borderColor).toBe('purple');
        expect(content.style.padding).toBe('20px');
      });
    });

    describe('when defined as a theme', () => {
      it('should apply theme contentStyle', () => {
        const { container } = rechartsTestRender(
          <RechartsThemeProvider
            value={{
              graphicalItems: [],
              tooltip: {
                contentStyle: { backgroundColor: 'gold', borderColor: 'green', padding: 25, borderRadius: 8 },
              },
            }}
          >
            <MyChart>
              <Tooltip defaultIndex={0} />
            </MyChart>
          </RechartsThemeProvider>,
        );
        const content = container.querySelector('.recharts-default-tooltip') as HTMLElement | null;
        expect(content).not.toBeNull();
        assertNotNull(content);
        expect(content.style.backgroundColor).toBe('gold');
        expect(content.style.borderColor).toBe('green');
        expect(content.style.padding).toBe('25px');
        expect(content.style.borderRadius).toBe('8px');
      });
    });

    describe('when defined as both a prop and a theme', () => {
      it('should follow the prop contentStyle', () => {
        const { container } = rechartsTestRender(
          <RechartsThemeProvider
            value={{
              graphicalItems: [],
              tooltip: { contentStyle: { backgroundColor: 'red', borderColor: 'blue', padding: 10 } },
            }}
          >
            <MyChart>
              <Tooltip contentStyle={{ backgroundColor: 'orange', borderColor: 'brown' }} defaultIndex={0} />
            </MyChart>
          </RechartsThemeProvider>,
        );
        const content = container.querySelector('.recharts-default-tooltip') as HTMLElement | null;
        expect(content).not.toBeNull();
        assertNotNull(content);
        expect(content.style.backgroundColor).toBe('orange');
        expect(content.style.borderColor).toBe('brown');
      });
    });

    describe('when only some fields are set as props', () => {
      it('should merge theme fields with prop fields', () => {
        const { container } = rechartsTestRender(
          <RechartsThemeProvider
            value={{
              graphicalItems: [],
              tooltip: { contentStyle: { backgroundColor: 'gold', borderColor: 'green', padding: 25 } },
            }}
          >
            <MyChart>
              <Tooltip contentStyle={{ borderRadius: 12 }} defaultIndex={0} />
            </MyChart>
          </RechartsThemeProvider>,
        );
        const content = container.querySelector('.recharts-default-tooltip') as HTMLElement | null;
        expect(content).not.toBeNull();
        assertNotNull(content);
        expect(content.style.backgroundColor).toBe('gold');
        expect(content.style.borderColor).toBe('green');
        expect(content.style.borderRadius).toBe('12px');
      });
    });
  });

  describe('itemStyle', () => {
    describe('when defined as a theme', () => {
      it('should apply theme itemStyle to tooltip items', () => {
        const { container } = rechartsTestRender(
          <RechartsThemeProvider
            value={{
              graphicalItems: [],
              tooltip: {
                itemStyle: { fontSize: 18, fontWeight: 'bold' },
              },
            }}
          >
            <MyChart>
              <Tooltip defaultIndex={0} />
            </MyChart>
          </RechartsThemeProvider>,
        );
        const items = container.querySelectorAll('.recharts-tooltip-item');
        expect(items.length).toBeGreaterThan(0);
        items.forEach(item => {
          expect(item).toHaveStyle({ 'font-size': '18px', 'font-weight': 'bold' });
        });
      });
    });

    describe('when defined as both a prop and a theme', () => {
      it('should follow the prop itemStyle', () => {
        const { container } = rechartsTestRender(
          <RechartsThemeProvider
            value={{
              graphicalItems: [],
              tooltip: { itemStyle: { fontSize: 18 } },
            }}
          >
            <MyChart>
              <Tooltip itemStyle={{ fontSize: 12 }} defaultIndex={0} />
            </MyChart>
          </RechartsThemeProvider>,
        );
        const items = container.querySelectorAll('.recharts-tooltip-item');
        expect(items.length).toBeGreaterThan(0);
        items.forEach(item => {
          expect(item).toHaveStyle({ 'font-size': '12px' });
        });
      });
    });

    describe('when only some fields are set as props', () => {
      it('should merge theme fields with prop fields', () => {
        const { container } = rechartsTestRender(
          <RechartsThemeProvider
            value={{
              graphicalItems: [],
              tooltip: { itemStyle: { fontSize: 18, fontWeight: 'bold' } },
            }}
          >
            <MyChart>
              <Tooltip itemStyle={{ fontStyle: 'italic' }} defaultIndex={0} />
            </MyChart>
          </RechartsThemeProvider>,
        );
        const items = container.querySelectorAll('.recharts-tooltip-item');
        expect(items.length).toBeGreaterThan(0);
        items.forEach(item => {
          expect(item).toHaveStyle({ 'font-size': '18px', 'font-weight': 'bold', 'font-style': 'italic' });
        });
      });
    });
  });

  describe('labelStyle', () => {
    describe('when defined as a theme', () => {
      it('should apply theme labelStyle', () => {
        const { container } = rechartsTestRender(
          <RechartsThemeProvider
            value={{
              graphicalItems: [],
              tooltip: { labelStyle: { color: '#00008b', fontStyle: 'italic', fontSize: 16 } },
            }}
          >
            <MyChart>
              <Tooltip defaultIndex={0} />
            </MyChart>
          </RechartsThemeProvider>,
        );
        const label = container.querySelector('.recharts-tooltip-label') as HTMLElement | null;
        expect(label).not.toBeNull();
        assertNotNull(label);
        expect(label).toHaveStyle({ color: 'rgb(0, 0, 139)', 'font-style': 'italic', 'font-size': '16px' });
      });
    });

    describe('when defined as both a prop and a theme', () => {
      it('should follow the prop labelStyle', () => {
        const { container } = rechartsTestRender(
          <RechartsThemeProvider
            value={{
              graphicalItems: [],
              tooltip: { labelStyle: { color: '#ff0000', fontStyle: 'italic' } },
            }}
          >
            <MyChart>
              <Tooltip labelStyle={{ color: '#008000', fontWeight: 'bold' }} defaultIndex={0} />
            </MyChart>
          </RechartsThemeProvider>,
        );
        const label = container.querySelector('.recharts-tooltip-label') as HTMLElement | null;
        expect(label).not.toBeNull();
        assertNotNull(label);
        expect(label).toHaveStyle({ color: 'rgb(0, 128, 0)', 'font-weight': 'bold' });
      });
    });

    describe('when only some fields are set as props', () => {
      it('should merge theme fields with prop fields', () => {
        const { container } = rechartsTestRender(
          <RechartsThemeProvider
            value={{
              graphicalItems: [],
              tooltip: { labelStyle: { color: '#ff0000', fontStyle: 'italic', fontSize: 16 } },
            }}
          >
            <MyChart>
              <Tooltip labelStyle={{ fontWeight: 'bold' }} defaultIndex={0} />
            </MyChart>
          </RechartsThemeProvider>,
        );
        const label = container.querySelector('.recharts-tooltip-label') as HTMLElement | null;
        expect(label).not.toBeNull();
        assertNotNull(label);
        expect(label).toHaveStyle({
          color: 'rgb(255, 0, 0)',
          'font-style': 'italic',
          'font-size': '16px',
          'font-weight': 'bold',
        });
      });
    });
  });
});
