import { describe, expect, it, vi } from 'vitest';
import React from 'react';
import { Label, Surface } from '../../src';
import { PolarViewBoxRequired } from '../../src/util/types';
import { rechartsTestRender } from '../helper/createSelectorTestCase';
import { assertNotNull } from '../helper/assertNotNull';

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

function getHalos(container: Element): Element[] {
  return Array.from(container.querySelectorAll('text')).filter(text => text.hasAttribute('stroke'));
}

describe('<Label /> halo', () => {
  it('does not render a halo by default', () => {
    const { container } = rechartsTestRender(
      <Surface height={300} width={300}>
        <Label viewBox={cartesianViewBox} value="text" position="center" />
      </Surface>,
    );

    expect(container.querySelector('.recharts-label')).not.toBeNull();
    expect(getHalos(container)).toHaveLength(0);
  });

  it('draws a halo around the label text', () => {
    const { container } = rechartsTestRender(
      <Surface height={300} width={300}>
        <Label viewBox={cartesianViewBox} value="text" position="center" halo />
      </Surface>,
    );

    const halos = getHalos(container);
    expect(halos).toHaveLength(1);
    expect(halos[0]).toHaveAttribute('stroke', '#fff');
    expect(halos[0]).toHaveAttribute('paint-order', 'stroke fill');
    expect(halos[0]).toHaveClass('recharts-label');
  });

  it('forwards halo props to the text element', () => {
    const { container } = rechartsTestRender(
      <Surface height={300} width={300}>
        <Label viewBox={cartesianViewBox} value="text" position="center" halo={{ stroke: 'gold', strokeWidth: 5 }} />
      </Surface>,
    );

    const halo = getHalos(container)[0];
    assertNotNull(halo);
    expect(halo).toHaveAttribute('stroke', 'gold');
    expect(halo).toHaveAttribute('stroke-width', '5');
  });

  it.each(['insideStart', 'insideEnd', 'end'] as const)(
    'draws a halo for curved radial labels with position=%s, unlike background',
    position => {
      const { container } = rechartsTestRender(
        <Surface height={300} width={300}>
          <Label viewBox={polarViewBox} value="text" position={position} halo />
        </Surface>,
      );

      expect(container.querySelector('.recharts-radial-bar-label')).not.toBeNull();
      const halos = getHalos(container);
      expect(halos).toHaveLength(1);
      expect(halos[0]).toHaveClass('recharts-radial-bar-label');
    },
  );

  it('does not render a halo for custom content', () => {
    const { container } = rechartsTestRender(
      <Surface height={300} width={300}>
        <Label
          viewBox={cartesianViewBox}
          value="text"
          position="center"
          halo
          content={<text className="custom-label">custom</text>}
        />
      </Surface>,
    );

    expect(container.querySelector('.custom-label')).not.toBeNull();
    expect(getHalos(container)).toHaveLength(0);
  });

  it('passes the halo setting to custom content functions', () => {
    const content = vi.fn(() => <text className="custom-label">custom</text>);
    const { container } = rechartsTestRender(
      <Surface height={300} width={300}>
        <Label viewBox={cartesianViewBox} value="text" position="center" halo={{ stroke: 'gold' }} content={content} />
      </Surface>,
    );

    expect(content).toHaveBeenLastCalledWith(expect.objectContaining({ halo: { stroke: 'gold' } }), {});
    expect(getHalos(container)).toHaveLength(0);
  });
});
