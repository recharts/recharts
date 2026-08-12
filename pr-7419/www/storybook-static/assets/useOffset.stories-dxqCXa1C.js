import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{G as r,K as i}from"./zIndexSlice-h3_0PU49.js";import{n as a,t as o}from"./Legend-BONN1rdI.js";import{f as s,l as c}from"./CategoricalChart-OY5eFAJs.js";import{n as l,t as u}from"./Line-CQ6XSD40.js";import{n as d,t as f}from"./XAxis-DDjytrf0.js";import{n as p,t as m}from"./YAxis-BdRKOhwY.js";import{n as h,t as g}from"./ComposedChart-B5dHRSPW.js";import{r as _,t as v}from"./Page-DUsfWi7y.js";var y,b,x,S;function C(){return(C=t((()=>{y=e(n()),h(),a(),l(),i(),c(),d(),p(),v(),b={title:`API/hooks/useOffset`,component:s,parameters:{docs:{description:{component:"This story demonstrates the use of the `useOffset` hook to read chart offset in a responsive container."}}}},x={name:`useOffset`,render:e=>y.createElement(r,{width:e.width,height:e.height},y.createElement(g,{data:_,margin:e.margin},y.createElement(u,{dataKey:`pv`}),y.createElement(f,{dataKey:`name`}),y.createElement(m,null),y.createElement(o,null))),args:{width:`100%`,height:400,margin:{top:30,right:170,bottom:30,left:120}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'useOffset',
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
}`,...x.parameters?.docs?.source}}},S=[`UseOffset`]})))()}C();export{x as UseOffset,S as __namedExportsOrder,b as default};