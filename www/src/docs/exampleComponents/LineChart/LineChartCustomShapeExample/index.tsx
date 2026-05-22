import { Line, LineChart, CartesianGrid, Tooltip, XAxis, YAxis, LineDrawShapeProps, Curve } from 'recharts';
import { generateMockData, RechartsDevtools } from '@recharts/devtools';
import { useCallback, useEffect, useId, useState } from 'react';

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
function OpacityFadeShape(props: LineDrawShapeProps) {
  const { t = 1, isEntrance = false } = props;
  const opacity = isEntrance ? t : 1;
  /*
   * If we did strokeOpacity={t} directly, then the opacity animates even when updating the dataset.
   * This may be the effect that you want! In this particular example we however demonstrate how to differentiate.
   */
  return <Curve {...props} strokeOpacity={opacity} />;
}

export default function LineChartCustomShapeExample(props: Partial<ControlsType>) {
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

  useEffect(() => {
    onChange(state);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const animationDurationId = useId();

  return (
    <form>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor={animationDurationId}>animationDuration</label>
            </td>
            <td style={{ padding: '0 1ex' }}>
              <input
                id={animationDurationId}
                aria-label="animationDuration"
                type="number"
                min="0"
                value={state.animationDuration}
                onChange={e => handleChange({ animationDuration: +e.target.value })}
              />
            </td>
          </tr>
        </tbody>
      </table>
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
      <p style={{ fontSize: '0.85em', opacity: 0.8, marginTop: '0.5em' }}>
        The custom <code>shape</code> only fades on entrance because it checks <code>isEntrance</code> before using{' '}
        <code>t</code>.
      </p>
    </form>
  );
};
