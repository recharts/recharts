import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{G as r,K as i}from"./zIndexSlice-Dy7ciYWo.js";import{n as a,t as o}from"./ReferenceLine-FaKqb0Rz.js";import{n as s,t as c}from"./CartesianGrid-DXJ2CyMi.js";import{n as l,t as u}from"./Line-CCKkHve0.js";import{n as d,t as f}from"./XAxis-B3WODRl4.js";import{n as p,t as m}from"./YAxis-CZypjyHs.js";import{n as h,t as g}from"./ComposedChart-BSnkeRRU.js";import{r as _,t as v}from"./Page-DUsfWi7y.js";var y,b,x,S;function C(){return(C=t((()=>{y=e(n()),h(),l(),a(),s(),d(),p(),i(),v(),b={title:`Examples/cartesian/ReferenceLine/ReferenceLineSegment`},x={render:()=>y.createElement(r,{width:`100%`,height:500},y.createElement(g,{data:_,margin:{top:5,right:30,left:20,bottom:5}},y.createElement(c,{strokeDasharray:`3 3`}),y.createElement(f,{dataKey:`name`}),y.createElement(m,{type:`number`}),y.createElement(u,{dataKey:`uv`}),y.createElement(o,{segment:[{x:`Page A`,y:0},{x:`Page E`,y:1500}]})))},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={500}>
        <ComposedChart data={pageData} margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" />
          <Line dataKey="uv" />
          <ReferenceLine segment={[{
          x: 'Page A',
          y: 0
        }, {
          x: 'Page E',
          y: 1500
        }]} />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...x.parameters?.docs?.source}}},S=[`Segment`]})))()}C();export{x as Segment,S as __namedExportsOrder,b as default};