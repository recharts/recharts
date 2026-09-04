import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./Legend-XcO656Mc.js";import{n as r,t as i}from"./Tooltip-YHivrOZa.js";import{n as a,t as o}from"./CartesianGrid-C0BAtXH9.js";import{n as s,t as c}from"./Bar-CQB3-sR3.js";import{n as l,t as u}from"./XAxis-BC2eC402.js";import{n as d,t as f}from"./YAxis-Ch1VfSce.js";import{n as p,t as m}from"./BarChart-CpIQPN2H.js";import{i as h,r as g,t as _}from"./jsx-runtime-5HYsnxpu.js";import{r as v,t as y}from"./Page-DUsfWi7y.js";function b(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...h(),...e.components};return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(t.h1,{id:`customize`,children:`Customize`}),`
`,(0,S.jsx)(t.h2,{id:`labels-of-line-area-bar-axis-can-be-customized`,children:`Labels of line, area, bar, axis can be customized`}),`
`,(0,S.jsx)(t.p,{children:`For example, we can create a bar with customized label and customized axis tick.`}),`
`,(0,S.jsx)(t.pre,{children:(0,S.jsx)(t.code,{className:`language-tsx`,children:`import { BarChart, Bar, XAxis, YAxis } from 'recharts';
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
`,(0,S.jsxs)(m,{width:600,height:300,data:v,margin:{top:5,right:20,left:10,bottom:20},children:[(0,S.jsx)(u,{dataKey:`name`,tick:(0,S.jsx)(T,{})}),(0,S.jsx)(f,{}),(0,S.jsx)(c,{dataKey:`uv`,barSize:30,fill:`#8884d8`,label:E})]}),`
`,(0,S.jsx)(t.h2,{id:`the-shape-of-bar-can-be-customized`,children:`The shape of bar can be customized`}),`
`,(0,S.jsxs)(t.p,{children:[`The props shape of `,(0,S.jsx)(t.code,{children:`<Bar />`}),` can be set to be a function or a react element to render customized shape.`]}),`
`,(0,S.jsx)(t.pre,{children:(0,S.jsx)(t.code,{className:`language-tsx`,children:`import { BarChart, Bar, XAxis, YAxis } from 'recharts';
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
`,(0,S.jsx)(t.h2,{id:`the-content-of-tooltip-can-be-customized`,children:`The content of tooltip can be customized`}),`
`,(0,S.jsx)(t.p,{children:`Sometimes we may want tooltip to display much more information.`}),`
`,(0,S.jsx)(t.pre,{children:(0,S.jsx)(t.code,{className:`language-tsx`,children:`import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
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
`,(0,S.jsxs)(m,{width:600,height:300,data:v,margin:{top:5,right:20,left:10,bottom:20},children:[(0,S.jsx)(u,{dataKey:`name`,tick:(0,S.jsx)(T,{})}),(0,S.jsx)(f,{}),(0,S.jsx)(i,{content:(0,S.jsx)(D,{})}),(0,S.jsx)(c,{dataKey:`uv`,fill:`#8884d8`,shape:(0,S.jsx)(O,{})})]}),`
`,(0,S.jsx)(t.h2,{id:`the-style-of-each-chart-element-can-be-customized`,children:`The style of each chart element can be customized`}),`
`,(0,S.jsx)(t.p,{children:`Except tooltip and legend, all the element in a chart is drawn by svg element. So you can change the attributes of each chart element conveniently.`}),`
`,(0,S.jsx)(t.pre,{children:(0,S.jsx)(t.code,{className:`language-tsx`,children:`import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

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
`,(0,S.jsxs)(m,{width:600,height:300,data:v,margin:{top:5,right:20,left:10,bottom:20},children:[(0,S.jsx)(u,{dataKey:`name`,stroke:`#8884d8`}),(0,S.jsx)(f,{}),(0,S.jsx)(i,{}),(0,S.jsx)(o,{stroke:`red`,strokeDasharray:`5 5`}),(0,S.jsx)(c,{dataKey:`uv`,fill:`green`,barSize:30})]}),`
`,(0,S.jsx)(t.h2,{id:`the-style-of-tooltip-legend-can-be-customized`,children:`The style of tooltip, legend can be customized`}),`
`,(0,S.jsx)(t.p,{children:`Though tooltip, legend are drawn by svg elements, you may change the style of tooltip, legend by the apis we offer. of cource, you can change the style in css too.`}),`
`,(0,S.jsx)(t.pre,{children:(0,S.jsx)(t.code,{className:`language-tsx`,children:`import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

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
`,(0,S.jsxs)(m,{width:600,height:300,data:v,margin:{top:5,right:20,left:10,bottom:20},children:[(0,S.jsx)(u,{dataKey:`name`,stroke:`#8884d8`}),(0,S.jsx)(f,{}),(0,S.jsx)(i,{wrapperStyle:{width:100,backgroundColor:`#ccc`}}),(0,S.jsx)(n,{width:100,wrapperStyle:{top:40,right:20,backgroundColor:`#f5f5f5`,border:`1px solid #d5d5d5`,borderRadius:3,lineHeight:`40px`}}),(0,S.jsx)(o,{stroke:`#ccc`,strokeDasharray:`5 5`}),(0,S.jsx)(c,{dataKey:`uv`,fill:`#8884d8`,barSize:30})]})]})}function x(e={}){let{wrapper:t}={...h(),...e.components};return t?(0,S.jsx)(t,{...e,children:(0,S.jsx)(b,{...e})}):b(e)}var S,C,w,T,E,D,O;function k(){return(k=e((()=>{S=_(),g(),y(),a(),l(),d(),r(),p(),s(),t(),C=e=>{if(e===`Page A`)return`Page A is about mens clothing`;if(e===`Page B`)return`Page B is about womens dress`;if(e===`Page C`)return`Page C is about womens bag`;if(e===`Page D`)return`Page D is about household goods`;if(e===`Page E`)return`Page E is about food`;if(e===`Page F`)return`Page F is about baby food`},w=(e,t,n,r)=>`M${e},${t+r}
   C${e+n/3},${t+r} ${e+n/2},${t+r/3} ${e+n/2}, ${t}
   C${e+n/2},${t+r/3} ${e+2*n/3},${t+r} ${e+n}, ${t+r}
   Z`,T=(...e)=>{let{x:t,y:n,stroke:r,payload:i}=e[0];return(0,S.jsx)(`g`,{transform:`translate(${t},${n})`,children:(0,S.jsx)(`text`,{x:0,y:0,dy:16,textAnchor:`end`,fill:`#666`,transform:`rotate(-35)`,children:i.value})})},E=({payload:e,x:t,y:n,width:r,height:i,value:a})=>(0,S.jsx)(`text`,{x:t+r/2,y:n,fill:`#666`,textAnchor:`middle`,dy:-6,children:`value: ${a}`}),D=({payload:e,label:t,active:n})=>n?(0,S.jsxs)(`div`,{className:`custom-tooltip`,children:[(0,S.jsx)(`p`,{className:`label`,children:`${t} : ${e[0].value}`}),(0,S.jsx)(`p`,{className:`intro`,children:C(t)}),(0,S.jsx)(`p`,{className:`desc`,children:`Anything you want can be displayed here.`})]}):(0,S.jsx)(S.Fragment,{}),O=(...e)=>{let{fill:t,x:n,y:r,width:i,height:a}=e[0];return(0,S.jsx)(`path`,{d:w(n,r,i,a),stroke:`none`,fill:t})}})))()}k();export{D as CustomTooltip,T as CustomizedAxisTick,O as TriangleBar,x as default,C as getIntroOfPage,w as getPath,E as renderCustomBarLabel};