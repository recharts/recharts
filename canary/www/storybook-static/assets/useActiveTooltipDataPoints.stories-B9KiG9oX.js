import{e as t}from"./iframe-B8wZLo82.js";import{P as o}from"./_data-CE1j0ret.js";import{T as n}from"./TooltipArgTypes-eZrzO4mT.js";import{g as d}from"./utils-ePvtT4un.js";import{T as p}from"./Tooltip-CQ99GayR.js";import{R as l}from"./arrayEqualityCheck-mQHvFPpg.js";import{C as c}from"./ComposedChart-BcqGzy_j.js";import{A as r}from"./Area-B9VPBSJg.js";import{L as g}from"./Line-da8_ePOc.js";import{X as A}from"./XAxis-BVtf3sZB.js";import{Y as u}from"./YAxis-DRyjSKtp.js";import{L as v}from"./Legend-nundP5JZ.js";import{R as f}from"./RechartsHookInspector-GmoDPQRs.js";import{p as T}from"./Page-DPte-9pC.js";const y={argTypes:n,title:"API/hooks/useActiveTooltipDataPoints",component:p},C=o.map(e=>({name:e.name,uv:e.uv})),P=o.map(e=>({name:e.name,pv:e.pv})),D=o.map(e=>({name:e.name,amt:e.amt})),a={name:"useActiveTooltipDataPoints",render:e=>t.createElement(l,{width:"100%",height:400},t.createElement(c,{data:T},t.createElement(r,{data:P,dataKey:"pv"}),t.createElement(r,{data:C,dataKey:"uv"}),t.createElement(g,{data:D,dataKey:"amt"}),t.createElement(A,{dataKey:"name",allowDuplicatedCategory:!1}),t.createElement(u,null),t.createElement(v,null),t.createElement(p,{...e}),t.createElement(f,{defaultOpened:"useActiveTooltipDataPoints"}))),args:d(n)};var s,m,i;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
  args: getStoryArgsFromArgsTypesObject(TooltipArgTypes)
}`,...(i=(m=a.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const h=["UseActiveTooltipDataPoints"],X=Object.freeze(Object.defineProperty({__proto__:null,UseActiveTooltipDataPoints:a,__namedExportsOrder:h,default:y},Symbol.toStringTag,{value:"Module"}));export{X as C};
