import{e}from"./iframe-S3w8vazP.js";import{g as n}from"./utils-ePvtT4un.js";import{R as s}from"./RadarChartArgs-D37t7TUa.js";import{R as m}from"./RadarChart-BNVsMGhd.js";import{P as i}from"./PolarAngleAxis-j5VnJBun.js";import{P as d}from"./PolarRadiusAxis-CB3i3amS.js";import{P as p}from"./PolarGrid-D5HZfyxU.js";import{L as c}from"./Legend-CY90PPf5.js";import{T as g}from"./Tooltip-CrYts5Zz.js";import{R as f}from"./Radar-Cq6bT9ii.js";import{R as u}from"./RechartsHookInspector-BtEk5fyn.js";import{p as h}from"./Page-Cj8EiXz7.js";const A={argTypes:s,component:m},r={name:"Simple",render:l=>e.createElement(m,{...l},e.createElement(i,{dataKey:"name"}),e.createElement(d,null),e.createElement(p,null),e.createElement(c,null),e.createElement(g,{defaultIndex:1}),e.createElement(f,{dataKey:"uv",stroke:"green",strokeOpacity:.7,fill:"green",fillOpacity:.5,strokeWidth:3}),e.createElement(u,null)),args:{...n(s),data:h,width:800,height:300}};var a,t,o;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'Simple',
  render: (args: Args) => {
    return <RadarChart {...args}>
        <PolarAngleAxis dataKey="name" />
        <PolarRadiusAxis />
        <PolarGrid />
        <Legend />
        <Tooltip defaultIndex={1} />
        <Radar dataKey="uv" stroke="green" strokeOpacity={0.7} fill="green" fillOpacity={0.5} strokeWidth={3} />
        <RechartsHookInspector />
      </RadarChart>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(RadarChartArgs),
    data: pageData,
    width: 800,
    height: 300
  }
}`,...(o=(t=r.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const R=["API"],j=Object.freeze(Object.defineProperty({__proto__:null,API:r,__namedExportsOrder:R,default:A},Symbol.toStringTag,{value:"Module"}));export{r as A,j as C};
