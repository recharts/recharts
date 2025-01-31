import React from 'react';
import { createPortal } from 'react-dom';
import { useChartLayout } from '../../src/context/chartLayoutContext';
import { PolarChartInspector } from './PolarChartInspector';
import { CartesianChartInspector } from './CartesianChartInspector';

export function RechartsHookInspector({ rechartsInspectorEnabled }: { rechartsInspectorEnabled: boolean }) {
  const layout = useChartLayout();

  if (!rechartsInspectorEnabled) {
    return null;
  }

  const renderedChart = document.querySelector('.recharts-wrapper');
  if (!renderedChart) {
    /*
     * Wait until after the chart has rendered. Otherwise the inspector renders first and chart second.
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
