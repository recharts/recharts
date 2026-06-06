import SimpleRadarChart from './SimpleRadarChart';
import SpecifiedDomainRadarChart from './SpecifiedDomainRadarChart';
import simpleRadarChartSource from './SimpleRadarChart?raw';
import specifiedDomainRadarChartSource from './SpecifiedDomainRadarChart?raw';
import { ChartExample } from '../types.ts';
import RadarChartNavExample from './RadarChartNavExample';
import RangeRadarChartCustomAnimation, {
  rangeRadarChartCustomAnimationDefaultState,
  rangeRadarChartCustomAnimationLevers,
} from './RangeRadarChartCustomAnimation';
import rangeRadarChartCustomAnimationSource from './RangeRadarChartCustomAnimation?raw';

export { RadarChartNavExample };

export const radarChartExamples = {
  SimpleRadarChart: {
    Component: SimpleRadarChart,
    sourceCode: simpleRadarChartSource,
    name: 'Simple Radar Chart',
  },
  SpecifiedDomainRadarChart: {
    Component: SpecifiedDomainRadarChart,
    sourceCode: specifiedDomainRadarChartSource,
    name: 'Specified Domain Radar Chart',
  },
  RangeRadarChartCustomAnimation: {
    Component: RangeRadarChartCustomAnimation,
    sourceCode: rangeRadarChartCustomAnimationSource,
    defaultControlsState: rangeRadarChartCustomAnimationDefaultState,
    levers: rangeRadarChartCustomAnimationLevers,
    name: 'Range Radar Custom Animation',
    description:
      'Uses range data ([low, high]) so the radar polygon has an internal baseline. Swap datasets with animationInterpolateFn enabled to compare the point animation with the baseline animation.',
    defaultTool: 'controls',
  },
} satisfies Record<string, ChartExample>;
