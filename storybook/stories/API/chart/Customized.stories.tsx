import React from 'react';
import { Args } from '@storybook/react';
import {
  LineChart,
  XAxis,
  YAxis,
  Customized,
  CartesianGrid,
  Line,
  Legend,
  ResponsiveContainer,
  Tooltip,
  Rectangle,
  Cross,
} from '../../../../src';
import { pageData } from '../../data';

const GeneralProps: Args = {
  component: {
    description: `Use react element or function to render arbitrary customized content
      which can use the internal state and props of chart.`,
    table: {
      type: {
        summary: 'ReactElement | Function',
        defaultValue: null,
      },
      category: 'General',
    },
  },
};

export default {
  argTypes: { ...GeneralProps },
  component: Customized,
  parameters: {
    controls: { include: ['data'] },
  },
};

const SimpleCustomized = {
  render: (args: Record<string, any>) => {
    const { data } = args;
    return (
      <ResponsiveContainer width="100%" height={500}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          {args.customizedComponent}
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    );
  },
  args: {
    data: pageData,
    customizedComponent: <div>CustomizedComponent</div>,
  },
};

// using Customized gives you access to all relevant chart props
const CustomizedRectangleComponent = (props: any) => {
  const { formattedGraphicalItems } = props;
  // get first and second series in chart
  const firstSeries = formattedGraphicalItems[0];
  const secondSeries = formattedGraphicalItems[1];

  // render custom content using points from the graph
  return firstSeries?.props?.points.map((firstSeriesPoint: any, index: number) => {
    const secondSeriesPoint = secondSeries?.props?.points[index];
    const yDifference = firstSeriesPoint.y - secondSeriesPoint.y;

    let fillColor = yDifference < 0 ? 'green' : 'none';
    if (yDifference > 0) {
      fillColor = 'red';
    }

    return (
      <Rectangle
        key={firstSeriesPoint.payload.name}
        width={10}
        height={yDifference}
        x={secondSeriesPoint.x - 5}
        y={secondSeriesPoint.y}
        fill={fillColor}
      />
    );
  });
};

export const CustomizedRectangle = {
  ...SimpleCustomized,
  args: {
    data: pageData,
    customizedComponent: <Customized component={CustomizedRectangleComponent} />,
  },
};

// using Customized gives you access to all relevant chart props
const CustomizedCrossComponent = (props: any) => {
  const { width, height, stroke, fill, formattedGraphicalItems } = props;
  // get first series in chart
  const firstSeries = formattedGraphicalItems[0];
  // get any point at any index in chart
  const secondPoint = firstSeries?.props?.points[1];

  // render custom content using points from the graph
  return (
    <Cross
      y={secondPoint?.y}
      x={secondPoint?.x}
      top={5}
      left={50}
      height={height}
      width={width}
      stroke={stroke ?? '#000'}
      fill={fill ?? 'none'}
    />
  );
};

export const CustomizedCross = {
  ...SimpleCustomized,
  args: {
    data: pageData,
    customizedComponent: <Customized component={CustomizedCrossComponent} />,
  },
};
