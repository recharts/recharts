import{e as a}from"./iframe-BrTwOhsr.js";import{g as m}from"./utils-ePvtT4un.js";import{R as s}from"./RadialBarChartArgs-Dr1fJcdN.js";import{R as i}from"./RadialBarChart-D_03i1Za.js";import{R as p}from"./RadialBar-BcRkQHAA.js";import{T as d}from"./Tooltip-BOiBMA8K.js";import{R as n}from"./RechartsHookInspector-wr1qbxN7.js";import{p as c}from"./Page-Cj8EiXz7.js";const g={argTypes:s,component:i},r={name:"Simple",render:l=>a.createElement(i,{...l},a.createElement(p,{dataKey:"uv",activeShape:{fill:"red"},label:{position:"insideStart",fill:"white"}}),a.createElement(d,{defaultIndex:3}),a.createElement(n,null)),args:{...m(s),data:c,width:800,height:400}};var e,t,o;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
  name: 'Simple',
  render: (args: StorybookArgs) => {
    return <RadialBarChart {...args}>
        <RadialBar dataKey="uv" activeShape={{
        fill: 'red'
      }} label={{
        position: 'insideStart',
        fill: 'white'
      }} />
        <Tooltip defaultIndex={3} />
        <RechartsHookInspector />
      </RadialBarChart>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(RadialBarChartArgs),
    data: pageData,
    width: 800,
    height: 400
  }
}`,...(o=(t=r.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const h=["API"],C=Object.freeze(Object.defineProperty({__proto__:null,API:r,__namedExportsOrder:h,default:g},Symbol.toStringTag,{value:"Module"}));export{r as A,C};
