import * as React from 'react';
import {
  AreaRangeViaBaseValueDataMax as AreaRangeViaBaseValueDataMaxComponent,
  AreaRangeViaBaseValueDataMin as AreaRangeViaBaseValueDataMinComponent,
  AreaRangeViaBaseValueNumber as AreaRangeViaBaseValueNumberComponent,
  AreaRangeViaChartBaseValueDataMax as AreaRangeViaChartBaseValueDataMaxComponent,
  AreaRangeViaChartBaseValueNumber as AreaRangeViaChartBaseValueNumberComponent,
} from './RangedAreaTemplate';

export const AreaRangeViaBaseValueNumber = () => <AreaRangeViaBaseValueNumberComponent />;
export const AreaRangeViaBaseValueDataMin = () => <AreaRangeViaBaseValueDataMinComponent />;
export const AreaRangeViaBaseValueDataMax = () => <AreaRangeViaBaseValueDataMaxComponent />;
export const AreaRangeViaChartBaseValueNumber = () => <AreaRangeViaChartBaseValueNumberComponent />;
export const AreaRangeViaChartBaseValueDataMax = () => <AreaRangeViaChartBaseValueDataMaxComponent />;
