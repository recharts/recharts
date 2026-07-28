import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./react-43m7EBoo.js";import{B as r,J as i,R as a,Rt as o,Vn as s,X as c,kn as l,t as u,u as d}from"./iframe-BiMB5Acc.js";import{t as f}from"./data-J2vpPkF6.js";import{r as p}from"./Page-C0w_0_Yr.js";import{n as m,t as h}from"./utils-4uF5A2JM.js";import{n as g,t as _}from"./TooltipArgs-CYl_k2fd.js";import{n as v,t as y}from"./_data-o-PbaCPp.js";var b,x,S,C,w,T,E;e((()=>{b=t(n()),u(),f(),v(),m(),g(),x={argTypes:_,title:`API/hooks/useActiveTooltipDataPoints`,component:o},S=y.map(e=>({name:e.name,uv:e.uv})),C=y.map(e=>({name:e.name,pv:e.pv})),w=y.map(e=>({name:e.name,amt:e.amt})),T={name:`useActiveTooltipDataPoints`,render:e=>b.createElement(s,{width:`100%`,height:400},b.createElement(d,{data:p},b.createElement(i,{data:C,dataKey:`pv`}),b.createElement(i,{data:S,dataKey:`uv`}),b.createElement(c,{data:w,dataKey:`amt`}),b.createElement(r,{dataKey:`name`,allowDuplicatedCategory:!1}),b.createElement(a,null),b.createElement(l,null),b.createElement(o,e))),args:h(_)},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: getStoryArgsFromArgsTypesObject(TooltipArgs)
}`,...T.parameters?.docs?.source}}},E=[`UseActiveTooltipDataPoints`]}))();export{T as UseActiveTooltipDataPoints,E as __namedExportsOrder,x as default};