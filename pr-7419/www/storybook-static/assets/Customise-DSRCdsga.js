import{i as e}from"./preload-helper-BdFrVu1K.js";import{B as t,O as n,Q as r,R as i,Rt as a,W as o,kn as s,t as c}from"./iframe-BqVvK_R4.js";import{a as l,t as u}from"./jsx-runtime-BenY-SQ9.js";import{t as d}from"./mdx-react-shim-6gHMkx1M.js";import{r as f,t as p}from"./Page-C0w_0_Yr.js";function m(e){let c={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...l(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(c.h1,{id:`customize`,children:`Customize`}),`
`,(0,g.jsx)(c.h2,{id:`labels-of-line-area-bar-axis-can-be-customized`,children:`Labels of line, area, bar, axis can be customized`}),`
`,(0,g.jsx)(c.p,{children:`For example, we can create a bar with customized label and customized axis tick.`}),`
`,(0,g.jsx)(c.pre,{children:(0,g.jsx)(c.code,{className:`language-tsx`,children:`import { BarChart, Bar, XAxis, YAxis } from 'recharts';
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
`,(0,g.jsxs)(n,{width:600,height:300,data:f,margin:{top:5,right:20,left:10,bottom:20},children:[(0,g.jsx)(t,{dataKey:`name`,tick:(0,g.jsx)(y,{})}),(0,g.jsx)(i,{}),(0,g.jsx)(o,{dataKey:`uv`,barSize:30,fill:`#8884d8`,label:b})]}),`
`,(0,g.jsx)(c.h2,{id:`the-shape-of-bar-can-be-customized`,children:`The shape of bar can be customized`}),`
`,(0,g.jsxs)(c.p,{children:[`The props shape of `,(0,g.jsx)(c.code,{children:`<Bar />`}),` can be set to be a function or a react element to render customized shape.`]}),`
`,(0,g.jsx)(c.pre,{children:(0,g.jsx)(c.code,{className:`language-tsx`,children:`import { BarChart, Bar, XAxis, YAxis } from 'recharts';
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
`,(0,g.jsx)(c.h2,{id:`the-content-of-tooltip-can-be-customized`,children:`The content of tooltip can be customized`}),`
`,(0,g.jsx)(c.p,{children:`Sometimes we may want tooltip to display much more information.`}),`
`,(0,g.jsx)(c.pre,{children:(0,g.jsx)(c.code,{className:`language-tsx`,children:`import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
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
`,(0,g.jsxs)(n,{width:600,height:300,data:f,margin:{top:5,right:20,left:10,bottom:20},children:[(0,g.jsx)(t,{dataKey:`name`,tick:(0,g.jsx)(y,{})}),(0,g.jsx)(i,{}),(0,g.jsx)(a,{content:(0,g.jsx)(x,{})}),(0,g.jsx)(o,{dataKey:`uv`,fill:`#8884d8`,shape:(0,g.jsx)(S,{})})]}),`
`,(0,g.jsx)(c.h2,{id:`the-style-of-each-chart-element-can-be-customized`,children:`The style of each chart element can be customized`}),`
`,(0,g.jsx)(c.p,{children:`Except tooltip and legend, all the element in a chart is drawn by svg element. So you can change the attributes of each chart element conveniently.`}),`
`,(0,g.jsx)(c.pre,{children:(0,g.jsx)(c.code,{className:`language-tsx`,children:`import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

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
`,(0,g.jsxs)(n,{width:600,height:300,data:f,margin:{top:5,right:20,left:10,bottom:20},children:[(0,g.jsx)(t,{dataKey:`name`,stroke:`#8884d8`}),(0,g.jsx)(i,{}),(0,g.jsx)(a,{}),(0,g.jsx)(r,{stroke:`red`,strokeDasharray:`5 5`}),(0,g.jsx)(o,{dataKey:`uv`,fill:`green`,barSize:30})]}),`
`,(0,g.jsx)(c.h2,{id:`the-style-of-tooltip-legend-can-be-customized`,children:`The style of tooltip, legend can be customized`}),`
`,(0,g.jsx)(c.p,{children:`Though tooltip, legend are drawn by svg elements, you may change the style of tooltip, legend by the apis we offer. of cource, you can change the style in css too.`}),`
`,(0,g.jsx)(c.pre,{children:(0,g.jsx)(c.code,{className:`language-tsx`,children:`import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

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
`,(0,g.jsxs)(n,{width:600,height:300,data:f,margin:{top:5,right:20,left:10,bottom:20},children:[(0,g.jsx)(t,{dataKey:`name`,stroke:`#8884d8`}),(0,g.jsx)(i,{}),(0,g.jsx)(a,{wrapperStyle:{width:100,backgroundColor:`#ccc`}}),(0,g.jsx)(s,{width:100,wrapperStyle:{top:40,right:20,backgroundColor:`#f5f5f5`,border:`1px solid #d5d5d5`,borderRadius:3,lineHeight:`40px`}}),(0,g.jsx)(r,{stroke:`#ccc`,strokeDasharray:`5 5`}),(0,g.jsx)(o,{dataKey:`uv`,fill:`#8884d8`,barSize:30})]})]})}function h(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g,_,v,y,b,x,S;e((()=>{g=u(),d(),p(),c(),_=e=>{if(e===`Page A`)return`Page A is about mens clothing`;if(e===`Page B`)return`Page B is about womens dress`;if(e===`Page C`)return`Page C is about womens bag`;if(e===`Page D`)return`Page D is about household goods`;if(e===`Page E`)return`Page E is about food`;if(e===`Page F`)return`Page F is about baby food`},v=(e,t,n,r)=>`M${e},${t+r}
   C${e+n/3},${t+r} ${e+n/2},${t+r/3} ${e+n/2}, ${t}
   C${e+n/2},${t+r/3} ${e+2*n/3},${t+r} ${e+n}, ${t+r}
   Z`,y=(...e)=>{let{x:t,y:n,stroke:r,payload:i}=e[0];return(0,g.jsx)(`g`,{transform:`translate(${t},${n})`,children:(0,g.jsx)(`text`,{x:0,y:0,dy:16,textAnchor:`end`,fill:`#666`,transform:`rotate(-35)`,children:i.value})})},b=({payload:e,x:t,y:n,width:r,height:i,value:a})=>(0,g.jsx)(`text`,{x:t+r/2,y:n,fill:`#666`,textAnchor:`middle`,dy:-6,children:`value: ${a}`}),x=({payload:e,label:t,active:n})=>n?(0,g.jsxs)(`div`,{className:`custom-tooltip`,children:[(0,g.jsx)(`p`,{className:`label`,children:`${t} : ${e[0].value}`}),(0,g.jsx)(`p`,{className:`intro`,children:_(t)}),(0,g.jsx)(`p`,{className:`desc`,children:`Anything you want can be displayed here.`})]}):(0,g.jsx)(g.Fragment,{}),S=(...e)=>{let{fill:t,x:n,y:r,width:i,height:a}=e[0];return(0,g.jsx)(`path`,{d:v(n,r,i,a),stroke:`none`,fill:t})}}))();export{x as CustomTooltip,y as CustomizedAxisTick,S as TriangleBar,h as default,_ as getIntroOfPage,v as getPath,b as renderCustomBarLabel};