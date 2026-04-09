import { Args, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { scaleSequential } from 'd3-scale';
import { interpolatePiYG } from 'd3-scale-chromatic';
import { CalendarChart } from '../../../src';
import {
  djiCalendarD3Max,
  djiCalendarDataByYear,
  djiCalendarDomain,
  djiCalendarPalette,
  djiCalendarYears,
} from '../data';

const cellSize = 17;
const weekdayCount = 5;
const chartMargin = { top: 28, right: 16, bottom: 34, left: 34 } as const;
const djiColorScale = scaleSequential([-djiCalendarD3Max, djiCalendarD3Max], interpolatePiYG);

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

function YearCalendar({ year, showLegend }: { year: string; showLegend: boolean }) {
  const yearData = (djiCalendarDataByYear[year] ?? []).map(entry => ({ ...entry, fill: djiColorScale(entry.change) }));
  const startDate = yearData[0]?.date;
  const endDate = yearData[yearData.length - 1]?.date;
  const weekCount = getWeekCount(startDate, endDate);
  const chartWidth = chartMargin.left + chartMargin.right + weekCount * cellSize;
  const chartHeight = chartMargin.top + chartMargin.bottom + weekdayCount * cellSize;

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '52px 1fr',
        alignItems: 'start',
        gap: '8px',
      }}
    >
      <div
        style={{
          fontSize: '18px',
          fontWeight: 600,
          fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          lineHeight: '1',
          color: '#1f2328',
          paddingTop: '28px',
          textAlign: 'right',
        }}
      >
        {year}
      </div>
      <div style={{ width: chartWidth, height: chartHeight }}>
        <CalendarChart
          data={yearData}
          width={chartWidth}
          height={chartHeight}
          dateKey="date"
          dataKey="change"
          fillKey="fill"
          name="Daily change"
          startDate={startDate}
          endDate={endDate}
          colors={djiCalendarPalette}
          colorDomain={djiCalendarDomain}
          emptyColor="transparent"
          treatZeroAsEmpty={false}
          showWeekends={false}
          showLegend={showLegend}
        />
      </div>
    </div>
  );
}

export default {
  component: CalendarChart,
  docs: {
    autodocs: false,
  },
};

export const Basic: StoryObj = {
  render: (_args: Args) => (
    <div
      style={{
        display: 'grid',
        gap: '18px',
        paddingTop: '6px',
        background: '#fff',
        fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <div
        style={{
          maxWidth: '880px',
          fontSize: '13px',
          lineHeight: '1.5',
          color: '#57606a',
        }}
      >
        Uses the same Observable attachment and daily-change transform as Mike Bostock&apos;s{' '}
        <a href="https://observablehq.com/@d3/calendar" target="_blank" rel="noreferrer">
          D3 Calendar example
        </a>
        : the `2018`–`2020` rows shown here are sliced from the notebook&apos;s `^DJI@2.csv` Yahoo Finance data so
        reviewers can compare the two renders directly.
      </div>
      {djiCalendarYears.map((year, index) => (
        <YearCalendar key={year} year={year} showLegend={index === djiCalendarYears.length - 1} />
      ))}
    </div>
  ),
};
