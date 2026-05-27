import{e as r}from"./iframe-DJXOgax2.js";import{g as s}from"./utils-ePvtT4un.js";import{E as i}from"./ErrorBar-BptBZMwY.js";import{g as l}from"./arrayEqualityCheck-k7PS2xak.js";import{S as u}from"./ScatterChart-BmTEwK2h.js";import{C as p}from"./CartesianGrid-BAYEYSZr.js";import{X as y}from"./XAxis-9kxG52aU.js";import{Y as c}from"./YAxis-DRv5Ieqa.js";import{S as d}from"./Scatter-DBEjXsfq.js";import{R as h}from"./RechartsHookInspector-s82vtdQF.js";import"./preload-helper-Dp1pzeXC.js";import"./Layer-PAWXt2PX.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DPbWDBA5.js";import"./ErrorBarContext-Cq-5bVpD.js";import"./RechartsWrapper-BaSgqIB_.js";import"./index-BNAJMwXV.js";import"./immer-2a_xTrdV.js";import"./hooks-CZ0TOrWM.js";import"./axisSelectors-Dr5KL0ZI.js";import"./d3-scale-DuWCsZHZ.js";import"./zIndexSlice-B--1gOPM.js";import"./renderedTicksSlice-Bl5jCaCZ.js";import"./PolarUtils-CTnnDHZv.js";import"./RegisterGraphicalItemId-BxDB977O.js";import"./CSSTransitionAnimate-DVATUTlA.js";import"./useAnimationId-B1Sa6L7Z.js";import"./ZIndexLayer-DVdyi4xb.js";import"./CartesianChart-BFo4vKxS.js";import"./chartDataContext-kJxPcL-i.js";import"./CategoricalChart-Bx8_lMCZ.js";import"./CartesianAxis-BuS9D4Ek.js";import"./Text-npnYAvG4.js";import"./DOMUtils-i2w-QAqd.js";import"./Label-C8y2_6Vy.js";import"./types-CX2SK57G.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-DyBcDzzn.js";import"./Curve-BPyFb2hT.js";import"./step-Bwlnh61x.js";import"./path-DyVhHtw_.js";import"./tooltipContext-COH2Afi-.js";import"./Symbols-BMOYVBcW.js";import"./symbol-DR8oIFTo.js";import"./ActiveShapeUtils-TINQfrs9.js";import"./GraphicalItemClipPath-BH4qa2aX.js";import"./SetGraphicalItem-W-67q1_i.js";import"./index-Bnctlgv-.js";import"./ChartSizeDimensions-Dwe9HRTS.js";import"./OffsetShower-BjMyZ4ga.js";import"./PlotAreaShower-6s_jSFmp.js";const f=[{x:45,y:100,z:150,errorY:[30,20],errorX:5},{x:100,y:200,z:200,errorY:[20,30],errorX:3},{x:120,y:100,z:260,errorY:20,errorX:[5,3]},{x:170,y:300,z:400,errorY:[15,18],errorX:4},{x:140,y:250,z:280,errorY:23,errorX:[6,7]},{x:150,y:400,z:500,errorY:[21,10],errorX:4},{x:110,y:280,z:200,errorY:21,errorX:[5,6]}],n={animationBegin:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"0"}},defaultValue:0},animationDuration:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"400"}},defaultValue:400},animationEasing:{table:{type:{summary:'"ease" | "ease-in" | "ease-in-out" | "ease-out" | "linear" | "spring" | BezierEasingFunction | SpringEasingFunction | `cubic-bezier(${number},${number},${number},${number})`'},category:"Animation",defaultValue:{summary:"ease-in-out"}},defaultValue:"ease-in-out"},dataKey:{description:"Decides how to extract the value of this ErrorBar from the data:\n- `string`: the name of the field in the data object;\n- `number`: the index of the field in the data;\n- `function`: a function that receives the data object and returns the value of this ErrorBar.\n\nThe error values can be a single value for symmetric error bars;\nor an array of a lower and upper error value for asymmetric error bars.",table:{type:{summary:"DataKey<DataPointType, DataValueType>"},category:"General"}},direction:{description:`Direction of the error bar. Usually determined by chart layout, except in Scatter chart.
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
