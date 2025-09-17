import SimpleRadarChart from './SimpleRadarChart';
import SpecifiedDomainRadarChart from './SpecifiedDomainRadarChart';
import simpleRadarChartSource from './SimpleRadarChart?raw';
import specifiedDomainRadarChartSource from './SpecifiedDomainRadarChart?raw';
import { ChartExample } from '../types.ts';

const radarChartExamples: Record<string, ChartExample> = {
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
};

export default radarChartExamples;
