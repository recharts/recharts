import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{G as r,K as i}from"./zIndexSlice-BIOhIjqi.js";import{n as a,t as o}from"./Legend-LyvrAiSR.js";import{l as s,p as c}from"./CategoricalChart-BcSTOBIo.js";import{n as l,t as u}from"./Line-DfWxk1oZ.js";import{n as d,t as f}from"./XAxis-CshhRbXN.js";import{n as p,t as m}from"./YAxis-CftcmWxz.js";import{n as h,t as g}from"./ComposedChart-Dydaym1L.js";import{r as _,t as v}from"./Page-DUsfWi7y.js";var y,b,x,S;function C(){return(C=t((()=>{y=e(n()),h(),a(),l(),i(),s(),d(),p(),v(),b={title:`API/hooks/usePlotArea`,component:c,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},x={name:`usePlotAreaExample`,render:e=>y.createElement(r,{width:e.width,height:e.height},y.createElement(g,{data:_,margin:e.margin,style:e.style},y.createElement(u,{dataKey:`pv`}),y.createElement(f,{dataKey:`name`}),y.createElement(m,null),y.createElement(o,null))),args:{width:`100%`,height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:`1px solid #ccc`}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'usePlotAreaExample',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin} style={args.style}>
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
    },
    style: {
      border: '1px solid #ccc'
    }
  }
}`,...x.parameters?.docs?.source}}},S=[`UsePlotArea`]})))()}C();export{x as UsePlotArea,S as __namedExportsOrder,b as default};