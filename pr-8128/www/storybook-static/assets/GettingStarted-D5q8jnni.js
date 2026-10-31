import{u as p,j as t}from"./index-y3UzWpTg.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as o}from"./LineChart-C1bMhcCL.js";import{L as a}from"./Line-DsC7P6_G.js";import{C as i}from"./CartesianGrid-OVGlQqeu.js";import{X as s}from"./XAxis-BODArBrx.js";import{Y as d}from"./YAxis-8yYBvtiR.js";import{T as m}from"./Tooltip-D_m6xZp8.js";import"./iframe-BJZBYlXs.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-xMruxvG5.js";import"./zIndexSlice-4kzTBdEO.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DGRFLMT5.js";import"./throttle-m042I2dJ.js";import"./index-r1c9axOK.js";import"./index-YjQ_vGf6.js";import"./axisSelectors-fPyxXNp-.js";import"./polarAxisSelectors-BW13raLn.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-fXkyVTj6.js";import"./index-CLntLmjf.js";import"./index-CbX7_COp.js";import"./renderedTicksSlice-BfBzdz3z.js";import"./index-ztNxUc0B.js";import"./CartesianChart-8Ns5ZAmP.js";import"./ZIndexPortal-Dk8L0y9I.js";import"./CategoricalChart-CIocy3rX.js";import"./Layer-BiONajIB.js";import"./Curve-BZZJQhfg.js";import"./fillDefinitions-DzwllWHv.js";import"./pageBackground-OPtbMqw3.js";import"./themeFill-DO9vEba-.js";import"./types-BRBV9Zbz.js";import"./step-C9q08w-O.js";import"./path-DyVhHtw_.js";import"./LabelList-CjXuEtRO.js";import"./Label-BB8sjzzI.js";import"./Text-D_QESfNW.js";import"./DOMUtils-CSm0nbrI.js";import"./ZIndexLayer-9eIJN5cX.js";import"./ActivePoints-DOT1DbFw.js";import"./Dot-B7xctmF8.js";import"./activeStyles-CNDsNUTt.js";import"./useAnimationId-t_dEgl2e.js";import"./dataEntryStyles-O6Ub96yy.js";import"./Symbols-iu0turDo.js";import"./symbol-DqzbJzzt.js";import"./ErrorBarContext-B2TtUlqL.js";import"./SetGraphicalItem-N6zbMYsO.js";import"./getRadiusAndStrokeWidthFromDot-DjRQ5aRa.js";import"./ActiveShapeUtils-C_it4ZOO.js";import"./useEffectiveDataKey-BoPTmL0v.js";import"./CartesianAxis-DuzHYXrg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-7dnw2xrI.js";import"./uniqBy-C8XE-Jln.js";import"./iteratee-B-U3qR3F.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BSgYYV6b.js";import"./Rectangle-DcbqjYEw.js";import"./util-Dxo8gN5i.js";import"./Sector-Rmkv_xXG.js";const l=(...r)=>{const{x:e,y:c,stroke:y,payload:x}=r[0];return t.jsx("g",{transform:`translate(${e},${c})`,children:t.jsx("text",{x:0,y:0,dy:16,textAnchor:"end",fill:"#666",transform:"rotate(-35)",children:x.value})})};function h(r){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...p(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"getting-started",children:"Getting started"}),`
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
`,t.jsxs(o,{width:600,height:300,data:n,margin:{top:5,right:20,bottom:20,left:0},children:[t.jsx(a,{type:"monotone",dataKey:"uv",stroke:"#8884d8"}),t.jsx(i,{stroke:"#ccc",strokeDasharray:"5 5"}),t.jsx(s,{dataKey:"name",tick:t.jsx(l,{})}),t.jsx(d,{}),t.jsx(m,{})]})]})}function vt(r={}){const{wrapper:e}={...p(),...r.components};return e?t.jsx(e,{...r,children:t.jsx(h,{...r})}):h(r)}export{l as CustomizedAxisTick,vt as default};
