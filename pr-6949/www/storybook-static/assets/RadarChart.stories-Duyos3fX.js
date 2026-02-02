import{e}from"./iframe-CehQ8xFj.js";import{g as n}from"./utils-ePvtT4un.js";import{R as s}from"./RadarChartArgs-D37t7TUa.js";import{R as m}from"./RadarChart-CvN33S0x.js";import{P as i}from"./PolarAngleAxis-BX2UskQI.js";import{P as d}from"./PolarRadiusAxis-W1BLet11.js";import{P as p}from"./PolarGrid-oUkcbKZI.js";import{L as c}from"./Legend-Bj4cUftl.js";import{T as g}from"./Tooltip-y2TRM86e.js";import{R as f}from"./Radar-DjU4k1To.js";import{R as u}from"./RechartsHookInspector-C9Dv8rR_.js";import{p as h}from"./Page-Cj8EiXz7.js";const A={argTypes:s,component:m},r={name:"Simple",render:l=>e.createElement(m,{...l},e.createElement(i,{dataKey:"name"}),e.createElement(d,null),e.createElement(p,null),e.createElement(c,null),e.createElement(g,{defaultIndex:1}),e.createElement(f,{dataKey:"uv",stroke:"green",strokeOpacity:.7,fill:"green",fillOpacity:.5,strokeWidth:3}),e.createElement(u,null)),args:{...n(s),data:h,width:800,height:300}};var a,t,o;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
