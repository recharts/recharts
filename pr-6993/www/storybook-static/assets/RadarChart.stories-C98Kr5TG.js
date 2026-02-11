import{e}from"./iframe-B-Dp18cD.js";import{g as n}from"./utils-ePvtT4un.js";import{R as s}from"./RadarChartArgs-C2udkLBg.js";import{R as m}from"./RadarChart-DbqErEFA.js";import{P as i}from"./PolarAngleAxis-TjNwHzH9.js";import{P as d}from"./PolarRadiusAxis-C4kek8WG.js";import{P as p}from"./PolarGrid-CNAAH7cJ.js";import{L as c}from"./Legend-Bl6MRIq9.js";import{T as g}from"./Tooltip-DJ6dYc6Z.js";import{R as f}from"./Radar-D_7FS0rQ.js";import{R as u}from"./RechartsHookInspector-CHTp98JP.js";import{p as h}from"./Page-Cj8EiXz7.js";const A={argTypes:s,component:m},r={name:"Simple",render:l=>e.createElement(m,{...l},e.createElement(i,{dataKey:"name"}),e.createElement(d,null),e.createElement(p,null),e.createElement(c,null),e.createElement(g,{defaultIndex:1}),e.createElement(f,{dataKey:"uv",stroke:"green",strokeOpacity:.7,fill:"green",fillOpacity:.5,strokeWidth:3}),e.createElement(u,null)),args:{...n(s),data:h,width:800,height:300}};var a,t,o;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
