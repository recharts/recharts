type IGetBoundingClient = Pick<Element, 'getBoundingClientRect'>;

/**
 * Calculates the width of the Y-axis based on the tick labels and the axis label.
 * @param params - The parameters object.
 * @param [params.ticks] - An array-like object of tick elements, each with a `getBoundingClientRect` method.
 * @param [params.label] - The axis label element, with a `getBoundingClientRect` method.
 * @param [params.labelGapWithTick=5] - The gap between the label and the tick.
 * @param [params.tickSize=0] - The length of the tick line.
 * @param [params.tickMargin=0] - The margin between the tick line and the tick text.
 * @returns The calculated width of the Y-axis.
 */
export const getCalculatedYAxisWidth = ({
  ticks,
  label,
  labelGapWithTick = 5, // Default gap between label and tick
  tickSize = 0,
  tickMargin = 0,
}: {
  ticks: ArrayLike<IGetBoundingClient> | undefined;
  label: IGetBoundingClient | null | undefined;
  labelGapWithTick: number | undefined;
  tickSize: number | undefined;
  tickMargin: number | undefined;
}): number => {
  // find the max width of the tick labels
  let maxTickWidth = 0;
  if (ticks) {
    Array.from(ticks).forEach((tickNode: Element) => {
      if (tickNode) {
        const bbox = tickNode.getBoundingClientRect();

        if (bbox.width > maxTickWidth) {
          maxTickWidth = bbox.width;
        }
      }
    });

    // calculate width of the axis label
    const labelWidth = label ? label.getBoundingClientRect().width : 0;

    const tickWidth = tickSize + tickMargin;

    // calculate the updated width of the y-axis
    const updatedYAxisWidth = maxTickWidth + tickWidth + labelWidth + (label ? labelGapWithTick : 0);

    return Math.round(updatedYAxisWidth);
  }

  return 0;
};
