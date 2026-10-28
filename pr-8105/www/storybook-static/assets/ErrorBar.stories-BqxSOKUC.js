import{R as r}from"./iframe-BMnEk6rk.js";import{g as s}from"./utils-ePvtT4un.js";import{E as i}from"./ErrorBar-B3nUhb9F.js";import{R as p}from"./zIndexSlice-AHK2lLDY.js";import{S as l}from"./ScatterChart-CjkRIZWr.js";import{C as u}from"./CartesianGrid-BgeAcGhx.js";import{X as y}from"./XAxis-DO8MMAbO.js";import{Y as c}from"./YAxis-Bg-R0mkd.js";import{S as d}from"./Scatter-Q8K9S00p.js";import"./preload-helper-Dp1pzeXC.js";import"./Layer-DhQvAzDq.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-B_QljJZX.js";import"./ErrorBarContext-dq2106Y0.js";import"./RechartsWrapper-D4g7WfzD.js";import"./axisSelectors-p5JtpZwX.js";import"./throttle-BLJmRI7W.js";import"./index-lkPNhlVs.js";import"./index-Bttv8G3u.js";import"./polarAxisSelectors-CeZI25QH.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CFf5tOkL.js";import"./index-DVw0VuQJ.js";import"./index-Bk611d1z.js";import"./renderedTicksSlice-CBxoq99O.js";import"./index-Cs2FdYvJ.js";import"./dataEntryStyles-DegCLzhf.js";import"./pageBackground-CtZK7idk.js";import"./CSSTransitionAnimate-CwAT-dM_.js";import"./useAnimationId-Ctda-hFk.js";import"./util-Dxo8gN5i.js";import"./ZIndexLayer-B5NKkV0N.js";import"./CartesianChart-D8VYP9Px.js";import"./ZIndexPortal-BccU1gyk.js";import"./CategoricalChart-CejU0SpF.js";import"./CartesianAxis-1xDTwGjL.js";import"./Text-C8Qyn2EQ.js";import"./Label-h8wQzOus.js";import"./types-BEqbC_4a.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-Dd3JyrGq.js";import"./activeStyles-DlaO21qO.js";import"./Curve-D8kPdRuj.js";import"./step-OCTxecjD.js";import"./path-DyVhHtw_.js";import"./tooltipContext-AjAyigeH.js";import"./Symbols-H6KF7Fzl.js";import"./symbol-BrVg2837.js";import"./ActiveShapeUtils-BwTzV5YZ.js";import"./SetGraphicalItem-C1JNOq53.js";import"./useEffectiveDataKey-DQstj3az.js";const h=[{x:45,y:100,z:150,errorY:[30,20],errorX:5},{x:100,y:200,z:200,errorY:[20,30],errorX:3},{x:120,y:100,z:260,errorY:20,errorX:[5,3]},{x:170,y:300,z:400,errorY:[15,18],errorX:4},{x:140,y:250,z:280,errorY:23,errorX:[6,7]},{x:150,y:400,z:500,errorY:[21,10],errorX:4},{x:110,y:280,z:200,errorY:21,errorX:[5,6]}],n={animationBegin:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"0"}},defaultValue:0},animationDuration:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"400"}},defaultValue:400},animationEasing:{table:{type:{summary:'"ease" | "ease-in" | "ease-in-out" | "ease-out" | "linear" | "spring" | EasingFunction | `cubic-bezier(${number},${number},${number},${number})`'},category:"Animation",defaultValue:{summary:"ease-in-out"}},defaultValue:"ease-in-out"},dataKey:{description:"Decides how to extract the value of this ErrorBar from the data:\n- `string`: the name of the field in the data object;\n- `number`: the index of the field in the data;\n- `function`: a function that receives the data object and returns the value of this ErrorBar.\n\nThe error values can be a single value for symmetric error bars;\nor an array of a lower and upper error value for asymmetric error bars.",table:{type:{summary:"DataKey<DataPointType, DataValueType>"},category:"General"}},direction:{description:`Direction of the error bar. Usually determined by chart layout, except in Scatter chart.
In Scatter chart, "x" means horizontal error bars, "y" means vertical error bars.`,table:{type:{summary:"number | string"},category:"General"}},isAnimationActive:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"Animation",defaultValue:{summary:"true"}},defaultValue:!0},stroke:{description:'The stroke color. If "none", no line will be drawn.',control:{type:"color"},table:{type:{summary:"string"},category:"Style"}},strokeWidth:{description:"The width of the stroke",table:{type:{summary:"number | string"},category:"Style"}},width:{description:`Width of the error bar ends (the serifs) in pixels.
This is not the total width of the error bar, but just the width of the little lines at the ends.

The total width of the error bar is determined by the data value plus/minus the error value.`,table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"5"}},defaultValue:5},zIndex:{control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"400"}},defaultValue:400}},dr={component:i,argTypes:n},e={render:m=>r.createElement(p,{width:"100%",height:500},r.createElement(l,{margin:{top:5,right:30,left:20,bottom:5},width:730,height:250},r.createElement(u,null),r.createElement(y,{dataKey:"x",type:"number"}),r.createElement(c,{dataKey:"y",type:"number"}),r.createElement(d,{data:h,fill:"#ff7300"},r.createElement(i,{dataKey:"errorY",...m})))),args:{...s(n),width:4,strokeWidth:2,stroke:"green",direction:"y",dataKey:"errorY"}},hr=["API"];var t,a,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};export{e as API,hr as __namedExportsOrder,dr as default};
