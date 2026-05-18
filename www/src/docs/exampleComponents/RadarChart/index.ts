import SimpleRadarChart from './SimpleRadarChart';
import SpecifiedDomainRadarChart from './SpecifiedDomainRadarChart';
import simpleRadarChartSource from './SimpleRadarChart?raw';
import specifiedDomainRadarChartSource from './SpecifiedDomainRadarChart?raw';
import { ChartExample } from '../types.ts';
import RadarChartNavExample from './RadarChartNavExample';

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
} satisfies Record<string, ChartExample>;
