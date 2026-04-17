import { useState, useCallback, useId, useEffect, useRef } from 'react';
import { Line, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, matchByDataKey, matchByIndex } from 'recharts';
import type { AnimationMatchBy } from 'recharts';
import { generateMockData } from '@recharts/devtools';

const allData = generateMockData(30, 90).map((o, i) => ({ ...o, i }));

const WINDOW = 6;

type MatchStrategy = 'index' | 'dataKey';

type ControlsType = {
  matchStrategy: MatchStrategy;
  windowStart: number;
};

export default function MatchingExample(props: Partial<ControlsType>) {
  const matchStrategy = props.matchStrategy ?? 'index';
  const windowStart = props.windowStart ?? 0;

  const data = allData.slice(windowStart, windowStart + WINDOW);

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
      <XAxis dataKey="i" type="number" domain={['dataMin', 'dataMax']} allowDataOverflow />
      <YAxis />
      <Tooltip />
      <Line
        type="monotone"
        dataKey="y"
        stroke="#8884d8"
        strokeWidth={2}
        animationDuration={600}
        animationMatchBy={matchProp}
      />
    </LineChart>
  );
}

export function MatchingControls({ onChange }: { onChange: (values: ControlsType) => void }) {
  const [state, setState] = useState<ControlsType>({
    matchStrategy: 'index',
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

    const maxStart = allData.length - WINDOW;
    const interval = setInterval(() => {
      setState(prev => {
        const next = { ...prev, windowStart: (prev.windowStart + 1) % maxStart };
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
        Slide the window to add/remove data points and observe how the two matching strategies differ.
      </p>
    </form>
  );
}
