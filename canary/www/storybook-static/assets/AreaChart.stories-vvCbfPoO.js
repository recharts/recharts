import{e}from"./iframe-DkFnKmz6.js";import{a as s}from"./ChartProps-h4DKB0dX.js";import{g as l}from"./utils-ePvtT4un.js";import{A as i}from"./AreaChart-BeTOgsH6.js";import{p as b,s as v}from"./Page-Cj8EiXz7.js";import{R as n}from"./arrayEqualityCheck-B_Ane2tr.js";import{A as p}from"./Area-q20VSj4w.js";import{C as R}from"./CartesianGrid-DuRGeQxY.js";import{T as E}from"./Tooltip-twZ63P-G.js";import{R as c}from"./RechartsHookInspector-B3tFzt2u.js";import{c as S}from"./cardinal-CzOE_n2V.js";import{X as k}from"./XAxis-ByDrXS-8.js";const T={argTypes:s,component:i},r={render:t=>e.createElement(n,{width:"100%",height:400},e.createElement(i,{...t,margin:{top:0,bottom:0,left:50,right:50}},e.createElement(p,{dataKey:"pv",strokeWidth:3,stroke:"#2451B7",fill:"#5376C4"}),e.createElement(R,{opacity:.1,vertical:!1}),e.createElement(E,null),e.createElement(c,null))),args:{...l(s),data:b,layout:"horizontal",margin:{top:0,bottom:0,left:50,right:50}}},O=S.tension(.5),a={render:t=>e.createElement(n,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(p,{type:O,dataKey:"pv",stroke:"#ff7300",fill:"#ff7300",fillOpacity:.9}),e.createElement(c,null))),args:{...l(s),data:b,layout:"horizontal",margin:{top:0,bottom:0,left:50,right:50}}},o={render:t=>e.createElement(n,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(p,{dataKey:"A",stroke:"green",fill:"green",fillOpacity:.5}),e.createElement(k,{dataKey:"subject",type:"category",allowDuplicatedCategory:!1}),e.createElement(E,null),e.createElement(c,null))),args:{...l(s),data:v,layout:"horizontal",margin:{top:0,bottom:0,left:50,right:50}}};var m,g,h;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </AreaChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(CategoricalChartProps),
    data: pageData,
    layout: 'horizontal',
    margin: {
      top: 0,
      bottom: 0,
      left: 50,
      right: 50
    }
  }
}`,...(h=(g=r.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var d,f,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={400}>
        <AreaChart {...args}>
          <Area type={stepAround} dataKey="pv" stroke="#ff7300" fill="#ff7300" fillOpacity={0.9} />
          <RechartsHookInspector />
        </AreaChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(CategoricalChartProps),
    data: pageData,
    layout: 'horizontal',
    margin: {
      top: 0,
      bottom: 0,
      left: 50,
      right: 50
    }
  }
}`,...(u=(f=a.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};var y,C,A;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={400}>
        <AreaChart {...args}>
          <Area dataKey="A" stroke="green" fill="green" fillOpacity={0.5} />
          <XAxis dataKey="subject" type="category" allowDuplicatedCategory={false} />
          <Tooltip />
          <RechartsHookInspector />
        </AreaChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(CategoricalChartProps),
    data: subjectData,
    layout: 'horizontal',
    margin: {
      top: 0,
      bottom: 0,
      left: 50,
      right: 50
    }
  }
}`,...(A=(C=o.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};const j=["Simple","CustomType","CategoricalAreaChart"],G=Object.freeze(Object.defineProperty({__proto__:null,CategoricalAreaChart:o,CustomType:a,Simple:r,__namedExportsOrder:j,default:T},Symbol.toStringTag,{value:"Module"}));export{G as A,r as S};
