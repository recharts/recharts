import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./Tooltip-tAkHHdqP.js";import{n as r,t as i}from"./CartesianGrid-DXJ2CyMi.js";import{n as a,t as o}from"./Line-CCKkHve0.js";import{n as s,t as c}from"./XAxis-B3WODRl4.js";import{n as l,t as u}from"./YAxis-CZypjyHs.js";import{n as d,t as f}from"./LineChart-BRH708ee.js";import{i as p,r as m,t as h}from"./jsx-runtime-5HYsnxpu.js";import{r as g,t as _}from"./Page-DUsfWi7y.js";function v(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...p(),...e.components};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(t.h1,{id:`getting-started`,children:`Getting started`}),`
`,(0,b.jsx)(t.h2,{id:`choose-the-type-of-chart-you-need`,children:`Choose the type of chart you need.`}),`
`,(0,b.jsx)(t.p,{children:`With the help of babel-plugin-recharts, we can import components we actually need, making the project smaller than otherwise.
Generate a simple chart by using plain javascript data (usually an array of objects).`}),`
`,(0,b.jsx)(t.pre,{children:(0,b.jsx)(t.code,{className:`language-tsx`,children:`const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, ...];
`})}),`
`,(0,b.jsx)(t.pre,{children:(0,b.jsx)(t.code,{className:`language-tsx`,children:`import { LineChart, Line } from 'recharts';
const renderLineChart = (
  <LineChart width={400} height={400} data={data}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
  </LineChart>
);
`})}),`
`,(0,b.jsx)(f,{width:400,height:400,data:g,children:(0,b.jsx)(o,{type:`monotone`,dataKey:`uv`,stroke:`#8884d8`})}),`
`,(0,b.jsx)(t.h2,{id:`add-components-that-you-want-to-be-drawn`,children:`Add components that you want to be drawn`}),`
`,(0,b.jsx)(t.p,{children:`LineChart can have XAxis, YAxis, Legend, CartesianGrid and so on.`}),`
`,(0,b.jsx)(t.pre,{children:(0,b.jsx)(t.code,{className:`language-tsx`,children:`import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
const renderLineChart = (
  <LineChart width={600} height={300} data={data}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="name" />
    <YAxis />
  </LineChart>
);
`})}),`
`,(0,b.jsxs)(f,{width:600,height:300,data:g,children:[(0,b.jsx)(o,{type:`monotone`,dataKey:`uv`,stroke:`#8884d8`}),(0,b.jsx)(i,{stroke:`#ccc`}),(0,b.jsx)(c,{dataKey:`name`}),(0,b.jsx)(u,{})]}),`
`,(0,b.jsx)(t.h2,{id:`adjust-the-props-of-some-components`,children:`Adjust the props of some components`}),`
`,(0,b.jsx)(t.p,{children:`For example, margin-right should be bigger in order to display the right-most x-axis label and the stroke style of the cartesian grid can be dashed for better readability.`}),`
`,(0,b.jsx)(t.pre,{children:(0,b.jsx)(t.code,{className:`language-tsx`,children:`import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
const renderLineChart = (
  <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="name" />
    <YAxis />
  </LineChart>
);
`})}),`
`,(0,b.jsxs)(f,{width:600,height:300,data:g,margin:{top:5,right:20,bottom:5,left:0},children:[(0,b.jsx)(o,{type:`monotone`,dataKey:`uv`,stroke:`#8884d8`}),(0,b.jsx)(i,{stroke:`#ccc`,strokeDasharray:`5 5`}),(0,b.jsx)(c,{dataKey:`name`}),(0,b.jsx)(u,{})]}),`
`,(0,b.jsx)(t.h2,{id:`add-interactions`,children:`Add interactions`}),`
`,(0,b.jsx)(t.p,{children:`We can easily drop-in a Tooltip component and have rich hovering tooltip functionality.`}),`
`,(0,b.jsx)(t.pre,{children:(0,b.jsx)(t.code,{className:`language-tsx`,children:`import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
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
`,(0,b.jsxs)(f,{width:600,height:300,data:g,margin:{top:5,right:20,bottom:5,left:0},children:[(0,b.jsx)(o,{type:`monotone`,dataKey:`uv`,stroke:`#8884d8`}),(0,b.jsx)(i,{stroke:`#ccc`,strokeDasharray:`5 5`}),(0,b.jsx)(c,{dataKey:`name`}),(0,b.jsx)(u,{}),(0,b.jsx)(n,{})]}),`
`,(0,b.jsx)(t.h2,{id:`customize-your-components`,children:`Customize your components`}),`
`,(0,b.jsx)(t.p,{children:`For example, you can edit your x-axis label very easily by passing in a custom axis tick render function. You can do similar things with other graphs as well, such as custom shapes for bar charts and much more!`}),`
`,(0,b.jsx)(t.pre,{children:(0,b.jsx)(t.code,{className:`language-tsx`,children:`import React, { PureComponent } from 'react';
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
`,(0,b.jsxs)(f,{width:600,height:300,data:g,margin:{top:5,right:20,bottom:20,left:0},children:[(0,b.jsx)(o,{type:`monotone`,dataKey:`uv`,stroke:`#8884d8`}),(0,b.jsx)(i,{stroke:`#ccc`,strokeDasharray:`5 5`}),(0,b.jsx)(c,{dataKey:`name`,tick:(0,b.jsx)(x,{})}),(0,b.jsx)(u,{}),(0,b.jsx)(n,{})]})]})}function y(e={}){let{wrapper:t}={...p(),...e.components};return t?(0,b.jsx)(t,{...e,children:(0,b.jsx)(v,{...e})}):v(e)}var b,x;function S(){return(S=e((()=>{b=h(),m(),_(),d(),a(),r(),s(),l(),t(),x=(...e)=>{let{x:t,y:n,stroke:r,payload:i}=e[0];return(0,b.jsx)(`g`,{transform:`translate(${t},${n})`,children:(0,b.jsx)(`text`,{x:0,y:0,dy:16,textAnchor:`end`,fill:`#666`,transform:`rotate(-35)`,children:i.value})})}})))()}S();export{x as CustomizedAxisTick,y as default};