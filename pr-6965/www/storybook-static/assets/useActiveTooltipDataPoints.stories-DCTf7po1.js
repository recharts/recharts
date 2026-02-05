import{e as t}from"./iframe-D44FkRcR.js";import{P as o}from"./_data-CE1j0ret.js";import{g as d}from"./utils-ePvtT4un.js";import{T as n}from"./TooltipArgs-CESW39bv.js";import{T as p}from"./Tooltip-BAdN8Rfb.js";import{R as l}from"./arrayEqualityCheck-CpHRyEoZ.js";import{C as c}from"./ComposedChart-BJqa9Xh0.js";import{A as r}from"./Area-BPJoK7Pt.js";import{L as g}from"./Line-CGS71pfF.js";import{X as A}from"./XAxis-Bc7aqN4V.js";import{Y as u}from"./YAxis-B19HmFuc.js";import{L as v}from"./Legend-Cq3fip5T.js";import{R as f}from"./RechartsHookInspector-BUut-YKB.js";import{p as T}from"./Page-Cj8EiXz7.js";const y={argTypes:n,title:"API/hooks/useActiveTooltipDataPoints",component:p},C=o.map(e=>({name:e.name,uv:e.uv})),P=o.map(e=>({name:e.name,pv:e.pv})),D=o.map(e=>({name:e.name,amt:e.amt})),a={name:"useActiveTooltipDataPoints",render:e=>t.createElement(l,{width:"100%",height:400},t.createElement(c,{data:T},t.createElement(r,{data:P,dataKey:"pv"}),t.createElement(r,{data:C,dataKey:"uv"}),t.createElement(g,{data:D,dataKey:"amt"}),t.createElement(A,{dataKey:"name",allowDuplicatedCategory:!1}),t.createElement(u,null),t.createElement(v,null),t.createElement(p,{...e}),t.createElement(f,{defaultOpened:"useActiveTooltipDataPoints"}))),args:d(n)};var s,m,i;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: 'useActiveTooltipDataPoints',
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={pageData}>
          <Area data={dataPv} dataKey="pv" />
          <Area data={dataUv} dataKey="uv" />
          <Line data={dataAmt} dataKey="amt" />
          <XAxis dataKey="name" allowDuplicatedCategory={false} />
          <YAxis />
          <Legend />
          <Tooltip {...args} />
          <RechartsHookInspector defaultOpened="useActiveTooltipDataPoints" />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: getStoryArgsFromArgsTypesObject(TooltipArgs)
}`,...(i=(m=a.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const h=["UseActiveTooltipDataPoints"],X=Object.freeze(Object.defineProperty({__proto__:null,UseActiveTooltipDataPoints:a,__namedExportsOrder:h,default:y},Symbol.toStringTag,{value:"Module"}));export{X as C};
