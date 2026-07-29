import{i as e}from"./preload-helper-BdFrVu1K.js";import{A as t,B as n,Q as r,R as i,Rt as a,X as o,t as s}from"./iframe-BqVvK_R4.js";import{a as c,t as l}from"./jsx-runtime-BenY-SQ9.js";import{t as u}from"./mdx-react-shim-6gHMkx1M.js";import{r as d,t as f}from"./Page-C0w_0_Yr.js";function p(e){let s={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...c(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(s.h1,{id:`getting-started`,children:`Getting started`}),`
`,(0,h.jsx)(s.h2,{id:`choose-the-type-of-chart-you-need`,children:`Choose the type of chart you need.`}),`
`,(0,h.jsx)(s.p,{children:`With the help of babel-plugin-recharts, we can import components we actually need, making the project smaller than otherwise.
Generate a simple chart by using plain javascript data (usually an array of objects).`}),`
`,(0,h.jsx)(s.pre,{children:(0,h.jsx)(s.code,{className:`language-tsx`,children:`const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, ...];
`})}),`
`,(0,h.jsx)(s.pre,{children:(0,h.jsx)(s.code,{className:`language-tsx`,children:`import { LineChart, Line } from 'recharts';
const renderLineChart = (
  <LineChart width={400} height={400} data={data}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
  </LineChart>
);
`})}),`
`,(0,h.jsx)(t,{width:400,height:400,data:d,children:(0,h.jsx)(o,{type:`monotone`,dataKey:`uv`,stroke:`#8884d8`})}),`
`,(0,h.jsx)(s.h2,{id:`add-components-that-you-want-to-be-drawn`,children:`Add components that you want to be drawn`}),`
`,(0,h.jsx)(s.p,{children:`LineChart can have XAxis, YAxis, Legend, CartesianGrid and so on.`}),`
`,(0,h.jsx)(s.pre,{children:(0,h.jsx)(s.code,{className:`language-tsx`,children:`import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
const renderLineChart = (
  <LineChart width={600} height={300} data={data}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="name" />
    <YAxis />
  </LineChart>
);
`})}),`
`,(0,h.jsxs)(t,{width:600,height:300,data:d,children:[(0,h.jsx)(o,{type:`monotone`,dataKey:`uv`,stroke:`#8884d8`}),(0,h.jsx)(r,{stroke:`#ccc`}),(0,h.jsx)(n,{dataKey:`name`}),(0,h.jsx)(i,{})]}),`
`,(0,h.jsx)(s.h2,{id:`adjust-the-props-of-some-components`,children:`Adjust the props of some components`}),`
`,(0,h.jsx)(s.p,{children:`For example, margin-right should be bigger in order to display the right-most x-axis label and the stroke style of the cartesian grid can be dashed for better readability.`}),`
`,(0,h.jsx)(s.pre,{children:(0,h.jsx)(s.code,{className:`language-tsx`,children:`import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
const renderLineChart = (
  <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="name" />
    <YAxis />
  </LineChart>
);
`})}),`
`,(0,h.jsxs)(t,{width:600,height:300,data:d,margin:{top:5,right:20,bottom:5,left:0},children:[(0,h.jsx)(o,{type:`monotone`,dataKey:`uv`,stroke:`#8884d8`}),(0,h.jsx)(r,{stroke:`#ccc`,strokeDasharray:`5 5`}),(0,h.jsx)(n,{dataKey:`name`}),(0,h.jsx)(i,{})]}),`
`,(0,h.jsx)(s.h2,{id:`add-interactions`,children:`Add interactions`}),`
`,(0,h.jsx)(s.p,{children:`We can easily drop-in a Tooltip component and have rich hovering tooltip functionality.`}),`
`,(0,h.jsx)(s.pre,{children:(0,h.jsx)(s.code,{className:`language-tsx`,children:`import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
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
`,(0,h.jsxs)(t,{width:600,height:300,data:d,margin:{top:5,right:20,bottom:5,left:0},children:[(0,h.jsx)(o,{type:`monotone`,dataKey:`uv`,stroke:`#8884d8`}),(0,h.jsx)(r,{stroke:`#ccc`,strokeDasharray:`5 5`}),(0,h.jsx)(n,{dataKey:`name`}),(0,h.jsx)(i,{}),(0,h.jsx)(a,{})]}),`
`,(0,h.jsx)(s.h2,{id:`customize-your-components`,children:`Customize your components`}),`
`,(0,h.jsx)(s.p,{children:`For example, you can edit your x-axis label very easily by passing in a custom axis tick render function. You can do similar things with other graphs as well, such as custom shapes for bar charts and much more!`}),`
`,(0,h.jsx)(s.pre,{children:(0,h.jsx)(s.code,{className:`language-tsx`,children:`import React, { PureComponent } from 'react';
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
`,(0,h.jsxs)(t,{width:600,height:300,data:d,margin:{top:5,right:20,bottom:20,left:0},children:[(0,h.jsx)(o,{type:`monotone`,dataKey:`uv`,stroke:`#8884d8`}),(0,h.jsx)(r,{stroke:`#ccc`,strokeDasharray:`5 5`}),(0,h.jsx)(n,{dataKey:`name`,tick:(0,h.jsx)(g,{})}),(0,h.jsx)(i,{}),(0,h.jsx)(a,{})]})]})}function m(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h,g;e((()=>{h=l(),u(),f(),s(),g=(...e)=>{let{x:t,y:n,stroke:r,payload:i}=e[0];return(0,h.jsx)(`g`,{transform:`translate(${t},${n})`,children:(0,h.jsx)(`text`,{x:0,y:0,dy:16,textAnchor:`end`,fill:`#666`,transform:`rotate(-35)`,children:i.value})})}}))();export{g as CustomizedAxisTick,m as default};