import React from 'react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import {
  Bar,
  BarChart,
  Funnel,
  FunnelChart,
  Label,
  LabelList,
  Line,
  LineChart,
  Pie,
  PieChart,
  RechartsThemeProvider,
  Surface,
  XAxis,
} from '../../src';
import { RechartsTheme } from '../../src/theme/RechartsTheme';
import { resolveLabelBackground } from '../../src/theme/labelTheme';
import { rechartsTestRender } from '../helper/createSelectorTestCase';
import { mockGetBBox, restoreMockGetBBox } from '../helper/mockGetBBox';

const data = [
  { name: 'A', value: 40 },
  { name: 'B', value: 30 },
  { name: 'C', value: 20 },
];

const theme: RechartsTheme = {
  graphicalItems: [
    {
      fill: 'purple',
      stroke: 'purple',
      label: { style: { fontWeight: 'bold' }, background: { fill: 'ivory', rx: 2 } },
    },
    {
      fill: 'teal',
      stroke: 'teal',
      label: { style: { color: 'black' }, background: { fill: 'beige' } },
    },
  ],
  label: { style: { fontStyle: 'italic', color: 'navy' }, background: { fill: 'lavender' } },
  pageBackground: 'white',
};

function getTexts(container: Element, selector: string): ReadonlyArray<SVGTextElement> {
  return Array.from(container.querySelectorAll<SVGTextElement>(selector));
}

function getBackgroundFills(container: Element): ReadonlyArray<string | null> {
  return Array.from(container.querySelectorAll('rect.recharts-text-background')).map(rect => rect.getAttribute('fill'));
}

describe('resolveLabelBackground', () => {
  const themeBackground = { fill: 'ivory', rx: 2 };

  it.each([
    [undefined, undefined, undefined],
    [undefined, true, true],
    [undefined, themeBackground, themeBackground],
    [false, themeBackground, false],
    [false, true, false],
    [true, undefined, true],
    [true, false, true],
    [true, themeBackground, themeBackground],
    [{ stroke: 'red' }, undefined, { stroke: 'red' }],
    [{ stroke: 'red' }, true, { stroke: 'red' }],
    [{ stroke: 'red' }, false, { stroke: 'red' }],
    [{ stroke: 'red', rx: 0 }, themeBackground, { fill: 'ivory', stroke: 'red', rx: 0 }],
  ] as const)('explicit %j with theme %j resolves to %j', (explicit, fromTheme, expected) => {
    expect(resolveLabelBackground(explicit, fromTheme)).toEqual(expected);
  });
});

describe('label theme', () => {
  beforeEach(() => {
    mockGetBBox(() => ({ x: 10, y: 20, width: 30, height: 12 }));
  });

  afterEach(() => {
    restoreMockGetBBox();
  });

  describe('global label', () => {
    it('styles a standalone Label and draws its background', () => {
      const { container } = rechartsTestRender(
        <RechartsThemeProvider value={theme}>
          <Surface width={300} height={300}>
            <Label viewBox={{ x: 0, y: 0, width: 100, height: 100 }} value="text" position="center" />
          </Surface>
        </RechartsThemeProvider>,
      );
      const [text] = getTexts(container, '.recharts-label');
      expect(text.style.fill).toBe('navy');
      expect(text.style.fontStyle).toBe('italic');
      expect(getBackgroundFills(container)).toEqual(['lavender']);
    });

    it('lets explicit props win over the theme', () => {
      const { container } = rechartsTestRender(
        <RechartsThemeProvider value={theme}>
          <Surface width={300} height={300}>
            <Label
              viewBox={{ x: 0, y: 0, width: 100, height: 100 }}
              value="text"
              position="center"
              fill="red"
              style={{ fontStyle: 'normal' }}
              background={{ stroke: 'black' }}
            />
          </Surface>
        </RechartsThemeProvider>,
      );
      const [text] = getTexts(container, '.recharts-label');
      expect(text.style.fill).toBe('red');
      expect(text.style.fontStyle).toBe('normal');
      const rect = container.querySelector('rect.recharts-text-background');
      expect(rect).toHaveAttribute('fill', 'lavender');
      expect(rect).toHaveAttribute('stroke', 'black');
    });

    it('draws no background when the label sets background={false}', () => {
      const { container } = rechartsTestRender(
        <RechartsThemeProvider value={theme}>
          <Surface width={300} height={300}>
            <Label
              viewBox={{ x: 0, y: 0, width: 100, height: 100 }}
              value="text"
              position="center"
              background={false}
            />
          </Surface>
        </RechartsThemeProvider>,
      );
      expect(getBackgroundFills(container)).toEqual([]);
    });

    it('applies to axis labels', () => {
      const { container } = rechartsTestRender(
        <RechartsThemeProvider value={theme}>
          <BarChart width={300} height={300} data={data}>
            <XAxis dataKey="name" label="Name" />
          </BarChart>
        </RechartsThemeProvider>,
      );
      const [text] = getTexts(container, '.recharts-label');
      expect(text.style.fill).toBe('navy');
      expect(getBackgroundFills(container)).toEqual(['lavender']);
    });

    it('does nothing without a theme', () => {
      const { container } = rechartsTestRender(
        <Surface width={300} height={300}>
          <Label viewBox={{ x: 0, y: 0, width: 100, height: 100 }} value="text" position="center" />
        </Surface>,
      );
      const [text] = getTexts(container, '.recharts-label');
      expect(text.style.fill).toBe('rgb(128, 128, 128)');
      expect(getBackgroundFills(container)).toEqual([]);
    });
  });

  describe('data labels', () => {
    it('take the series color and draw the background of their theme entry', () => {
      const { container } = rechartsTestRender(
        <RechartsThemeProvider value={theme}>
          <BarChart width={300} height={300} data={data}>
            <Bar dataKey="value" isAnimationActive={false} label={{ position: 'inside' }} />
          </BarChart>
        </RechartsThemeProvider>,
      );
      const texts = getTexts(container, '.recharts-label-list .recharts-label');
      expect(texts).toHaveLength(3);
      texts.forEach(text => {
        // The label sits on its own background, not on the bar, so it takes the series color
        expect(text.style.fill).toBe('purple');
        expect(text.style.fontWeight).toBe('bold');
        // The global label theme does not apply to data labels
        expect(text.style.fontStyle).toBe('');
      });
      expect(getBackgroundFills(container)).toEqual(['ivory', 'ivory', 'ivory']);
    });

    it('take the text color from their theme entry when it sets one', () => {
      const { container } = rechartsTestRender(
        <RechartsThemeProvider value={theme}>
          <BarChart width={300} height={300} data={data}>
            <Bar dataKey="a" isAnimationActive={false} />
            <Bar dataKey="value" isAnimationActive={false}>
              <LabelList position="inside" />
            </Bar>
          </BarChart>
        </RechartsThemeProvider>,
      );
      const texts = getTexts(container, '.recharts-label-list .recharts-label');
      expect(texts).toHaveLength(3);
      texts.forEach(text => expect(text.style.fill).toBe('black'));
      expect(getBackgroundFills(container)).toEqual(['beige', 'beige', 'beige']);
    });

    it('let explicit LabelList props win over the theme', () => {
      const { container } = rechartsTestRender(
        <RechartsThemeProvider value={theme}>
          <BarChart width={300} height={300} data={data}>
            <Bar dataKey="value" isAnimationActive={false}>
              <LabelList position="inside" fill="red" background={{ stroke: 'black' }} />
            </Bar>
          </BarChart>
        </RechartsThemeProvider>,
      );
      const texts = getTexts(container, '.recharts-label-list .recharts-label');
      texts.forEach(text => expect(text.style.fill).toBe('red'));
      const rects = container.querySelectorAll('rect.recharts-text-background');
      expect(rects).toHaveLength(3);
      rects.forEach(rect => {
        expect(rect).toHaveAttribute('fill', 'ivory');
        expect(rect).toHaveAttribute('stroke', 'black');
        expect(rect).toHaveAttribute('rx', '2');
      });
    });

    it('draw no background when LabelList sets background={false}', () => {
      const { container } = rechartsTestRender(
        <RechartsThemeProvider value={theme}>
          <BarChart width={300} height={300} data={data}>
            <Bar dataKey="value" isAnimationActive={false}>
              <LabelList position="inside" background={false} />
            </Bar>
          </BarChart>
        </RechartsThemeProvider>,
      );
      expect(getTexts(container, '.recharts-label-list .recharts-label')).toHaveLength(3);
      expect(getBackgroundFills(container)).toEqual([]);
    });

    it('keep the theme when the graphical item sets its own fill', () => {
      const { container } = rechartsTestRender(
        <RechartsThemeProvider value={theme}>
          <BarChart width={300} height={300} data={data}>
            <Bar dataKey="value" fill="red" isAnimationActive={false} label={{ position: 'inside' }} />
          </BarChart>
        </RechartsThemeProvider>,
      );
      const texts = getTexts(container, '.recharts-label-list .recharts-label');
      expect(texts).toHaveLength(3);
      texts.forEach(text => {
        // The label has a background, so it takes the color of its shape
        expect(text.style.fill).toBe('red');
        expect(text.style.fontWeight).toBe('bold');
      });
      expect(getBackgroundFills(container)).toEqual(['ivory', 'ivory', 'ivory']);
    });

    it('keep one theme entry per sector when the Pie sets its own fill', () => {
      const { container } = rechartsTestRender(
        <RechartsThemeProvider value={theme}>
          <PieChart width={300} height={300}>
            <Pie data={data} dataKey="value" fill="red" isAnimationActive={false} label={{ position: 'inside' }} />
          </PieChart>
        </RechartsThemeProvider>,
      );
      expect(getBackgroundFills(container)).toEqual(['ivory', 'beige', 'ivory']);
    });

    it('apply to Line labels', () => {
      const { container } = rechartsTestRender(
        <RechartsThemeProvider value={theme}>
          <LineChart width={300} height={300} data={data}>
            <Line dataKey="value" isAnimationActive={false} label />
          </LineChart>
        </RechartsThemeProvider>,
      );
      const texts = getTexts(container, '.recharts-label-list .recharts-label');
      expect(texts).toHaveLength(3);
      texts.forEach(text => expect(text.style.fontWeight).toBe('bold'));
      expect(getBackgroundFills(container)).toEqual(['ivory', 'ivory', 'ivory']);
    });

    it('take one theme entry per sector in Pie LabelList', () => {
      const { container } = rechartsTestRender(
        <RechartsThemeProvider value={theme}>
          <PieChart width={300} height={300}>
            <Pie data={data} dataKey="value" isAnimationActive={false} label={{ position: 'inside' }} />
          </PieChart>
        </RechartsThemeProvider>,
      );
      const texts = getTexts(container, '.recharts-label-list .recharts-label');
      expect(texts.map(text => text.style.fill)).toEqual(['purple', 'black', 'purple']);
      expect(getBackgroundFills(container)).toEqual(['ivory', 'beige', 'ivory']);
    });

    it('take one theme entry per sector in the default Pie label', () => {
      const { container } = rechartsTestRender(
        <RechartsThemeProvider value={theme}>
          <PieChart width={300} height={300}>
            <Pie data={data} dataKey="value" isAnimationActive={false} label />
          </PieChart>
        </RechartsThemeProvider>,
      );
      const texts = getTexts(container, '.recharts-pie-label-text');
      expect(texts.map(text => text.style.fill)).toEqual(['purple', 'black', 'purple']);
      expect(getBackgroundFills(container)).toEqual(['ivory', 'beige', 'ivory']);
    });

    it('let the default Pie label opt out of the background', () => {
      const { container } = rechartsTestRender(
        <RechartsThemeProvider value={theme}>
          <PieChart width={300} height={300}>
            <Pie data={data} dataKey="value" isAnimationActive={false} label={{ background: false, fill: 'red' }} />
          </PieChart>
        </RechartsThemeProvider>,
      );
      const texts = getTexts(container, '.recharts-pie-label-text');
      expect(texts.map(text => text.style.fill)).toEqual(['red', 'red', 'red']);
      expect(getBackgroundFills(container)).toEqual([]);
    });

    it('take one theme entry per trapezoid in Funnel', () => {
      const { container } = rechartsTestRender(
        <RechartsThemeProvider value={theme}>
          <FunnelChart width={300} height={300}>
            <Funnel data={data} dataKey="value" isAnimationActive={false}>
              <LabelList position="center" />
            </Funnel>
          </FunnelChart>
        </RechartsThemeProvider>,
      );
      expect(getBackgroundFills(container)).toEqual(['ivory', 'beige', 'ivory']);
    });

    it('are unchanged without a theme', () => {
      const { container } = rechartsTestRender(
        <BarChart width={300} height={300} data={data}>
          <Bar dataKey="value" isAnimationActive={false} label={{ position: 'inside' }} />
        </BarChart>,
      );
      const texts = getTexts(container, '.recharts-label-list .recharts-label');
      texts.forEach(text => expect(text.style.fill).toBe('rgb(128, 128, 128)'));
      expect(getBackgroundFills(container)).toEqual([]);
    });
  });
});
