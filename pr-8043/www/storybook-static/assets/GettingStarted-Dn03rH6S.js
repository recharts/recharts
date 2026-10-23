import{u as p,j as t}from"./index-CoStxyW2.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as o}from"./LineChart-Bq_YSFxe.js";import{L as a}from"./Line-jTAj4npb.js";import{C as i}from"./CartesianGrid-S_RK1IMs.js";import{X as s}from"./XAxis-CAekIzf1.js";import{Y as d}from"./YAxis-BP1gJNh-.js";import{T as m}from"./Tooltip-hoRkM0Mq.js";import"./iframe-prTVX46R.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D3mCvzlT.js";import"./zIndexSlice-BBM3QNxr.js";import"./throttle-DvEGNDvN.js";import"./index-DxBxvBWq.js";import"./index-Bh60i1A4.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CgD2AS6S.js";import"./isWellBehavedNumber-sGfX6V07.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-C2RKwHTh.js";import"./d3-scale-CFQbB9BF.js";import"./index-BB-SpmyJ.js";import"./index-DnW1VngH.js";import"./renderedTicksSlice-iUiCR_an.js";import"./index-BQtEBMtF.js";import"./CartesianChart-D5BTPRp4.js";import"./chartDataContext-C7eScBxX.js";import"./CategoricalChart-DhkwWrJ_.js";import"./Layer-1a5Zn_r7.js";import"./Curve-CuhJA6qj.js";import"./types-D57XnYuF.js";import"./step-DkGj8L15.js";import"./path-DyVhHtw_.js";import"./activeStyles-DLUKuBq3.js";import"./Label-CVltcmCw.js";import"./Text-DjfbNrah.js";import"./pageBackground-DWO83YrS.js";import"./useId-ClNpWPkJ.js";import"./useBackwardsCompatibleTheme-CSXD7-a6.js";import"./ZIndexLayer-BUy73e0U.js";import"./dataEntryStyles-D6au6UrY.js";import"./useAnimationId-BWMAKk3V.js";import"./ActivePoints-BByUh20Z.js";import"./Dot-B6R-m7zq.js";import"./RegisterGraphicalItemId-Cwh2uO7M.js";import"./ErrorBarContext-Bm4lfbUj.js";import"./GraphicalItemClipPath-BBiEKuCI.js";import"./SetGraphicalItem-FbCkTx_q.js";import"./getRadiusAndStrokeWidthFromDot-GrV3uc-f.js";import"./ActiveShapeUtils-CXxeeNqe.js";import"./useEffectiveDataKey-Byody78s.js";import"./CartesianAxis-vl41q2bl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-BcZCpHmW.js";import"./uniqBy-GbBgnUco.js";import"./iteratee-CH0cPLcN.js";import"./isArguments-yB-y1yaH.js";import"./Cross-DSI7tRai.js";import"./Rectangle-3LSQXoSu.js";import"./util-Dxo8gN5i.js";import"./Sector-DsyWTF3x.js";const l=(...r)=>{const{x:e,y:c,stroke:y,payload:x}=r[0];return t.jsx("g",{transform:`translate(${e},${c})`,children:t.jsx("text",{x:0,y:0,dy:16,textAnchor:"end",fill:"#666",transform:"rotate(-35)",children:x.value})})};function h(r){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...p(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"getting-started",children:"Getting started"}),`
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
