import React from 'react';
import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { Sankey, XAxis, YAxis } from '../../src';
import { testChartLayoutContext } from '../util/context';
import { exampleSankeyData } from '../_data';

describe('<Sankey />', () => {
  it('renders 48 nodes in simple SankeyChart', () => {
    const { container } = render(<Sankey width={1000} height={500} data={exampleSankeyData} />);

    expect(container.querySelectorAll('.recharts-sankey-node')).toHaveLength(48);
  });

  it('renders 68 links in simple SankeyChart', () => {
    const { container } = render(<Sankey width={1000} height={500} data={exampleSankeyData} />);

    expect(container.querySelectorAll('.recharts-sankey-link')).toHaveLength(68);
  });

  it('re-renders links and nodes when data changes', () => {
    const { container, rerender } = render(<Sankey width={1000} height={500} data={exampleSankeyData} />);

    expect(container.querySelectorAll('.recharts-sankey-node')).toHaveLength(48);
    expect(container.querySelectorAll('.recharts-sankey-link')).toHaveLength(68);

    const nextData = {
      nodes: [...exampleSankeyData.nodes, { name: 'New Node' }],
      links: [...exampleSankeyData.links, { source: 2, target: exampleSankeyData.nodes.length, value: 100.0 }],
    };

    rerender(<Sankey width={1000} height={500} data={nextData} />);

    expect(container.querySelectorAll('.recharts-sankey-node')).toHaveLength(49);
    expect(container.querySelectorAll('.recharts-sankey-link')).toHaveLength(69);
  });

  describe('Sankey layout context', () => {
    it(
      'should provide viewBox, but not clipPathId nor any axes',
      testChartLayoutContext(
        props => (
          <Sankey width={1000} height={500} data={exampleSankeyData}>
            {props.children}
          </Sankey>
        ),
        ({ clipPathId, viewBox, xAxisMap, yAxisMap }) => {
          expect(clipPathId).toBe(undefined);
          expect(viewBox).toEqual({ x: 0, y: 0, width: 1000, height: 500 });
          expect(xAxisMap).toBe(undefined);
          expect(yAxisMap).toBe(undefined);
        },
      ),
    );

    it(
      'should not set width and height in context',
      testChartLayoutContext(
        props => (
          <Sankey width={100} height={50} data={exampleSankeyData}>
            {props.children}
          </Sankey>
        ),
        ({ width, height }) => {
          expect.soft(width).toBe(0);
          expect.soft(height).toBe(0);
        },
      ),
    );

    it('should throw if axes are provided - they are not an allowed child anyway', () => {
      expect(() =>
        render(
          <Sankey width={1000} height={500} data={exampleSankeyData}>
            <XAxis dataKey="number" type="number" />
            <YAxis type="category" dataKey="name" />
          </Sankey>,
        ),
      ).toThrowError('Invariant failed: Could not find Recharts context');
    });
  });
});
