import { Line, LineChart, CartesianGrid, Tooltip, XAxis, YAxis, LineDrawShape, Curve } from 'recharts';
import { generateMockData, RechartsDevtools } from '@recharts/devtools';
import React, { useCallback, useState } from 'react';

const data1 = generateMockData(7, 100);
const data2 = generateMockData(7, 200);

type ControlsType = {
  data: typeof data1;
  renderKey: number;
  animationDuration: number;
};

const initialState: ControlsType = {
  data: data1,
  renderKey: 0,
  animationDuration: 500,
};

/**
 * Custom shape that fades in using opacity during entrance animation,
 * and renders normally otherwise.
 */
function OpacityFadeShape(props: Parameters<typeof LineDrawShape>[0]) {
  const { t = 1, isAnimating = false, isEntrance = false } = props;
  const opacity = isEntrance && isAnimating ? t : 1;
  return <Curve {...props} strokeOpacity={opacity} />;
}

export default function LineChartCustomShapeExample(props: ControlsType) {
  const { data, renderKey, animationDuration } = { ...initialState, ...props };
  return (
    <LineChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="label" />
      <YAxis width="auto" />
      <Tooltip />
      <Line
        key={renderKey}
        type="monotone"
        dataKey="y"
        stroke="#8884d8"
        strokeWidth={3}
        shape={OpacityFadeShape}
        animationDuration={animationDuration}
      />
      <RechartsDevtools />
    </LineChart>
  );
}

export const LineChartCustomShapeControls = ({ onChange }: { onChange: (values: ControlsType) => void }) => {
  const [state, setState] = useState<ControlsType>(initialState);

  const handleChange = useCallback(
    (next: Partial<ControlsType>) => {
      const newState = {
        ...state,
        ...next,
      };
      setState(newState);
      onChange(newState);
    },
    [state, onChange],
  );

  React.useEffect(() => {
    onChange(state);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <form>
      <p>
        <label>
          Animation duration [ms]:
          <input
            type="number"
            value={state.animationDuration}
            onChange={e => handleChange({ animationDuration: +e.target.value })}
          />
        </label>
      </p>
      <p>
        <button type="button" onClick={() => handleChange({ renderKey: state.renderKey + 1 })}>
          Force remount (Triggers <em>entrance</em> animation)
        </button>
      </p>
      <p>
        <button
          type="button"
          onClick={() =>
            handleChange({
              data: state.data === data1 ? data2 : data1,
            })
          }
        >
          ⇄ Swap dataset (Triggers <em>update</em> animation)
        </button>
      </p>
    </form>
  );
};
