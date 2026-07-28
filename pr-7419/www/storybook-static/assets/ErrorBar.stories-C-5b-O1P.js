import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./react-43m7EBoo.js";import{B as r,H as i,P as a,Q as o,R as s,Vn as c,g as l,t as u}from"./iframe-BiMB5Acc.js";import{i as d,t as f}from"./data-J2vpPkF6.js";import{n as p,t as m}from"./utils-4uF5A2JM.js";var h,g=e((()=>{h={animationBegin:{control:{type:`number`},table:{type:{summary:`number`},category:`Animation`,defaultValue:{summary:`0`}},defaultValue:0},animationDuration:{control:{type:`number`},table:{type:{summary:`number`},category:`Animation`,defaultValue:{summary:`400`}},defaultValue:400},animationEasing:{table:{type:{summary:'"ease" | "ease-in" | "ease-in-out" | "ease-out" | "linear" | "spring" | EasingFunction | `cubic-bezier(${number},${number},${number},${number})`'},category:`Animation`,defaultValue:{summary:`ease-in-out`}},defaultValue:`ease-in-out`},dataKey:{description:`Decides how to extract the value of this ErrorBar from the data:
- \`string\`: the name of the field in the data object;
- \`number\`: the index of the field in the data;
- \`function\`: a function that receives the data object and returns the value of this ErrorBar.

The error values can be a single value for symmetric error bars;
or an array of a lower and upper error value for asymmetric error bars.`,table:{type:{summary:`DataKey<DataPointType, DataValueType>`},category:`General`}},direction:{description:`Direction of the error bar. Usually determined by chart layout, except in Scatter chart.
In Scatter chart, "x" means horizontal error bars, "y" means vertical error bars.`,table:{type:{summary:`number | string`},category:`General`}},isAnimationActive:{control:{type:`boolean`},table:{type:{summary:`boolean`},category:`Animation`,defaultValue:{summary:`true`}},defaultValue:!0},stroke:{description:`The stroke color. If "none", no line will be drawn.`,control:{type:`color`},table:{type:{summary:`string`},category:`Style`,defaultValue:{summary:`black`}},defaultValue:`black`},strokeWidth:{description:`The width of the stroke`,table:{type:{summary:`number | string`},category:`Style`,defaultValue:{summary:`1.5`}},defaultValue:1.5},width:{description:`Width of the error bar ends (the serifs) in pixels.
This is not the total width of the error bar, but just the width of the little lines at the ends.

The total width of the error bar is determined by the data value plus/minus the error value.`,table:{type:{summary:`number | string`},category:`General`,defaultValue:{summary:`5`}},defaultValue:5},zIndex:{control:{type:`number`},table:{type:{summary:`number`},category:`General`,defaultValue:{summary:`400`}},defaultValue:400}}})),_,v,y,b;e((()=>{_=t(n()),u(),f(),p(),g(),v={component:a,argTypes:h},y={render:e=>_.createElement(c,{width:`100%`,height:500},_.createElement(l,{margin:{top:5,right:30,left:20,bottom:5},width:730,height:250},_.createElement(o,null),_.createElement(r,{dataKey:`x`,type:`number`}),_.createElement(s,{dataKey:`y`,type:`number`}),_.createElement(i,{data:d,fill:`#ff7300`},_.createElement(a,{dataKey:`errorY`,...e})))),args:{...m(h),width:4,strokeWidth:2,stroke:`green`,direction:`y`,dataKey:`errorY`}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b=[`API`]}))();export{y as API,b as __namedExportsOrder,v as default};