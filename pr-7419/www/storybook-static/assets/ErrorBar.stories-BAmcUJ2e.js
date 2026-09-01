import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{G as r,K as i}from"./zIndexSlice-B0Kxc9j6.js";import{n as a,t as o}from"./CartesianGrid-D3Nuobx9.js";import{n as s,t as c}from"./Scatter-VkNY1nmA.js";import{n as l,t as u}from"./XAxis-DaKmDvZB.js";import{n as d,t as f}from"./YAxis-DFF_vhTk.js";import{n as p,t as m}from"./ErrorBar-zObuVrr_.js";import{n as h,t as g}from"./ScatterChart-itE_2BwH.js";import{n as _,t as v}from"./utils-vqcWnakT.js";var y;function b(){return(b=t((()=>{y=[{x:45,y:100,z:150,errorY:[30,20],errorX:5},{x:100,y:200,z:200,errorY:[20,30],errorX:3},{x:120,y:100,z:260,errorY:20,errorX:[5,3]},{x:170,y:300,z:400,errorY:[15,18],errorX:4},{x:140,y:250,z:280,errorY:23,errorX:[6,7]},{x:150,y:400,z:500,errorY:[21,10],errorX:4},{x:110,y:280,z:200,errorY:21,errorX:[5,6]}]})))()}var x;function S(){return(S=t((()=>{x={animationBegin:{control:{type:`number`},table:{type:{summary:`number`},category:`Animation`,defaultValue:{summary:`0`}},defaultValue:0},animationDuration:{control:{type:`number`},table:{type:{summary:`number`},category:`Animation`,defaultValue:{summary:`400`}},defaultValue:400},animationEasing:{table:{type:{summary:'"ease" | "ease-in" | "ease-in-out" | "ease-out" | "linear" | "spring" | EasingFunction | `cubic-bezier(${number},${number},${number},${number})`'},category:`Animation`,defaultValue:{summary:`ease-in-out`}},defaultValue:`ease-in-out`},dataKey:{description:`Decides how to extract the value of this ErrorBar from the data:
- \`string\`: the name of the field in the data object;
- \`number\`: the index of the field in the data;
- \`function\`: a function that receives the data object and returns the value of this ErrorBar.

The error values can be a single value for symmetric error bars;
or an array of a lower and upper error value for asymmetric error bars.`,table:{type:{summary:`DataKey<DataPointType, DataValueType>`},category:`General`}},direction:{description:`Direction of the error bar. Usually determined by chart layout, except in Scatter chart.
In Scatter chart, "x" means horizontal error bars, "y" means vertical error bars.`,table:{type:{summary:`number | string`},category:`General`}},isAnimationActive:{control:{type:`boolean`},table:{type:{summary:`boolean`},category:`Animation`,defaultValue:{summary:`true`}},defaultValue:!0},stroke:{description:`The stroke color. If "none", no line will be drawn.`,control:{type:`color`},table:{type:{summary:`string`},category:`Style`}},strokeWidth:{description:`The width of the stroke`,table:{type:{summary:`number | string`},category:`Style`}},width:{description:`Width of the error bar ends (the serifs) in pixels.
This is not the total width of the error bar, but just the width of the little lines at the ends.

The total width of the error bar is determined by the data value plus/minus the error value.`,table:{type:{summary:`number | string`},category:`General`,defaultValue:{summary:`5`}},defaultValue:5},zIndex:{control:{type:`number`},table:{type:{summary:`number`},category:`General`,defaultValue:{summary:`400`}},defaultValue:400}}})))()}var C,w,T,E;function D(){return(D=t((()=>{C=e(n()),h(),p(),a(),l(),d(),i(),s(),b(),_(),S(),w={component:m,argTypes:x},T={render:e=>C.createElement(r,{width:`100%`,height:500},C.createElement(g,{margin:{top:5,right:30,left:20,bottom:5},width:730,height:250},C.createElement(o,null),C.createElement(u,{dataKey:`x`,type:`number`}),C.createElement(f,{dataKey:`y`,type:`number`}),C.createElement(c,{data:y,fill:`#ff7300`},C.createElement(m,{dataKey:`errorY`,...e})))),args:{...v(x),width:4,strokeWidth:2,stroke:`green`,direction:`y`,dataKey:`errorY`}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={500}>
        <ScatterChart margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }} width={730} height={250}>
          <CartesianGrid />
          <XAxis dataKey="x" type="number" />
          <YAxis dataKey="y" type="number" />
          <Scatter data={errorData} fill="#ff7300">
            <ErrorBar dataKey="errorY" {...args} />
          </Scatter>
        </ScatterChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(ErrorBarArgs),
    width: 4,
    strokeWidth: 2,
    stroke: 'green',
    direction: 'y',
    dataKey: 'errorY'
  }
}`,...T.parameters?.docs?.source}}},E=[`API`]})))()}D();export{T as API,E as __namedExportsOrder,w as default};