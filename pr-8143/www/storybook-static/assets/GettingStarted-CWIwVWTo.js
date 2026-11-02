import{u as p,j as t}from"./index-BwgOkyCq.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as o}from"./LineChart-CAokEF_k.js";import{L as a}from"./Line-5dkC5hpH.js";import{C as i}from"./CartesianGrid-CxHGX94q.js";import{X as s}from"./XAxis-BIkQK5N1.js";import{Y as d}from"./YAxis--soXrgEQ.js";import{T as m}from"./Tooltip-DAoA9VX1.js";import"./iframe-DSNXEUn4.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-tZbMCMkz.js";import"./zIndexSlice-Dz2masNo.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BJdscjTc.js";import"./throttle-Cql2XGyq.js";import"./index-Cw6XMlov.js";import"./index-CTOcRvfR.js";import"./axisSelectors-BVWqqaIl.js";import"./polarAxisSelectors-DNTU8wxf.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CACIKaWJ.js";import"./index-DdyQ4Lu6.js";import"./index-C8EE5WMp.js";import"./renderedTicksSlice-cMVgg74g.js";import"./index-OleNvKsM.js";import"./fillDefinitions-C4gnViBV.js";import"./CartesianChart-BNpv4aK0.js";import"./ZIndexPortal-Gym7d-4C.js";import"./CategoricalChart-D3zd10d6.js";import"./Layer-0vZKA5Ep.js";import"./Curve-DnME_alY.js";import"./types-CuvQqVdH.js";import"./step-DRkdD1F5.js";import"./path-DyVhHtw_.js";import"./LabelList-CdZv6dYa.js";import"./Label-CjMpSSpc.js";import"./Text-Dh3TMTW4.js";import"./DOMUtils-DYnHuNon.js";import"./ZIndexLayer-C5-QklmA.js";import"./ActivePoints-MPkH3V4_.js";import"./Dot-BLQG3Xnr.js";import"./activeStyles-BwY0V3hq.js";import"./useAnimationId-De32QbAN.js";import"./dataEntryStyles-CrqYJwRR.js";import"./Symbols-B3a4QAq0.js";import"./symbol-DEPa4V4_.js";import"./ErrorBarContext-BvGzHJmi.js";import"./SetGraphicalItem-DTg-QJxg.js";import"./getRadiusAndStrokeWidthFromDot-Bio62kDH.js";import"./ActiveShapeUtils-CnL30Scg.js";import"./useEffectiveDataKey-Bw1Ayo3J.js";import"./CartesianAxis-2YdOU3ps.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-D1SkD3Zy.js";import"./uniqBy-CXWSUzZM.js";import"./iteratee-BQECtUia.js";import"./isArguments-yB-y1yaH.js";import"./Cross-LpXEk-07.js";import"./Rectangle-BONo7sHl.js";import"./util-Dxo8gN5i.js";import"./Sector-DHvS94XI.js";const l=(...r)=>{const{x:e,y:c,stroke:y,payload:x}=r[0];return t.jsx("g",{transform:`translate(${e},${c})`,children:t.jsx("text",{x:0,y:0,dy:16,textAnchor:"end",fill:"#666",transform:"rotate(-35)",children:x.value})})};function h(r){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...p(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"getting-started",children:"Getting started"}),`
`,t.jsx(e.h2,{id:"choose-the-type-of-chart-you-need",children:"Choose the type of chart you need."}),`
`,t.jsx(e.p,{children:`With the help of babel-plugin-recharts, we can import components we actually need, making the project smaller than otherwise.
Generate a simple chart by using plain javascript data (usually an array of objects).`}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, ...];
`})}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`import { LineChart, Line } from 'recharts';
const renderLineChart = (
  <LineChart width={400} height={400} data={data}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
  </LineChart>
);
`})}),`
`,t.jsx(o,{width:400,height:400,data:n,children:t.jsx(a,{type:"monotone",dataKey:"uv",stroke:"#8884d8"})}),`
`,t.jsx(e.h2,{id:"add-components-that-you-want-to-be-drawn",children:"Add components that you want to be drawn"}),`
`,t.jsx(e.p,{children:"LineChart can have XAxis, YAxis, Legend, CartesianGrid and so on."}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
const renderLineChart = (
  <LineChart width={600} height={300} data={data}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="name" />
    <YAxis />
  </LineChart>
);
`})}),`
`,t.jsxs(o,{width:600,height:300,data:n,children:[t.jsx(a,{type:"monotone",dataKey:"uv",stroke:"#8884d8"}),t.jsx(i,{stroke:"#ccc"}),t.jsx(s,{dataKey:"name"}),t.jsx(d,{})]}),`
`,t.jsx(e.h2,{id:"adjust-the-props-of-some-components",children:"Adjust the props of some components"}),`
`,t.jsx(e.p,{children:"For example, margin-right should be bigger in order to display the right-most x-axis label and the stroke style of the cartesian grid can be dashed for better readability."}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
const renderLineChart = (
  <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="name" />
    <YAxis />
  </LineChart>
);
`})}),`
`,t.jsxs(o,{width:600,height:300,data:n,margin:{top:5,right:20,bottom:5,left:0},children:[t.jsx(a,{type:"monotone",dataKey:"uv",stroke:"#8884d8"}),t.jsx(i,{stroke:"#ccc",strokeDasharray:"5 5"}),t.jsx(s,{dataKey:"name"}),t.jsx(d,{})]}),`
`,t.jsx(e.h2,{id:"add-interactions",children:"Add interactions"}),`
`,t.jsx(e.p,{children:"We can easily drop-in a Tooltip component and have rich hovering tooltip functionality."}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
const renderLineChart = (
  <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
  </LineChart>
);
`})}),`
`,t.jsxs(o,{width:600,height:300,data:n,margin:{top:5,right:20,bottom:5,left:0},children:[t.jsx(a,{type:"monotone",dataKey:"uv",stroke:"#8884d8"}),t.jsx(i,{stroke:"#ccc",strokeDasharray:"5 5"}),t.jsx(s,{dataKey:"name"}),t.jsx(d,{}),t.jsx(m,{})]}),`
`,t.jsx(e.h2,{id:"customize-your-components",children:"Customize your components"}),`
`,t.jsx(e.p,{children:"For example, you can edit your x-axis label very easily by passing in a custom axis tick render function. You can do similar things with other graphs as well, such as custom shapes for bar charts and much more!"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`import React, { PureComponent } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const CustomizedAxisTick = (...args) => {
  const { x, y, stroke, payload } = args[0];
  return (
    <g transform={\`translate(\${x},\${y})\`}>
      <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-35)">
        {payload.value}
      </text>
    </g>
  );
};

const renderLineChart = (
  <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="name" tick={<CustomizedAxisTick />} />
    <YAxis />
    <Tooltip />
  </LineChart>
);
`})}),`
`,`
`,t.jsxs(o,{width:600,height:300,data:n,margin:{top:5,right:20,bottom:20,left:0},children:[t.jsx(a,{type:"monotone",dataKey:"uv",stroke:"#8884d8"}),t.jsx(i,{stroke:"#ccc",strokeDasharray:"5 5"}),t.jsx(s,{dataKey:"name",tick:t.jsx(l,{})}),t.jsx(d,{}),t.jsx(m,{})]})]})}function bt(r={}){const{wrapper:e}={...p(),...r.components};return e?t.jsx(e,{...r,children:t.jsx(h,{...r})}):h(r)}export{l as CustomizedAxisTick,bt as default};
