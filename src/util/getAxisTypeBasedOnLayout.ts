import { AxisDomainTypeInput, AxisType, EvaluatedAxisDomainType, LayoutType } from './types';
import { isCategoricalAxis } from './ChartUtils';

/**
 * This function evaluates the "auto" axis domain type based on the chart layout and axis type.
 * It outputs a definitive axis domain type that can be used for further processing.
 */
export function getAxisTypeBasedOnLayout(
  layout: LayoutType | undefined,
  axisType: AxisType,
  axisDomainType: AxisDomainTypeInput,
): EvaluatedAxisDomainType | undefined {
  if (axisDomainType !== 'auto') {
    return axisDomainType;
  }
  if (layout == null) {
    return undefined;
  }
  return isCategoricalAxis(layout, axisType) ? 'category' : 'number';
}
