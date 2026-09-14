import{u as p,j as t}from"./index-CIUD8qQ1.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-DEcOWSfs.js";import{L as o}from"./Line-B2_MzMwu.js";import{C as i}from"./CartesianGrid-D9ve2T0S.js";import{X as s}from"./XAxis-CrYBQ4mi.js";import{Y as d}from"./YAxis-DWY-SSge.js";import{T as m}from"./Tooltip-CAgdJnhO.js";import"./iframe-BWDwgK_D.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DvAFqpAd.js";import"./zIndexSlice-C1O5MBWY.js";import"./throttle-BcZmZghI.js";import"./index-B49xXNHt.js";import"./index-CCaysGPM.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Bp_p1EHk.js";import"./isWellBehavedNumber-WNu-UqrG.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-e9-Lmas5.js";import"./d3-scale-BpMJuDGQ.js";import"./index-kktikCBK.js";import"./index-DFG57tTU.js";import"./renderedTicksSlice-xUJav-aw.js";import"./index-y3EgPNWn.js";import"./CartesianChart-B6ulmZoL.js";import"./chartDataContext-D0xRn858.js";import"./CategoricalChart-D3lIPbNt.js";import"./Layer-DAcTuudf.js";import"./Curve-BJ0_3V4P.js";import"./types-loTHP4vv.js";import"./step-BAFgT2Gg.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BustB_TV.js";import"./Label-BKEGIlSz.js";import"./Text-BizBnj_T.js";import"./DOMUtils-iBBTwtfH.js";import"./useId-D1g06gFI.js";import"./useBackwardsCompatibleTheme-BYeMUCh_.js";import"./ZIndexLayer-DRdRjEOe.js";import"./useAnimationId-_CO00dkp.js";import"./ActivePoints-nPDtSH3W.js";import"./Dot-ClXgqV3o.js";import"./RegisterGraphicalItemId-DRBnYmKx.js";import"./ErrorBarContext-DvedyHFP.js";import"./GraphicalItemClipPath-BC50Hrc5.js";import"./SetGraphicalItem-CmL2KxpU.js";import"./getRadiusAndStrokeWidthFromDot-VGRijqjA.js";import"./ActiveShapeUtils-CRD4kYgV.js";import"./useGraphicalItemIdentity-D6QbUwzB.js";import"./CartesianAxis-CMJX9mZH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-mZsotMeL.js";import"./uniqBy-INJ-naV8.js";import"./iteratee-BX6Ptr7z.js";import"./Cross-BGQjXc8G.js";import"./Rectangle-CK5wd433.js";import"./util-Dxo8gN5i.js";import"./Sector-KrCJvFym.js";const l=(...r)=>{const{x:e,y:c,stroke:y,payload:x}=r[0];return t.jsx("g",{transform:`translate(${e},${c})`,children:t.jsx("text",{x:0,y:0,dy:16,textAnchor:"end",fill:"#666",transform:"rotate(-35)",children:x.value})})};function h(r){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...p(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"getting-started",children:"Getting started"}),`
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
`,t.jsxs(a,{width:600,height:300,data:n,margin:{top:5,right:20,bottom:20,left:0},children:[t.jsx(o,{type:"monotone",dataKey:"uv",stroke:"#8884d8"}),t.jsx(i,{stroke:"#ccc",strokeDasharray:"5 5"}),t.jsx(s,{dataKey:"name",tick:t.jsx(l,{})}),t.jsx(d,{}),t.jsx(m,{})]})]})}function kt(r={}){const{wrapper:e}={...p(),...r.components};return e?t.jsx(e,{...r,children:t.jsx(h,{...r})}):h(r)}export{l as CustomizedAxisTick,kt as default};
