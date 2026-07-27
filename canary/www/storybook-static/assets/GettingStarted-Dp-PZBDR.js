import{u as c,j as t}from"./index-BAQ2Kd7D.js";import{p as r}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-Dfw9sDCN.js";import{L as o}from"./Line-DYmy7AmN.js";import{C as i}from"./CartesianGrid-BaDRxlr9.js";import{X as s}from"./XAxis-BUOjYmWG.js";import{Y as d}from"./YAxis-BsnlIXwv.js";import{T as m}from"./Tooltip-CfpuqfXQ.js";import"./iframe-C-jRtd4O.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CszU7DXa.js";import"./zIndexSlice-C13rA1yY.js";import"./throttle-t4hhNfzx.js";import"./index-JIvcUmdP.js";import"./index-yCZUjS0Z.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-hGxk2_Y7.js";import"./isWellBehavedNumber-BazoxJ8k.js";import"./PolarUtils-CTnnDHZv.js";import"./index-Cqo_qzOk.js";import"./index-CODjAUjN.js";import"./renderedTicksSlice--jA8UMed.js";import"./axisSelectors-CkStVnzz.js";import"./d3-scale-DJzOiobO.js";import"./CartesianChart-dpIhYASN.js";import"./chartDataContext-POKzhFjx.js";import"./CategoricalChart-DlYy8Ici.js";import"./Layer-0nVmjaPa.js";import"./Curve-BSXCagUH.js";import"./types-DJYeJibv.js";import"./step-BK85lAbe.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Dni8LwDO.js";import"./Label-ESmdcWMr.js";import"./Text-Bq6-_dbg.js";import"./DOMUtils-BNQTHuwM.js";import"./ZIndexLayer-BPTUfBlU.js";import"./useAnimationId-CyWcqLuD.js";import"./ActivePoints-B23Yd9jI.js";import"./Dot-DcnRANwh.js";import"./RegisterGraphicalItemId-fpfKicem.js";import"./ErrorBarContext-B9gJUi0L.js";import"./GraphicalItemClipPath-BbJiOV57.js";import"./SetGraphicalItem-DdFJ0gfA.js";import"./getRadiusAndStrokeWidthFromDot-DDj4ZBfK.js";import"./ActiveShapeUtils-DtJs66Wu.js";import"./RechartsThemeContext-D59rVGZ_.js";import"./CartesianAxis-Dovpw9_t.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./useElementOffset-ByJvEw10.js";import"./uniqBy-Cg8LBFHE.js";import"./iteratee-K_oW_REd.js";import"./Cross-CgOOj4td.js";import"./Rectangle-DsgzCHOI.js";import"./util-Dxo8gN5i.js";import"./Sector-Bgnqs9x5.js";const l=(...n)=>{const{x:e,y:p,stroke:y,payload:x}=n[0];return t.jsx("g",{transform:`translate(${e},${p})`,children:t.jsx("text",{x:0,y:0,dy:16,textAnchor:"end",fill:"#666",transform:"rotate(-35)",children:x.value})})};function h(n){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...c(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"getting-started",children:"Getting started"}),`
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
`,t.jsxs(a,{width:600,height:300,data:r,margin:{top:5,right:20,bottom:20,left:0},children:[t.jsx(o,{type:"monotone",dataKey:"uv",stroke:"#8884d8"}),t.jsx(i,{stroke:"#ccc",strokeDasharray:"5 5"}),t.jsx(s,{dataKey:"name",tick:t.jsx(l,{})}),t.jsx(d,{}),t.jsx(m,{})]})]})}function Ct(n={}){const{wrapper:e}={...c(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(h,{...n})}):h(n)}export{l as CustomizedAxisTick,Ct as default};
