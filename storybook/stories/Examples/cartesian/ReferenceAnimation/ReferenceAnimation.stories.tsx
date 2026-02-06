import React, { useState } from 'react';
import {
  LineChart,
  Line,
  ReferenceLine,
  ReferenceArea,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from '../../../../../src';

export default {
  title: 'Examples/cartesian/Reference Animation',
  component: LineChart,
};

// Generate sample data: 3 days of 15-minute buckets (288 data points)
const generateTimelineData = () => {
  const data = [];
  const startTime = new Date('2024-01-01T00:00:00');

  for (let i = 0; i < 288; i++) {
    const timestamp = new Date(startTime.getTime() + i * 15 * 60 * 1000);
    data.push({
      timestamp: timestamp.getTime(),
      displayTime: timestamp.toISOString(),
      count: Math.floor(Math.random() * 100) + Math.sin(i / 10) * 30 + 50,
    });
  }
  return data;
};

/**
 * This demo replicates the exact use case from the feature request:
 * A scrollable event timeline with a "visible range" indicator.
 *
 * The chart shows event counts over ~3 days (288 data points at 15-minute intervals).
 * A ReferenceArea highlights which portion of the timeline is currently "visible"
 * (simulating a synchronized scrollable event list below).
 *
 * **Before this feature:** The highlighted region would jump instantly to each new position,
 * creating a jarring, stuttery visual effect.
 *
 * **After this feature:** The highlighted region smoothly slides along the chart,
 * providing a polished user experience.
 */
export const ScrollableTimelineDemo = {
  render: () => {
    const [data] = useState(generateTimelineData);
    const [windowStart, setWindowStart] = useState(100);
    const [windowEnd, setWindowEnd] = useState(120);
    const [isAutoScrolling, setIsAutoScrolling] = useState(false);

    // Simulate continuous scrolling
    React.useEffect(() => {
      if (!isAutoScrolling) return undefined;

      const interval = setInterval(() => {
        setWindowStart(prev => {
          const next = prev + 1;
          return next >= data.length - 30 ? 100 : next;
        });
        setWindowEnd(prev => {
          const next = prev + 1;
          return next >= data.length - 10 ? 120 : next;
        });
      }, 100);

      return () => clearInterval(interval);
    }, [isAutoScrolling, data.length]);

    const startTimestamp = data[windowStart]?.timestamp;
    const endTimestamp = data[windowEnd]?.timestamp;

    const formatTime = (index: number) => {
      const d = new Date(data[index]?.timestamp);
      return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    return (
      <div style={{ width: '100%' }}>
        <h2>Scrollable Event Timeline with Visible Range Indicator</h2>
        <p>
          This demo simulates a common pattern: an activity chart with a scrollable event list below it. As the user
          scrolls through events, a highlighted region on the chart indicates which time range is currently visible.
        </p>

        <div
          style={{
            marginBottom: 16,
            padding: 12,
            backgroundColor: '#f5f5f5',
            borderRadius: 8,
            display: 'flex',
            gap: 16,
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <button
            type="button"
            onClick={() => setIsAutoScrolling(!isAutoScrolling)}
            style={{
              padding: '8px 16px',
              backgroundColor: isAutoScrolling ? '#ef4444' : '#22c55e',
              color: 'white',
              border: 'none',
              borderRadius: 4,
              cursor: 'pointer',
            }}
          >
            {isAutoScrolling ? 'Stop Auto-Scroll' : 'Start Auto-Scroll'}
          </button>

          <button
            type="button"
            onClick={() => {
              setWindowStart(w => Math.max(0, w - 10));
              setWindowEnd(w => Math.max(20, w - 10));
            }}
            disabled={windowStart <= 0}
            style={{ padding: '8px 16px' }}
          >
            ← Jump Left
          </button>

          <button
            type="button"
            onClick={() => {
              setWindowStart(w => Math.min(data.length - 30, w + 10));
              setWindowEnd(w => Math.min(data.length - 10, w + 10));
            }}
            disabled={windowEnd >= data.length - 10}
            style={{ padding: '8px 16px' }}
          >
            Jump Right →
          </button>

          <span style={{ fontFamily: 'monospace' }}>
            Visible: {formatTime(windowStart)} - {formatTime(windowEnd)} (indices {windowStart}-{windowEnd})
          </span>
        </div>

        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
            <XAxis
              dataKey="timestamp"
              type="number"
              domain={['dataMin', 'dataMax']}
              tickFormatter={ts => new Date(ts).toLocaleDateString()}
              tick={{ fontSize: 11 }}
            />
            <YAxis domain={[0, 'auto']} tick={{ fontSize: 11 }} />
            <Tooltip
              labelFormatter={ts => new Date(ts).toLocaleString()}
              formatter={value => [typeof value === 'number' ? value.toFixed(0) : String(value ?? ''), 'Events']}
            />

            {/* The "visible range" indicator - NOW WITH SMOOTH ANIMATION! */}
            <ReferenceArea
              x1={startTimestamp}
              x2={endTimestamp}
              fill="rgba(59, 130, 246, 0.3)"
              stroke="rgb(59, 130, 246)"
              strokeWidth={2}
              isAnimationActive
              animationDuration={150}
              animationEasing="ease-out"
            />

            <Line
              type="monotone"
              dataKey="count"
              stroke="#8884d8"
              strokeWidth={2}
              dot={false}
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>

        <div
          style={{
            marginTop: 16,
            padding: 16,
            backgroundColor: '#f0f9ff',
            borderRadius: 8,
            border: '1px solid #bae6fd',
          }}
        >
          <h4 style={{ margin: '0 0 8px 0' }}>How it works:</h4>
          <ul style={{ margin: 0, paddingLeft: 20 }}>
            <li>
              <code>isAnimationActive=&#123;true&#125;</code> enables smooth position transitions
            </li>
            <li>
              <code>animationDuration=&#123;150&#125;</code> keeps animations snappy for frequent updates
            </li>
            <li>
              <code>animationEasing=&quot;ease-out&quot;</code> gives a natural deceleration feel
            </li>
          </ul>
        </div>
      </div>
    );
  },
};

/**
 * Full Timeline Experience: Sliding Window with All Animations Synchronized
 *
 * This demo showcases the complete timeline feature set:
 * - Line uses `animationMatchBy="timestamp"` to smoothly slide data points
 * - ReferenceArea highlights the "current view" and slides with the data
 * - ReferenceLine marks the "now" indicator and slides with the data
 *
 * All animations are synchronized for a cohesive, polished experience.
 */
export const FullTimelineExperience = {
  render: () => {
    const windowSize = 50; // Show 50 data points at a time
    const [startIndex, setStartIndex] = useState(0);
    const [isStreaming, setIsStreaming] = useState(false);
    const allData = React.useMemo(() => generateTimelineData(), []);

    // Focus area controls - position and size within the visible window
    const [focusOffset, setFocusOffset] = useState(15); // Start position within window (0 to windowSize)
    const [focusSize, setFocusSize] = useState(20); // Size of focus area in data points

    // Anchor mode - when enabled, focus area moves with the stream
    const [anchorMode, setAnchorMode] = useState<'none' | 'forward' | 'backward'>('none');

    // For "Lock to Stream" mode - store actual data indices (absolute position in allData)
    const [lockedDataStart, setLockedDataStart] = useState<number | null>(null);
    const [lockedDataEnd, setLockedDataEnd] = useState<number | null>(null);

    // Get the visible slice of data
    const visibleData = allData.slice(startIndex, startIndex + windowSize);

    // Calculate relative indices for display (always available)
    const focusStartIdx = Math.min(focusOffset, windowSize - focusSize);
    const focusEndIdx = Math.min(focusStartIdx + focusSize, windowSize - 1);

    // Calculate the "focus area" based on mode
    let focusStart: number | undefined, focusEnd: number | undefined, nowMarker: number | undefined;

    if (anchorMode === 'forward' && lockedDataStart !== null && lockedDataEnd !== null) {
      // Use locked absolute timestamps - these stay on the same data points
      focusStart = allData[lockedDataStart]?.timestamp;
      focusEnd = allData[lockedDataEnd]?.timestamp;
      const lockedNowIdx = Math.floor((lockedDataStart + lockedDataEnd) / 2);
      nowMarker = allData[lockedNowIdx]?.timestamp;
    } else {
      // Use relative offset within visible window
      focusStart = visibleData[focusStartIdx]?.timestamp;
      focusEnd = visibleData[focusEndIdx]?.timestamp;
      const nowMarkerIdx = Math.floor((focusStartIdx + focusEndIdx) / 2);
      nowMarker = visibleData[nowMarkerIdx]?.timestamp;
    }

    // Lock to current data points when switching to "forward" mode
    React.useEffect(() => {
      if (anchorMode === 'forward') {
        const computedFocusStart = Math.min(focusOffset, windowSize - focusSize);
        const computedFocusEnd = Math.min(computedFocusStart + focusSize, windowSize - 1);
        setLockedDataStart(startIndex + computedFocusStart);
        setLockedDataEnd(startIndex + computedFocusEnd);
      } else {
        setLockedDataStart(null);
        setLockedDataEnd(null);
      }
    }, [anchorMode, focusOffset, focusSize, startIndex]);

    // Simulate streaming - slide the window forward
    React.useEffect(() => {
      if (!isStreaming) return undefined;

      const interval = setInterval(() => {
        setStartIndex(prev => {
          const next = prev + 1;
          return next >= allData.length - windowSize ? 0 : next;
        });

        // Only adjust offset in "backward" mode (slides left on screen)
        if (anchorMode === 'backward') {
          setFocusOffset(prev => Math.max(0, prev - 1));
        }
        // 'none' = focus area stays at fixed screen position, data slides under it
        // 'forward' = uses locked timestamps, so focus follows data automatically
      }, 500);

      return () => clearInterval(interval);
    }, [isStreaming, allData.length, anchorMode]);

    const formatTimestamp = (ts: number) => {
      const d = new Date(ts);
      return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    return (
      <div style={{ width: '100%' }}>
        <h2>Full Timeline Experience</h2>
        <p>
          This demo shows all animation features working together. The Line uses{' '}
          <code>animationMatchBy=&quot;timestamp&quot;</code> to smoothly slide data, while the ReferenceArea and
          ReferenceLine animate in sync.
        </p>

        {/* Timeline Controls */}
        <div
          style={{
            marginBottom: 16,
            padding: 12,
            backgroundColor: '#f5f5f5',
            borderRadius: 8,
            display: 'flex',
            gap: 16,
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <button
            type="button"
            onClick={() => setIsStreaming(!isStreaming)}
            style={{
              padding: '8px 16px',
              backgroundColor: isStreaming ? '#ef4444' : '#22c55e',
              color: 'white',
              border: 'none',
              borderRadius: 4,
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            {isStreaming ? '⏹ Stop Stream' : '▶ Start Stream'}
          </button>

          <button
            type="button"
            onClick={() => setStartIndex(i => Math.max(0, i - 10))}
            disabled={startIndex <= 0}
            style={{ padding: '8px 16px' }}
          >
            ← Back 10
          </button>

          <button
            type="button"
            onClick={() => setStartIndex(i => Math.min(allData.length - windowSize, i + 10))}
            disabled={startIndex >= allData.length - windowSize}
            style={{ padding: '8px 16px' }}
          >
            Forward 10 →
          </button>

          <button type="button" onClick={() => setStartIndex(0)} style={{ padding: '8px 16px' }}>
            Reset
          </button>

          <span style={{ fontFamily: 'monospace', fontSize: 12 }}>
            Window: {startIndex} - {startIndex + windowSize} of {allData.length}
          </span>
        </div>

        {/* Focus Area Controls */}
        <div
          style={{
            marginBottom: 16,
            padding: 12,
            backgroundColor: '#ecfdf5',
            borderRadius: 8,
            border: '1px solid #a7f3d0',
            display: 'flex',
            gap: 24,
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontWeight: 'bold', color: '#16a34a', fontSize: 13 }}>Focus Area:</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <button
              type="button"
              onClick={() => setFocusOffset(o => Math.max(0, o - 5))}
              disabled={focusOffset <= 0}
              style={{ padding: '4px 10px', fontSize: 12 }}
            >
              ← Move
            </button>
            <button
              type="button"
              onClick={() => setFocusOffset(o => Math.min(windowSize - focusSize, o + 5))}
              disabled={focusOffset >= windowSize - focusSize}
              style={{ padding: '4px 10px', fontSize: 12 }}
            >
              Move →
            </button>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <button
              type="button"
              onClick={() => setFocusSize(s => Math.max(5, s - 5))}
              disabled={focusSize <= 5}
              style={{ padding: '4px 10px', fontSize: 12 }}
            >
              − Shrink
            </button>
            <button
              type="button"
              onClick={() => setFocusSize(s => Math.min(windowSize - 5, s + 5))}
              disabled={focusSize >= windowSize - 5}
              style={{ padding: '4px 10px', fontSize: 12 }}
            >
              + Expand
            </button>
          </div>

          <div
            style={{ display: 'flex', alignItems: 'center', gap: 8, borderLeft: '1px solid #a7f3d0', paddingLeft: 16 }}
          >
            <span style={{ fontSize: 12, color: '#16a34a' }}>Anchor:</span>
            <select
              value={anchorMode}
              onChange={e => setAnchorMode(e.target.value as 'none' | 'forward' | 'backward')}
              style={{ padding: '4px 8px', fontSize: 12, borderRadius: 4 }}
            >
              <option value="none">None (Fixed)</option>
              <option value="forward">Lock to Stream</option>
              <option value="backward">Slide Back</option>
            </select>
          </div>

          <span style={{ fontFamily: 'monospace', fontSize: 11, color: '#16a34a' }}>
            Position: {focusStartIdx}-{focusEndIdx} | Size: {focusSize} points
          </span>
        </div>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={visibleData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
            <XAxis
              dataKey="timestamp"
              type="number"
              domain={['dataMin', 'dataMax']}
              tickFormatter={formatTimestamp}
              tick={{ fontSize: 10 }}
            />
            <YAxis domain={[0, 150]} tick={{ fontSize: 11 }} />
            <Tooltip
              labelFormatter={ts => new Date(ts).toLocaleString()}
              formatter={value => [typeof value === 'number' ? value.toFixed(0) : String(value ?? ''), 'Events']}
            />
            <Legend />

            {/* Focus area highlight - when anchored to stream, disable animation so it moves exactly with data */}
            <ReferenceArea
              x1={focusStart}
              x2={focusEnd}
              fill="rgba(34, 197, 94, 0.15)"
              stroke="rgb(34, 197, 94)"
              strokeWidth={1}
              strokeDasharray="4 4"
              isAnimationActive={anchorMode === 'none'}
              animationDuration={300}
              animationEasing="ease-out"
              label={{ value: 'Focus Area', position: 'insideTopLeft', fontSize: 10, fill: '#16a34a' }}
            />

            {/* "Now" marker - when anchored to stream, disable animation so it moves exactly with data */}
            <ReferenceLine
              x={nowMarker}
              stroke="#ef4444"
              strokeWidth={2}
              strokeDasharray="6 3"
              isAnimationActive={anchorMode === 'none'}
              animationDuration={300}
              animationEasing="ease-out"
              label={{ value: 'NOW', position: 'top', fontSize: 11, fill: '#ef4444', fontWeight: 'bold' }}
            />

            {/* The data line - uses animationMatchBy for smooth sliding */}
            <Line
              name="Event Count"
              type="monotone"
              dataKey="count"
              stroke="#6366f1"
              strokeWidth={2}
              dot={false}
              animationMatchBy="timestamp"
              animationDuration={400}
            />
          </LineChart>
        </ResponsiveContainer>

        <div
          style={{
            marginTop: 16,
            padding: 16,
            backgroundColor: '#faf5ff',
            borderRadius: 8,
            border: '1px solid #e9d5ff',
          }}
        >
          <h4 style={{ margin: '0 0 8px 0', color: '#7c3aed' }}>Animation Props Used:</h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 12 }}>
            <div>
              <strong>Line:</strong>
              <ul style={{ margin: '4px 0', paddingLeft: 20, fontSize: 13 }}>
                <li>
                  <code>animationMatchBy=&quot;timestamp&quot;</code>
                </li>
                <li>
                  <code>animationDuration=&#123;400&#125;</code>
                </li>
              </ul>
            </div>
            <div>
              <strong>ReferenceArea:</strong>
              <ul style={{ margin: '4px 0', paddingLeft: 20, fontSize: 13 }}>
                <li>
                  <code>isAnimationActive=&#123;true&#125;</code>
                </li>
                <li>
                  <code>animationDuration=&#123;300&#125;</code>
                </li>
              </ul>
            </div>
            <div>
              <strong>ReferenceLine:</strong>
              <ul style={{ margin: '4px 0', paddingLeft: 20, fontSize: 13 }}>
                <li>
                  <code>isAnimationActive=&#123;true&#125;</code>
                </li>
                <li>
                  <code>animationDuration=&#123;300&#125;</code>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  },
};

const generateData = (start: number, count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    x: start + i,
    value: Math.floor(Math.random() * 60) + 20,
  }));
};

/**
 * This example demonstrates how to animate ReferenceLine and ReferenceArea
 * components when their positions change dynamically.
 *
 * Use `isAnimationActive={true}` to enable smooth position transitions.
 */
export const AnimatedReferenceLine = {
  render: () => {
    const [position, setPosition] = useState(5);
    const data = generateData(0, 10);

    return (
      <div style={{ width: '100%' }}>
        <h2>Animated ReferenceLine</h2>
        <p>Click the buttons to move the reference line. It will animate smoothly to its new position.</p>

        <div style={{ marginBottom: 16, display: 'flex', gap: 16 }}>
          <button type="button" onClick={() => setPosition(p => Math.max(0, p - 1))}>
            Move Left
          </button>
          <button type="button" onClick={() => setPosition(p => Math.min(9, p + 1))}>
            Move Right
          </button>
          <span>Current Position: {position}</span>
        </div>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="x" type="number" domain={[0, 9]} />
            <YAxis domain={[0, 100]} />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
            <ReferenceLine
              x={position}
              stroke="red"
              strokeWidth={2}
              label={{ value: `x=${position}`, position: 'top' }}
              isAnimationActive
              animationDuration={300}
              animationEasing="ease-out"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  },
};

/**
 * This example shows how ReferenceArea can animate when its x1/x2 boundaries change.
 * Useful for highlighting a sliding window or range selection that follows data.
 */
export const AnimatedReferenceArea = {
  render: () => {
    const [range, setRange] = useState({ start: 2, end: 5 });
    const data = generateData(0, 10);

    return (
      <div style={{ width: '100%' }}>
        <h2>Animated ReferenceArea</h2>
        <p>Click the buttons to slide the highlighted area. It animates smoothly.</p>

        <div style={{ marginBottom: 16, display: 'flex', gap: 16 }}>
          <button
            type="button"
            onClick={() => setRange(r => ({ start: Math.max(0, r.start - 1), end: Math.max(3, r.end - 1) }))}
          >
            Slide Left
          </button>
          <button
            type="button"
            onClick={() => setRange(r => ({ start: Math.min(6, r.start + 1), end: Math.min(9, r.end + 1) }))}
          >
            Slide Right
          </button>
          <span>
            Range: {range.start} - {range.end}
          </span>
        </div>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="x" type="number" domain={[0, 9]} />
            <YAxis domain={[0, 100]} />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
            <ReferenceArea
              x1={range.start}
              x2={range.end}
              fill="rgba(0, 100, 255, 0.3)"
              stroke="blue"
              strokeOpacity={0.5}
              isAnimationActive
              animationDuration={300}
              animationEasing="ease-out"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  },
};

/**
 * This example combines Line's animationMatchBy with animated reference components
 * to create a synchronized sliding window effect - perfect for real-time data visualization
 * where you want to highlight the "visible range" that moves with the data.
 */
export const SlidingWindowWithReferences = {
  render: () => {
    const [windowStart, setWindowStart] = useState(0);
    const windowSize = 10;
    const allData = generateData(0, 20);
    const visibleData = allData.slice(windowStart, windowStart + windowSize);
    const centerPosition = windowStart + windowSize / 2;

    return (
      <div style={{ width: '100%' }}>
        <h2>Sliding Window with Animated References</h2>
        <p>
          This demonstrates a common use case: a scrollable timeline with a &quot;visible range&quot; indicator. The
          Line uses <code>animationMatchBy=&quot;x&quot;</code> and the reference components animate in sync.
        </p>

        <div style={{ marginBottom: 16, display: 'flex', gap: 16 }}>
          <button type="button" onClick={() => setWindowStart(w => Math.max(0, w - 2))} disabled={windowStart === 0}>
            Scroll Left
          </button>
          <button type="button" onClick={() => setWindowStart(w => Math.min(10, w + 2))} disabled={windowStart >= 10}>
            Scroll Right
          </button>
          <span>
            Showing: {windowStart} - {windowStart + windowSize - 1}
          </span>
        </div>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={visibleData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="x" type="number" domain={['dataMin', 'dataMax']} />
            <YAxis domain={[0, 100]} />
            <Tooltip />
            <Legend />
            <Line
              name="Value"
              type="monotone"
              dataKey="value"
              stroke="#8884d8"
              strokeWidth={2}
              dot={false}
              animationMatchBy="x"
              animationDuration={300}
            />
            {/* Highlight the center portion of the visible window */}
            <ReferenceArea
              x1={centerPosition - 2}
              x2={centerPosition + 2}
              fill="rgba(136, 132, 216, 0.2)"
              stroke="#8884d8"
              strokeDasharray="3 3"
              isAnimationActive
              animationDuration={300}
              animationEasing="ease-out"
            />
            {/* Center line indicator */}
            <ReferenceLine
              x={centerPosition}
              stroke="#8884d8"
              strokeWidth={2}
              strokeDasharray="5 5"
              isAnimationActive
              animationDuration={300}
              animationEasing="ease-out"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  },
};

/**
 * Real-time streaming simulation that shows how all animation features work together.
 */
export const RealTimeStreamingWithReferences = {
  render: () => {
    const [data, setData] = useState(() => generateData(0, 10));
    const [isRunning, setIsRunning] = useState(false);
    const highlightRange = { start: data[data.length - 3]?.x ?? 0, end: data[data.length - 1]?.x ?? 0 };

    React.useEffect(() => {
      if (!isRunning) return undefined;

      const interval = setInterval(() => {
        setData(prev => {
          const lastX = prev[prev.length - 1]?.x ?? 0;
          const newPoint = { x: lastX + 1, value: Math.floor(Math.random() * 60) + 20 };
          return [...prev.slice(-9), newPoint];
        });
      }, 1000);

      return () => clearInterval(interval);
    }, [isRunning]);

    return (
      <div style={{ width: '100%' }}>
        <h2>Real-Time Streaming with Reference Animations</h2>
        <p>
          Watch as new data points stream in. The line animates with <code>animationMatchBy=&quot;x&quot;</code>, and
          the reference area (highlighting the latest 3 points) slides along with it.
        </p>

        <div style={{ marginBottom: 16, display: 'flex', gap: 16 }}>
          <button type="button" onClick={() => setIsRunning(!isRunning)}>
            {isRunning ? 'Stop' : 'Start'} Streaming
          </button>
          <button type="button" onClick={() => setData(generateData(0, 10))}>
            Reset
          </button>
        </div>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="x" type="number" domain={['dataMin', 'dataMax']} />
            <YAxis domain={[0, 100]} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#82ca9d"
              strokeWidth={2}
              dot={{ r: 4 }}
              animationMatchBy="x"
              animationDuration={500}
            />
            {/* Highlight the latest 3 data points */}
            <ReferenceArea
              x1={highlightRange.start}
              x2={highlightRange.end}
              fill="rgba(130, 202, 157, 0.3)"
              stroke="#82ca9d"
              isAnimationActive
              animationDuration={500}
              animationEasing="ease-out"
              label={{ value: 'Latest', position: 'insideTop' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  },
};
