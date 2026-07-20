type IGetBoundingClient = Pick<Element, 'getBoundingClientRect'>;

/**
 * Calculates the height of the X-axis based on the tick labels and the axis label.
 * @param params - The parameters object.
 * @param [params.ticks] - An array-like object of tick elements, each with a `getBoundingClientRect` method.
 * @param [params.label] - The axis label element, with a `getBoundingClientRect` method.
 * @param [params.labelGapWithTick=5] - The gap between the label and the tick.
 * @param [params.tickSize=0] - The length of the tick line.
 * @param [params.tickMargin=0] - The margin between the tick line and the tick text.
 * @returns The calculated height of the X-axis.
 */
export const getCalculatedXAxisHeight = ({
  ticks,
  label,
  labelGapWithTick = 5, // Default gap between label and tick
  tickSize = 0,
  tickMargin = 0,
}: {
  ticks: ArrayLike<IGetBoundingClient> | null;
  label: IGetBoundingClient | null | undefined;
  labelGapWithTick: number | undefined;
  tickSize: number | undefined;
  tickMargin: number | undefined;
}): number => {
  // find the max height of the tick labels
  let maxTickHeight = 0;
  if (ticks) {
    Array.from(ticks).forEach((tickNode: IGetBoundingClient) => {
      if (tickNode) {
        const bbox = tickNode.getBoundingClientRect();

        if (bbox.height > maxTickHeight) {
          maxTickHeight = bbox.height;
        }
      }
    });

    // calculate height of the axis label
    const labelHeight = label ? label.getBoundingClientRect().height : 0;

    const tickHeight = tickSize + tickMargin;

    // calculate the updated height of the x-axis
    const updatedXAxisHeight = maxTickHeight + tickHeight + labelHeight + (label ? labelGapWithTick : 0);

    return Math.round(updatedXAxisHeight);
  }

  return 0;
};
