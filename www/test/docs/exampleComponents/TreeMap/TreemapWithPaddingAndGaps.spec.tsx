import type { TreemapNode } from 'recharts';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { NodeGapAndPaddingContent } from '../../../../src/docs/exampleComponents/TreeMap/TreemapWithPaddingAndGaps';

describe('TreemapWithPaddingAndGaps content renderer', () => {
  it('renders leaf labels when node is large enough', () => {
    const node: TreemapNode = {
      x: 10,
      y: 20,
      width: 40,
      height: 20,
      index: 0,
      name: 'Leaf Node',
      depth: 1,
      root: { children: [{}, {}] },
      children: null,
    };

    const { container } = render(
      <svg>
        <NodeGapAndPaddingContent {...node} />
      </svg>,
    );

    expect(screen.getByText('Leaf Node')).not.toBeNull();
    const label = container.querySelector('text');
    expect(label).not.toBeNull();
    expect(label?.getAttribute('x')).toBe('30');
    expect(label?.getAttribute('y')).toBe('34');
  });
});
