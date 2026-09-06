import * as React from 'react';
import SunburstChartExampleComponent from '../../../www/src/docs/exampleComponents/SunburstChart/SunburstChartExample';
import BundleSizeSunburstComponent from '../../../www/src/docs/exampleComponents/SunburstChart/BundleSizeSunburst';

export const SunburstChartExample = () => <SunburstChartExampleComponent />;

export const BundleSizeSunburst = (props: React.ComponentProps<typeof BundleSizeSunburstComponent>) => (
  <BundleSizeSunburstComponent {...props} />
);
