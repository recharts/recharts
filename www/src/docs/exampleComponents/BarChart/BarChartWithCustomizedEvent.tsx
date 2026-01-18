import { useState } from 'react';
import { Bar, BarChart, BarRectangleItem, BarShapeProps, Rectangle } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

// #region Sample data
const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
// #endregion

const MyCustomShape = (props: BarShapeProps) => {
  const [isActive, setIsActive] = useState(false);
  const handleMouseClick = () => {
    setIsActive(curr => !curr);
  };
  const fill = isActive ? '#82ca9d' : '#8884d8';
  return <Rectangle {...props} onClick={handleMouseClick} fill={fill} />;
};

const BarChartWithCustomizedEvent = () => {
  return (
    <>
      <p>Click each rectangle </p>
      <BarChart
        style={{ width: '100%', maxWidth: '700px', maxHeight: '30vh', aspectRatio: 1.618 }}
        responsive
        data={data}
      >
        <Bar
          dataKey="uv"
          onClick={(bri: BarRectangleItem, index, event) => {
            console.log('clicked on', bri, index, event);
          }}
          shape={MyCustomShape}
        />
        <RechartsDevtools />
      </BarChart>
    </>
  );
};

export default BarChartWithCustomizedEvent;
