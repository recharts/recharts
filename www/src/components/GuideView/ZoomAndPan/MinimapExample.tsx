import {
  CartesianGrid,
  Line,
  LineChart,
  Minimap,
  MinimapDrag,
  MinimapKeyboard,
  MinimapPinch,
  MinimapWheel,
  Tooltip,
  XAxis,
  YAxis,
  ZoomAndPan,
} from 'recharts';
import { generateMockData } from '@recharts/devtools';
import type { Lever } from '../../Shared/levers/Levers.tsx';
import { createCheckboxLever, createSelectLever } from '../../Shared/levers/Levers.tsx';

const data = generateMockData(80, 3);

type MinimapPosition = 'insideTopLeft' | 'insideTopRight' | 'insideBottomLeft' | 'insideBottomRight';

type ControlsType = {
  minimapPosition: MinimapPosition;
  minimapWheel: boolean;
  minimapPinch: boolean;
  globalWheel: boolean;
};

export const minimapExampleDefaultState: ControlsType = {
  minimapPosition: 'insideBottomRight',
  minimapWheel: true,
  minimapPinch: true,
  globalWheel: true,
};

const minimapPositions: ReadonlyArray<MinimapPosition> = [
  'insideTopLeft',
  'insideTopRight',
  'insideBottomLeft',
  'insideBottomRight',
];

export const minimapExampleLevers = [
  createSelectLever<ControlsType, MinimapPosition>({
    key: 'minimapPosition',
    label: 'Minimap position',
    options: minimapPositions.map(position => ({ value: position, label: position })),
    getValue: state => state.minimapPosition,
    onChange: (minimapPosition, state) => ({ ...state, minimapPosition }),
  }),
  createCheckboxLever<ControlsType>({
    key: 'globalWheel',
    label: 'Wheel on chart',
    getValue: state => state.globalWheel,
    onChange: (globalWheel, state) => ({ ...state, globalWheel }),
  }),
  createCheckboxLever<ControlsType>({
    key: 'minimapWheel',
    label: 'Wheel on minimap',
    getValue: state => state.minimapWheel,
    onChange: (minimapWheel, state) => ({ ...state, minimapWheel }),
  }),
  createCheckboxLever<ControlsType>({
    key: 'minimapPinch',
    label: 'Pinch on minimap',
    getValue: state => state.minimapPinch,
    onChange: (minimapPinch, state) => ({ ...state, minimapPinch }),
  }),
] satisfies ReadonlyArray<Lever<ControlsType>>;

export default function MinimapExample(props: Partial<ControlsType>) {
  const { minimapPosition, minimapWheel, minimapPinch, globalWheel } = {
    ...minimapExampleDefaultState,
    ...props,
  };

  return (
    <LineChart style={{ width: '100%', maxWidth: 700, height: 320 }} data={data} responsive>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="label" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="x" stroke="#8884d8" dot={false} isAnimationActive={false} />
      <Line type="monotone" dataKey="y" stroke="#82ca9d" dot={false} isAnimationActive={false} />
      <ZoomAndPan axis="x" initialZoom={{ x: { start: 0.2, end: 0.5 } }} scrollbars={false} wheel={globalWheel} />
      {/* Drag the rectangle to pan, resize its edges to zoom, click outside it to jump. */}
      <Minimap
        ariaLabel="Chart overview"
        axis="x"
        position={minimapPosition}
        width={200}
        height={70}
        viewportStroke="#1d4ed8"
        controls={
          <>
            <MinimapDrag />
            <MinimapWheel enabled={minimapWheel} />
            {minimapPinch && <MinimapPinch />}
            <MinimapKeyboard />
          </>
        }
      >
        <LineChart data={data}>
          <Line type="monotone" dataKey="x" stroke="#8884d8" dot={false} isAnimationActive={false} />
        </LineChart>
      </Minimap>
    </LineChart>
  );
}
