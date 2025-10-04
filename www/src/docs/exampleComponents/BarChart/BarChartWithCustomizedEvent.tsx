import { useState } from 'react';
import { Bar, BarChart, Cell } from 'recharts';
import { BarRectangleItem } from 'recharts/types/cartesian/Bar';

const BarChartWithCustomizedEvent = () => {
  const [data] = useState([
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
  ]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (_: BarRectangleItem, index: number) => {
    setActiveIndex(index);
  };

  const activeItem = data[activeIndex];

  return (
    <>
      <p>Click each rectangle </p>
      <BarChart
        style={{ width: '100%', maxWidth: '700px', maxHeight: '30vh', aspectRatio: 1.618 }}
        responsive
        data={data}
      >
        <Bar dataKey="uv" onClick={handleClick}>
          {data.map((_entry, index) => (
            <Cell cursor="pointer" fill={index === activeIndex ? '#82ca9d' : '#8884d8'} key={`cell-${index}`} />
          ))}
        </Bar>
      </BarChart>
      <p className="content">{`Uv of "${activeItem.name}": ${activeItem.uv}`}</p>
    </>
  );
};

export default BarChartWithCustomizedEvent;
