import{e as r}from"./iframe-CnJUGyj2.js";import{g as m}from"./utils-ePvtT4un.js";import{R as s}from"./RadarChartProps-2f6ZmXtb.js";import{R as n}from"./RadarChart-szl_Nvrv.js";import{P as i}from"./PolarAngleAxis-D1xRlYVN.js";import{P as d}from"./PolarRadiusAxis-DSskzNGW.js";import{P as p}from"./PolarGrid-DlaSHw1I.js";import{L as c}from"./Legend-Bicnpt6O.js";import{T as g}from"./Tooltip-Di2CZLYp.js";import{R as f}from"./Radar-CuRcRYy0.js";import{R as u}from"./RechartsHookInspector-D9NSExUN.js";import{p as R}from"./Page-DPte-9pC.js";const h={argTypes:s,component:n},e={render:l=>r.createElement(n,{...l},r.createElement(i,{dataKey:"name"}),r.createElement(d,null),r.createElement(p,null),r.createElement(c,null),r.createElement(g,{defaultIndex:1}),r.createElement(f,{dataKey:"uv",stroke:"green",strokeOpacity:.7,fill:"green",fillOpacity:.5,strokeWidth:3}),r.createElement(u,null)),args:{...m(s),data:R,width:800,height:300}};var a,t,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
    ...getStoryArgsFromArgsTypesObject(RadarChartProps),
    data: pageData,
    width: 800,
    height: 300
  }
}`,...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const y=["Simple"],I=Object.freeze(Object.defineProperty({__proto__:null,Simple:e,__namedExportsOrder:y,default:h},Symbol.toStringTag,{value:"Module"}));export{I as R,e as S};
