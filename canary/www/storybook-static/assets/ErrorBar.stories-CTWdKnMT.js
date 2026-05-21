import{e as r}from"./iframe-Cn9771Nb.js";import{g as s}from"./utils-ePvtT4un.js";import{E as i}from"./ErrorBar-B3NOi-06.js";import{g as l}from"./arrayEqualityCheck-D-ixwH56.js";import{S as u}from"./ScatterChart-DOM_I8qc.js";import{C as p}from"./CartesianGrid-GyJpwBAe.js";import{X as y}from"./XAxis-CdGr2Iem.js";import{Y as c}from"./YAxis-TQXh0mQm.js";import{S as d}from"./Scatter-BL-T5dfE.js";import{R as h}from"./RechartsHookInspector-ByD7qz5q.js";import"./preload-helper-Dp1pzeXC.js";import"./Layer-CoWJhcnT.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DDTNdovN.js";import"./ErrorBarContext-DTo-1FhF.js";import"./RechartsWrapper-1z_kIANU.js";import"./index-BoXkF8M8.js";import"./immer-Dn_-MauB.js";import"./hooks-O4XLkxr8.js";import"./axisSelectors-BMVy_6Bx.js";import"./d3-scale-BZXwjMGy.js";import"./zIndexSlice-B5zV17Bd.js";import"./renderedTicksSlice-CwaBKoDv.js";import"./PolarUtils-CTnnDHZv.js";import"./RegisterGraphicalItemId-BPnyUTiw.js";import"./CSSTransitionAnimate-C78cxO9o.js";import"./useAnimationId-5N3XsSyx.js";import"./ZIndexLayer-DUDNhmE-.js";import"./CartesianChart-B8UuiIR4.js";import"./chartDataContext-DlTJMN40.js";import"./CategoricalChart-Doln_IjV.js";import"./CartesianAxis-DUvQ6ZkT.js";import"./Text-Ds1KECTG.js";import"./DOMUtils-CumEt8nf.js";import"./Label-DQheKZVl.js";import"./types-BeorWpRA.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CChdz-3q.js";import"./Curve-qT1eTXpe.js";import"./step-BLbmOldc.js";import"./path-DyVhHtw_.js";import"./tooltipContext-Br-icOwL.js";import"./Symbols-7btMV5dQ.js";import"./symbol-Bxk0cYsM.js";import"./ActiveShapeUtils-CchfY29Y.js";import"./GraphicalItemClipPath-B_ckz-a6.js";import"./SetGraphicalItem-CgvN0HNW.js";import"./index-CIRzOza-.js";import"./ChartSizeDimensions-BsavwcKk.js";import"./OffsetShower-mfqGnir7.js";import"./PlotAreaShower-DtKJCQsO.js";const f=[{x:45,y:100,z:150,errorY:[30,20],errorX:5},{x:100,y:200,z:200,errorY:[20,30],errorX:3},{x:120,y:100,z:260,errorY:20,errorX:[5,3]},{x:170,y:300,z:400,errorY:[15,18],errorX:4},{x:140,y:250,z:280,errorY:23,errorX:[6,7]},{x:150,y:400,z:500,errorY:[21,10],errorX:4},{x:110,y:280,z:200,errorY:21,errorX:[5,6]}],n={animationBegin:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"0"}},defaultValue:0},animationDuration:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"400"}},defaultValue:400},animationEasing:{table:{type:{summary:'"ease" | "ease-in" | "ease-in-out" | "ease-out" | "linear" | "spring" | BezierEasingFunction | SpringEasingFunction | `cubic-bezier(${number},${number},${number},${number})`'},category:"Animation",defaultValue:{summary:"ease-in-out"}},defaultValue:"ease-in-out"},dataKey:{description:"Decides how to extract the value of this ErrorBar from the data:\n- `string`: the name of the field in the data object;\n- `number`: the index of the field in the data;\n- `function`: a function that receives the data object and returns the value of this ErrorBar.\n\nThe error values can be a single value for symmetric error bars;\nor an array of a lower and upper error value for asymmetric error bars.",table:{type:{summary:"DataKey<DataPointType, DataValueType>"},category:"General"}},direction:{description:`Direction of the error bar. Usually determined by chart layout, except in Scatter chart.
In Scatter chart, "x" means horizontal error bars, "y" means vertical error bars.`,table:{type:{summary:"number | string"},category:"General"}},isAnimationActive:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"Animation",defaultValue:{summary:"true"}},defaultValue:!0},stroke:{description:'The stroke color. If "none", no line will be drawn.',control:{type:"color"},table:{type:{summary:"string"},category:"Style",defaultValue:{summary:"black"}},defaultValue:"black"},strokeWidth:{description:"The width of the stroke",table:{type:{summary:"number | string"},category:"Style",defaultValue:{summary:"1.5"}},defaultValue:1.5},width:{description:`Width of the error bar ends (the serifs) in pixels.
This is not the total width of the error bar, but just the width of the little lines at the ends.

The total width of the error bar is determined by the data value plus/minus the error value.`,table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"5"}},defaultValue:5},zIndex:{control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"400"}},defaultValue:400}},dr={component:i,argTypes:n},e={render:m=>r.createElement(l,{width:"100%",height:500},r.createElement(u,{margin:{top:5,right:30,left:20,bottom:5},width:730,height:250},r.createElement(p,null),r.createElement(y,{dataKey:"x",type:"number"}),r.createElement(c,{dataKey:"y",type:"number"}),r.createElement(d,{data:f,fill:"#ff7300"},r.createElement(i,{dataKey:"errorY",...m})),r.createElement(h,null))),args:{...s(n),width:4,strokeWidth:2,stroke:"green",direction:"y",dataKey:"errorY"}};var t,a,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
    ...getStoryArgsFromArgsTypesObject(ErrorBarArgs),
    width: 4,
    strokeWidth: 2,
    stroke: 'green',
    direction: 'y',
    dataKey: 'errorY'
  }
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const hr=["API"];export{e as API,hr as __namedExportsOrder,dr as default};
