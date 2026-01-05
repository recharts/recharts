import{e as r}from"./iframe-Da-M2bw_.js";import{g as m}from"./utils-ePvtT4un.js";import{R as s}from"./RadarChartProps-D2FcIX_K.js";import{R as n}from"./RadarChart-klc9MRzb.js";import{P as i}from"./PolarAngleAxis-Ct75x8T1.js";import{P as d}from"./PolarRadiusAxis-C173TSDg.js";import{P as p}from"./PolarGrid-DJkU6GRt.js";import{L as c}from"./Legend-BtpSwi4J.js";import{T as g}from"./Tooltip-BswLKPO9.js";import{R as f}from"./Radar-rlGD-k11.js";import{R as u}from"./RechartsHookInspector-DN6fpuiF.js";import{p as R}from"./Page-DPte-9pC.js";const h={argTypes:s,component:n},e={render:l=>r.createElement(n,{...l},r.createElement(i,{dataKey:"name"}),r.createElement(d,null),r.createElement(p,null),r.createElement(c,null),r.createElement(g,{defaultIndex:1}),r.createElement(f,{dataKey:"uv",stroke:"green",strokeOpacity:.7,fill:"green",fillOpacity:.5,strokeWidth:3}),r.createElement(u,null)),args:{...m(s),data:R,width:800,height:300}};var a,t,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
