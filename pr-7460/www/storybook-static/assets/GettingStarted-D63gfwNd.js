import{u as c,j as t}from"./index-B0zLI2_U.js";import{p as r}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-BBsJQSYM.js";import{L as o}from"./Line-Qtz2YiMf.js";import{C as i}from"./CartesianGrid-D591BjHP.js";import{X as s}from"./XAxis-DyE7q0u7.js";import{Y as d}from"./YAxis-DYYvtRQh.js";import{T as m}from"./Tooltip-CPyECygK.js";import"./iframe-BaPbaLaJ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-j68O-sFh.js";import"./zIndexSlice-Ct9oD4yM.js";import"./immer-DiDZ85-K.js";import"./index-8NR0Yac6.js";import"./index-uHodW5ti.js";import"./get-D2ZTbC0U.js";import"./resolveDefaultProps-B9a4hmwF.js";import"./isWellBehavedNumber-Cw93K2XK.js";import"./PolarUtils-CTnnDHZv.js";import"./index-DbNPAuc7.js";import"./index-C-SXM_61.js";import"./renderedTicksSlice-C6EU1Gxc.js";import"./axisSelectors-Csn4G978.js";import"./d3-scale-njnUDxXP.js";import"./string-B6fdYHAA.js";import"./CartesianChart-FGH_s-P1.js";import"./chartDataContext-BKJVmU0E.js";import"./CategoricalChart-D9BrBGmX.js";import"./Layer-DnTHWC2s.js";import"./Curve-Upd9kr-b.js";import"./types-Bxe0zMe1.js";import"./step-Dmz9aP0W.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BRL6-mrZ.js";import"./Label-nvXx3zPl.js";import"./Text-gi3hDHLU.js";import"./DOMUtils-N0jxLcJa.js";import"./ZIndexLayer-Cmf1UnqU.js";import"./useAnimationId-BlKkbeMI.js";import"./ActivePoints-DjBhRx8i.js";import"./Dot-C2L5-Wjg.js";import"./RegisterGraphicalItemId-C1UHdJ8R.js";import"./ErrorBarContext-D5Gab5oy.js";import"./GraphicalItemClipPath-DrUrL8JH.js";import"./SetGraphicalItem-D7ChpxF2.js";import"./getRadiusAndStrokeWidthFromDot-CwJ3_b_N.js";import"./ActiveShapeUtils-BKxrj1Kx.js";import"./CartesianAxis-C9WUsr8e.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./useElementOffset-BiSEPHYV.js";import"./uniqBy-CEb4341A.js";import"./iteratee-DHRfW3v4.js";import"./Cross-BvxMZ5D8.js";import"./Rectangle-ClzNIlMR.js";import"./Sector-BAoP8TPe.js";const l=(...n)=>{const{x:e,y:p,stroke:y,payload:x}=n[0];return t.jsx("g",{transform:`translate(${e},${p})`,children:t.jsx("text",{x:0,y:0,dy:16,textAnchor:"end",fill:"#666",transform:"rotate(-35)",children:x.value})})};function h(n){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...c(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"getting-started",children:"Getting started"}),`
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
