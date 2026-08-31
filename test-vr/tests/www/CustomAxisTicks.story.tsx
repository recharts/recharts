import * as React from 'react';
import AxisTicksPlaygroundComponent from '../../../www/src/components/GuideView/AxisTicks/NiceTicksPlayground';
import CustomAxisTicksComponent from '../../../www/src/components/GuideView/AxisTicks/CustomAxisTicks';

export const AxisTicksPlayground = (props: React.ComponentProps<typeof AxisTicksPlaygroundComponent>) => (
  <AxisTicksPlaygroundComponent {...props} />
);

export const CustomAxisTicks = (props: React.ComponentProps<typeof CustomAxisTicksComponent>) => (
  <CustomAxisTicksComponent {...props} />
);
