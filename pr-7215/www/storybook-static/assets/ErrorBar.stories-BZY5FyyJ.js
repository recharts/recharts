import{e as r}from"./iframe-Cbg-fKNU.js";import{g as s}from"./utils-ePvtT4un.js";import{E as i}from"./ErrorBar-BHqNa1MB.js";import{g as l}from"./arrayEqualityCheck-hFPRsS2v.js";import{S as u}from"./ScatterChart-CdhgXith.js";import{C as p}from"./CartesianGrid-B52730MV.js";import{X as y}from"./XAxis-scJ13O_U.js";import{Y as c}from"./YAxis-DeM2VHlz.js";import{S as d}from"./Scatter-Lcc2ujiu.js";import{R as h}from"./RechartsHookInspector-D7okJ7xS.js";import"./preload-helper-Dp1pzeXC.js";import"./Layer-OlYOmPUf.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-D6T4fIvs.js";import"./ErrorBarContext-Q5zY_unn.js";import"./RechartsWrapper-EdxkrsQJ.js";import"./index-tFSrK1wv.js";import"./immer-S1zDTrNa.js";import"./hooks-CL-gQxGz.js";import"./axisSelectors-COlbOcyl.js";import"./d3-scale-DuHK7VZm.js";import"./string-yHBgcFlJ.js";import"./zIndexSlice-ByH7lQpu.js";import"./renderedTicksSlice-BAcUufvh.js";import"./PolarUtils-CTnnDHZv.js";import"./RegisterGraphicalItemId-CwmBMhGa.js";import"./CSSTransitionAnimate-WO5VFwVg.js";import"./useAnimationId-ClgLuj6x.js";import"./ZIndexLayer-qeHNPcT8.js";import"./CartesianChart-IEffqnC4.js";import"./chartDataContext-BUHR6knq.js";import"./CategoricalChart-DAwQUD4-.js";import"./CartesianAxis-A8y-DKmq.js";import"./Text-BtrwnnO1.js";import"./DOMUtils-BOYR8naz.js";import"./Label-Dne7i20P.js";import"./types-BpyuZwQS.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./AnimatedItems-POHvOeVE.js";import"./Curve-C22NWxJ6.js";import"./step-CgbJhf5W.js";import"./path-DyVhHtw_.js";import"./tooltipContext-7v6XnHpM.js";import"./Symbols-UYaWffC4.js";import"./symbol-DEGNIwBZ.js";import"./ActiveShapeUtils-Drq8bts1.js";import"./GraphicalItemClipPath-B0xiuhMH.js";import"./SetGraphicalItem-BIH6QpC3.js";import"./index-BkDgLzYn.js";import"./ChartSizeDimensions-D9mNUeVH.js";import"./OffsetShower-DsmXSBYW.js";import"./PlotAreaShower-CeGNuSiV.js";const f=[{x:45,y:100,z:150,errorY:[30,20],errorX:5},{x:100,y:200,z:200,errorY:[20,30],errorX:3},{x:120,y:100,z:260,errorY:20,errorX:[5,3]},{x:170,y:300,z:400,errorY:[15,18],errorX:4},{x:140,y:250,z:280,errorY:23,errorX:[6,7]},{x:150,y:400,z:500,errorY:[21,10],errorX:4},{x:110,y:280,z:200,errorY:21,errorX:[5,6]}],n={animationBegin:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"0"}},defaultValue:0},animationDuration:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"400"}},defaultValue:400},animationEasing:{table:{type:{summary:'"ease" | "ease-in" | "ease-in-out" | "ease-out" | "linear" | "spring" | BezierEasingFunction | SpringEasingFunction | `cubic-bezier(${number},${number},${number},${number})`'},category:"Animation",defaultValue:{summary:"ease-in-out"}},defaultValue:"ease-in-out"},dataKey:{description:"Decides how to extract the value of this ErrorBar from the data:\n- `string`: the name of the field in the data object;\n- `number`: the index of the field in the data;\n- `function`: a function that receives the data object and returns the value of this ErrorBar.\n\nThe error values can be a single value for symmetric error bars;\nor an array of a lower and upper error value for asymmetric error bars.",table:{type:{summary:"DataKey<DataPointType, DataValueType>"},category:"General"}},direction:{description:`Direction of the error bar. Usually determined by chart layout, except in Scatter chart.
In Scatter chart, "x" means horizontal error bars, "y" means vertical error bars.`,table:{type:{summary:"number | string"},category:"General"}},isAnimationActive:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"Animation",defaultValue:{summary:"true"}},defaultValue:!0},stroke:{description:'The stroke color. If "none", no line will be drawn.',control:{type:"color"},table:{type:{summary:"string"},category:"Style",defaultValue:{summary:"black"}},defaultValue:"black"},strokeWidth:{description:"The width of the stroke",table:{type:{summary:"number | string"},category:"Style",defaultValue:{summary:"1.5"}},defaultValue:1.5},width:{description:`Width of the error bar ends (the serifs) in pixels.
This is not the total width of the error bar, but just the width of the little lines at the ends.

The total width of the error bar is determined by the data value plus/minus the error value.`,table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"5"}},defaultValue:5},zIndex:{control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"400"}},defaultValue:400}},hr={component:i,argTypes:n},e={render:m=>r.createElement(l,{width:"100%",height:500},r.createElement(u,{margin:{top:5,right:30,left:20,bottom:5},width:730,height:250},r.createElement(p,null),r.createElement(y,{dataKey:"x",type:"number"}),r.createElement(c,{dataKey:"y",type:"number"}),r.createElement(d,{data:f,fill:"#ff7300"},r.createElement(i,{dataKey:"errorY",...m})),r.createElement(h,null))),args:{...s(n),width:4,strokeWidth:2,stroke:"green",direction:"y",dataKey:"errorY"}};var t,a,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const fr=["API"];export{e as API,fr as __namedExportsOrder,hr as default};
