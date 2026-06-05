import{u as c,j as t}from"./index-Dy9JT2Hm.js";import{p as r}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-ClOyCldg.js";import{L as o}from"./Line-Bi2pbqFq.js";import{C as i}from"./CartesianGrid-B491ywc-.js";import{X as s}from"./XAxis-tstPVLiw.js";import{Y as d}from"./YAxis-BMejmk_u.js";import{T as m}from"./Tooltip-Di0nKIFE.js";import"./iframe-BXeHtRRc.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BlW5dnlL.js";import"./zIndexSlice-cE44OqOD.js";import"./immer-DNshJjPH.js";import"./index-DvJ-fn_5.js";import"./index-B4hVWkse.js";import"./get-CJL6L62i.js";import"./resolveDefaultProps-C9hL96mo.js";import"./isWellBehavedNumber-D2wsJvGw.js";import"./PolarUtils-CTnnDHZv.js";import"./index-BDGfSbM8.js";import"./index-Ovc1MJjY.js";import"./renderedTicksSlice-Bxd2HCuP.js";import"./axisSelectors-DwMRPNyX.js";import"./d3-scale-D1ymsn93.js";import"./string-B6fdYHAA.js";import"./CartesianChart-CfUKecxL.js";import"./chartDataContext-Cl-sRnxe.js";import"./CategoricalChart-Dcf-SEqg.js";import"./Layer-G87RycP8.js";import"./Curve-DVgI-4Ur.js";import"./types-DFlY2any.js";import"./step-CWqUN4bQ.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Cld-WhT6.js";import"./Label-CmgKG_wT.js";import"./Text-CgCa4wia.js";import"./DOMUtils-Bki5Qsqq.js";import"./ZIndexLayer-CdPLtMFq.js";import"./useAnimationId-DKoglaf7.js";import"./ActivePoints-BIzkJXPu.js";import"./Dot-BuBaCmSt.js";import"./RegisterGraphicalItemId-CoToPco7.js";import"./ErrorBarContext-BsZ2YOp7.js";import"./GraphicalItemClipPath-Behn_RHh.js";import"./SetGraphicalItem-DrQ2NJnA.js";import"./getRadiusAndStrokeWidthFromDot-BwFthNRz.js";import"./ActiveShapeUtils-BHpJL8IG.js";import"./CartesianAxis-DlPp-Ttd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./useElementOffset-D1DpNGPa.js";import"./uniqBy-CZHTY20m.js";import"./iteratee-BSnhLzO_.js";import"./Cross-Ds8fiepC.js";import"./Rectangle-BLmys3HY.js";import"./Sector-V3leyB8_.js";const l=(...n)=>{const{x:e,y:p,stroke:y,payload:x}=n[0];return t.jsx("g",{transform:`translate(${e},${p})`,children:t.jsx("text",{x:0,y:0,dy:16,textAnchor:"end",fill:"#666",transform:"rotate(-35)",children:x.value})})};function h(n){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...c(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"getting-started",children:"Getting started"}),`
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
`,t.jsx(a,{width:400,height:400,data:r,children:t.jsx(o,{type:"monotone",dataKey:"uv",stroke:"#8884d8"})}),`
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
`,t.jsxs(a,{width:600,height:300,data:r,children:[t.jsx(o,{type:"monotone",dataKey:"uv",stroke:"#8884d8"}),t.jsx(i,{stroke:"#ccc"}),t.jsx(s,{dataKey:"name"}),t.jsx(d,{})]}),`
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
`,t.jsxs(a,{width:600,height:300,data:r,margin:{top:5,right:20,bottom:5,left:0},children:[t.jsx(o,{type:"monotone",dataKey:"uv",stroke:"#8884d8"}),t.jsx(i,{stroke:"#ccc",strokeDasharray:"5 5"}),t.jsx(s,{dataKey:"name"}),t.jsx(d,{})]}),`
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
`,t.jsxs(a,{width:600,height:300,data:r,margin:{top:5,right:20,bottom:5,left:0},children:[t.jsx(o,{type:"monotone",dataKey:"uv",stroke:"#8884d8"}),t.jsx(i,{stroke:"#ccc",strokeDasharray:"5 5"}),t.jsx(s,{dataKey:"name"}),t.jsx(d,{}),t.jsx(m,{})]}),`
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
`,t.jsxs(a,{width:600,height:300,data:r,margin:{top:5,right:20,bottom:20,left:0},children:[t.jsx(o,{type:"monotone",dataKey:"uv",stroke:"#8884d8"}),t.jsx(i,{stroke:"#ccc",strokeDasharray:"5 5"}),t.jsx(s,{dataKey:"name",tick:t.jsx(l,{})}),t.jsx(d,{}),t.jsx(m,{})]})]})}function gt(n={}){const{wrapper:e}={...c(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(h,{...n})}):h(n)}export{l as CustomizedAxisTick,gt as default};
