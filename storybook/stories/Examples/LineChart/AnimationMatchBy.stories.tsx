import React, { useState, useCallback } from 'react';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from '../../../../src';

export default {
  component: LineChart,
  docs: {
    autodocs: false,
  },
};

const valueAt = (x: number): number => Math.round(50 + 30 * Math.sin(x * 0.7) + 15 * Math.cos(x * 1.3));

const makePoints = (start: number, count: number) =>
  Array.from({ length: count }, (_, i) => ({ x: start + i, value: valueAt(start + i) }));

export const AnimationMatchBy = {
  render: () => {
    const [data, setData] = useState(() => makePoints(0, 10));
    const [isStreaming, setIsStreaming] = useState(false);

    const slideLeft = useCallback(() => {
      setData(prev => {
        const nextX = prev[prev.length - 1].x + 1;
        return [...prev.slice(1), { x: nextX, value: valueAt(nextX) }];
      });
    }, []);

    const slideRight = useCallback(() => {
      setData(prev => {
        const nextX = prev[0].x - 1;
        return [{ x: nextX, value: valueAt(nextX) }, ...prev.slice(0, -1)];
      });
    }, []);

    const bulkLeft = useCallback(() => {
      setData(prev => {
        const start = prev[prev.length - 1].x + 1;
        return [...prev.slice(3), ...makePoints(start, 3)];
      });
    }, []);

    const bulkRight = useCallback(() => {
      setData(prev => {
        const end = prev[0].x - 3;
        return [...makePoints(end, 3), ...prev.slice(0, -3)];
      });
    }, []);

    React.useEffect(() => {
      if (!isStreaming) return undefined;
      const id = setInterval(slideLeft, 600);
      return () => clearInterval(id);
    }, [isStreaming, slideLeft]);

    return (
      <>
        <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
          <button type="button" onClick={() => setIsStreaming(s => !s)}>
            {isStreaming ? 'Pause' : 'Stream'}
          </button>
          <button type="button" onClick={slideLeft}>
            Slide Left
          </button>
          <button type="button" onClick={slideRight}>
            Slide Right
          </button>
          <button type="button" onClick={bulkLeft}>
            Bulk Left
          </button>
          <button type="button" onClick={bulkRight}>
            Bulk Right
          </button>
          <button type="button" onClick={() => setData(makePoints(0, 10))}>
            Reset
          </button>
        </div>

        <div style={{ display: 'flex', gap: 16 }}>
          <div style={{ flex: 1 }}>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="x" type="number" domain={['dataMin', 'dataMax']} />
                <YAxis domain={[0, 100]} />
                <Legend />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  name='matchBy="index"'
                  stroke="#d32f2f"
                  strokeWidth={2}
                  dot
                  animationDuration={500}
                  animationMatchBy="index"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div style={{ flex: 1 }}>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="x" type="number" domain={['dataMin', 'dataMax']} />
                <YAxis domain={[0, 100]} />
                <Legend />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  name='matchBy="x"'
                  stroke="#388e3c"
                  strokeWidth={2}
                  dot
                  animationDuration={500}
                  animationMatchBy="x"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </>
    );
  },
};
