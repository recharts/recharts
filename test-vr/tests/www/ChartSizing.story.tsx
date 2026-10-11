import * as React from 'react';
import ChartWithoutSizeComponent from '../../../www/src/components/GuideView/ChartSizing/ChartWithoutSize';
import StaticDimensionChartComponent from '../../../www/src/components/GuideView/ChartSizing/StaticDimensionChart';
import SizeInPercentChartComponent from '../../../www/src/components/GuideView/ChartSizing/SizeInPercentChart';
import SizeInStyleChartComponent from '../../../www/src/components/GuideView/ChartSizing/SizeInStyleChart';
import ResponsiveChartComponent from '../../../www/src/components/GuideView/ChartSizing/ResponsiveChart';
import ResponsiveContainerResponsiveChartComponent from '../../../www/src/components/GuideView/ChartSizing/ResponsiveContainerResponsiveChart';

export const ChartWithoutSize = () => <ChartWithoutSizeComponent />;
export const StaticDimensionChart = () => <StaticDimensionChartComponent />;
export const SizeInPercentChart = () => <SizeInPercentChartComponent />;
export const SizeInStyleChart = () => <SizeInStyleChartComponent />;
export const ResponsiveChart = () => <ResponsiveChartComponent />;
export const ResponsiveContainerResponsiveChart = () => <ResponsiveContainerResponsiveChartComponent />;
