import * as React from 'react';
import { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { createRechartsStore } from '../state/store';
import { RechartsWrapper } from '../chart/RechartsWrapper';

interface BrushPreviewProps {
  children: ReactElement;
  width: number;
  height: number;
}

/**
 * Renders a chart element inside a new, isolated RechartsWrapper.
 * This is crucial for brush previews (panoramas) to prevent them from
 * sharing context with the main chart, which can lead to infinite update loops.
 * @param {BrushPreviewProps} props Props
 * @returns {ReactElement} Rendered Element
 */
export function BrushPreview({ children, width, height }: BrushPreviewProps): ReactElement {
  // Each preview needs its own isolated Redux store and provider
  // to not interfere with the main chart's state.
  const store = createRechartsStore();
  return (
    <Provider store={store}>
      {/*
       * The cloned element must have its own width and height, otherwise it will not render.
       * The parent element (the <g> in Brush) will have a transform to position it.
       * We do NOT render a RechartsWrapper here because that would create nested wrappers
       * and cause event conflicts, leading to infinite loops. The `compact` prop
       * on the child chart is responsible for rendering a simplified, non-interactive version.
       */}
      {React.cloneElement(children, {
        width,
        height,
        // Critical: prevents infinite update loops and unwanted zoom syncing
        zoom: undefined,
        // Prevents synchronization with other charts
        syncId: undefined,
        // Setting compact to true is what makes this a preview chart
        compact: true,
      })}
    </Provider>
  );
} 