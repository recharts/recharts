import { useCallback, useState } from 'react';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceArea,
  ResponsiveContainer,
  MouseHandlerDataParam,
} from 'recharts';

type Impressions = { name: number; cost: number; impression: number };

const impressionsData = [
  { name: 1, cost: 4.11, impression: 100 },
  { name: 2, cost: 2.39, impression: 120 },
  { name: 3, cost: 1.37, impression: 150 },
  { name: 4, cost: 1.16, impression: 180 },
  { name: 5, cost: 2.29, impression: 200 },
  { name: 6, cost: 3, impression: 499 },
  { name: 7, cost: 0.53, impression: 50 },
  { name: 8, cost: 2.52, impression: 100 },
  { name: 9, cost: 1.79, impression: 200 },
  { name: 10, cost: 2.94, impression: 222 },
  { name: 11, cost: 4.3, impression: 210 },
  { name: 12, cost: 4.41, impression: 300 },
  { name: 13, cost: 2.1, impression: 50 },
  { name: 14, cost: 8, impression: 190 },
  { name: 15, cost: 0, impression: 300 },
  { name: 16, cost: 9, impression: 400 },
  { name: 17, cost: 3, impression: 200 },
  { name: 18, cost: 2, impression: 50 },
  { name: 19, cost: 3, impression: 100 },
  { name: 20, cost: 7, impression: 100 },
];

type ZoomAndHighlightState = {
  left: string | number;
  right: string | number;
  refAreaLeft: string | number | undefined;
  refAreaRight: string | number | undefined;
  top: string | number;
  bottom: string | number;
  top2: string | number;
  bottom2: string | number;
  animation: boolean;
};

const initialState: ZoomAndHighlightState = {
  left: 'dataMin',
  right: 'dataMax',
  refAreaLeft: undefined,
  refAreaRight: undefined,
  top: 'dataMax+1',
  bottom: 'dataMin-1',
  top2: 'dataMax+20',
  bottom2: 'dataMin-20',
  animation: true,
};

const getAxisYDomain = (
  from: string | number | undefined,
  to: string | number | undefined,
  ref: keyof Impressions,
  offset: number,
): (number | string)[] => {
  if (from && to) {
    const refData = impressionsData.slice(Number(from) - 1, Number(to));
    let [bottom, top] = [refData[0][ref], refData[0][ref]];
    refData.forEach(d => {
      if (d[ref] > top) top = d[ref];
      if (d[ref] < bottom) bottom = d[ref];
    });

    return [(bottom | 0) - offset, (top | 0) + offset];
  }
  return [initialState.bottom, initialState.top];
};

const Example = () => {
  const [zoomGraph, setZoomGraph] = useState<ZoomAndHighlightState>(initialState);

  const zoom = useCallback(() => {
    setZoomGraph((prev: ZoomAndHighlightState): ZoomAndHighlightState => {
      let { refAreaLeft, refAreaRight } = prev;

      if (refAreaLeft === refAreaRight || refAreaRight === '') {
        return {
          ...prev,
          refAreaLeft: undefined,
          refAreaRight: undefined,
        };
      }

      if (refAreaLeft && refAreaRight && refAreaLeft > refAreaRight)
        [refAreaLeft, refAreaRight] = [refAreaRight, refAreaLeft];

      const [bottom, top] = getAxisYDomain(refAreaLeft, refAreaRight, 'cost', 1);
      const [bottom2, top2] = getAxisYDomain(refAreaLeft, refAreaRight, 'impression', 50);

      return {
        ...prev,
        refAreaLeft: undefined,
        refAreaRight: undefined,
        left: refAreaLeft ?? 'dataMin',
        right: refAreaRight ?? 'dataMax',
        bottom,
        top,
        bottom2,
        top2,
      };
    });
  }, [setZoomGraph]);

  const zoomOut = useCallback(() => {
    setZoomGraph(initialState);
  }, [setZoomGraph]);

  const onMouseDown = useCallback(
    (e: MouseHandlerDataParam) => {
      setZoomGraph((prev: ZoomAndHighlightState): ZoomAndHighlightState => ({ ...prev, refAreaLeft: e.activeLabel }));
    },
    [setZoomGraph],
  );

  const onMouseMove = useCallback(
    (e: MouseHandlerDataParam) => {
      setZoomGraph(prev => {
        if (prev.refAreaLeft) {
          return { ...prev, refAreaRight: e.activeLabel };
        }
        return prev;
      });
    },
    [setZoomGraph],
  );

  const { refAreaLeft, refAreaRight, left, right, top, bottom, top2, bottom2 } = zoomGraph;

  return (
    <div className="highlight-bar-charts" style={{ userSelect: 'none', width: '100%' }}>
      <button type="button" className="btn update" onClick={zoomOut}>
        Zoom Out
      </button>

      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          width={800}
          height={400}
          data={impressionsData}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={zoom}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis allowDataOverflow dataKey="name" domain={[left, right]} type="number" />
          <YAxis allowDataOverflow domain={[bottom, top]} type="number" yAxisId="1" />
          <YAxis orientation="right" allowDataOverflow domain={[bottom2, top2]} type="number" yAxisId="2" />
          <Tooltip />
          <Line yAxisId="1" type="natural" dataKey="cost" stroke="#8884d8" animationDuration={300} />
          <Line yAxisId="2" type="natural" dataKey="impression" stroke="#82ca9d" animationDuration={300} />

          {refAreaLeft && refAreaRight ? (
            <ReferenceArea yAxisId="1" x1={refAreaLeft} x2={refAreaRight} strokeOpacity={0.3} />
          ) : null}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Example;
