import { createContext, useContext, useMemo, useState } from 'react';
import {
  DefaultLegendContentProps,
  Legend,
  LegendPayload,
  RadialBar,
  RadialBarChart,
  RadialBarSectorProps,
  Sector,
} from 'recharts';
import { generateMockData, RechartsDevtools } from '@recharts/devtools';

const data = generateMockData(6, 134);
const colors = ['#8884d8', '#83a6ed', '#8dd1e1', '#82ca9d', '#a4de6c', '#d0ed57', '#ffc658'];

type SelectedLabelState = {
  selectedLabel: string | undefined;
  setSelectedLabel: (label: string | undefined) => void;
};

const SelectedLabelContext = createContext<SelectedLabelState>({
  selectedLabel: undefined,
  setSelectedLabel: () => {},
});

const CustomSector = (props: RadialBarSectorProps) => {
  const { selectedLabel, setSelectedLabel } = useContext(SelectedLabelContext);
  const isSelected = props.payload.label === selectedLabel || selectedLabel == null;
  return (
    <Sector
      {...props}
      onClick={() => setSelectedLabel(props.payload.label)}
      fill={colors[props.index % colors.length]}
      opacity={isSelected ? 1 : 0.2}
      style={{
        transition: 'opacity 0.3s ease',
      }}
    />
  );
};

const LegendItem = ({ entry }: { entry: LegendPayload }) => {
  const { selectedLabel, setSelectedLabel } = useContext(SelectedLabelContext);
  // @ts-expect-error label is always present in our case, the typings are just not accurate enough
  const l = entry.payload.label;
  const isSelected = selectedLabel === l || selectedLabel == null;
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
    <li
      onClick={() => setSelectedLabel(l)}
      style={{
        color: entry.color,
        opacity: isSelected ? 1 : 0.2,
        transition: 'opacity 0.3s ease',
      }}
    >
      {l}
    </li>
  );
};

const LegendContent = ({ payload }: DefaultLegendContentProps) => {
  return (
    <ul>
      {payload?.map((entry, index) => (
        <LegendItem key={`item-${index}`} entry={entry} />
      ))}
    </ul>
  );
};

export default function RadialBarChartClickToFocusLegendExample() {
  const [selectedRadialBar, setSelectedRadialBar] = useState<string | undefined>(undefined);

  const providerValue = useMemo(
    () => ({
      selectedLabel: selectedRadialBar,
      setSelectedLabel: (newLabel: string | undefined) =>
        setSelectedRadialBar(curr => (curr === newLabel ? undefined : newLabel)),
    }),
    [selectedRadialBar],
  );

  return (
    <SelectedLabelContext.Provider value={providerValue}>
      <RadialBarChart data={data} style={{ width: '100%', maxWidth: '500px', aspectRatio: 2 }} responsive>
        <RadialBar background dataKey="x" name="foo" shape={CustomSector} cornerRadius={10} />
        <Legend
          iconSize={10}
          width={120}
          height={140}
          layout="vertical"
          verticalAlign="middle"
          align="right"
          content={LegendContent}
        />
        <RechartsDevtools />
      </RadialBarChart>
    </SelectedLabelContext.Provider>
  );
}
