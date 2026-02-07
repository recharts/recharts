import React, { useState, useCallback, useRef, useMemo, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, ReferenceArea, ResponsiveContainer, Tooltip } from '../../../../../src';

export default {
  title: 'Examples/cartesian/ReferenceAnimation',
  component: LineChart,
};

// --- Data generation ---

interface Message {
  id: number;
  timestamp: number;
  sender: 'user' | 'assistant';
  text: string;
}

interface ActivityBucket {
  timestamp: number;
  count: number;
}

const HOUR = 3600_000;
const MINUTE = 60_000;
const BASE_TIME = new Date('2024-03-15T08:00:00').getTime();
const TOTAL_HOURS = 48;
const BUCKET_MINUTES = 15;

// 48 hours of 15-minute activity buckets
const ALL_ACTIVITY: ActivityBucket[] = Array.from(
  { length: (TOTAL_HOURS * 60) / BUCKET_MINUTES },
  (_, i): ActivityBucket => {
    const t = BASE_TIME + i * BUCKET_MINUTES * MINUTE;
    const hour = new Date(t).getHours();
    const isWorkHours = hour >= 9 && hour <= 18;
    const base = isWorkHours ? 8 : 1;
    const wave = Math.sin(i * 0.3) * 3 + Math.cos(i * 0.13) * 2;
    return { timestamp: t, count: Math.max(0, Math.round(base + wave)) };
  },
);

// Messages spread across the timeline
const MESSAGES: Message[] = (() => {
  const msgs: Message[] = [];
  let id = 0;
  const userPhrases = [
    'Can you check the latest deployment?',
    'What does the error log say?',
    'How many requests hit the API today?',
    'Please update the config.',
    'Any issues with the staging environment?',
    'Run the migration script.',
    'What is the current latency?',
    'Scale up the workers.',
  ];
  const assistantPhrases = [
    'The deployment completed successfully at 14:32.',
    'I see 3 warnings in the error log, none critical.',
    'API received 12,847 requests in the last 24 hours.',
    'Config updated. Changes will take effect after restart.',
    'Staging is healthy. All services responding.',
    'Migration completed. 248 rows affected.',
    'Current p99 latency is 142ms, within normal range.',
    'Workers scaled from 4 to 8 instances.',
  ];

  for (const bucket of ALL_ACTIVITY) {
    for (let j = 0; j < bucket.count; j++) {
      const offset = Math.floor((j / Math.max(bucket.count, 1)) * BUCKET_MINUTES * MINUTE);
      const isUser = id % 3 !== 2;
      msgs.push({
        id: id++,
        timestamp: bucket.timestamp + offset,
        sender: isUser ? 'user' : 'assistant',
        text: isUser ? userPhrases[id % userPhrases.length] : assistantPhrases[id % assistantPhrases.length],
      });
    }
  }
  return msgs;
})();

// --- Helpers ---

function formatTime(ts: number): string {
  return new Date(ts).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function formatDateTime(ts: number): string {
  const d = new Date(ts);
  return `${d.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' })} ${formatTime(ts)}`;
}

// --- Components ---

const msgStyle: Record<string, React.CSSProperties> = {
  user: { background: '#e0e7ff', borderRadius: 12, padding: '8px 12px', maxWidth: '80%', alignSelf: 'flex-end' },
  assistant: {
    background: '#ecfdf5',
    border: '1px solid #a7f3d0',
    borderRadius: 12,
    padding: '8px 12px',
    maxWidth: '80%',
    alignSelf: 'flex-start',
  },
};

function MessageBubble({ msg }: { msg: Message }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', ...msgStyle[msg.sender] }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, marginBottom: 2 }}>
        <span style={{ fontSize: 11, fontWeight: 600, color: msg.sender === 'user' ? '#4338ca' : '#16a34a' }}>
          {msg.sender === 'user' ? 'You' : 'Assistant'}
        </span>
        <span style={{ fontSize: 10, color: '#999' }}>{formatTime(msg.timestamp)}</span>
      </div>
      <span style={{ fontSize: 13 }}>{msg.text}</span>
    </div>
  );
}

// Chart window size: how many hours of data to show at once
const CHART_WINDOW_HOURS = 6;
const CHART_WINDOW_MS = CHART_WINDOW_HOURS * HOUR;

/**
 * Activity chart synced with a scrollable message list.
 *
 * The chart shows a sliding window of data (~6 hours). As you scroll through
 * messages the chart pans to keep the visible messages in view, using
 * `animationMatchBy="timestamp"` for smooth sliding transitions.
 *
 * The ReferenceArea highlights exactly which time range is currently visible
 * in the message list.
 */
export const ActivityChartWithMessages = {
  render: () => {
    const listRef = useRef<HTMLDivElement>(null);
    const [visibleRange, setVisibleRange] = useState<{ start: number; end: number }>({
      start: MESSAGES[0].timestamp,
      end: MESSAGES[Math.min(30, MESSAGES.length - 1)].timestamp,
    });
    const [isScrolling, setIsScrolling] = useState(false);
    const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout>>();

    // Track which messages are visible in the scroll container
    const handleScroll = useCallback(() => {
      const el = listRef.current;
      if (!el) return;

      setIsScrolling(true);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => setIsScrolling(false), 150);

      const rect = el.getBoundingClientRect();
      const children = el.querySelectorAll('[data-timestamp]');
      let firstVisible: number | null = null;
      let lastVisible: number | null = null;

      children.forEach(child => {
        const childRect = child.getBoundingClientRect();
        const isVisible = childRect.top < rect.bottom && childRect.bottom > rect.top;
        if (isVisible) {
          const ts = Number(child.getAttribute('data-timestamp'));
          if (firstVisible === null || ts < firstVisible) firstVisible = ts;
          if (lastVisible === null || ts > lastVisible) lastVisible = ts;
        }
      });

      if (firstVisible !== null && lastVisible !== null) {
        setVisibleRange({ start: firstVisible, end: lastVisible });
      }
    }, []);

    useEffect(() => {
      handleScroll();
    }, [handleScroll]);

    // Compute chart window: center on visible messages, clamp to data bounds
    const chartWindow = useMemo(() => {
      const center = (visibleRange.start + visibleRange.end) / 2;
      const dataStart = ALL_ACTIVITY[0].timestamp;
      const dataEnd = ALL_ACTIVITY[ALL_ACTIVITY.length - 1].timestamp;

      let winStart = center - CHART_WINDOW_MS / 2;
      let winEnd = center + CHART_WINDOW_MS / 2;

      // Clamp
      if (winStart < dataStart) {
        winStart = dataStart;
        winEnd = dataStart + CHART_WINDOW_MS;
      }
      if (winEnd > dataEnd) {
        winEnd = dataEnd;
        winStart = dataEnd - CHART_WINDOW_MS;
      }

      return { start: winStart, end: winEnd };
    }, [visibleRange]);

    // Slice messages to the chart window, with deterministic vertical jitter
    const windowDots = useMemo(
      () =>
        MESSAGES.filter(m => m.timestamp >= chartWindow.start && m.timestamp <= chartWindow.end).map(m => ({
          timestamp: m.timestamp,
          y: 0.5,
          sender: m.sender,
        })),
      [chartWindow],
    );

    // Click chart to jump to that point in the message list
    const handleChartClick = useCallback((activePayload: { timestamp?: number } | undefined) => {
      if (!activePayload?.timestamp || !listRef.current) return;
      const target = activePayload.timestamp;
      const children = listRef.current.querySelectorAll('[data-timestamp]');
      let closest: Element | null = null;
      let minDiff = Infinity;
      children.forEach(child => {
        const ts = Number(child.getAttribute('data-timestamp'));
        const diff = Math.abs(ts - target);
        if (diff < minDiff) {
          minDiff = diff;
          closest = child;
        }
      });
      if (closest) {
        (closest as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, []);

    return (
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 0 }}>
        {/* Activity chart — sliding window */}
        <div style={{ width: '100%', borderBottom: '1px solid #e5e7eb' }}>
          <ResponsiveContainer width="100%" height={80}>
            <LineChart
              data={windowDots}
              margin={{ top: 6, right: 12, left: 12, bottom: 6 }}
              onClick={e => {
                const idx = typeof e?.activeTooltipIndex === 'number' ? e.activeTooltipIndex : -1;
                if (idx >= 0 && windowDots[idx]) {
                  handleChartClick(windowDots[idx]);
                }
              }}
              style={{ cursor: 'crosshair' }}
            >
              <XAxis
                dataKey="timestamp"
                type="number"
                domain={[chartWindow.start, chartWindow.end]}
                tickFormatter={formatTime}
                tick={{ fontSize: 10 }}
              />
              <YAxis hide domain={[0, 1]} />
              <Tooltip
                labelFormatter={ts => formatDateTime(ts as number)}
                formatter={(_: unknown, __: unknown, props: { payload?: { sender?: string } }) => {
                  return [props.payload?.sender === 'user' ? 'You' : 'Assistant', 'Message'];
                }}
                isAnimationActive={false}
              />

              {/* Highlight the visible message range */}
              <ReferenceArea
                x1={Math.max(visibleRange.start, chartWindow.start)}
                x2={Math.min(visibleRange.end, chartWindow.end)}
                fill="#6366f1"
                fillOpacity={0.12}
                isAnimationActive={!isScrolling}
                animationDuration={300}
                animationEasing="ease-out"
              />

              {/* Each message = one dot. Density shows activity. */}
              <Line
                dataKey="y"
                stroke="none"
                dot={{ r: 2.5, fill: '#6366f1', fillOpacity: 0.45, strokeWidth: 0 }}
                activeDot={{ r: 4, fill: '#6366f1', fillOpacity: 1, strokeWidth: 0 }}
                isAnimationActive={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Scrollable message list */}
        <div
          ref={listRef}
          onScroll={handleScroll}
          style={{
            height: 400,
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: 6,
            padding: '8px 12px',
            background: '#fafafa',
          }}
        >
          {MESSAGES.map(msg => (
            <div key={msg.id} data-timestamp={msg.timestamp}>
              <MessageBubble msg={msg} />
            </div>
          ))}
        </div>
      </div>
    );
  },
};
