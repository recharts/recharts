import React from 'react';
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
} from '../../../../src';
import { pageData } from '../../data';
import { StorybookArgs } from '../../../StorybookArgs';

const GeneralProps: StorybookArgs = {
  component: {
    defaultValue: null,
    description: `Use react element or function to render arbitrary customized content
      which can use the internal state and props of chart.`,
    table: {
      type: {
        summary: 'ReactElement | Function',
      },
      category: 'General',
    },
  },
};

export default {
  argTypes: GeneralProps,
  component: Customized,
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

export const API = {
  render: (args: Record<string, any>) => {
    const { component } = args;
    return (
      <ResponsiveContainer width="100%" height={500}>
        <LineChart
          width={500}
          height={300}
          data={pageData}
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
          {/* The target component */}
          <Customized component={component} />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    );
  },
  args: {
    component: CustomizedRectangleComponent,
  },
};
