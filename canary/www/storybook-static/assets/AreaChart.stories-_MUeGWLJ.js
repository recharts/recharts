import{e}from"./iframe-0lTGunMW.js";import{g as n}from"./utils-ePvtT4un.js";import{A as s,c as v}from"./AreaChartArgs-C6jNU9tv.js";import{A as i}from"./AreaChart-B6dIUoAM.js";import{p as b,s as R}from"./Page-Cj8EiXz7.js";import{R as l}from"./arrayEqualityCheck-BcVHM6kB.js";import{A as p}from"./Area-CgEX-kBB.js";import{C as k}from"./CartesianGrid-C3bTOkY1.js";import{T as E}from"./Tooltip-D5BWDrFR.js";import{R as m}from"./RechartsHookInspector-Dk1C8jj5.js";import{X as S}from"./XAxis-Cfcoth7C.js";const T={argTypes:s,component:i},r={name:"Simple",render:t=>e.createElement(l,{width:"100%",height:400},e.createElement(i,{...t,margin:{top:0,bottom:0,left:50,right:50}},e.createElement(p,{dataKey:"pv",strokeWidth:3,stroke:"#2451B7",fill:"#5376C4"}),e.createElement(k,{opacity:.1,vertical:!1}),e.createElement(E,null),e.createElement(m,null))),args:{...n(s),data:b,margin:{top:0,bottom:0,left:50,right:50}}},O=v.tension(.5),a={render:t=>e.createElement(l,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(p,{type:O,dataKey:"pv",stroke:"#ff7300",fill:"#ff7300",fillOpacity:.9}),e.createElement(m,null))),args:{...n(s),data:b,layout:"horizontal",margin:{top:0,bottom:0,left:50,right:50}}},o={render:t=>e.createElement(l,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(p,{dataKey:"A",stroke:"green",fill:"green",fillOpacity:.5}),e.createElement(S,{dataKey:"subject",type:"category",allowDuplicatedCategory:!1}),e.createElement(E,null),e.createElement(m,null))),args:{...n(s),data:R,layout:"horizontal",margin:{top:0,bottom:0,left:50,right:50}}};var c,g,h;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
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
}`,...(h=(g=r.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var d,A,f;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={400}>
        <AreaChart {...args}>
          <Area type={stepAround} dataKey="pv" stroke="#ff7300" fill="#ff7300" fillOpacity={0.9} />
          <RechartsHookInspector />
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
}`,...(f=(A=a.parameters)==null?void 0:A.docs)==null?void 0:f.source}}};var u,y,C;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(C=(y=o.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};const j=["API","CustomType","CategoricalAreaChart"],B=Object.freeze(Object.defineProperty({__proto__:null,API:r,CategoricalAreaChart:o,CustomType:a,__namedExportsOrder:j,default:T},Symbol.toStringTag,{value:"Module"}));export{r as A,B as C};
