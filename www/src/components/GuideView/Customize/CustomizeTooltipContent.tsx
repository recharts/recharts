import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

// #region Sample data
const data = [
  {
    name: 'Page A',
    uv: 400,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 300,
    pv: 4567,
    amt: 2400,
  },
  {
    name: 'Page C',
    uv: 300,
    pv: 1398,
    amt: 2400,
  },
  {
    name: 'Page D',
    uv: 200,
    pv: 9800,
    amt: 2400,
  },
  {
    name: 'Page E',
    uv: 278,
    pv: 3908,
    amt: 2400,
  },
  {
    name: 'Page F',
    uv: 189,
    pv: 4800,
    amt: 2400,
  },
];

const margin = {
  top: 20,
  right: 30,
  left: 20,
  bottom: 5,
};
// #endregion

function getIntroOfPage(label: string): string {
  if (label === 'Page A') {
    return "Page A is about men's clothing";
  }
  if (label === 'Page B') {
    return "Page B is about women's dress";
  }
  if (label === 'Page C') {
    return "Page C is about women's bag";
  }
  if (label === 'Page D') {
    return 'Page D is about household goods';
  }
  if (label === 'Page E') {
    return 'Page E is about food';
  }
  if (label === 'Page F') {
    return 'Page F is about baby food';
  }
  return '';
}

function CustomTooltip({ payload, label, active }: any) {
  if (active && payload && payload.length) {
    return (
      <div
        className="custom-tooltip"
        style={{
          border: '1px solid #d88488',
          backgroundColor: '#fff',
          padding: '10px',
          borderRadius: '5px',
          boxShadow: '1px 1px 2px #d88488',
        }}
      >
        <p className="label" style={{ margin: '0', fontWeight: '700' }}>{`${label} : ${payload[0].value}`}</p>
        <p className="intro" style={{ margin: '0' }}>
          {getIntroOfPage(label)}
        </p>
        <p className="desc" style={{ margin: '0', borderTop: '1px dashed #f5f5f5' }}>
          Anything you want can be displayed here.
        </p>
      </div>
    );
  }

  return null;
}

export default function CustomizeTooltipContent() {
  return (
    <BarChart width={600} height={300} data={data} margin={margin}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip content={CustomTooltip} defaultIndex={2} active />
      <Bar dataKey="uv" fill="#8884d8" />
    </BarChart>
  );
}
