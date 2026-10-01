import { render } from '@testing-library/react';
import React from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { Bar, BarChart, Label, LabelList, Pie, PieChart, Surface, XAxis } from '../../src';
import { PolarViewBoxRequired } from '../../src/util/types';
import { rechartsTestRender } from '../helper/createSelectorTestCase';
import { assertNotNull } from '../helper/assertNotNull';
import { mockGetBBox, restoreMockGetBBox } from '../helper/mockGetBBox';

const data = [
  { name: 'A', value: 40 },
  { name: 'B', value: 30 },
  { name: 'C', value: 20 },
];

const cartesianViewBox = { x: 50, y: 50, width: 200, height: 200 };

const polarViewBox: PolarViewBoxRequired = {
  cx: 50,
  cy: 50,
  innerRadius: 20,
  outerRadius: 80,
  startAngle: 0,
  endAngle: 90,
  clockWise: false,
};

function getBackgrounds(container: Element): NodeListOf<SVGRectElement> {
  return container.querySelectorAll('rect.recharts-text-background');
}

describe('label background', () => {
  beforeEach(() => {
    mockGetBBox(() => ({ x: 10, y: 20, width: 30, height: 12 }));
  });

  afterEach(() => {
    restoreMockGetBBox();
  });

  describe('<Label />', () => {
    it('does not render a background by default', () => {
      const { container } = rechartsTestRender(
        <Surface height={300} width={300}>
          <Label viewBox={cartesianViewBox} value="text" position="center" />
        </Surface>,
      );

      expect(container.querySelector('.recharts-label')).not.toBeNull();
      expect(getBackgrounds(container)).toHaveLength(0);
    });

    it('renders a background behind the label text', () => {
      const { container } = rechartsTestRender(
        <Surface height={300} width={300}>
          <Label viewBox={cartesianViewBox} value="text" position="center" background />
        </Surface>,
      );

      const backgrounds = getBackgrounds(container);
      expect(backgrounds).toHaveLength(1);
      expect(backgrounds[0]).toHaveAttribute('fill', '#fff');
      expect(backgrounds[0].nextElementSibling).toHaveClass('recharts-label');
    });

    it('forwards background props to the rectangle', () => {
      const { container } = rechartsTestRender(
        <Surface height={300} width={300}>
          <Label
            viewBox={cartesianViewBox}
            value="text"
            position="center"
            background={{ fill: 'gold', rx: 1, padding: 0 }}
          />
        </Surface>,
      );

      const rect = getBackgrounds(container)[0];
      assertNotNull(rect);
      expect(rect).toHaveAttribute('fill', 'gold');
      expect(rect).toHaveAttribute('rx', '1');
      expect(rect).toHaveAttribute('width', '30');
      expect(rect).toHaveAttribute('height', '12');
    });

    it('renders a background for polar labels that do not follow a path', () => {
      const { container } = rechartsTestRender(
        <Surface height={300} width={300}>
          <Label viewBox={polarViewBox} value="text" position="outside" background />
        </Surface>,
      );

      expect(getBackgrounds(container)).toHaveLength(1);
    });

    it.each(['insideStart', 'insideEnd', 'end'] as const)(
      'does not render a background for curved radial labels with position=%s',
      position => {
        const { container } = rechartsTestRender(
          <Surface height={300} width={300}>
            <Label viewBox={polarViewBox} value="text" position={position} background />
          </Surface>,
        );

        expect(container.querySelector('.recharts-radial-bar-label')).not.toBeNull();
        expect(getBackgrounds(container)).toHaveLength(0);
      },
    );

    it('does not render a background for custom content', () => {
      const { container } = rechartsTestRender(
        <Surface height={300} width={300}>
          <Label
            viewBox={cartesianViewBox}
            value="text"
            position="center"
            background
            content={<text className="custom-label">custom</text>}
          />
        </Surface>,
      );

      expect(container.querySelector('.custom-label')).not.toBeNull();
      expect(getBackgrounds(container)).toHaveLength(0);
    });

    it('passes the background setting to custom content functions', () => {
      const content = vi.fn(() => <text className="custom-label">custom</text>);
      const { container } = rechartsTestRender(
        <Surface height={300} width={300}>
          <Label
            viewBox={cartesianViewBox}
            value="text"
            position="center"
            background={{ fill: 'gold' }}
            content={content}
          />
        </Surface>,
      );

      expect(content).toHaveBeenLastCalledWith(expect.objectContaining({ background: { fill: 'gold' } }), {});
      expect(getBackgrounds(container)).toHaveLength(0);
    });
  });

  describe('<LabelList />', () => {
    it('renders one background per label', () => {
      const { container } = render(
        <BarChart width={300} height={200} data={data}>
          <XAxis dataKey="name" />
          <Bar dataKey="value" isAnimationActive={false}>
            <LabelList dataKey="name" position="inside" background={{ fill: 'gold', padding: 1 }} />
          </Bar>
        </BarChart>,
      );

      const backgrounds = getBackgrounds(container);
      expect(backgrounds).toHaveLength(data.length);
      backgrounds.forEach(rect => {
        expect(rect).toHaveAttribute('fill', 'gold');
        expect(rect).toHaveAttribute('width', '32');
        expect(rect.closest('.recharts-label-list')).not.toBeNull();
      });
    });

    it('does not render backgrounds by default', () => {
      const { container } = render(
        <BarChart width={300} height={200} data={data}>
          <Bar dataKey="value" isAnimationActive={false}>
            <LabelList dataKey="name" position="inside" />
          </Bar>
        </BarChart>,
      );

      expect(container.querySelectorAll('.recharts-label')).toHaveLength(data.length);
      expect(getBackgrounds(container)).toHaveLength(0);
    });

    it('renders backgrounds from the implicit label prop of a graphical item', () => {
      const { container } = render(
        <BarChart width={300} height={200} data={data}>
          <Bar dataKey="value" isAnimationActive={false} label={{ position: 'inside', background: true }} />
        </BarChart>,
      );

      expect(getBackgrounds(container)).toHaveLength(data.length);
    });

    it('renders backgrounds in polar charts', () => {
      const { container } = render(
        <PieChart width={300} height={300}>
          <Pie data={data} dataKey="value" isAnimationActive={false}>
            <LabelList dataKey="name" position="inside" background />
          </Pie>
        </PieChart>,
      );

      expect(getBackgrounds(container)).toHaveLength(data.length);
    });
  });
});
