import React, { isValidElement, ReactElement } from 'react';
import { isNumOrStr } from './DataUtils';

/**
 * Returns modified Y-axis label and position based on the provided label.
 * The modified props shows the y-axis rotated by 270 degrees and centered along y-axis.
 * If the label is a number or string, it returns a default label object with common properties.
 * If the label is an object, it merges common properties with the provided label properties.
 *
 * @param {Object} params - The parameters object.
 * @param {any} params.label - The label to be modified.
 * @returns {Object} An object containing the modified label
 */
export const getModifiedYAxisProps = ({
  label,
}: {
  label: string | number | ReactElement | object;
}): { label: object } => {
  let modifiedLabel = label;

  const commonLabelProps = { angle: 270, position: 'insideLeft', textAnchor: 'middle', verticalAnchor: 'start' };

  if (isNumOrStr(modifiedLabel)) {
    modifiedLabel = {
      value: label,
      ...commonLabelProps,
    };
  } else if (label && typeof label === 'object' && !isValidElement(label)) {
    modifiedLabel = {
      ...commonLabelProps,
      ...label,
    };
  }

  return { label: modifiedLabel };
};

/**
 * Calculates the width of the Y-axis based on the tick labels and the axis label.
 *
 * @param {Object} params - The parameters object.
 * @param {React.RefObject<any>} params.cartesianAxisRef - The ref to the CartesianAxis component.
 * @param {React.RefObject<SVGElement>} params.labelRef - The ref to the label element.
 * @param {number} [params.labelGapWithTick=5] - The gap between the label and the tick.
 * @returns {number} The calculated width of the Y-axis.
 */
export const getCalculatedYAxisWidth = ({
  cartesianAxisRef,
  labelRef,
  labelGapWithTick = 5, // Default gap between label and tick
}: {
  cartesianAxisRef: React.RefObject<any>;
  labelRef: React.RefObject<SVGElement>;
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
    tickNodes.forEach((tickNode: SVGElement) => {
      if (tickNode) {
        const bbox = tickNode.getBoundingClientRect();

        if (bbox.width > maxTickWidth) {
          maxTickWidth = bbox.width;
        }
      }
      return 0;
    });

    // calculate width of the axis label
    const labelNode = labelRef.current;
    const labelWidth = labelNode ? labelNode.getBoundingClientRect().width : 0;

    // calculate tick width: tickSize + tickMargin
    const { tickSize, tickMargin } = axisComponent.props || {};
    const tickWidth = tickSize + tickMargin;

    // calculate the updated width of the y-axis
    const updatedYAxisWidth = maxTickWidth + tickWidth + labelWidth + (labelNode ? labelGapWithTick : 0);

    return Math.ceil(updatedYAxisWidth);
  }

  return 0;
};
