import{j as t}from"./jsx-runtime-C4eRHZxG.js";import{useMDXComponents as c}from"./index-az-eWcnq.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-ByBV-nct.js";import{L as o}from"./Line-GBkSu3V2.js";import{C as i}from"./CartesianGrid-wjb1mDcc.js";import{X as s}from"./XAxis-Djz3Z4bE.js";import{Y as d}from"./YAxis-Bi10WgdJ.js";import{T as m}from"./Tooltip-CwOLT_hR.js";import"./iframe-D5au-B4R.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B2p68SqA.js";import"./arrayEqualityCheck-DjoT1CkP.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DoxDJzak.js";import"./immer-Uxla1AdH.js";import"./PolarUtils-CTnnDHZv.js";import"./index-CqclXjSb.js";import"./hooks-CjYYqk-o.js";import"./axisSelectors-CPPpM5-p.js";import"./d3-scale-DAtNW_dV.js";import"./zIndexSlice-Dfjz8HwK.js";import"./renderedTicksSlice-NNQLBsMs.js";import"./CartesianChart-B5W05POX.js";import"./chartDataContext-CVbY0bI2.js";import"./CategoricalChart-CjFfaA5A.js";import"./Layer-N2rtvF3c.js";import"./ReactUtils-BP9EaRxl.js";import"./Label-CgqPFnns.js";import"./Text-CodnAT-D.js";import"./DOMUtils-CCC5iRCA.js";import"./ZIndexLayer-D3P9nzyJ.js";import"./ActivePoints-BozXtQ62.js";import"./Dot-DOxQIUAd.js";import"./types-C71ySwku.js";import"./RegisterGraphicalItemId-wh7gYtX8.js";import"./ErrorBarContext-BKfr8U3o.js";import"./GraphicalItemClipPath-BSyS1Brn.js";import"./SetGraphicalItem-BsfuYCoV.js";import"./useAnimationId-B8Se4RD-.js";import"./getRadiusAndStrokeWidthFromDot-sXJnO0M5.js";import"./ActiveShapeUtils-XCFf1hjH.js";import"./isPlainObject-c9Qdn0OS.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dfyov816.js";import"./Trapezoid-CE1-MrL0.js";import"./Sector-JrfJaAcz.js";import"./Symbols-DA9it_1u.js";import"./symbol-DYMTv-17.js";import"./step-BXVfDqRU.js";import"./Curve-Cud4Oq3s.js";import"./CartesianAxis-fQqkoIc6.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-ONaxsyYW.js";import"./uniqBy-Dx3xi0zM.js";import"./iteratee-BP3T-uwN.js";import"./Cross-BXaG_z2s.js";const l=(...r)=>{const{x:e,y:p,stroke:y,payload:x}=r[0];return t.jsx("g",{transform:`translate(${e},${p})`,children:t.jsx("text",{x:0,y:0,dy:16,textAnchor:"end",fill:"#666",transform:"rotate(-35)",children:x.value})})};function h(r){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...c(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"getting-started",children:"Getting started"}),`
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
`,t.jsx(a,{width:400,height:400,data:n,children:t.jsx(o,{type:"monotone",dataKey:"uv",stroke:"#8884d8"})}),`
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
`,t.jsxs(a,{width:600,height:300,data:n,children:[t.jsx(o,{type:"monotone",dataKey:"uv",stroke:"#8884d8"}),t.jsx(i,{stroke:"#ccc"}),t.jsx(s,{dataKey:"name"}),t.jsx(d,{})]}),`
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
`,t.jsxs(a,{width:600,height:300,data:n,margin:{top:5,right:20,bottom:5,left:0},children:[t.jsx(o,{type:"monotone",dataKey:"uv",stroke:"#8884d8"}),t.jsx(i,{stroke:"#ccc",strokeDasharray:"5 5"}),t.jsx(s,{dataKey:"name"}),t.jsx(d,{})]}),`
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
`,t.jsxs(a,{width:600,height:300,data:n,margin:{top:5,right:20,bottom:5,left:0},children:[t.jsx(o,{type:"monotone",dataKey:"uv",stroke:"#8884d8"}),t.jsx(i,{stroke:"#ccc",strokeDasharray:"5 5"}),t.jsx(s,{dataKey:"name"}),t.jsx(d,{}),t.jsx(m,{})]}),`
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
`,t.jsxs(a,{width:600,height:300,data:n,margin:{top:5,right:20,bottom:20,left:0},children:[t.jsx(o,{type:"monotone",dataKey:"uv",stroke:"#8884d8"}),t.jsx(i,{stroke:"#ccc",strokeDasharray:"5 5"}),t.jsx(s,{dataKey:"name",tick:t.jsx(l,{})}),t.jsx(d,{}),t.jsx(m,{})]})]})}function Ct(r={}){const{wrapper:e}={...c(),...r.components};return e?t.jsx(e,{...r,children:t.jsx(h,{...r})}):h(r)}export{l as CustomizedAxisTick,Ct as default};
