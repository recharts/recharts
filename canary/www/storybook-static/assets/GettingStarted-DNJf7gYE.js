import{u as p,j as t}from"./index-CbZLzqQV.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as o}from"./LineChart-C5ysMJ7q.js";import{L as a}from"./Line-CrvG0Qpi.js";import{C as i}from"./CartesianGrid-CylaqNlF.js";import{X as s}from"./XAxis-CJ__L0zP.js";import{Y as d}from"./YAxis-C-Z0y3eM.js";import{T as m}from"./Tooltip-C4OGC2Mk.js";import"./iframe-Bq5XC69E.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-bjxa_6pD.js";import"./zIndexSlice-CH_ot-kn.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DoKMFVBl.js";import"./throttle-Ct-rPSxx.js";import"./index-DLG40tqd.js";import"./index-C2BKaTPh.js";import"./axisSelectors-BOZBH3Nn.js";import"./polarAxisSelectors-CEQjO6UJ.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-MB7Peh3q.js";import"./index-C-17JylX.js";import"./index-3Uw_iAKp.js";import"./renderedTicksSlice-BwIYCUgi.js";import"./index-DzbJHNcA.js";import"./fillDefinitions-Dhgql6la.js";import"./CartesianChart-moaB2ENx.js";import"./ZIndexPortal-D4Ob-hnX.js";import"./CategoricalChart-mibAt8bj.js";import"./Layer-Cnu5LwAi.js";import"./Curve-BJhBX3YD.js";import"./types-L3YuI5Vg.js";import"./step-CitgC7Ni.js";import"./path-DyVhHtw_.js";import"./LabelList-0FCseyju.js";import"./Label-CGkLvakU.js";import"./Text-BD2GyaNh.js";import"./DOMUtils-DK-6QFhi.js";import"./ZIndexLayer-DBkhZGBE.js";import"./ActivePoints-BI0eNhe7.js";import"./Dot-DSeqyqR_.js";import"./activeStyles-BIBdu-Bw.js";import"./useAnimationId-DwGbNOL_.js";import"./dataEntryStyles-DVS0RaWt.js";import"./Symbols-Cive21Dh.js";import"./symbol-BHxgCtzG.js";import"./ErrorBarContext-JgTKdwbz.js";import"./SetGraphicalItem-D8FNyAZb.js";import"./getRadiusAndStrokeWidthFromDot-BSwjIQeh.js";import"./ActiveShapeUtils-Gk8oTWam.js";import"./useEffectiveDataKey-DNNImqCq.js";import"./CartesianAxis-D7JxrcAJ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-6RktWzhj.js";import"./uniqBy-DcVUePGP.js";import"./iteratee-D8dB9Iuu.js";import"./isArguments-yB-y1yaH.js";import"./Cross-D0OQFgX7.js";import"./Rectangle-CdaMHBMZ.js";import"./util-Dxo8gN5i.js";import"./Sector-DAsJNitE.js";const l=(...r)=>{const{x:e,y:c,stroke:y,payload:x}=r[0];return t.jsx("g",{transform:`translate(${e},${c})`,children:t.jsx("text",{x:0,y:0,dy:16,textAnchor:"end",fill:"#666",transform:"rotate(-35)",children:x.value})})};function h(r){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...p(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"getting-started",children:"Getting started"}),`
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
