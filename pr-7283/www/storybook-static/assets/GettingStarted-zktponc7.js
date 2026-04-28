import{j as t}from"./jsx-runtime-Dt-SsG1Y.js";import{useMDXComponents as c}from"./index-BQsREKzk.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-pVi02pZg.js";import{L as o}from"./Line-DsGJIENB.js";import{C as i}from"./CartesianGrid-BhKPLH6E.js";import{X as s}from"./XAxis-Bv1vfoF0.js";import{Y as d}from"./YAxis-JfFUSobz.js";import{T as m}from"./Tooltip-Dfduu8ww.js";import"./iframe-Y_Pa4XUD.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C8CMlo1v.js";import"./arrayEqualityCheck-ufqgmavw.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B_hVYzQT.js";import"./immer-fIOXVJOd.js";import"./PolarUtils-CTnnDHZv.js";import"./index-BJNVUtSj.js";import"./hooks-CIr5CD4S.js";import"./axisSelectors-BmerCj2n.js";import"./d3-scale-ByVEmPR9.js";import"./zIndexSlice-CTCYCdxd.js";import"./renderedTicksSlice-CQWIZJ1K.js";import"./CartesianChart-Ds9j1WCi.js";import"./chartDataContext-DAoPlUXM.js";import"./CategoricalChart-C8vuTQEv.js";import"./Layer-Cvh40WqM.js";import"./ReactUtils-BE45q0BU.js";import"./Label-DoWUrSWO.js";import"./Text-mkkNE3Pk.js";import"./DOMUtils-DN2B9zoo.js";import"./ZIndexLayer-DHPXYj4K.js";import"./ActivePoints-_m6yHkUn.js";import"./Dot-C6EdxuDn.js";import"./types-CFzlQQ1s.js";import"./RegisterGraphicalItemId-BIRSR7Jx.js";import"./ErrorBarContext-Cb6v3AYw.js";import"./GraphicalItemClipPath-DMPCiQHF.js";import"./SetGraphicalItem-CCipA_FV.js";import"./useAnimationId-LxxsO2il.js";import"./getRadiusAndStrokeWidthFromDot-d_31bWzQ.js";import"./ActiveShapeUtils-DigOcqgk.js";import"./isPlainObject-CqaZa_wl.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BWx4TmVI.js";import"./Trapezoid-DRFbXSGQ.js";import"./Sector-NCqbNZMf.js";import"./Symbols-CsuZ3_sL.js";import"./symbol-DrAbyEPw.js";import"./step-B3cL9I-q.js";import"./Curve-BrfIxnDD.js";import"./CartesianAxis-DaCLeBFj.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-qP4fWKjW.js";import"./uniqBy-C7FokKvI.js";import"./iteratee-kOo85QIZ.js";import"./Cross-CoscppeN.js";const l=(...r)=>{const{x:e,y:p,stroke:y,payload:x}=r[0];return t.jsx("g",{transform:`translate(${e},${p})`,children:t.jsx("text",{x:0,y:0,dy:16,textAnchor:"end",fill:"#666",transform:"rotate(-35)",children:x.value})})};function h(r){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...c(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"getting-started",children:"Getting started"}),`
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
