import{u as c,j as t}from"./index-DyhV_NBQ.js";import{p as r}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-BUiD6lRJ.js";import{L as o}from"./Line--rEciFbL.js";import{C as i}from"./CartesianGrid-ByMgXI7P.js";import{X as s}from"./XAxis-aLbTU0vL.js";import{Y as d}from"./YAxis-BZ7igdn9.js";import{T as m}from"./Tooltip-C5co7ZAz.js";import"./iframe-B9NgERoL.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BIufO86S.js";import"./zIndexSlice-CeMrsmMa.js";import"./throttle-DaANxDja.js";import"./index-1yiXAU6d.js";import"./index-U01BUWsX.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Dx164Y1F.js";import"./isWellBehavedNumber-bmfh_B4y.js";import"./PolarUtils-CTnnDHZv.js";import"./index-IJSHzaJE.js";import"./index-D4sqhJ-M.js";import"./renderedTicksSlice-Cqze-A-7.js";import"./axisSelectors-Cp9fRWWc.js";import"./d3-scale-CeApqfqF.js";import"./CartesianChart-D1OHX_Vn.js";import"./chartDataContext-MrXPhuTJ.js";import"./CategoricalChart-BaN3vUEH.js";import"./Layer-C_3qb5EZ.js";import"./Curve-VzKcWA61.js";import"./types-fCUwHeLW.js";import"./step-D7ajG_sH.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-C-FRFA-Z.js";import"./Label-D0wu2lTJ.js";import"./Text-ouhTNjrK.js";import"./DOMUtils-BpJWFEfX.js";import"./ZIndexLayer-B-abFFm7.js";import"./useAnimationId-Dul1SXp-.js";import"./ActivePoints-CC4YCm4F.js";import"./Dot-CinH8xYi.js";import"./RegisterGraphicalItemId-DqMxb_Dg.js";import"./ErrorBarContext-Dl5oIQ1g.js";import"./GraphicalItemClipPath-BesQYa1_.js";import"./SetGraphicalItem-KoMfzPcE.js";import"./getRadiusAndStrokeWidthFromDot-CFmXYxCt.js";import"./ActiveShapeUtils-CBSWPzIX.js";import"./CartesianAxis-CU4wTzgV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./useElementOffset-DIAEj78D.js";import"./uniqBy-par6alwm.js";import"./iteratee-zl5NzN92.js";import"./Cross-Bl5UJ-0f.js";import"./Rectangle-jixavVBj.js";import"./util-Dxo8gN5i.js";import"./Sector-BMaFtHt3.js";const l=(...n)=>{const{x:e,y:p,stroke:y,payload:x}=n[0];return t.jsx("g",{transform:`translate(${e},${p})`,children:t.jsx("text",{x:0,y:0,dy:16,textAnchor:"end",fill:"#666",transform:"rotate(-35)",children:x.value})})};function h(n){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...c(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"getting-started",children:"Getting started"}),`
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
`,t.jsxs(a,{width:600,height:300,data:r,margin:{top:5,right:20,bottom:20,left:0},children:[t.jsx(o,{type:"monotone",dataKey:"uv",stroke:"#8884d8"}),t.jsx(i,{stroke:"#ccc",strokeDasharray:"5 5"}),t.jsx(s,{dataKey:"name",tick:t.jsx(l,{})}),t.jsx(d,{}),t.jsx(m,{})]})]})}function ut(n={}){const{wrapper:e}={...c(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(h,{...n})}):h(n)}export{l as CustomizedAxisTick,ut as default};
