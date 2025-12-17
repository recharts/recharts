import React from 'react';
import { ArrayInspector } from './ArrayInspector';
import { RechartsScale } from '../../../../src/util/scale/RechartsScale';

export function ScaleInspector({
  scale,
  realScaleType,
}: {
  scale: RechartsScale | undefined;
  realScaleType: string | undefined;
}) {
  if (scale == null) {
    return (
      <p>
        {realScaleType} :{' '}
        <pre>
          <code>null</code>
        </pre>
      </p>
    );
  }
  return (
    <ul>
      <li>
        Domain: <ArrayInspector arr={scale.domain()} />
      </li>
      <li>
        Range: <ArrayInspector arr={scale.range()} />
      </li>
      <li>Bandwidth: {scale.bandwidth?.() ?? 'undefined'}</li>
      <li>Scale type: {realScaleType}</li>
    </ul>
  );
}
