import * as React from 'react';
import { ZoomAndPan, ZoomAndPanProps } from './ZoomAndPan';
import { ZoomProp } from '../../util/zoom/ZoomOptions';

type EnabledZoomProp = Exclude<ZoomProp, false>;

function zoomPropToProps(zoom: EnabledZoomProp): ZoomAndPanProps {
  if (zoom === true) {
    return {};
  }
  if (zoom === 'x' || zoom === 'y' || zoom === 'xy') {
    return { axis: zoom };
  }
  return zoom;
}

export function ZoomPropBridge({ zoom }: { zoom?: ZoomProp }): null | JSX.Element {
  if (zoom == null || zoom === false) {
    return null;
  }
  return <ZoomAndPan {...zoomPropToProps(zoom)} />;
}
