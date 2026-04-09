import React from 'react';
import { Args } from '@storybook/react-vite';
import { scaleSequential } from 'd3-scale';
import { interpolatePiYG } from 'd3-scale-chromatic';
import { CalendarChart } from '../../../../src';
import { djiCalendarD3Max, djiCalendarData, djiCalendarDomain, djiCalendarPalette } from '../../data';

const djiColorScale = scaleSequential([-djiCalendarD3Max, djiCalendarD3Max], interpolatePiYG);
const apiData = djiCalendarData
  .filter(entry => entry.date.startsWith('2020-'))
  .map(entry => ({ ...entry, fill: djiColorScale(entry.change) }));
const apiStartDate = apiData[0]?.date;
const apiEndDate = apiData[apiData.length - 1]?.date;
const cellSize = 17;
const weekdayCount = 5;
const chartMargin = { top: 28, right: 16, bottom: 34, left: 34 } as const;

function startOfWeekMonday(date: Date): Date {
  const next = new Date(date);
  next.setUTCDate(next.getUTCDate() - ((next.getUTCDay() + 6) % 7));
  return next;
}

function endOfWeekMonday(date: Date): Date {
  const next = startOfWeekMonday(date);
  next.setUTCDate(next.getUTCDate() + 6);
  return next;
}

function getWeekCount(startDate: string | undefined, endDate: string | undefined): number {
  if (startDate == null || endDate == null) {
    return 0;
  }

  const start = startOfWeekMonday(new Date(`${startDate}T00:00:00Z`));
  const end = endOfWeekMonday(new Date(`${endDate}T00:00:00Z`));
  return Math.round((end.getTime() - start.getTime()) / (7 * 24 * 60 * 60 * 1000)) + 1;
}

const apiWeekCount = getWeekCount(apiStartDate, apiEndDate);
const apiChartWidth = chartMargin.left + chartMargin.right + apiWeekCount * cellSize;
const apiChartHeight = chartMargin.top + chartMargin.bottom + weekdayCount * cellSize;

export default {
  component: CalendarChart,
};

export const API = {
  name: 'Simple',
  render: (args: Args) => {
    return (
      <div style={{ width: apiChartWidth }}>
        <CalendarChart {...args} width={apiChartWidth} height={apiChartHeight} />
      </div>
    );
  },
  args: {
    data: apiData,
    dateKey: 'date',
    dataKey: 'change',
    fillKey: 'fill',
    name: 'Daily change',
    startDate: apiStartDate,
    endDate: apiEndDate,
    colors: djiCalendarPalette,
    colorDomain: djiCalendarDomain,
    emptyColor: 'transparent',
    treatZeroAsEmpty: false,
    showWeekends: false,
  },
};
