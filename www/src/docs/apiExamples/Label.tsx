import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Label, LabelList } from 'recharts';
import { localeGet } from '../../utils/LocaleUtils.ts';
import { SupportedLocale } from '../../locale';
import { ApiExample } from '../api/types.ts';

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

const example = (locale: SupportedLocale) => (
  <div>
    <p style={{ fontSize: 18 }}>{localeGet(locale, 'label', 'cartesian-title')}</p>
    <div className="cartesian-label-position">
      <svg width={600} height={400}>
        <rect x={100} y={100} width={400} height={200} stroke="#000" fill="none" />
        <g>
          <text x={300} y={90} textAnchor="middle">
            top
          </text>
        </g>
        <g>
          <text x={90} y={200} textAnchor="end">
            left
          </text>
        </g>
        <g>
          <text x={510} y={200} textAnchor="start">
            right
          </text>
        </g>
        <g>
          <text x={300} y={200} textAnchor="middle">
            center
          </text>
        </g>
        <g>
          <text x={300} y={310} textAnchor="middle" dominantBaseline="hanging">
            bottom
          </text>
        </g>
        <g>
          <text x={110} y={200}>
            insideLeft
          </text>
        </g>
        <g>
          <text x={490} y={200} textAnchor="end">
            insideRight
          </text>
        </g>
        <g>
          <text x={300} y={110} textAnchor="middle" dominantBaseline="hanging">
            insideTop
          </text>
        </g>
        <g>
          <text x={300} y={290} textAnchor="middle">
            insideBottom
          </text>
        </g>
        <g>
          <text x={110} y={110} dominantBaseline="hanging">
            insideTopLeft
          </text>
        </g>
        <g>
          <text x={490} y={110} textAnchor="end" dominantBaseline="hanging">
            insideTopRight
          </text>
        </g>
        <g>
          <text x={110} y={290}>
            insideBottomLeft
          </text>
        </g>
        <g>
          <text x={490} y={290} textAnchor="end">
            insideBottomRight
          </text>
        </g>
      </svg>
    </div>
    <p style={{ fontSize: 18 }}>{localeGet(locale, 'label', 'polar-title')}</p>
    <div className="poral-label-position">
      <svg width={700} height={400}>
        <path
          d="M225,256.7L300,126.8A200,200,0,0,0,100,126.8L175,256.7A50,50,0,0,1,225,256.7"
          fill="none"
          stroke="#666"
        />
        <g>
          <text x={200} y={300} textAnchor="middle" dominantBaseline="middle">
            center
          </text>
        </g>
        <g>
          <text x={200} y={90} textAnchor="start" dominantBaseline="middle">
            outside
          </text>
        </g>
        <g>
          <text x={200} y={175} textAnchor="middle" dominantBaseline="middle">
            inside
          </text>
        </g>

        <path d="M400,300A200,200,0,0,1,600,100L600,60A240,240,0,0,0,360,300Z" fill="none" stroke="#666" />
        <defs>
          <path id="textPathLabelDemoInsideStart" d="M383.34,261.8A220,220,0,0,1,600,80" />
        </defs>
        <defs>
          <path id="textPathLabelDemoInsideEnd" d="M561.8,83.34A220,220,0,0,0,380,300" />
        </defs>
        <defs>
          <path id="textPathLabelDemoEnd" d="M638.2,83.34A220,220,0,0,1,820,300" />
        </defs>
        <text dominantBaseline="central">
          <textPath xlinkHref="#textPathLabelDemoInsideStart">insideStart</textPath>
        </text>
        <text dominantBaseline="central" textAnchor="start">
          <textPath xlinkHref="#textPathLabelDemoInsideEnd">insideEnd</textPath>
        </text>
        <text dominantBaseline="central" textAnchor="start">
          <textPath xlinkHref="#textPathLabelDemoEnd">End</textPath>
        </text>
      </svg>
    </div>
  </div>
);

const chartExample = () => (
  <BarChart
    width={730}
    height={250}
    data={data}
    margin={{
      top: 15,
      right: 30,
      left: 20,
      bottom: 5,
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name">
      <Label value="Pages of my website" offset={0} position="insideBottom" />
    </XAxis>
    <YAxis
      label={{
        value: 'pv of page',
        angle: -90,
        position: 'insideLeft',
        textAnchor: 'middle',
      }}
    />
    <Bar dataKey="pv" fill="#8884d8">
      <LabelList dataKey="name" position="top" />
    </Bar>
  </BarChart>
);

const labelExamples: ReadonlyArray<ApiExample> = [
  {
    demo: example,
    code: '',
  },
  {
    demo: chartExample,
    code: `
<BarChart
  width={730}
  height={250}
  data={data}
  margin={{ top: 15, right: 30, left: 20, bottom: 5 }}
>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name">
    <Label value="Pages of my website" offset={0} position="insideBottom" />
  </XAxis>
  <YAxis label={{ value: 'pv of page', angle: -90, position: 'insideLeft' }} />
  <Bar dataKey="pv" fill="#8884d8">
    <LabelList dataKey="name" position="top" />
  </Bar>
</BarChart>
    `,
    dataCode: `const data = ${JSON.stringify(data, null, 2)}`,
  },
];
export default labelExamples;
