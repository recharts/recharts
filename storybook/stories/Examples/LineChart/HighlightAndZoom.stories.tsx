import React, { useState } from 'react';
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  LineChart,
  ReferenceArea,
  Line,
  Tooltip,
} from '../../../../src';
import { Impressions, impressionsData } from '../../data';

export default {
  component: LineChart,
};

type InitialState = {
  data: any;
  left?: string;
  right?: string;
  refAreaLeft?: string;
  refAreaRight?: string;
  top: string | number;
  bottom: string | number;
  top2: string | number;
  bottom2: string | number;
  animation: boolean;
};

const initialState: InitialState = {
  data: impressionsData,
  left: 'dataMin',
  right: 'dataMax',
  refAreaLeft: '',
  refAreaRight: '',
  top: 'dataMax+1',
  bottom: 'dataMin-1',
  top2: 'dataMax+20',
  bottom2: 'dataMin-20',
  animation: true,
};

const getAxisYDomain = (
  from: string | undefined,
  to: string | undefined,
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

export const HighlightAndZoom = {
  render: (_args: Record<string, any>) => {
    const [zoomGraph, setZoomGraph] = useState<InitialState>(initialState);

    const zoom = () => {
      let { refAreaLeft, refAreaRight } = zoomGraph;
      const { data } = zoomGraph;

      if (refAreaLeft === refAreaRight || refAreaRight === '') {
        setZoomGraph(prev => ({
          ...prev,
          refAreaLeft: '',
          refAreaRight: '',
        }));
        return;
      }

      // xAxis domain
      if (refAreaLeft && refAreaRight && refAreaLeft > refAreaRight)
        [refAreaLeft, refAreaRight] = [refAreaRight, refAreaLeft];

      // yAxis domain
      const [bottom, top] = getAxisYDomain(refAreaLeft, refAreaRight, 'cost', 1);
      const [bottom2, top2] = getAxisYDomain(refAreaLeft, refAreaRight, 'impression', 50);

      setZoomGraph(prev => ({
        ...prev,
        refAreaLeft: '',
        refAreaRight: '',
        data: data?.slice(),
        left: refAreaLeft,
        right: refAreaRight,
        bottom,
        top,
        bottom2,
        top2,
      }));
    };

    const zoomOut = () => {
      const { data } = zoomGraph;
      setZoomGraph(prev => ({
        ...prev,
        data: data?.slice(),
        refAreaLeft: '',
        refAreaRight: '',
        left: 'dataMin',
        right: 'dataMax',
        top: 'dataMax+1',
        bottom: 'dataMin',
        top2: 'dataMax+50',
        bottom2: 'dataMin+50',
      }));
    };

    const { data, left, right, refAreaLeft, refAreaRight, top, bottom, top2, bottom2 } = zoomGraph;

    return (
      <div className="highlight-bar-charts" style={{ userSelect: 'none', width: '100%' }}>
        <button type="button" className="btn update" onClick={() => zoomOut()}>
          Zoom Out
        </button>

        <ResponsiveContainer minHeight={500}>
          <LineChart
            width={800}
            height={400}
            data={data}
            onMouseDown={e => setZoomGraph(prev => ({ ...prev, refAreaLeft: e.activeLabel }))}
            onMouseMove={e => zoomGraph.refAreaLeft && setZoomGraph(prev => ({ ...prev, refAreaRight: e.activeLabel }))}
            onMouseUp={() => zoom()}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis allowDataOverflow dataKey="name" domain={left && right ? [left, right] : undefined} type="number" />
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
  },
  args: {},
};
