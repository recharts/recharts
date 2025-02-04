import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { useChartLayout } from '../../src/context/chartLayoutContext';
import { PolarChartInspector } from './PolarChartInspector';
import { CartesianChartInspector } from './CartesianChartInspector';

export function RechartsHookInspector({ rechartsInspectorEnabled }: { rechartsInspectorEnabled: boolean }) {
  const layout = useChartLayout();
  const [counter, setCounter] = useState(0);

  if (!rechartsInspectorEnabled) {
    return null;
  }

  const renderedChart = document.querySelector('.recharts-wrapper');
  if (!renderedChart) {
    // Let's try again in 100ms and see if the chart is rendered. Also limit this so that we don't continue looping for eternity.
    if (counter < 10) {
      setTimeout(() => setCounter(counter + 1), 100);
    }
    /*
     * Wait until after the chart has rendered. Otherwise, the inspector renders first and chart second.
     * Which is not a big problem per se but when you enable it using the tool icon,
     * the inspector renders second. So let's keep things consistent.
     */
    return null;
  }

  let Component;

  switch (layout) {
    case 'centric':
    case 'radial':
      Component = PolarChartInspector;
      break;
    default:
      Component = CartesianChartInspector;
  }

  return createPortal(<Component />, document.querySelector('#storybook-root'));
}
