import * as React from 'react';
import type { ReactNode } from 'react';
import { ClipPathProvider } from '../../container/ClipPathProvider';
import { ZoomTransformLayer } from './ZoomTransformLayer';

/**
 * Shared rendering boundary for chart content that participates in camera zoom.
 *
 * The provider owns an untransformed plot clip while the nested layer transforms the chart marks.
 * Keeping the pair together prevents standalone chart integrations from accidentally transforming
 * their clip path or omitting clipping altogether.
 */
export function ZoomableChartContent({ children }: { children: ReactNode }) {
  return (
    <ClipPathProvider>
      <ZoomTransformLayer>{children}</ZoomTransformLayer>
    </ClipPathProvider>
  );
}
