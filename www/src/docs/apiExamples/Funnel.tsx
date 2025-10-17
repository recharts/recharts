import { FunnelChart, Funnel, LabelList, Trapezoid, Label } from 'recharts';
import { FunnelTrapezoidItem } from 'recharts/types/cartesian/Funnel';
import { ApiExample, ApiExampleDemo } from '../api/types.ts';

const data = [
  { value: 100, name: 'Impression', fill: '#8884d8' },
  { value: 80, name: 'Click', fill: '#83a6ed' },
  { value: 50, name: 'Visit', fill: '#8dd1e1' },
  { value: 40, name: 'Consult', fill: '#82ca9d' },
  { value: 26, name: 'Order', fill: '#a4de6c' },
];

const FunnelWithDimensions = (props: FunnelTrapezoidItem) => {
  return (
    <>
      <Trapezoid {...props} stroke="red" fill="orange" fillOpacity={0.2} />
      <Label
        position="insideBottom"
        value={`lowerWidth: ${Math.round(props.lowerWidth)}`}
        viewBox={props.labelViewBox}
      />
      <Label position="insideTop" value={`upperWidth: ${Math.round(props.upperWidth)}`} viewBox={props.labelViewBox} />
      <Label position="insideTopLeft" value={`x: ${Math.round(props.x)}`} viewBox={props.labelViewBox} />
      <Label position="insideTopRight" value={`y: ${Math.round(props.y)}`} viewBox={props.labelViewBox} />
      <Label position="middle" value={`width: ${Math.round(props.width)}`} viewBox={props.labelViewBox} />
    </>
  );
};

export const FunnelExample: ApiExampleDemo = ({ isAnimationActive }) => {
  return (
    <FunnelChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      margin={{
        right: 30,
      }}
    >
      <Funnel
        dataKey="value"
        data={data}
        isAnimationActive={isAnimationActive}
        activeShape={FunnelWithDimensions}
        reversed
      >
        <LabelList position="right" fill="#000" stroke="none" dataKey="name" offset={20} />
      </Funnel>
    </FunnelChart>
  );
};

const exampleCode = `
<FunnelChart
  style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
  responsive
  margin={{
    right: 30
  }}
>
  <Tooltip />
  <Funnel
    dataKey="value"
    data={data}
    isAnimationActive
    activeShape={(args) => {
      console.log(args)
    }}
  >
    <LabelList position="right" fill="#000" stroke="none" dataKey="name" />
  </Funnel>
</FunnelChart>
`;

export const funnelApiExamples: ReadonlyArray<ApiExample> = [
  {
    demo: props => (
      <>
        <p>Mouse over the Funnel to see Funnel dimensions and layout.</p>
        <FunnelExample {...props} />
      </>
    ),
    code: exampleCode,
    dataCode: `const data = ${JSON.stringify(data, null, 2)}`,
  },
];
