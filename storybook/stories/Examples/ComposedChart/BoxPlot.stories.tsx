/* eslint-disable no-shadow */
import React from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  RectangleProps,
  Scatter,
} from '../../../../src';
import { BoxPlot, BoxPlotData } from '../../data/DataProps';
import { boxPlots } from '../../data';

export default {
  component: ComposedChart,
};

const HorizonBar = (props: RectangleProps) => {
  const { x, y, width, height } = props;

  if (x == null || y == null || width == null || height == null) {
    return null;
  }

  return <line x1={x} y1={y} x2={x + width} y2={y} stroke="#000" strokeWidth={3} />;
};

const DotBar = (props: RectangleProps) => {
  const { x, y, width, height } = props;

  if (x == null || y == null || width == null || height == null) {
    return null;
  }

  return (
    <line
      x1={x + width / 2}
      y1={y + height}
      x2={x + width / 2}
      y2={y}
      stroke="#000"
      strokeWidth={5}
      strokeDasharray="5"
    />
  );
};

const useBoxPlot = (boxPlots: BoxPlot[]): BoxPlotData[] => {
  const data = React.useMemo(
    () =>
      boxPlots.map(v => {
        return {
          min: v.min,
          bottomWhisker: v.lowerQuartile - v.min,
          bottomBox: v.median - v.lowerQuartile,
          topBox: v.upperQuartile - v.median,
          topWhisker: v.max - v.upperQuartile,
          average: v.average,
          size: 250,
        };
      }),
    [boxPlots],
  );

  return data;
};

export const BoxPlotChart = {
  render: (_args: Record<string, any>) => {
    const data = useBoxPlot(boxPlots);
    return (
      <ResponsiveContainer minHeight={600}>
        <ComposedChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <Bar stackId="a" dataKey="min" fill="none" />
          <Bar stackId="a" dataKey="bar-min" shape={<HorizonBar />} />
          <Bar stackId="a" dataKey="bottomWhisker" shape={<DotBar />} />
          <Bar stackId="a" dataKey="bottomBox" fill="#8884d8" />
          <Bar stackId="a" dataKey="bar-avg" shape={<HorizonBar />} />
          <Bar stackId="a" dataKey="topBox" fill="#8884d8" />
          <Bar stackId="a" dataKey="topWhisker" shape={<DotBar />} />
          <Bar stackId="a" dataKey="bar-max" shape={<HorizonBar />} />
          <ZAxis type="number" dataKey="size" range={[0, 250]} />

          <Scatter dataKey="average" fill="red" stroke="#FFF" />
          <XAxis />
          <YAxis />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
  args: {},
};
