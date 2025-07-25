type IGetBoundingClient = Pick<Element, 'getBoundingClientRect'>;
/**
 * Calculates the width of the Y-axis based on the tick labels and the axis label.
 * @param {Object} params - The parameters object.
 * @param {React.RefObject<any>} params.cartesianAxisRef - The ref to the CartesianAxis component.
 * @param {React.RefObject<Element>} params.labelRef - The ref to the label element.
 * @param {number} [params.labelGapWithTick=5] - The gap between the label and the tick.
 * @returns {number} The calculated width of the Y-axis.
 */
export declare const getCalculatedYAxisWidth: ({ ticks, label, labelGapWithTick, tickSize, tickMargin, }: {
    ticks: ReadonlyArray<IGetBoundingClient> | undefined;
    label: IGetBoundingClient | undefined;
    labelGapWithTick: number | undefined;
    tickSize: number | undefined;
    tickMargin: number | undefined;
}) => number;
export {};
