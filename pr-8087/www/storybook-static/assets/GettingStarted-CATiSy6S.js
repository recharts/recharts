import{u as p,j as t}from"./index-D2kO2o1Y.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as o}from"./LineChart-DcjIzyNw.js";import{L as a}from"./Line-DO5n4YO0.js";import{C as i}from"./CartesianGrid-CsF-hHng.js";import{X as s}from"./XAxis-BatUM5pq.js";import{Y as d}from"./YAxis-_lbVlQrz.js";import{T as m}from"./Tooltip-CR34NQkj.js";import"./iframe-DqyoK0ud.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bv3_Hj5n.js";import"./zIndexSlice-BLzMP0pQ.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Ck8pmjzH.js";import"./throttle-Dn4JCjly.js";import"./index-BsuCzGf5.js";import"./index-CssgCrFq.js";import"./axisSelectors-CFa3shM-.js";import"./polarAxisSelectors-CBUZ9Z3j.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-oZSie1D-.js";import"./index-CtviIcDK.js";import"./index-BwS7ULIY.js";import"./renderedTicksSlice-DhCNe_6s.js";import"./index-wVxsoSnH.js";import"./CartesianChart-_Aa3OKSl.js";import"./chartDataContext-MbnhVXSW.js";import"./CategoricalChart-EiDYPGiV.js";import"./Layer-svnx0Bdz.js";import"./Curve-B4FKLROM.js";import"./types-DD3eyhWj.js";import"./step-DDV9RjiH.js";import"./path-DyVhHtw_.js";import"./activeStyles-D0nGCC2C.js";import"./Label-C_IP7EJJ.js";import"./Text-2V5_vcbB.js";import"./pageBackground-DCkPUiBo.js";import"./useId-DxxYvKaU.js";import"./ZIndexLayer-DDKk2bqL.js";import"./dataEntryStyles-sIqJlf-4.js";import"./useAnimationId-b5BOeEdT.js";import"./ActivePoints-B12yNU4r.js";import"./Dot-BOVBX4q2.js";import"./Symbols-CYwitPRM.js";import"./symbol-DWxTznCL.js";import"./RegisterGraphicalItemId-DywfiWqL.js";import"./ErrorBarContext-CHgLAGYu.js";import"./SetGraphicalItem-DDAjd9Yt.js";import"./getRadiusAndStrokeWidthFromDot-DMbsIH9n.js";import"./ActiveShapeUtils-HHjD57n-.js";import"./useEffectiveDataKey-D-FiIxk6.js";import"./CartesianAxis-MuFUII6s.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-C0YlHWpD.js";import"./uniqBy-CGKsPvnn.js";import"./iteratee-BKsZSq5H.js";import"./isArguments-yB-y1yaH.js";import"./Cross-DyA4am9f.js";import"./Rectangle-DW2Nkmcm.js";import"./util-Dxo8gN5i.js";import"./Sector-DX9pAAzL.js";const l=(...r)=>{const{x:e,y:c,stroke:y,payload:x}=r[0];return t.jsx("g",{transform:`translate(${e},${c})`,children:t.jsx("text",{x:0,y:0,dy:16,textAnchor:"end",fill:"#666",transform:"rotate(-35)",children:x.value})})};function h(r){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...p(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"getting-started",children:"Getting started"}),`
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
