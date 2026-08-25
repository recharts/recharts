import{u,j as t}from"./index-BjvznleJ.js";import{p as i}from"./Page-Cj8EiXz7.js";import{B as s}from"./BarChart-Bl5-1jfS.js";import{X as d}from"./XAxis-Cf0m1xXe.js";import{Y as l}from"./YAxis-ltpxfQ5a.js";import{B as h}from"./Bar-ur1LcZV2.js";import{T as m}from"./Tooltip-DlLeUOLM.js";import{C as p}from"./CartesianGrid-ur55bmy2.js";import{L as f}from"./Legend-no68ER2Z.js";import"./iframe-D6azDvqV.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CvaooULl.js";import"./zIndexSlice-CJI37Eji.js";import"./throttle-9sEg-owe.js";import"./index-De2T6Rdx.js";import"./index-CHbhJf8u.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-MMJ4Hspi.js";import"./isWellBehavedNumber-zgmweQfq.js";import"./PolarUtils-CTnnDHZv.js";import"./index-8WeBRwf8.js";import"./index-CdRGzAoJ.js";import"./axisSelectors-Cuma3wLU.js";import"./d3-scale-BukzO1yu.js";import"./renderedTicksSlice-CP9ELeUi.js";import"./CartesianChart-DKfnJK9b.js";import"./chartDataContext-E0nEwP5U.js";import"./CategoricalChart-BwNlWuS2.js";import"./CartesianAxis-CnIKHaJW.js";import"./Layer-Dd-QkUnw.js";import"./Text-7Emw6cxV.js";import"./DOMUtils-ChR8PpsJ.js";import"./useId-D_J3zHys.js";import"./useBackwardsCompatibleTheme-Btt6Zxb8.js";import"./Label-Bq-FSxS9.js";import"./ZIndexLayer-BMP0BbGV.js";import"./types-ArXcJt3v.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-CFHSF17T.js";import"./useAnimationId-B0HxjIs3.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D0LhkaJ7.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-nknSwnl4.js";import"./tooltipContext-BWhq59KA.js";import"./RegisterGraphicalItemId-utzXF_HC.js";import"./ErrorBarContext-CS85xpKd.js";import"./GraphicalItemClipPath-CEHJTCek.js";import"./SetGraphicalItem-CIh432wm.js";import"./getZIndexFromUnknown-CE3b063y.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-T55zgDEk.js";import"./useElementOffset-rfYS5NLv.js";import"./uniqBy-Bxq63F-T.js";import"./iteratee-CnoSjSAp.js";import"./Curve-BtvAXlb-.js";import"./step-BjTVn7hc.js";import"./path-DyVhHtw_.js";import"./Cross-CIiy--iG.js";import"./Sector-Ck0QgXZH.js";import"./Symbols-CJemDv7Y.js";import"./symbol-Dls1Vnw8.js";const b=a=>{if(a==="Page A")return"Page A is about mens clothing";if(a==="Page B")return"Page B is about womens dress";if(a==="Page C")return"Page C is about womens bag";if(a==="Page D")return"Page D is about household goods";if(a==="Page E")return"Page E is about food";if(a==="Page F")return"Page F is about baby food"},y=(a,e,r,n)=>`M${a},${e+n}
   C${a+r/3},${e+n} ${a+r/2},${e+n/3} ${a+r/2}, ${e}
   C${a+r/2},${e+n/3} ${a+2*r/3},${e+n} ${a+r}, ${e+n}
   Z`,x=(...a)=>{const{x:e,y:r,stroke:n,payload:o}=a[0];return t.jsx("g",{transform:`translate(${e},${r})`,children:t.jsx("text",{x:0,y:0,dy:16,textAnchor:"end",fill:"#666",transform:"rotate(-35)",children:o.value})})},j=({payload:a,x:e,y:r,width:n,height:o,value:c})=>t.jsx("text",{x:e+n/2,y:r,fill:"#666",textAnchor:"middle",dy:-6,children:`value: ${c}`}),C=({payload:a,label:e,active:r})=>r?t.jsxs("div",{className:"custom-tooltip",children:[t.jsx("p",{className:"label",children:`${e} : ${a[0].value}`}),t.jsx("p",{className:"intro",children:b(e)}),t.jsx("p",{className:"desc",children:"Anything you want can be displayed here."})]}):t.jsx(t.Fragment,{}),B=(...a)=>{const{fill:e,x:r,y:n,width:o,height:c}=a[0];return t.jsx("path",{d:y(r,n,o,c),stroke:"none",fill:e})};function g(a){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...u(),...a.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"customize",children:"Customize"}),`
`,t.jsx(e.h2,{id:"labels-of-line-area-bar-axis-can-be-customized",children:"Labels of line, area, bar, axis can be customized"}),`
`,t.jsx(e.p,{children:"For example, we can create a bar with customized label and customized axis tick."}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`import { BarChart, Bar, XAxis, YAxis } from 'recharts';
const CustomizedAxisTick = (...args)=>{
  const {  x, y, stroke, payload } = args[0];
  return (
    <g transform={\`translate(\${x},\${y})\`}>
      <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-35)">
        {payload.value}
      </text>
    </g>
  );
};
const renderCustomBarLabel = ({ payload, x, y, width, height, value }) => {
  return <text x={x + width / 2} y={y} fill="#666" textAnchor="middle" dy={-6}>{\`value: \${value}\`}</text>;
};
const renderBarChart = (
  <BarChart width={600} height={300} data={data} margin={{ top: 5, right: 20, left: 10, bottom: 20 }}>
    <XAxis dataKey="name" tick={<CustomizedAxisTick/>}
    <YAxis />
    <Bar dataKey="uv" barSize={30} fill="#8884d8" label={renderCustomBarLabel}/>
  </BarChart>
);
`})}),`
`,t.jsxs(s,{width:600,height:300,data:i,margin:{top:5,right:20,left:10,bottom:20},children:[t.jsx(d,{dataKey:"name",tick:t.jsx(x,{})}),t.jsx(l,{}),t.jsx(h,{dataKey:"uv",barSize:30,fill:"#8884d8",label:j})]}),`
`,t.jsx(e.h2,{id:"the-shape-of-bar-can-be-customized",children:"The shape of bar can be customized"}),`
`,t.jsxs(e.p,{children:["The props shape of ",t.jsx(e.code,{children:"<Bar />"})," can be set to be a function or a react element to render customized shape."]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`import { BarChart, Bar, XAxis, YAxis } from 'recharts';
const getPath = (x, y, width, height) =>
  \`M\${x},\${y + height}
   C\${x + width / 3},\${y + height} \${x + width / 2},\${y + height / 3} \${x + width / 2}, \${y}
   C\${x + width / 2},\${y + height / 3} \${x + (2 * width) / 3},\${y + height} \${x + width}, \${y + height}
   Z\`;

const TriangleBar = props => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};
const renderBarChart = (
  <BarChart width={600} height={300} data={data} margin={{ top: 5, right: 20, left: 10, bottom: 20 }}>
    <XAxis dataKey="name" tick={<CustomizedAxisTick />} />
    <YAxis />
    <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} />
  </BarChart>
);
`})}),`
`,t.jsx(e.h2,{id:"the-content-of-tooltip-can-be-customized",children:"The content of tooltip can be customized"}),`
`,t.jsx(e.p,{children:"Sometimes we may want tooltip to display much more information."}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
...
function getIntroOfPage(label) {
  if (label === 'Page A') {
    return 'Page A is about men's clothing';
  } if (label === 'Page B') {
    return 'Page B is about women's dress';
  } if (label === 'Page C') {
    return 'Page C is about women's bag';
  } if (label === 'Page D') {
    return 'Page D is about household goods';
  } if (label === 'Page E') {
    return 'Page E is about food';
  } if (label === 'Page F') {
    return 'Page F is about baby food';
  }
}

function CustomTooltip({ payload, label, active }) {
if (active) {
return (
<div className="custom-tooltip">
<p className="label">{\`\${label} : \${payload[0].value}\`}</p>
<p className="intro">{getIntroOfPage(label)}</p>
<p className="desc">Anything you want can be displayed here.</p>
</div>
);
}

return null;
}
const renderBarChart = (
<BarChart width={600} height={300} data={data} margin={{ top: 5, right: 20, left: 10, bottom: 20 }}>
  <XAxis dataKey="name" tick={<CustomizedAxisTick/>} />
  <YAxis />
  <Tooltip content={<CustomTooltip />}/>
  <Bar dataKey="uv" fill="#8884d8"
       shape={<TriangleBar />} />
</BarChart>
);
`})}),`
`,t.jsxs(s,{width:600,height:300,data:i,margin:{top:5,right:20,left:10,bottom:20},children:[t.jsx(d,{dataKey:"name",tick:t.jsx(x,{})}),t.jsx(l,{}),t.jsx(m,{content:t.jsx(C,{})}),t.jsx(h,{dataKey:"uv",fill:"#8884d8",shape:t.jsx(B,{})})]}),`
`,t.jsx(e.h2,{id:"the-style-of-each-chart-element-can-be-customized",children:"The style of each chart element can be customized"}),`
`,t.jsx(e.p,{children:"Except tooltip and legend, all the element in a chart is drawn by svg element. So you can change the attributes of each chart element conveniently."}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const renderBarChart = (
  <BarChart width={600} height={300} data={data} margin={{ top: 5, right: 20, left: 10, bottom: 20 }}>
    <XAxis dataKey="name" stroke="#8884d8" />
    <YAxis />
    <Tooltip />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <Bar dataKey="uv" fill="#8884d8" barSize={30} />
  </BarChart>
);
`})}),`
`,t.jsxs(s,{width:600,height:300,data:i,margin:{top:5,right:20,left:10,bottom:20},children:[t.jsx(d,{dataKey:"name",stroke:"#8884d8"}),t.jsx(l,{}),t.jsx(m,{}),t.jsx(p,{stroke:"red",strokeDasharray:"5 5"}),t.jsx(h,{dataKey:"uv",fill:"green",barSize:30})]}),`
`,t.jsx(e.h2,{id:"the-style-of-tooltip-legend-can-be-customized",children:"The style of tooltip, legend can be customized"}),`
`,t.jsx(e.p,{children:"Though tooltip, legend are drawn by svg elements, you may change the style of tooltip, legend by the apis we offer. of cource, you can change the style in css too."}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

const renderBarChart = (
  <BarChart width={600} height={300} data={data} margin={{ top: 5, right: 20, left: 10, bottom: 20 }}>
    <XAxis dataKey="name" stroke="#8884d8" />
    <YAxis />
    <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
    <Legend
      width={100}
      wrapperStyle={{
        top: 40,
        right: 20,
        backgroundColor: '#f5f5f5',
        border: '1px solid #d5d5d5',
        borderRadius: 3,
        lineHeight: '40px',
      }}
    />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <Bar dataKey="uv" fill="#8884d8" barSize={30} />
  </BarChart>
);
`})}),`
`,t.jsxs(s,{width:600,height:300,data:i,margin:{top:5,right:20,left:10,bottom:20},children:[t.jsx(d,{dataKey:"name",stroke:"#8884d8"}),t.jsx(l,{}),t.jsx(m,{wrapperStyle:{width:100,backgroundColor:"#ccc"}}),t.jsx(f,{width:100,wrapperStyle:{top:40,right:20,backgroundColor:"#f5f5f5",border:"1px solid #d5d5d5",borderRadius:3,lineHeight:"40px"}}),t.jsx(p,{stroke:"#ccc",strokeDasharray:"5 5"}),t.jsx(h,{dataKey:"uv",fill:"#8884d8",barSize:30})]})]})}function Xt(a={}){const{wrapper:e}={...u(),...a.components};return e?t.jsx(e,{...a,children:t.jsx(g,{...a})}):g(a)}export{C as CustomTooltip,x as CustomizedAxisTick,B as TriangleBar,Xt as default,b as getIntroOfPage,y as getPath,j as renderCustomBarLabel};
