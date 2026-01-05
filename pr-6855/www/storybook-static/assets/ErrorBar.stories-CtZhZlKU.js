import{e as r}from"./iframe-Da-M2bw_.js";import{g as t}from"./utils-ePvtT4un.js";import{E as i}from"./ErrorBar-CRUzqcmE.js";import{R as y}from"./arrayEqualityCheck-Bu1fao9w.js";import{S as c}from"./ScatterChart-CKVpzZ0Y.js";import{C as d}from"./CartesianGrid-BeDGJ5q1.js";import{X as p}from"./XAxis-CFyYvsY3.js";import{Y as u}from"./YAxis-u8ljMyRk.js";import{S as g}from"./Scatter-DO7N0JIs.js";import{R as h}from"./RechartsHookInspector-DN6fpuiF.js";const f=[{x:45,y:100,z:150,errorY:[30,20],errorX:5},{x:100,y:200,z:200,errorY:[20,30],errorX:3},{x:120,y:100,z:260,errorY:20,errorX:[5,3]},{x:170,y:300,z:400,errorY:[15,18],errorX:4},{x:140,y:250,z:280,errorY:23,errorX:[6,7]},{x:150,y:400,z:500,errorY:[21,10],errorX:4},{x:110,y:280,z:200,errorY:21,errorX:[5,6]}],n={dataKey:{description:`The key of a group of error values in data. The error values can be a single value for
          symmetric error bars; or an array of a lower and upper error value for asymmetric error
          bars.`,table:{type:{summary:"string | number | Function"},category:"General"}}},m={stroke:{description:"Color of the error bar lines",control:{type:"color"},table:{type:{summary:"string"},category:"Style"},defaultValue:"black"},width:{description:"Width of the error bar ends",table:{type:{summary:"string | number"},category:"Style",defaultValue:{summary:5}},defaultValue:5},strokeWidth:{description:"Width of the lines used to make the error bars",table:{type:{summary:"string | number"},category:"Style"},defaultValue:1.5},direction:{description:`Only used for ScatterChart with error bars in two directions.
    Only accepts a value of "x" or "y" and makes the error bars lie in that direction.`,table:{type:{summary:"string"},category:"Style"}}},b={component:i,argTypes:{...n,...m}},e={render:l=>r.createElement(y,{width:"100%",height:500},r.createElement(c,{margin:{top:5,right:30,left:20,bottom:5},width:730,height:250},r.createElement(d,null),r.createElement(p,{dataKey:"x",type:"number"}),r.createElement(u,{dataKey:"y",type:"number"}),r.createElement(g,{data:f,fill:"#ff7300"},r.createElement(i,{dataKey:"errorY",...l})),r.createElement(h,null))),args:{...t(n),...t(m),width:4,strokeWidth:2,stroke:"green",direction:"y",dataKey:"errorY"}};var o,a,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </ScatterChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(GeneralProps),
    ...getStoryArgsFromArgsTypesObject(StyleProps),
    width: 4,
    strokeWidth: 2,
    stroke: 'green',
    direction: 'y',
    dataKey: 'errorY'
  }
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const S=["API"],z=Object.freeze(Object.defineProperty({__proto__:null,API:e,__namedExportsOrder:S,default:b},Symbol.toStringTag,{value:"Module"}));export{e as A,z as C};
