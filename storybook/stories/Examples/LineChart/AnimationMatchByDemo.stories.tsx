import React, { useState, useCallback, useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from '../../../../src';

export default {
  title: 'Examples/LineChart/AnimationMatchByDemo',
  component: LineChart,
};

interface DataPoint {
  x: number;
  value: number;
}

// Helper to generate data points
const generatePoints = (start: number, count: number): DataPoint[] =>
  Array.from({ length: count }, (_, i) => ({
    x: start + i,
    value: Math.floor(Math.random() * 80) + 20,
  }));

/**
 * Interactive demo comparing animationMatchBy="index" vs animationMatchBy="x"
 * for various sliding window scenarios.
 */
export const ScenarioComparison = {
  render: () => {
    const [data, setData] = useState<DataPoint[]>(() => generatePoints(0, 5));
    const [lastAction, setLastAction] = useState<string>('Initial: [0,1,2,3,4]');

    // Scenario handlers
    const handleSlideRight = useCallback(() => {
      setData(prev => {
        const newX = prev.length > 0 ? prev[prev.length - 1].x + 1 : 0;
        return [...prev.slice(1), { x: newX, value: Math.floor(Math.random() * 80) + 20 }];
      });
      setLastAction('Slide Right: Remove left, add right');
    }, []);

    const handleSlideLeft = useCallback(() => {
      setData(prev => {
        const newX = prev.length > 0 ? prev[0].x - 1 : 0;
        return [{ x: newX, value: Math.floor(Math.random() * 80) + 20 }, ...prev.slice(0, -1)];
      });
      setLastAction('Slide Left: Remove right, add left');
    }, []);

    const handleAddRight = useCallback(() => {
      setData(prev => {
        const newX = prev.length > 0 ? prev[prev.length - 1].x + 1 : 0;
        return [...prev, { x: newX, value: Math.floor(Math.random() * 80) + 20 }];
      });
      setLastAction('Add Right: Append one point');
    }, []);

    const handleAddLeft = useCallback(() => {
      setData(prev => {
        const newX = prev.length > 0 ? prev[0].x - 1 : 0;
        return [{ x: newX, value: Math.floor(Math.random() * 80) + 20 }, ...prev];
      });
      setLastAction('Add Left: Prepend one point');
    }, []);

    const handleBulkAddRight = useCallback(() => {
      setData(prev => {
        const startX = prev.length > 0 ? prev[prev.length - 1].x + 1 : 0;
        return [...prev, ...generatePoints(startX, 3)];
      });
      setLastAction('Bulk Add Right: Append 3 points');
    }, []);

    const handleBulkAddLeft = useCallback(() => {
      setData(prev => {
        const endX = prev.length > 0 ? prev[0].x - 1 : 0;
        return [...generatePoints(endX - 2, 3), ...prev];
      });
      setLastAction('Bulk Add Left: Prepend 3 points');
    }, []);

    const handleBulkSlideRight = useCallback(() => {
      setData(prev => {
        if (prev.length < 3) return prev;
        const startX = prev[prev.length - 1].x + 1;
        return [...prev.slice(3), ...generatePoints(startX, 3)];
      });
      setLastAction('Bulk Slide Right: Remove 3 left, add 3 right');
    }, []);

    const handleBulkSlideLeft = useCallback(() => {
      setData(prev => {
        if (prev.length < 3) return prev;
        const endX = prev[0].x - 1;
        return [...generatePoints(endX - 2, 3), ...prev.slice(0, -3)];
      });
      setLastAction('Bulk Slide Left: Remove 3 right, add 3 left');
    }, []);

    const handleReset = useCallback(() => {
      setData(generatePoints(0, 5));
      setLastAction('Reset: [0,1,2,3,4]');
    }, []);

    const xValues = useMemo(() => data.map(d => d.x).join(', '), [data]);

    return (
      <div style={{ width: '100%' }}>
        <h2>Animation Match By - Scenario Comparison</h2>
        <p style={{ color: '#666', marginBottom: 16 }}>
          Compare <code>animationMatchBy=&quot;index&quot;</code> (left, causes dancing) vs{' '}
          <code>animationMatchBy=&quot;x&quot;</code> (right, smooth sliding)
        </p>

        <div style={{ marginBottom: 16, padding: 12, background: '#f5f5f5', borderRadius: 4 }}>
          <strong>Last Action:</strong> {lastAction}
          <br />
          <strong>Current X values:</strong> [{xValues}]
        </div>

        <div style={{ marginBottom: 16, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          <button type="button" onClick={handleSlideRight}>
            Slide Right (→)
          </button>
          <button type="button" onClick={handleSlideLeft}>
            Slide Left (←)
          </button>
          <button type="button" onClick={handleAddRight}>
            Add Right
          </button>
          <button type="button" onClick={handleAddLeft}>
            Add Left
          </button>
          <button type="button" onClick={handleBulkAddRight}>
            Bulk Add Right (+3)
          </button>
          <button type="button" onClick={handleBulkAddLeft}>
            Bulk Add Left (+3)
          </button>
          <button type="button" onClick={handleBulkSlideRight}>
            Bulk Slide Right (±3)
          </button>
          <button type="button" onClick={handleBulkSlideLeft}>
            Bulk Slide Left (±3)
          </button>
          <button type="button" onClick={handleReset} style={{ marginLeft: 16 }}>
            Reset
          </button>
        </div>

        <div style={{ display: 'flex', gap: 16 }}>
          <div style={{ flex: 1 }}>
            <h4 style={{ textAlign: 'center', color: '#d32f2f' }}>animationMatchBy=&quot;index&quot; (dancing)</h4>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="x" type="number" domain={['dataMin - 1', 'dataMax + 1']} />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#d32f2f"
                  strokeWidth={2}
                  dot
                  animationDuration={800}
                  animationMatchBy="index"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div style={{ flex: 1 }}>
            <h4 style={{ textAlign: 'center', color: '#388e3c' }}>animationMatchBy=&quot;x&quot; (smooth)</h4>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="x" type="number" domain={['dataMin - 1', 'dataMax + 1']} />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#388e3c"
                  strokeWidth={2}
                  dot
                  animationDuration={800}
                  animationMatchBy="x"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    );
  },
};

/**
 * Real-time streaming data simulation with configurable parameters.
 */
export const RealTimeStreaming = {
  render: () => {
    const [windowSize, setWindowSize] = useState(10);
    const [updateInterval, setUpdateInterval] = useState(500);
    const [isRunning, setIsRunning] = useState(false);
    const [data, setData] = useState<DataPoint[]>(() => generatePoints(0, 10));
    const [matchBy, setMatchBy] = useState<'index' | 'x'>('x');
    const [useFade, setUseFade] = useState(true);

    React.useEffect(() => {
      if (!isRunning) return undefined;

      const interval = setInterval(() => {
        setData(prev => {
          const newX = prev.length > 0 ? prev[prev.length - 1].x + 1 : 0;
          const newPoint = { x: newX, value: Math.floor(Math.random() * 80) + 20 };
          const newData = [...prev, newPoint];
          // Keep only windowSize points
          return newData.slice(-windowSize);
        });
      }, updateInterval);

      return () => clearInterval(interval);
    }, [isRunning, updateInterval, windowSize]);

    return (
      <div style={{ width: '100%' }}>
        <h2>Real-Time Streaming Simulation</h2>

        <div style={{ marginBottom: 16, display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
          <div>
            <label htmlFor="matchBy">Match By: </label>
            <select
              id="matchBy"
              value={matchBy}
              onChange={e => setMatchBy(e.target.value as 'index' | 'x')}
              style={{ marginRight: 16 }}
            >
              <option value="index">index (dancing)</option>
              <option value="x">x (smooth)</option>
            </select>
          </div>

          <div>
            <label htmlFor="windowSize">Window Size: </label>
            <input
              id="windowSize"
              type="number"
              min={3}
              max={50}
              value={windowSize}
              onChange={e => setWindowSize(Number(e.target.value))}
              style={{ width: 60, marginRight: 16 }}
            />
          </div>

          <div>
            <label htmlFor="interval">Interval (ms): </label>
            <input
              id="interval"
              type="number"
              min={100}
              max={2000}
              step={100}
              value={updateInterval}
              onChange={e => setUpdateInterval(Number(e.target.value))}
              style={{ width: 80, marginRight: 16 }}
            />
          </div>

          <div>
            <label htmlFor="fade">
              <input
                id="fade"
                type="checkbox"
                checked={useFade}
                onChange={e => setUseFade(e.target.checked)}
                style={{ marginRight: 4 }}
              />
              Fade new segments
            </label>
          </div>

          <button type="button" onClick={() => setIsRunning(!isRunning)}>
            {isRunning ? 'Stop' : 'Start'}
          </button>

          <button type="button" onClick={() => setData(generatePoints(0, windowSize))}>
            Reset
          </button>
        </div>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="x" type="number" domain={['dataMin', 'dataMax']} />
            <YAxis domain={[0, 100]} />
            <Tooltip />
            <Legend />
            <Line
              name={`animationMatchBy="${matchBy}"${useFade ? ' + fade' : ''}`}
              type="monotone"
              dataKey="value"
              stroke={matchBy === 'x' ? '#388e3c' : '#d32f2f'}
              strokeWidth={2}
              dot={false}
              animationDuration={Math.min(updateInterval * 0.8, 500)}
              animationMatchBy={matchBy}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  },
};

/**
 * Stress test with large bulk operations.
 */
export const StressTest = {
  render: () => {
    const [pointCount, setPointCount] = useState(5);
    const [data, setData] = useState<DataPoint[]>(() => generatePoints(0, 20));

    const handleBulkAddRight = useCallback(() => {
      setData(prev => {
        const startX = prev.length > 0 ? prev[prev.length - 1].x + 1 : 0;
        return [...prev, ...generatePoints(startX, pointCount)];
      });
    }, [pointCount]);

    const handleBulkAddLeft = useCallback(() => {
      setData(prev => {
        const endX = prev.length > 0 ? prev[0].x - 1 : 0;
        return [...generatePoints(endX - pointCount + 1, pointCount), ...prev];
      });
    }, [pointCount]);

    const handleBulkSlideRight = useCallback(() => {
      setData(prev => {
        const removeCount = Math.min(pointCount, prev.length);
        const startX = prev.length > 0 ? prev[prev.length - 1].x + 1 : 0;
        return [...prev.slice(removeCount), ...generatePoints(startX, pointCount)];
      });
    }, [pointCount]);

    const handleBulkSlideLeft = useCallback(() => {
      setData(prev => {
        const removeCount = Math.min(pointCount, prev.length);
        const endX = prev.length > 0 ? prev[0].x - 1 : 0;
        return [...generatePoints(endX - pointCount + 1, pointCount), ...prev.slice(0, -removeCount)];
      });
    }, [pointCount]);

    const handleReset = useCallback(() => {
      setData(generatePoints(0, 20));
    }, []);

    return (
      <div style={{ width: '100%' }}>
        <h2>Stress Test - Bulk Operations</h2>
        <p style={{ color: '#666' }}>Test large bulk additions and removals. Current points: {data.length}</p>

        <div style={{ marginBottom: 16, display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
          <div>
            <label htmlFor="pointCount">Points to add/remove: </label>
            <input
              id="pointCount"
              type="number"
              min={1}
              max={50}
              value={pointCount}
              onChange={e => setPointCount(Number(e.target.value))}
              style={{ width: 60 }}
            />
          </div>

          <button type="button" onClick={handleBulkAddRight}>
            Add {pointCount} Right
          </button>
          <button type="button" onClick={handleBulkAddLeft}>
            Add {pointCount} Left
          </button>
          <button type="button" onClick={handleBulkSlideRight}>
            Slide Right (±{pointCount})
          </button>
          <button type="button" onClick={handleBulkSlideLeft}>
            Slide Left (±{pointCount})
          </button>
          <button type="button" onClick={handleReset}>
            Reset
          </button>
        </div>

        <div style={{ display: 'flex', gap: 16 }}>
          <div style={{ flex: 1 }}>
            <h4 style={{ textAlign: 'center', color: '#d32f2f' }}>index (dancing)</h4>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="x" type="number" domain={['dataMin', 'dataMax']} />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#d32f2f"
                  strokeWidth={2}
                  dot={false}
                  animationDuration={800}
                  animationMatchBy="index"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div style={{ flex: 1 }}>
            <h4 style={{ textAlign: 'center', color: '#388e3c' }}>x (smooth + fade)</h4>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="x" type="number" domain={['dataMin', 'dataMax']} />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#388e3c"
                  strokeWidth={2}
                  dot={false}
                  animationDuration={800}
                  animationMatchBy="x"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    );
  },
};
