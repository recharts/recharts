import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./react-43m7EBoo.js";import{B as r,Br as i,J as a,Q as o,Rt as s,Vn as c,gr as l,m as u,t as d}from"./iframe-BiMB5Acc.js";import{t as f}from"./data-J2vpPkF6.js";import{r as p,s as m}from"./Page-C0w_0_Yr.js";import{n as h,t as g}from"./utils-4uF5A2JM.js";import{n as _,t as v}from"./AreaChartArgs-f-9wms1F.js";var y,b,x,S,C,w,T;e((()=>{y=t(n()),l(),d(),f(),h(),_(),b={argTypes:v,component:u},x={name:`Simple`,render:e=>y.createElement(c,{width:`100%`,height:400},y.createElement(u,{...e,margin:{top:0,bottom:0,left:50,right:50}},y.createElement(a,{dataKey:`pv`,strokeWidth:3,stroke:`#2451B7`,fill:`#5376C4`}),y.createElement(o,{opacity:.1,vertical:!1}),y.createElement(s,null))),args:{...g(v),data:p,margin:{top:0,bottom:0,left:50,right:50}}},S=i.tension(.5),C={render:e=>y.createElement(c,{width:`100%`,height:400},y.createElement(u,e,y.createElement(a,{type:S,dataKey:`pv`,stroke:`#ff7300`,fill:`#ff7300`,fillOpacity:.9}))),args:{...g(v),data:p,layout:`horizontal`,margin:{top:0,bottom:0,left:50,right:50}}},w={render:e=>y.createElement(c,{width:`100%`,height:400},y.createElement(u,e,y.createElement(a,{dataKey:`A`,stroke:`green`,fill:`green`,fillOpacity:.5}),y.createElement(r,{dataKey:`subject`,type:`category`,allowDuplicatedCategory:!1}),y.createElement(s,null))),args:{...g(v),data:m,layout:`horizontal`,margin:{top:0,bottom:0,left:50,right:50}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Simple',
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={400}>
        <AreaChart {...args} margin={{
        top: 0,
        bottom: 0,
        left: 50,
        right: 50
      }}>
          <Area dataKey="pv" strokeWidth={3} stroke="#2451B7" fill="#5376C4" />
          <CartesianGrid opacity={0.1} vertical={false} />
          <Tooltip />
        </AreaChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(AreaChartArgs),
    data: pageData,
    margin: {
      top: 0,
      bottom: 0,
      left: 50,
      right: 50
    }
  }
}`,...x.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={400}>
        <AreaChart {...args}>
          <Area type={stepAround} dataKey="pv" stroke="#ff7300" fill="#ff7300" fillOpacity={0.9} />
        </AreaChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(AreaChartArgs),
    data: pageData,
    layout: 'horizontal',
    margin: {
      top: 0,
      bottom: 0,
      left: 50,
      right: 50
    }
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={400}>
        <AreaChart {...args}>
          <Area dataKey="A" stroke="green" fill="green" fillOpacity={0.5} />
          <XAxis dataKey="subject" type="category" allowDuplicatedCategory={false} />
          <Tooltip />
        </AreaChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(AreaChartArgs),
    data: subjectData,
    layout: 'horizontal',
    margin: {
      top: 0,
      bottom: 0,
      left: 50,
      right: 50
    }
  }
}`,...w.parameters?.docs?.source}}},T=[`API`,`CustomType`,`CategoricalAreaChart`]}))();export{x as API,w as CategoricalAreaChart,C as CustomType,T as __namedExportsOrder,b as default};