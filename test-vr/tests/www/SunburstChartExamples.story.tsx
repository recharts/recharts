import * as React from 'react';
import SunburstChartExampleComponent from '../../../www/src/docs/exampleComponents/SunburstChart/SunburstChartExample';
import BundleSizeSunburstComponent from '../../../www/src/docs/exampleComponents/SunburstChart/BundleSizeSunburst';
import SunburstChartThemeColorsComponent from '../../../www/src/docs/exampleComponents/SunburstChart/SunburstChartThemeColors';

export const SunburstChartExample = () => <SunburstChartExampleComponent />;

export const BundleSizeSunburst = (props: React.ComponentProps<typeof BundleSizeSunburstComponent>) => (
  <BundleSizeSunburstComponent {...props} />
);

export const SunburstChartThemeColors = () => <SunburstChartThemeColorsComponent />;
