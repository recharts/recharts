import * as React from 'react';
import MassBarChartComponent from '../../../www/src/components/GuideView/DomainAndTicks/MassBarChart';
import MassBarChartCategoricalYComponent from '../../../www/src/components/GuideView/DomainAndTicks/MassBarChartCategoricalY';
import MassBarChartCustomYDomainComponent from '../../../www/src/components/GuideView/DomainAndTicks/MassBarChartCustomYDomain';
import MassBarChartLogScaleComponent from '../../../www/src/components/GuideView/DomainAndTicks/MassBarChartLogScale';
import MassBarChartCustomTicksComponent from '../../../www/src/components/GuideView/DomainAndTicks/MassBarChartCustomTicks';

export const MassBarChart = () => <MassBarChartComponent />;
export const MassBarChartCategoricalY = () => <MassBarChartCategoricalYComponent />;
export const MassBarChartCustomYDomain = () => <MassBarChartCustomYDomainComponent />;
export const MassBarChartLogScale = () => <MassBarChartLogScaleComponent />;
export const MassBarChartCustomTicks = () => <MassBarChartCustomTicksComponent />;
