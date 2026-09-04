import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{G as r,K as i}from"./zIndexSlice-CfT4cgn7.js";import{n as a,t as o}from"./Legend-XcO656Mc.js";import{n as s,t as c}from"./Tooltip-YHivrOZa.js";import{n as l,t as u}from"./Line---TR8N4V.js";import{n as d,t as f}from"./Area-CqYIOjBK.js";import{n as p,t as m}from"./XAxis-BC2eC402.js";import{n as h,t as g}from"./YAxis-Ch1VfSce.js";import{n as _,t as v}from"./ComposedChart-CZOHGVI-.js";import{r as y,t as b}from"./Page-DUsfWi7y.js";import{n as x,t as S}from"./utils-vqcWnakT.js";import{n as C,t as w}from"./TooltipArgs-DgRIUHOb.js";import{n as T,t as E}from"./_data-PEEDfUt6.js";var D,O,k,A,j,M,N;function P(){return(P=t((()=>{D=e(n()),d(),_(),a(),l(),i(),s(),p(),h(),b(),T(),x(),C(),O={argTypes:w,title:`API/hooks/useActiveTooltipDataPoints`,component:c},k=E.map(e=>({name:e.name,uv:e.uv})),A=E.map(e=>({name:e.name,pv:e.pv})),j=E.map(e=>({name:e.name,amt:e.amt})),M={name:`useActiveTooltipDataPoints`,render:e=>D.createElement(r,{width:`100%`,height:400},D.createElement(v,{data:y},D.createElement(f,{data:A,dataKey:`pv`}),D.createElement(f,{data:k,dataKey:`uv`}),D.createElement(u,{data:j,dataKey:`amt`}),D.createElement(m,{dataKey:`name`,allowDuplicatedCategory:!1}),D.createElement(g,null),D.createElement(o,null),D.createElement(c,e))),args:S(w)},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N=[`UseActiveTooltipDataPoints`]})))()}P();export{M as UseActiveTooltipDataPoints,N as __namedExportsOrder,O as default};