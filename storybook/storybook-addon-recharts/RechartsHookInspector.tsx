import React from 'react';
import { createPortal } from 'react-dom';
import { useChartLayout } from '../../src/context/chartLayoutContext';
import { PolarChartInspector } from './PolarChartInspector';

function UnknownLayoutComponent() {
  return <p>TODO create inspector for this layout</p>;
}

export function RechartsHookInspector({ portalRef }: { portalRef: React.RefObject<HTMLElement> }) {
  const layout = useChartLayout();

  if (portalRef == null || portalRef.current == null) {
    return null;
  }

  let Component;

  switch (layout) {
    case 'centric':
    case 'radial':
      Component = PolarChartInspector;
      break;
    default:
      Component = UnknownLayoutComponent;
  }

  return createPortal(<Component />, portalRef.current);
}
