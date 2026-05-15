import { LineProps } from 'recharts';

type SeriesTone =
  | 'chart-indigo'
  | 'chart-green'
  | 'chart-orange'
  | 'chart-cyan'
  | 'chart-lightgreen'
  | 'chart-lime'
  | 'chart-violet'
  | 'chart-red'
  | 'chart-steelblue'
  | 'chart-pink';
type SeriesColor = ({} & string) | SeriesTone;

const seriesToVar = {
  'chart-indigo': '--color-chart-1',
  'chart-green': '--color-chart-2',
  'chart-orange': '--color-chart-3',
  'chart-cyan': '--color-chart-4',
  'chart-lightgreen': '--color-chart-5',
  'chart-lime': '--color-chart-6',
  'chart-violet': '--color-chart-7',
  'chart-red': '--color-chart-8',
  'chart-steelblue': '--color-chart-9',
  'chart-pink': '--color-chart-10',
} as const satisfies Record<SeriesColor, `--color-chart-${SeriesColor}`>;

function resolveSeriesColor(color: SeriesColor): string {
  const varName = color in seriesToVar ? seriesToVar[color as SeriesTone] : undefined;
  return varName ? `var(${varName})` : color;
}

export const chartTheme = {
  cartesianGrid() {
    return {
      strokeDasharray: '3 3',
      stroke: 'var(--color-border-3)',
    } as const;
  },
  axis(props: { stroke?: SeriesColor } = {}) {
    return {
      stroke: resolveSeriesColor(props.stroke ?? 'var(--color-text-3)'),
    } as const;
  },
  dot(props: Exclude<LineProps['dot'], boolean> = {}) {
    return {
      fill: 'var(--color-surface-base)',
      ...props,
    } as const;
  },
  activeDot(props: Exclude<LineProps['activeDot'], boolean> = {}) {
    return {
      stroke: 'var(--color-surface-base)',
      ...props,
    } as const;
  },
  line(props: { tone: SeriesColor }) {
    return {
      stroke: resolveSeriesColor(props.tone),
    } as const;
  },
  bar(props: { tone: SeriesColor }) {
    return {
      fill: resolveSeriesColor(props.tone),
    } as const;
  },
  area(props: { tone: SeriesColor }) {
    return {
      stroke: resolveSeriesColor(props.tone),
      fill: resolveSeriesColor(props.tone),
    } as const;
  },
  cross() {
    return {
      strokeWidth: 1,
      strokeDasharray: '4',
      stroke: 'var(--color-text-3)',
    } as const;
  },
  text() {
    return {
      stroke: 'var(--color-surface-base)',
      strokeWidth: 3,
      fill: 'var(--color-text-1)',
      paintOrder: 'stroke',
    } as const;
  },
  tooltipCursor() {
    return { stroke: 'var(--color-border-2)' } as const;
  },
  tooltipContent() {
    return {
      backgroundColor: 'var(--color-surface-base)',
      borderColor: 'var(--color-border-2)',
    } as const;
  },
} as const;
