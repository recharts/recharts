import * as React from 'react';

/**
 * Calculates the width of the Y-axis based on the tick labels and the axis label.
 * @param {Object} params - The parameters object.
 * @param {React.RefObject<any>} params.cartesianAxisRef - The ref to the CartesianAxis component.
 * @param {React.RefObject<Element>} params.labelRef - The ref to the label element.
 * @param {number} [params.labelGapWithTick=5] - The gap between the label and the tick.
 * @returns {number} The calculated width of the Y-axis.
 */
export const getCalculatedYAxisWidth = ({
  cartesianAxisRef,
  labelRef,
  labelGapWithTick = 5, // Default gap between label and tick
}: {
  cartesianAxisRef: React.RefObject<any>;
  labelRef?: React.RefObject<Element>;
  labelGapWithTick?: number;
}): number => {
  if (!cartesianAxisRef || !cartesianAxisRef.current) {
    return 0; // Return 0 if the ref is not set or current is null
  }

  // Access the tickRefs from the CartesianAxis component
  const axisComponent = cartesianAxisRef.current;
  const tickNodes = axisComponent?.tickRefs?.current;

  // find the max width of the tick labels
  let maxTickWidth = 0;
  if (tickNodes && tickNodes.length > 0) {
    tickNodes.forEach((tickNode: Element) => {
      if (tickNode) {
        const bbox = tickNode.getBoundingClientRect();

        if (bbox.width > maxTickWidth) {
          maxTickWidth = bbox.width;
        }
      }
    });

    // calculate width of the axis label
    const labelNode = labelRef?.current;
    const labelWidth = labelNode ? labelNode.getBoundingClientRect().width : 0;

    // calculate tick width: tickSize + tickMargin
    const { tickSize = 0, tickMargin = 0 } = axisComponent.props || {};
    const tickWidth = tickSize + tickMargin;

    // calculate the updated width of the y-axis
    const updatedYAxisWidth = maxTickWidth + tickWidth + labelWidth + (labelNode ? labelGapWithTick : 0);

    return Math.round(updatedYAxisWidth);
  }

  return 0;
};
