import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{G as r,K as i}from"./zIndexSlice-CfT4cgn7.js";import{n as a,t as o}from"./Scatter-1pIxgP4h.js";import{n as s,t as c}from"./XAxis-BC2eC402.js";import{n as l,t as u}from"./YAxis-Ch1VfSce.js";import{n as d,t as f}from"./ScatterChart-CRWwXPlP.js";import{r as p,t as m}from"./Coordinate-BM6Q61mz.js";import{n as h,t as g}from"./utils-vqcWnakT.js";import{n as _,t as v}from"./ScatterChartArgs-BTSdCahn.js";var y,b,x,S;function C(){return(C=t((()=>{y=e(n()),p(),i(),a(),d(),s(),l(),h(),_(),b={argTypes:v,component:f},x={name:`Simple`,render:e=>{let{data:t,...n}=e;return y.createElement(r,{width:`100%`,height:400},y.createElement(f,n,y.createElement(c,{dataKey:`x`}),y.createElement(u,{dataKey:`y`}),y.createElement(o,{data:t})))},args:{...g(v),data:m,margin:{top:0,right:0,bottom:0,left:0}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Simple',
  render: (args: Args) => {
    const {
      data,
      ...rest
    } = args;
    return <ResponsiveContainer width="100%" height={400}>
        <ScatterChart {...rest}>
          <XAxis dataKey="x" />
          <YAxis dataKey="y" />
          <Scatter data={data} />
        </ScatterChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(ScatterChartArgs),
    data: coordinateData,
    margin: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  }
}`,...x.parameters?.docs?.source}}},S=[`API`]})))()}C();export{x as API,S as __namedExportsOrder,b as default};