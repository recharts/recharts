import SimpleRadarChart from './SimpleRadarChart';
import SpecifiedDomainRadarChart from './SpecifiedDomainRadarChart';
import simpleRadarChartSource from './SimpleRadarChart?raw';
import specifiedDomainRadarChartSource from './SpecifiedDomainRadarChart?raw';
import { ChartExample } from '../types.ts';
import RadarChartNavExample from './RadarChartNavExample';
import RadarChartExample from './RadarChartExample';
import radarChartExampleSource from './RadarChartExample?raw';

export { RadarChartNavExample };

export const radarChartExamples: Record<string, ChartExample> = {
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
  RadarChartExample: {
    Component: RadarChartExample,
    sourceCode: radarChartExampleSource,
    name: 'Radar Chart Example',
  },
};
