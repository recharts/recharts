import React, { useState, useEffect, useCallback } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from '../../../../src';

export default {
  title: 'Examples/LineChart/SlidingWindowLineChart',
  component: LineChart,
};

// Generate random data point
const generateDataPoint = (timestamp: number) => ({
  time: timestamp,
  value: Math.floor(Math.random() * 100) + 50,
});

// Generate initial data
const generateInitialData = (count: number) => {
  const now = Date.now();
  return Array.from({ length: count }, (_, i) => generateDataPoint(now - (count - 1 - i) * 1000));
};

/**
 * This example demonstrates the difference between `animationMatchBy="index"` (default)
 * and `animationMatchBy="x"` for time-series data with a sliding window.
 *
 * With `animationMatchBy="index"`, points animate by their array index, causing visual
 * distortion ("dancing") when new data is added and old data is removed.
 *
 * With `animationMatchBy="x"`, points are matched by their x-coordinate, resulting in
 * smooth sliding animations where existing points shift gracefully and new points
 * enter from the right edge.
 */
export const SlidingWindow = {
  render: () => {
    const [data, setData] = useState(() => generateInitialData(10));
    const [matchBy, setMatchBy] = useState<'index' | 'x'>('x');
    const [isRunning, setIsRunning] = useState(true);

    // Simulate real-time data updates
    useEffect(() => {
      if (!isRunning) return undefined;

      const interval = setInterval(() => {
        setData(prevData => {
          const newPoint = generateDataPoint(Date.now());
          // Remove oldest point, add new point (sliding window)
          return [...prevData.slice(1), newPoint];
        });
      }, 1000);

      return () => clearInterval(interval);
    }, [isRunning]);

    const handleToggle = useCallback(() => {
      setIsRunning(prev => !prev);
    }, []);

    const handleMatchByChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
      setMatchBy(e.target.value as 'index' | 'x');
    }, []);

    return (
      <div style={{ width: '100%', height: 400 }}>
        <div style={{ marginBottom: 16 }}>
          <label htmlFor="matchBy" style={{ marginRight: 8 }}>
            animationMatchBy:
          </label>
          <select id="matchBy" value={matchBy} onChange={handleMatchByChange} style={{ marginRight: 16 }}>
            <option value="index">index (default - causes dancing)</option>
            <option value="x">x (smooth sliding)</option>
          </select>
          <button type="button" onClick={handleToggle}>
            {isRunning ? 'Pause' : 'Resume'}
          </button>
        </div>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="time"
              type="number"
              domain={['dataMin', 'dataMax']}
              tickFormatter={value => new Date(value).toLocaleTimeString()}
            />
            <YAxis domain={[0, 200]} />
            <Tooltip labelFormatter={value => new Date(value as number).toLocaleTimeString()} />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#8884d8"
              strokeWidth={2}
              dot={false}
              animationDuration={500}
              animationMatchBy={matchBy}
            />
          </LineChart>
        </ResponsiveContainer>
        <p style={{ marginTop: 16, color: '#666' }}>
          <strong>Try it:</strong> Switch between &quot;index&quot; and &quot;x&quot; to see the difference.
          <br />
          With &quot;index&quot;, the line segments distort during animation.
          <br />
          With &quot;x&quot;, the line smoothly slides left as new data arrives.
        </p>
      </div>
    );
  },
};

/**
 * This example demonstrates appending data to a chart.
 * New points enter smoothly from the right edge.
 */
export const AppendData = {
  render: () => {
    const [data, setData] = useState(() => generateInitialData(5));

    const handleAddData = useCallback(() => {
      setData(prevData => [...prevData, generateDataPoint(Date.now())]);
    }, []);

    const handleReset = useCallback(() => {
      setData(generateInitialData(5));
    }, []);

    return (
      <div style={{ width: '100%', height: 400 }}>
        <div style={{ marginBottom: 16 }}>
          <button type="button" onClick={handleAddData} style={{ marginRight: 8 }}>
            Add Data Point
          </button>
          <button type="button" onClick={handleReset}>
            Reset
          </button>
        </div>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="time"
              type="number"
              domain={['dataMin', 'dataMax']}
              tickFormatter={value => new Date(value).toLocaleTimeString()}
            />
            <YAxis domain={[0, 200]} />
            <Tooltip labelFormatter={value => new Date(value as number).toLocaleTimeString()} />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#82ca9d"
              strokeWidth={2}
              dot
              animationDuration={500}
              animationMatchBy="x"
            />
          </LineChart>
        </ResponsiveContainer>
        <p style={{ marginTop: 16, color: '#666' }}>
          Click &quot;Add Data Point&quot; to append new data. With <code>animationMatchBy=&quot;x&quot;</code>,
          <br />
          new points smoothly enter from the right edge while existing points adjust their positions.
        </p>
      </div>
    );
  },
};
