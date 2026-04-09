import * as React from 'react';
import { useMemo } from 'react';
import { HeatMap } from '../cartesian/HeatMap';
import { DefaultTooltipContent } from '../component/DefaultTooltipContent';
import { Tooltip } from '../component/Tooltip';
import { useViewBox } from '../context/chartLayoutContext';
import { useXAxisScale, useYAxisScale } from '../hooks';
import { TooltipPayloadEntry } from '../state/tooltipSlice';
import { XAxis } from '../cartesian/XAxis';
import { YAxis } from '../cartesian/YAxis';
import { HeatMapGap } from '../state/types/HeatMapSettings';
import { getValueByDataKey } from '../util/ChartUtils';
import { DataKey, Margin } from '../util/types';
import { HeatMapChart } from './HeatMapChart';

const weekdayLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] as const;
const weekdayInitials = ['M', 'T', 'W', 'T', 'F', 'S', 'S'] as const;
const defaultPalette = ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'] as const;
const defaultMargin = { top: 28, right: 16, bottom: 34, left: 34 } as const;
const labelFontFamily = 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';

type DateValue = string | number | Date;

export type CalendarChartDataPoint = {
  [key: string]: unknown;
};

export type CalendarChartCell<DataPointType = unknown> = {
  date: string;
  dateLabel: string;
  month: string;
  monthKey: string;
  monthLabel: string;
  year: number;
  weekKey: string;
  weekIndex: number;
  weekday: (typeof weekdayLabels)[number];
  weekdayIndex: number;
  value: unknown;
  fill: string;
  isEmpty: boolean;
  source: DataPointType | undefined;
};

type CalendarMonth<DataPointType = unknown> = {
  key: string;
  label: string;
  year: number;
  firstWeekKey: string;
  firstWeekIndex: number;
  cells: ReadonlyArray<CalendarChartCell<DataPointType>>;
};

export interface CalendarChartProps<DataPointType = unknown> {
  width?: number;
  height?: number;
  data?: ReadonlyArray<DataPointType>;
  dateKey: DataKey<DataPointType, DateValue>;
  dataKey: DataKey<DataPointType, unknown>;
  fillKey?: DataKey<DataPointType, string>;
  startDate?: DateValue;
  endDate?: DateValue;
  margin?: Margin;
  className?: string;
  name?: string;
  emptyColor?: string;
  colors?: ReadonlyArray<string>;
  colorDomain?: readonly [number, number];
  treatZeroAsEmpty?: boolean;
  cellGap?: HeatMapGap;
  radius?: number;
  isAnimationActive?: boolean | 'auto';
  showTooltip?: boolean;
  showMonthLabels?: boolean;
  showWeekdayLabels?: boolean;
  showLegend?: boolean;
  showWeekends?: boolean;
}

type PreparedCalendarData<DataPointType> = {
  cells: ReadonlyArray<CalendarChartCell<DataPointType>>;
  months: ReadonlyArray<CalendarMonth<DataPointType>>;
  weekKeys: ReadonlyArray<string>;
  legendColors: ReadonlyArray<string>;
  activeWeekdayLabels: ReadonlyArray<(typeof weekdayLabels)[number]>;
};

function CalendarTooltipContent({
  active,
  payload,
}: {
  active?: boolean;
  payload?: ReadonlyArray<TooltipPayloadEntry>;
}) {
  if (!active || payload == null || payload.length === 0) {
    return null;
  }

  const firstPayload = payload[0]?.payload;
  const label =
    firstPayload != null && typeof firstPayload === 'object' && 'dateLabel' in firstPayload
      ? String(firstPayload.dateLabel)
      : '';

  const tooltipPayload = payload.filter(entry => entry.dataKey === 'value' || entry.name === 'Day');

  return <DefaultTooltipContent label={label} payload={tooltipPayload} />;
}

function toGridVertexKey(x: number, y: number): string {
  return `${x},${y}`;
}

function parseGridVertex(key: string): { x: number; y: number } {
  const [x = 0, y = 0] = key.split(',').map(Number);

  return { x, y };
}

function buildMonthOutlinePath<DataPointType>({
  month,
  xEdges,
  yEdges,
}: {
  month: CalendarMonth<DataPointType>;
  xEdges: ReadonlyArray<number>;
  yEdges: ReadonlyArray<number>;
}): string | undefined {
  const occupied = new Set(month.cells.map(cell => `${cell.weekIndex},${cell.weekdayIndex}`));
  const nextByStart = new Map<string, string>();

  month.cells.forEach(cell => {
    const { weekIndex, weekdayIndex } = cell;

    if (!occupied.has(`${weekIndex},${weekdayIndex - 1}`)) {
      nextByStart.set(toGridVertexKey(weekIndex, weekdayIndex), toGridVertexKey(weekIndex + 1, weekdayIndex));
    }
    if (!occupied.has(`${weekIndex + 1},${weekdayIndex}`)) {
      nextByStart.set(toGridVertexKey(weekIndex + 1, weekdayIndex), toGridVertexKey(weekIndex + 1, weekdayIndex + 1));
    }
    if (!occupied.has(`${weekIndex},${weekdayIndex + 1}`)) {
      nextByStart.set(toGridVertexKey(weekIndex + 1, weekdayIndex + 1), toGridVertexKey(weekIndex, weekdayIndex + 1));
    }
    if (!occupied.has(`${weekIndex - 1},${weekdayIndex}`)) {
      nextByStart.set(toGridVertexKey(weekIndex, weekdayIndex + 1), toGridVertexKey(weekIndex, weekdayIndex));
    }
  });

  const start = Array.from(nextByStart.keys())
    .map(parseGridVertex)
    .sort((left, right) => left.y - right.y || left.x - right.x)[0];

  if (start == null) {
    return undefined;
  }

  const startKey = toGridVertexKey(start.x, start.y);
  const points = [start];
  let cursor = startKey;
  let guard = 0;

  while (guard < nextByStart.size + 2) {
    const next = nextByStart.get(cursor);
    if (next == null) {
      break;
    }
    if (next === startKey) {
      break;
    }
    points.push(parseGridVertex(next));
    cursor = next;
    guard += 1;
  }

  if (points.length === 0) {
    return undefined;
  }

  return points
    .map((point, index) => {
      const command = index === 0 ? 'M' : 'L';
      return `${command}${xEdges[point.x]},${yEdges[point.y]}`;
    })
    .concat('Z')
    .join('');
}

function CalendarDecorations<DataPointType>({
  months,
  weekKeys,
  legendColors,
  activeWeekdayLabels,
  showMonthLabels,
  showWeekdayLabels,
  showLegend,
}: {
  months: ReadonlyArray<CalendarMonth<DataPointType>>;
  weekKeys: ReadonlyArray<string>;
  legendColors: ReadonlyArray<string>;
  activeWeekdayLabels: ReadonlyArray<(typeof weekdayLabels)[number]>;
  showMonthLabels: boolean;
  showWeekdayLabels: boolean;
  showLegend: boolean;
}) {
  const viewBox = useViewBox();
  const xScale = useXAxisScale();
  const yScale = useYAxisScale();

  if (viewBox == null || xScale == null || yScale == null || weekKeys.length === 0) {
    return null;
  }

  const xEdges = weekKeys
    .map(weekKey => xScale(weekKey, { position: 'start' }) ?? viewBox.x)
    .concat(xScale(weekKeys[weekKeys.length - 1], { position: 'end' }) ?? viewBox.x + viewBox.width);
  const yEdges = activeWeekdayLabels
    .map(label => yScale(label, { position: 'start' }) ?? viewBox.y)
    .concat(
      yScale(activeWeekdayLabels[activeWeekdayLabels.length - 1], { position: 'end' }) ?? viewBox.y + viewBox.height,
    );
  const yBand =
    (yScale(activeWeekdayLabels[0], { position: 'end' }) ?? viewBox.y + viewBox.height) -
    (yScale(activeWeekdayLabels[0], { position: 'start' }) ?? viewBox.y);
  const legendY = viewBox.y + viewBox.height + 22;
  const legendSquare = Math.min(10, yBand - 2);
  const legendGap = 4;
  const legendWidth = legendColors.length * legendSquare + (legendColors.length - 1) * legendGap;
  const legendStartX = viewBox.x + viewBox.width - legendWidth - 44;
  const visibleWeekdayLabelIndexes =
    activeWeekdayLabels.length <= 5 ? activeWeekdayLabels.map((_, index) => index) : [0, 2, 4];

  return (
    <g className="recharts-calendar-decorations">
      {months.map((month, monthIndex) => {
        const monthX = xScale(month.firstWeekKey, { position: 'start' }) ?? viewBox.x;
        const monthPath = buildMonthOutlinePath({
          month,
          xEdges,
          yEdges,
        });

        return (
          <g className="recharts-calendar-month" key={month.key}>
            {showMonthLabels ? (
              <text
                className="recharts-calendar-month-label"
                x={monthX}
                y={viewBox.y - 10}
                fill="#57606a"
                fontSize={12}
                fontFamily={labelFontFamily}
                textAnchor="start"
              >
                {month.label}
              </text>
            ) : null}
            {monthIndex > 0 && monthPath != null ? (
              <path
                className="recharts-calendar-month-boundary"
                d={monthPath}
                fill="none"
                stroke="#d0d7de"
                strokeWidth={1}
              />
            ) : null}
          </g>
        );
      })}

      {showWeekdayLabels
        ? visibleWeekdayLabelIndexes.map(index => (
            <text
              className="recharts-calendar-weekday-label"
              key={`${activeWeekdayLabels[index]}-${index}`}
              x={viewBox.x - 10}
              y={yScale(activeWeekdayLabels[index], { position: 'middle' }) ?? viewBox.y}
              fill="#57606a"
              fontSize={12}
              fontFamily={labelFontFamily}
              textAnchor="end"
              dominantBaseline="middle"
            >
              {weekdayInitials[index] ?? activeWeekdayLabels[index]}
            </text>
          ))
        : null}

      {showLegend ? (
        <>
          <text
            className="recharts-calendar-legend-label"
            x={legendStartX - 8}
            y={legendY}
            fill="#57606a"
            fontSize={11}
            fontFamily={labelFontFamily}
            textAnchor="end"
            dominantBaseline="middle"
          >
            Less
          </text>
          {legendColors.map((color, index) => (
            <rect
              className="recharts-calendar-legend-swatch"
              key={`${color}-${index}`}
              x={legendStartX + index * (legendSquare + legendGap)}
              y={legendY - legendSquare / 2}
              width={legendSquare}
              height={legendSquare}
              rx={2}
              fill={color}
            />
          ))}
          <text
            className="recharts-calendar-legend-label"
            x={legendStartX + legendWidth + 8}
            y={legendY}
            fill="#57606a"
            fontSize={11}
            fontFamily={labelFontFamily}
            textAnchor="start"
            dominantBaseline="middle"
          >
            More
          </text>
        </>
      ) : null}
    </g>
  );
}

function startOfDay(date: Date): Date {
  return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
}

function addDays(date: Date, days: number): Date {
  const next = new Date(date);
  next.setUTCDate(next.getUTCDate() + days);
  return next;
}

function parseDateValue(value: DateValue | undefined): Date | undefined {
  if (value == null) {
    return undefined;
  }
  const parsed =
    typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value) ? new Date(`${value}T00:00:00Z`) : new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    return undefined;
  }
  return startOfDay(parsed);
}

function startOfWeekMonday(date: Date): Date {
  const day = date.getUTCDay();
  const offset = (day + 6) % 7;
  return addDays(startOfDay(date), -offset);
}

function endOfWeekMonday(date: Date): Date {
  return addDays(startOfWeekMonday(date), 6);
}

function toDateKey(date: Date): string {
  return date.toISOString().slice(0, 10);
}

function getWeekdayIndex(date: Date): number {
  return (date.getUTCDay() + 6) % 7;
}

function startOfYear(date: Date): Date {
  return new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
}

function startOfNextWeekMonday(date: Date): Date {
  const weekStart = startOfWeekMonday(date);
  return weekStart.getTime() === date.getTime() ? weekStart : addDays(weekStart, 7);
}

function getWeekIndex(date: Date): number {
  const yearStart = startOfYear(date);
  const firstMonday = startOfNextWeekMonday(yearStart);

  if (date < firstMonday) {
    return 0;
  }

  return Math.floor((startOfWeekMonday(date).getTime() - firstMonday.getTime()) / (7 * 24 * 60 * 60 * 1000)) + 1;
}

function toMonthLabel(date: Date): string {
  return new Intl.DateTimeFormat('en-US', { month: 'short', timeZone: 'UTC' }).format(date);
}

function toDateLabel(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}

function toNumericValue(value: unknown): number | null {
  return typeof value === 'number' && Number.isFinite(value) ? value : null;
}

function getCalendarFill({
  value,
  colors,
  emptyColor,
  colorDomain,
  isEmpty,
  treatZeroAsEmpty,
}: {
  value: unknown;
  colors: ReadonlyArray<string>;
  emptyColor: string;
  colorDomain: readonly [number, number];
  isEmpty: boolean;
  treatZeroAsEmpty: boolean;
}): string {
  const numericValue = toNumericValue(value);

  if (isEmpty || numericValue == null || (treatZeroAsEmpty && numericValue === 0)) {
    return emptyColor;
  }

  if (colors.length === 0) {
    return emptyColor;
  }

  if (colors.length === 1) {
    return colors[colors.length - 1] ?? emptyColor;
  }

  const [domainMin, domainMax] = colorDomain;
  if (domainMin === domainMax) {
    return colors[Math.floor((colors.length - 1) / 2)] ?? emptyColor;
  }

  const clamped = Math.max(domainMin, Math.min(domainMax, numericValue));
  const normalized = (clamped - domainMin) / (domainMax - domainMin);
  const scaledIndex = Math.max(0, Math.min(colors.length - 1, Math.round(normalized * (colors.length - 1))));

  return colors[scaledIndex] ?? colors[colors.length - 1] ?? emptyColor;
}

function prepareCalendarData<DataPointType>({
  data,
  dateKey,
  dataKey,
  fillKey,
  startDate,
  endDate,
  colors,
  emptyColor,
  colorDomain,
  treatZeroAsEmpty,
  showWeekends,
}: {
  data: ReadonlyArray<DataPointType>;
  dateKey: DataKey<DataPointType, DateValue>;
  dataKey: DataKey<DataPointType, unknown>;
  fillKey: DataKey<DataPointType, string> | undefined;
  startDate: DateValue | undefined;
  endDate: DateValue | undefined;
  colors: ReadonlyArray<string>;
  emptyColor: string;
  colorDomain: readonly [number, number] | undefined;
  treatZeroAsEmpty: boolean;
  showWeekends: boolean;
}): PreparedCalendarData<DataPointType> {
  const resolvedPalette = colors.length > 0 ? colors : defaultPalette;
  const activeWeekdayLabels = showWeekends ? weekdayLabels : weekdayLabels.slice(0, 5);
  const sourceDates = data
    .map(entry => parseDateValue(getValueByDataKey<DataPointType, DateValue>(entry, dateKey)))
    .filter((date): date is Date => date != null)
    .sort((left, right) => left.getTime() - right.getTime());
  const firstSourceDate = sourceDates[0];
  const lastSourceDate = sourceDates[sourceDates.length - 1];

  const rangeStart =
    parseDateValue(startDate) ??
    (firstSourceDate != null
      ? new Date(firstSourceDate.getFullYear(), 0, 1)
      : new Date(new Date().getFullYear(), 0, 1));
  const rangeEnd =
    parseDateValue(endDate) ??
    (lastSourceDate != null
      ? new Date(lastSourceDate.getFullYear(), 11, 31)
      : new Date(rangeStart.getFullYear(), 11, 31));

  const canonicalStart = startOfWeekMonday(rangeStart);
  const canonicalEnd = endOfWeekMonday(rangeEnd);

  const dataByDate = new Map<string, { value: unknown; fill?: string; source: DataPointType }>();
  const numericValues: number[] = [];

  data.forEach(entry => {
    const date = parseDateValue(getValueByDataKey<DataPointType, DateValue>(entry, dateKey));
    if (date == null) {
      return;
    }

    const key = toDateKey(date);
    const rawValue = getValueByDataKey<DataPointType, unknown>(entry, dataKey);
    const rawFill = fillKey == null ? undefined : getValueByDataKey<DataPointType, string>(entry, fillKey);
    const numericValue = toNumericValue(rawValue);

    if (numericValue != null) {
      numericValues.push(numericValue);
    }

    dataByDate.set(key, {
      value: rawValue,
      fill: typeof rawFill === 'string' ? rawFill : undefined,
      source: entry,
    });
  });

  const resolvedColorDomain =
    colorDomain ??
    (numericValues.length > 0
      ? ([Math.min(...numericValues), Math.max(...numericValues)] as const)
      : ([0, 1] as const));
  const cells: Array<CalendarChartCell<DataPointType>> = [];
  const weekKeys: string[] = [];

  for (let day = canonicalStart; day <= canonicalEnd; day = addDays(day, 1)) {
    const key = toDateKey(day);
    const weekdayIndex = getWeekdayIndex(day);
    if (!showWeekends && weekdayIndex >= 5) {
      continue;
    }

    const displayedWeekdayIndex = showWeekends ? weekdayIndex : weekdayIndex;
    const entry = dataByDate.get(key);
    const isEmpty = entry == null;
    const weekIndex = getWeekIndex(day);
    const weekKey = String(weekIndex);
    const monthKey = `${day.getUTCFullYear()}-${String(day.getUTCMonth() + 1).padStart(2, '0')}`;

    if (weekKeys[weekKeys.length - 1] !== weekKey) {
      weekKeys.push(weekKey);
    }

    cells.push({
      date: key,
      dateLabel: toDateLabel(day),
      month: toMonthLabel(day),
      monthKey,
      monthLabel: toMonthLabel(day),
      year: day.getUTCFullYear(),
      weekKey,
      weekIndex,
      weekday: activeWeekdayLabels[displayedWeekdayIndex] ?? activeWeekdayLabels[0],
      weekdayIndex: displayedWeekdayIndex,
      value: entry?.value ?? 0,
      fill:
        entry?.fill ??
        getCalendarFill({
          value: entry?.value ?? 0,
          colors: resolvedPalette,
          emptyColor,
          colorDomain: resolvedColorDomain,
          isEmpty,
          treatZeroAsEmpty,
        }),
      isEmpty,
      source: entry?.source,
    });
  }

  const rangedCells = cells.filter(cell => {
    const cellDate = parseDateValue(cell.date);
    return cellDate != null && cellDate >= rangeStart && cellDate <= rangeEnd;
  });

  const months = Array.from(
    rangedCells
      .reduce<Map<string, CalendarMonth<DataPointType>>>((result, cell) => {
        const existing = result.get(cell.monthKey);
        if (existing == null) {
          result.set(cell.monthKey, {
            key: cell.monthKey,
            label: cell.monthLabel,
            year: cell.year,
            firstWeekKey: cell.weekKey,
            firstWeekIndex: cell.weekIndex,
            cells: [cell],
          });
        } else {
          result.set(cell.monthKey, {
            ...existing,
            cells: existing.cells.concat(cell),
          });
        }
        return result;
      }, new Map())
      .values(),
  );

  return {
    cells,
    months,
    weekKeys,
    legendColors: resolvedPalette,
    activeWeekdayLabels,
  };
}

export function CalendarChart<DataPointType = unknown>({
  width,
  height,
  data = [],
  dateKey,
  dataKey,
  fillKey,
  startDate,
  endDate,
  margin = defaultMargin,
  className,
  name = 'Value',
  emptyColor = defaultPalette[0],
  colors = defaultPalette,
  colorDomain,
  treatZeroAsEmpty = true,
  cellGap = 4,
  radius = 3,
  isAnimationActive = false,
  showTooltip = true,
  showMonthLabels = true,
  showWeekdayLabels = true,
  showLegend = true,
  showWeekends = true,
}: CalendarChartProps<DataPointType>) {
  const prepared = useMemo(
    () =>
      prepareCalendarData({
        data,
        dateKey,
        dataKey,
        fillKey,
        startDate,
        endDate,
        colors,
        emptyColor,
        colorDomain,
        treatZeroAsEmpty,
        showWeekends,
      }),
    [
      colorDomain,
      colors,
      data,
      dataKey,
      dateKey,
      emptyColor,
      endDate,
      fillKey,
      showWeekends,
      startDate,
      treatZeroAsEmpty,
    ],
  );

  return (
    <HeatMapChart width={width} height={height} data={prepared.cells} margin={margin} className={className}>
      <XAxis type="category" dataKey="weekKey" name="Week" allowDuplicatedCategory={false} hide />
      <YAxis type="category" dataKey="weekday" name="Day" allowDuplicatedCategory={false} hide reversed />
      {showTooltip ? <Tooltip cursor={false} content={<CalendarTooltipContent />} /> : null}
      <HeatMap dataKey="value" name={name} cellGap={cellGap} radius={radius} isAnimationActive={isAnimationActive} />
      <CalendarDecorations
        months={prepared.months}
        weekKeys={prepared.weekKeys}
        legendColors={prepared.legendColors}
        activeWeekdayLabels={prepared.activeWeekdayLabels}
        showMonthLabels={showMonthLabels}
        showWeekdayLabels={showWeekdayLabels}
        showLegend={showLegend}
      />
    </HeatMapChart>
  );
}
