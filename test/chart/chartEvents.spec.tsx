import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { allCharts, onlyCompact } from '../helper/parameterizedTestCases';

describe('chart events', () => {
  const spies = {
    onClick: vi.fn(),
  };

  describe.each(allCharts)('in $testName', ({ ChartElement, testName }) => {
    it('should not call any chart events without user interaction', () => {
      render(<ChartElement />);
      Object.values(spies).forEach(spy => {
        expect(spy).not.toHaveBeenCalled();
      });
    });

    it('should call onClick when user clicks on the chart', context => {
      if (testName === 'Treemap') {
        // Treemap does not listen to chart area clicks apparently - which isn't a big deal because its items cover the whole area.
        context.skip();
      }
      if (testName === 'Sankey') {
        // Same with Sankey. Sankey binds clicks to its items only, not the whole chart.
        context.skip();
      }
      if (testName === 'Sunburst') {
        // Same with Sunburst.
        context.skip();
      }
      const { container } = render(<ChartElement onClick={spies.onClick} />);
      fireEvent.click(container.querySelector('.recharts-wrapper'), { clientX: 10, clientY: 10 });
      expect(spies.onClick).toHaveBeenCalled();
    });
  });

  describe.each(onlyCompact(allCharts))('$testName', ({ ChartElement }) => {
    it('should not call onClick when user clicks on the chart', () => {
      const { container } = render(<ChartElement onClick={spies.onClick} />);
      fireEvent.click(container.querySelector('.recharts-surface'), { clientX: 10, clientY: 10 });
      expect(spies.onClick).not.toHaveBeenCalled();
    });
  });
});
