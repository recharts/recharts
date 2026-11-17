import { createContext, CSSProperties, useCallback, useContext, useMemo, useState } from 'react';
import {
  DefaultLegendContentProps,
  Legend,
  LegendPayload,
  RadialBar,
  RadialBarChart,
  RadialBarSectorProps,
  Sector,
  useRechartsTheme,
} from 'recharts';
import { generateMockData, RechartsDevtools } from '@recharts/devtools';

const data = generateMockData(6, 134);
const colors = ['#8884d8', '#83a6ed', '#8dd1e1', '#82ca9d', '#a4de6c', '#d0ed57', '#ffc658'];

const chartStyle: CSSProperties = { width: '100%', maxWidth: '500px', aspectRatio: 2 };

const sectorStyle: CSSProperties = { transition: 'opacity 0.3s ease', cursor: 'pointer' };

const legendListStyle: CSSProperties = {
  listStyle: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
};

const swatchStyleBase: CSSProperties = {
  display: 'inline-block',
  width: 10,
  height: 10,
  borderRadius: 3,
  flexShrink: 0,
};

type SelectedLabelState = {
  selectedLabel: string | undefined;
  setSelectedLabel: (label: string | undefined) => void;
};

const SelectedLabelContext = createContext<SelectedLabelState>({
  selectedLabel: undefined,
  setSelectedLabel: () => {},
});

function getLabel(entry: LegendPayload): string | undefined {
  const { payload } = entry;
  if (payload != null && 'label' in payload) {
    return String(payload.label);
  }
  return undefined;
}

const CustomSector = (props: RadialBarSectorProps) => {
  const { selectedLabel, setSelectedLabel } = useContext(SelectedLabelContext);
  const { label } = props.payload;
  const isSelected = label === selectedLabel || selectedLabel == null;
  const handleClick = useCallback(() => setSelectedLabel(label), [setSelectedLabel, label]);
  return (
    <Sector
      {...props}
      onClick={handleClick}
      fill={colors[props.index % colors.length]}
      opacity={isSelected ? 1 : 0.2}
      style={sectorStyle}
    />
  );
};

const LegendItem = ({ entry, index }: { entry: LegendPayload; index: number }) => {
  const { selectedLabel, setSelectedLabel } = useContext(SelectedLabelContext);
  const theme = useRechartsTheme();
  const label = getLabel(entry);
  const isSelected = selectedLabel === label || selectedLabel == null;
  return (
    <li>
      <button
        type="button"
        aria-pressed={selectedLabel === label}
        onClick={() => setSelectedLabel(label)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          width: '100%',
          padding: '2px 6px',
          border: 'none',
          borderRadius: 4,
          background: 'transparent',
          color: theme?.typography?.color ?? 'inherit',
          font: 'inherit',
          textAlign: 'left',
          cursor: 'pointer',
          opacity: isSelected ? 1 : 0.3,
          transition: 'opacity 0.3s ease',
        }}
      >
        <span style={{ ...swatchStyleBase, backgroundColor: colors[index % colors.length] }} />
        {label}
      </button>
    </li>
  );
};

const LegendContent = ({ payload }: DefaultLegendContentProps) => {
  return (
    <ul style={legendListStyle}>
      {payload?.map((entry, index) => (
        <LegendItem key={getLabel(entry) ?? index} entry={entry} index={index} />
      ))}
    </ul>
  );
};

export default function RadialBarChartClickToFocusLegendExample() {
  const [selectedRadialBar, setSelectedRadialBar] = useState<string | undefined>(undefined);

  const setSelectedLabel = useCallback(
    (newLabel: string | undefined) => setSelectedRadialBar(curr => (curr === newLabel ? undefined : newLabel)),
    [],
  );

  const providerValue = useMemo(
    () => ({ selectedLabel: selectedRadialBar, setSelectedLabel }),
    [selectedRadialBar, setSelectedLabel],
  );

  return (
    <SelectedLabelContext.Provider value={providerValue}>
      <RadialBarChart data={data} style={chartStyle} responsive>
        <RadialBar background dataKey="x" name="foo" shape={CustomSector} cornerRadius={10} stroke="none" />
        <Legend width={120} height={140} position="right" content={LegendContent} />
        <RechartsDevtools />
      </RadialBarChart>
    </SelectedLabelContext.Provider>
  );
}
