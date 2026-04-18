import { useState, useCallback, useId, useEffect, useRef } from 'react';
import { Line, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, matchByDataKey, matchByIndex } from 'recharts';
import type { AnimationMatchBy } from 'recharts';
import { generateMockData } from '@recharts/devtools';

const WINDOW = 6;
const DATA_LENGTH = 30;

const allData = generateMockData(DATA_LENGTH, 90).map((o, i) => ({ ...o, i }));

function normalizeWindowStart(windowStart: number): number {
  return ((windowStart % DATA_LENGTH) + DATA_LENGTH) % DATA_LENGTH;
}

function getCircularWindowData(windowStart: number) {
  const normalizedWindowStart = normalizeWindowStart(windowStart);

  return Array.from({ length: WINDOW }, (_, index) => allData[(normalizedWindowStart + index) % DATA_LENGTH]!);
}

type MatchStrategy = 'index' | 'dataKey';

type ControlsType = {
  matchStrategy: MatchStrategy;
  windowStart: number;
};

export default function AnimatedTimeSeriesExample(props: Partial<ControlsType>) {
  const matchStrategy = props.matchStrategy ?? 'index';
  const windowStart = normalizeWindowStart(props.windowStart ?? 0);

  const data = getCircularWindowData(windowStart);

  const matchProp: typeof matchByIndex | AnimationMatchBy<{ payload?: unknown }> =
    matchStrategy === 'dataKey' ? matchByDataKey('label') : matchByIndex;

  return (
    <LineChart
      style={{ width: '100%', aspectRatio: 1.618, maxWidth: 600 }}
      responsive
      data={data}
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="label" allowDataOverflow />
      <YAxis />
      <Tooltip />
      <Line dataKey="y" stroke="#8884d8" strokeWidth={2} animationDuration={600} animationMatchBy={matchProp} />
    </LineChart>
  );
}

export function AnimatedTimeSeriesExampleControls({ onChange }: { onChange: (values: ControlsType) => void }) {
  const [state, setState] = useState<ControlsType>({
    matchStrategy: 'dataKey',
    windowStart: 0,
  });

  const [isStreaming, setIsStreaming] = useState(false);

  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;

  const handleChange = useCallback((next: Partial<ControlsType>) => {
    setState(prev => {
      const newState = { ...prev, ...next };
      onChangeRef.current(newState);
      return newState;
    });
  }, []);

  useEffect(() => {
    onChangeRef.current(state);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!isStreaming) {
      return undefined;
    }

    const interval = setInterval(() => {
      setState(prev => {
        const next = { ...prev, windowStart: (prev.windowStart + 1) % DATA_LENGTH };
        onChangeRef.current(next);
        return next;
      });
    }, 800);

    return () => clearInterval(interval);
  }, [isStreaming]);

  const matchStrategyId = useId();
  const streamingToggleId = useId();

  return (
    <form>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor={matchStrategyId}>animationMatchBy</label>
            </td>
            <td style={{ padding: '0 1ex' }}>
              <select
                id={matchStrategyId}
                value={state.matchStrategy}
                onChange={e => handleChange({ matchStrategy: e.target.value as MatchStrategy })}
              >
                <option value="index">matchByIndex (default)</option>
                <option value="dataKey">matchByDataKey(&apos;time&apos;)</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <button id={streamingToggleId} type="button" onClick={() => setIsStreaming(s => !s)}>
                {isStreaming ? 'Stop streaming' : 'Start streaming'}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <p style={{ fontSize: '0.85em', opacity: 0.8, marginTop: '0.5em' }}>
        Start streaming to move the window forward and observe how the two matching strategies differ.
      </p>
    </form>
  );
}
