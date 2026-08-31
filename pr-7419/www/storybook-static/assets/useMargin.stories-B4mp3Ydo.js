import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{G as r,K as i,P as a,V as o}from"./zIndexSlice-Dy7ciYWo.js";import{n as s,t as c}from"./Legend-DiG0OfkN.js";import{n as l,t as u}from"./Line-CCKkHve0.js";import{n as d,t as f}from"./XAxis-B3WODRl4.js";import{n as p,t as m}from"./YAxis-CZypjyHs.js";import{n as h,t as g}from"./ComposedChart-BSnkeRRU.js";import{r as _,t as v}from"./Page-DUsfWi7y.js";var y,b,x,S;function C(){return(C=t((()=>{y=e(n()),h(),s(),l(),i(),a(),d(),p(),v(),b={title:`API/hooks/useMargin`,component:o,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},x={name:`useMargin`,render:e=>y.createElement(r,{width:e.width,height:e.height},y.createElement(g,{data:_,margin:e.margin},y.createElement(u,{dataKey:`pv`}),y.createElement(f,{dataKey:`name`}),y.createElement(m,null),y.createElement(c,null))),args:{width:`100%`,height:400,margin:{top:30,right:170,bottom:30,left:120}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'useMargin',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    width: '100%',
    height: 400,
    margin: {
      top: 30,
      right: 170,
      bottom: 30,
      left: 120
    }
  }
}`,...x.parameters?.docs?.source}}},S=[`UseMargin`]})))()}C();export{x as UseMargin,S as __namedExportsOrder,b as default};