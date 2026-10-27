import{u as p,j as t}from"./index-N9zmfbRp.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as o}from"./LineChart-XFbEyWy3.js";import{L as a}from"./Line-Dr6pYibn.js";import{C as i}from"./CartesianGrid-Cfx84kn5.js";import{X as s}from"./XAxis-DgA8soXs.js";import{Y as d}from"./YAxis-BNLMUv-C.js";import{T as m}from"./Tooltip-DCcQpeDs.js";import"./iframe-C-1IryXX.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bb_GJAnC.js";import"./zIndexSlice-fsCRj6jn.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BhlxPQQ0.js";import"./throttle-_r7dS2f6.js";import"./index-D_guE_NV.js";import"./index-BpW2h4nW.js";import"./axisSelectors-DnbooZ92.js";import"./polarAxisSelectors-nNfiNjC3.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CK0ZBavL.js";import"./index-BM9qHJ3l.js";import"./index-CaHSXMyC.js";import"./renderedTicksSlice-B4PG9UaR.js";import"./index-BbeXMPlB.js";import"./CartesianChart-X1Ss8Xb_.js";import"./ZIndexPortal-D1pWS7G9.js";import"./CategoricalChart-CCP7izw9.js";import"./Layer-BY_4_n1M.js";import"./Curve-BZP4AtoJ.js";import"./types-Ca1J50vn.js";import"./step-D97QNVl7.js";import"./path-DyVhHtw_.js";import"./LabelList-BgJAhVhH.js";import"./Label-BTNrgHMM.js";import"./Text-bsivD33T.js";import"./pageBackground-BsKy__Zx.js";import"./ZIndexLayer-DcusPv6z.js";import"./dataEntryStyles-RoHSwMuf.js";import"./ActivePoints-Kxn86qrL.js";import"./Dot-DKVTZ3_d.js";import"./activeStyles-DZ3GRzLP.js";import"./useAnimationId-B4AGcQCE.js";import"./Symbols-DkSC4tBr.js";import"./symbol-D09AuR3g.js";import"./RegisterGraphicalItemId-BAsbW75f.js";import"./ErrorBarContext-CMFEKiC-.js";import"./SetGraphicalItem-DzD-3glG.js";import"./getRadiusAndStrokeWidthFromDot-CSG42cOl.js";import"./ActiveShapeUtils-B19_Z8K8.js";import"./useEffectiveDataKey-B3UErnsT.js";import"./CartesianAxis-Boy6gEfE.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-CiN9yCdN.js";import"./uniqBy-CJHXXqVq.js";import"./iteratee-02qgE8DQ.js";import"./isArguments-yB-y1yaH.js";import"./Cross-D-TYHapV.js";import"./Rectangle-BQECHtGD.js";import"./util-Dxo8gN5i.js";import"./Sector-Cq5EH9uE.js";const l=(...r)=>{const{x:e,y:c,stroke:y,payload:x}=r[0];return t.jsx("g",{transform:`translate(${e},${c})`,children:t.jsx("text",{x:0,y:0,dy:16,textAnchor:"end",fill:"#666",transform:"rotate(-35)",children:x.value})})};function h(r){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...p(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"getting-started",children:"Getting started"}),`
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
