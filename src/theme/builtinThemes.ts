import { COLOR_PANEL } from '../util/Constants';
import type { RechartsTheme } from './RechartsTheme';

const sourceSansFontFamily = "'Source Sans Pro', 'Hiragino Sans GB', Arial, sans-serif";

const legacyPalette = ['#3182bd'];

const websitePalette = [
  '#8884d8',
  '#82ca9d',
  '#ffc658',
  '#8dd1e1',
  '#a4de6c',
  '#d0ed57',
  '#83a6ed',
  '#ff7300',
  '#413ea0',
  '#6ea1c7',
  '#ed7485',
];

const legacyTooltipContentStyle = {
  margin: 0,
  padding: 10,
  backgroundColor: '#fff',
  border: '1px solid #ccc',
  whiteSpace: 'nowrap',
} as const;

const lightTooltipContentStyle = {
  margin: 0,
  padding: 10,
  backgroundColor: '#fff',
  border: '1px solid #a8a29e',
  borderRadius: 12,
  boxShadow: '0 12px 28px -12px rgba(24, 24, 27, 0.24)',
  whiteSpace: 'nowrap',
} as const;

const darkTooltipContentStyle = {
  margin: 0,
  padding: 10,
  backgroundColor: '#18181b',
  border: '1px solid #52525b',
  borderRadius: 12,
  boxShadow: '0 12px 28px -12px rgba(0, 0, 0, 0.55)',
  whiteSpace: 'nowrap',
} as const;

const legacySunburstTextOptions = {
  fontWeight: 'bold',
  paintOrder: 'stroke fill',
  fontSize: '.75rem',
  stroke: '#FFF',
  fill: 'black',
  pointerEvents: 'none',
} as const;

const lightSunburstTextOptions = {
  fontWeight: 'bold',
  paintOrder: 'stroke fill',
  fontSize: '.75rem',
  stroke: '#fff',
  fill: '#18181b',
  pointerEvents: 'none',
} as const;

const darkSunburstTextOptions = {
  fontWeight: 'bold',
  paintOrder: 'stroke fill',
  fontSize: '.75rem',
  stroke: '#18181b',
  fill: '#f5f5f4',
  pointerEvents: 'none',
} as const;

export const legacyTheme = {
  meta: {
    name: 'legacy',
    mode: 'light',
  },
  colors: {
    canvas: '#fff',
    surface: '#fff',
    text: '#000',
    mutedText: '#666',
    border: '#ccc',
    grid: '#ccc',
    axis: '#666',
    tooltipCursor: '#ccc',
  },
  strokeWidths: {
    axis: 1,
    grid: 1,
    line: 1,
    area: 1,
    reference: 1,
    polarGrid: 1,
  },
  series: {
    palette: legacyPalette,
  },
  components: {
    Area: {
      fillOpacity: 0.6,
    },
    Line: {
      fill: '#fff',
    },
    XAxis: {
      stroke: '#666',
    },
    YAxis: {
      stroke: '#666',
    },
    CartesianGrid: {
      stroke: '#ccc',
      fill: 'none',
    },
    Brush: {
      fill: '#fff',
      stroke: '#666',
    },
    Tooltip: {
      contentStyle: legacyTooltipContentStyle,
    },
    DefaultTooltipContent: {
      contentStyle: legacyTooltipContentStyle,
    },
    Legend: {
      inactiveColor: '#ccc',
    },
    DefaultLegendContent: {
      inactiveColor: '#ccc',
    },
    ReferenceLine: {
      fill: 'none',
      stroke: '#ccc',
      fillOpacity: 1,
      strokeWidth: 1,
    },
    ReferenceDot: {
      fill: '#fff',
      stroke: '#ccc',
      fillOpacity: 1,
      strokeWidth: 1,
    },
    ReferenceArea: {
      fill: '#ccc',
      fillOpacity: 0.5,
      stroke: 'none',
      strokeWidth: 1,
    },
    Pie: {
      fill: '#808080',
      stroke: '#fff',
    },
    Funnel: {
      fill: '#808080',
      stroke: '#fff',
    },
    PolarGrid: {
      stroke: '#ccc',
      strokeWidth: 1,
      fill: 'none',
    },
    PolarRadiusAxis: {
      stroke: '#ccc',
    },
    Treemap: {
      colorPanel: COLOR_PANEL,
    },
    SunburstChart: {
      fill: '#333',
      stroke: '#FFF',
      textOptions: legacySunburstTextOptions,
    },
  },
} satisfies RechartsTheme;

export const lightTheme = {
  meta: {
    name: 'light',
    mode: 'light',
  },
  colors: {
    canvas: '#fff',
    surface: '#fff',
    text: '#18181b',
    mutedText: '#52525b',
    border: '#a8a29e',
    grid: '#d6d3d1',
    axis: '#52525b',
    tooltipCursor: '#a8a29e',
  },
  typography: {
    fontFamily: sourceSansFontFamily,
    fontSize: 14,
    lineHeight: 1.5,
  },
  strokeWidths: {
    axis: 1,
    grid: 1,
    line: 1,
    area: 1,
    reference: 1,
    polarGrid: 1,
  },
  radii: {
    tooltip: 12,
  },
  shadows: {
    tooltip: '0 12px 28px -12px rgba(24, 24, 27, 0.24)',
  },
  series: {
    palette: websitePalette,
  },
  components: {
    Line: {
      fill: '#fff',
      dot: {
        fill: '#fff',
      },
      activeDot: {
        stroke: '#fff',
      },
    },
    Area: {
      fillOpacity: 0.2,
    },
    XAxis: {
      stroke: '#52525b',
    },
    YAxis: {
      stroke: '#52525b',
    },
    PolarAngleAxis: {
      stroke: '#52525b',
    },
    PolarRadiusAxis: {
      stroke: '#52525b',
    },
    CartesianGrid: {
      stroke: '#d6d3d1',
      fill: 'none',
    },
    PolarGrid: {
      stroke: '#d6d3d1',
      fill: 'none',
    },
    Brush: {
      fill: '#fff',
      stroke: '#a8a29e',
    },
    Tooltip: {
      cursor: {
        stroke: '#a8a29e',
      },
      contentStyle: lightTooltipContentStyle,
      labelStyle: {
        color: '#18181b',
      },
    },
    DefaultTooltipContent: {
      contentStyle: lightTooltipContentStyle,
      labelStyle: {
        color: '#18181b',
      },
    },
    Legend: {
      wrapperStyle: {
        color: '#18181b',
      },
      inactiveColor: '#52525b',
    },
    DefaultLegendContent: {
      labelStyle: {
        color: '#18181b',
      },
      inactiveColor: '#52525b',
    },
    ReferenceLine: {
      fill: 'none',
      stroke: '#a8a29e',
      fillOpacity: 1,
      strokeWidth: 1,
    },
    ReferenceDot: {
      fill: '#fff',
      stroke: '#a8a29e',
      fillOpacity: 1,
      strokeWidth: 1,
    },
    ReferenceArea: {
      fill: '#d6d3d1',
      fillOpacity: 0.25,
      stroke: 'none',
      strokeWidth: 1,
    },
    Pie: {
      fill: websitePalette[0],
      stroke: '#fff',
    },
    Funnel: {
      fill: websitePalette[0],
      stroke: '#fff',
    },
    Treemap: {
      colorPanel: websitePalette,
    },
    SunburstChart: {
      fill: websitePalette[0],
      stroke: '#fff',
      textOptions: lightSunburstTextOptions,
    },
  },
} satisfies RechartsTheme;

export const darkTheme = {
  meta: {
    name: 'dark',
    mode: 'dark',
  },
  colors: {
    canvas: '#18181b',
    surface: '#18181b',
    text: '#f5f5f4',
    mutedText: '#d6d3d1',
    border: '#52525b',
    grid: '#3f3f46',
    axis: '#d6d3d1',
    tooltipCursor: '#52525b',
  },
  typography: {
    fontFamily: sourceSansFontFamily,
    fontSize: 14,
    lineHeight: 1.5,
  },
  strokeWidths: {
    axis: 1,
    grid: 1,
    line: 1,
    area: 1,
    reference: 1,
    polarGrid: 1,
  },
  radii: {
    tooltip: 12,
  },
  shadows: {
    tooltip: '0 12px 28px -12px rgba(0, 0, 0, 0.55)',
  },
  series: {
    palette: websitePalette,
  },
  components: {
    Line: {
      fill: '#18181b',
      dot: {
        fill: '#18181b',
      },
      activeDot: {
        stroke: '#18181b',
      },
    },
    Area: {
      fillOpacity: 0.24,
    },
    XAxis: {
      stroke: '#d6d3d1',
    },
    YAxis: {
      stroke: '#d6d3d1',
    },
    PolarAngleAxis: {
      stroke: '#d6d3d1',
    },
    PolarRadiusAxis: {
      stroke: '#d6d3d1',
    },
    CartesianGrid: {
      stroke: '#3f3f46',
      fill: 'none',
    },
    PolarGrid: {
      stroke: '#3f3f46',
      fill: 'none',
    },
    Brush: {
      fill: '#18181b',
      stroke: '#52525b',
    },
    Tooltip: {
      cursor: {
        stroke: '#52525b',
      },
      contentStyle: darkTooltipContentStyle,
      labelStyle: {
        color: '#f5f5f4',
      },
    },
    DefaultTooltipContent: {
      contentStyle: darkTooltipContentStyle,
      labelStyle: {
        color: '#f5f5f4',
      },
    },
    Legend: {
      wrapperStyle: {
        color: '#f5f5f4',
      },
      inactiveColor: '#d6d3d1',
    },
    DefaultLegendContent: {
      labelStyle: {
        color: '#f5f5f4',
      },
      inactiveColor: '#d6d3d1',
    },
    ReferenceLine: {
      fill: 'none',
      stroke: '#52525b',
      fillOpacity: 1,
      strokeWidth: 1,
    },
    ReferenceDot: {
      fill: '#18181b',
      stroke: '#52525b',
      fillOpacity: 1,
      strokeWidth: 1,
    },
    ReferenceArea: {
      fill: '#3f3f46',
      fillOpacity: 0.3,
      stroke: 'none',
      strokeWidth: 1,
    },
    Pie: {
      fill: websitePalette[0],
      stroke: '#18181b',
    },
    Funnel: {
      fill: websitePalette[0],
      stroke: '#18181b',
    },
    Treemap: {
      colorPanel: websitePalette,
    },
    SunburstChart: {
      fill: websitePalette[0],
      stroke: '#18181b',
      textOptions: darkSunburstTextOptions,
    },
  },
} satisfies RechartsTheme;
