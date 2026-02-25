import{j as t}from"./jsx-runtime-DdFXK-vo.js";import{useMDXComponents as c}from"./index-DbKI1S_U.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-DJi7Lm07.js";import{L as o}from"./Line-BMz_1-bi.js";import{C as i}from"./CartesianGrid-DEbxUIAb.js";import{X as s}from"./XAxis-BPbWU4yR.js";import{Y as d}from"./YAxis-DIarP6QG.js";import{T as m}from"./Tooltip-49ah_KvT.js";import"./iframe-DOwSMESw.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-ls6tVJyv.js";import"./arrayEqualityCheck-CX9-bfYH.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-ChqUwM3U.js";import"./immer-ZyDpTiiy.js";import"./PolarUtils-CTnnDHZv.js";import"./index-BBfb_97C.js";import"./hooks-xQD_-akz.js";import"./axisSelectors-BKSMdbwV.js";import"./d3-scale-D4rgCaup.js";import"./zIndexSlice-DitFxlYL.js";import"./renderedTicksSlice-B9YC84oJ.js";import"./CartesianChart-DFwJmcFp.js";import"./chartDataContext-CzK82F7Z.js";import"./CategoricalChart-CxUtgmSG.js";import"./Layer-Dw0puBgf.js";import"./ReactUtils-D4p-v0tr.js";import"./Label-CGJJW7mt.js";import"./Text-DHnTXj9j.js";import"./DOMUtils-DbGofJNd.js";import"./ZIndexLayer-Dk3cu7q_.js";import"./ActivePoints-Bwmmy_Xm.js";import"./Dot-aBSUYWpk.js";import"./types-BVuvkN0T.js";import"./RegisterGraphicalItemId-BYUuyceh.js";import"./ErrorBarContext-CtE8_zM3.js";import"./GraphicalItemClipPath-CYCx10_G.js";import"./SetGraphicalItem-CB9uDBjU.js";import"./useAnimationId-B99eNrnj.js";import"./getRadiusAndStrokeWidthFromDot-BkGX9HE7.js";import"./ActiveShapeUtils-C94C_QYl.js";import"./isPlainObject-sPJsBjkd.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CMknbwVL.js";import"./Trapezoid-AfdP-1uh.js";import"./Sector-BzLVEcjl.js";import"./Symbols-Vm2a1c-r.js";import"./symbol-5SXgtl89.js";import"./step-CPI5XPf7.js";import"./Curve-HyoTL5em.js";import"./CartesianAxis-BJnnwpTK.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-CFSq58AV.js";import"./uniqBy-ByHGQN-F.js";import"./iteratee-DHfnXdiR.js";import"./Cross-D1qFAUvf.js";const l=(...r)=>{const{x:e,y:p,stroke:y,payload:x}=r[0];return t.jsx("g",{transform:`translate(${e},${p})`,children:t.jsx("text",{x:0,y:0,dy:16,textAnchor:"end",fill:"#666",transform:"rotate(-35)",children:x.value})})};function h(r){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...c(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"getting-started",children:"Getting started"}),`
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
`,t.jsx(a,{width:400,height:400,data:n,children:t.jsx(o,{type:"monotone",dataKey:"uv",stroke:"#8884d8"})}),`
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
`,t.jsxs(a,{width:600,height:300,data:n,children:[t.jsx(o,{type:"monotone",dataKey:"uv",stroke:"#8884d8"}),t.jsx(i,{stroke:"#ccc"}),t.jsx(s,{dataKey:"name"}),t.jsx(d,{})]}),`
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
`,t.jsxs(a,{width:600,height:300,data:n,margin:{top:5,right:20,bottom:5,left:0},children:[t.jsx(o,{type:"monotone",dataKey:"uv",stroke:"#8884d8"}),t.jsx(i,{stroke:"#ccc",strokeDasharray:"5 5"}),t.jsx(s,{dataKey:"name"}),t.jsx(d,{})]}),`
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
`,t.jsxs(a,{width:600,height:300,data:n,margin:{top:5,right:20,bottom:5,left:0},children:[t.jsx(o,{type:"monotone",dataKey:"uv",stroke:"#8884d8"}),t.jsx(i,{stroke:"#ccc",strokeDasharray:"5 5"}),t.jsx(s,{dataKey:"name"}),t.jsx(d,{}),t.jsx(m,{})]}),`
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
`,t.jsxs(a,{width:600,height:300,data:n,margin:{top:5,right:20,bottom:20,left:0},children:[t.jsx(o,{type:"monotone",dataKey:"uv",stroke:"#8884d8"}),t.jsx(i,{stroke:"#ccc",strokeDasharray:"5 5"}),t.jsx(s,{dataKey:"name",tick:t.jsx(l,{})}),t.jsx(d,{}),t.jsx(m,{})]})]})}function Ct(r={}){const{wrapper:e}={...c(),...r.components};return e?t.jsx(e,{...r,children:t.jsx(h,{...r})}):h(r)}export{l as CustomizedAxisTick,Ct as default};
