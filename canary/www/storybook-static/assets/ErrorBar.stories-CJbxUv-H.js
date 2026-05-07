import{e as r}from"./iframe-BgwmBjfB.js";import{g as s}from"./utils-ePvtT4un.js";import{E as i}from"./ErrorBar-DOmBYCOP.js";import{R as l}from"./arrayEqualityCheck-B1qnogVb.js";import{S as p}from"./ScatterChart-B9sXhRE2.js";import{C as u}from"./CartesianGrid-DyPZQOQ_.js";import{X as y}from"./XAxis-BX9DZiaX.js";import{Y as c}from"./YAxis-DL4fvP6H.js";import{S as d}from"./Scatter-HFlJ5NqR.js";import{R as h}from"./RechartsHookInspector-OzbFILx_.js";import"./preload-helper-Dp1pzeXC.js";import"./Layer-sKAIqvEC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-qucNpk_A.js";import"./ErrorBarContext-CLlFokOM.js";import"./RechartsWrapper-BzFnIirW.js";import"./index-Dw-9JZxy.js";import"./immer-L1QYf-NE.js";import"./hooks-BBhaKEpc.js";import"./axisSelectors-p-DsPcsN.js";import"./d3-scale-C0r8W7gC.js";import"./zIndexSlice-9mnJo3WO.js";import"./renderedTicksSlice-kbflTFpl.js";import"./PolarUtils-CTnnDHZv.js";import"./RegisterGraphicalItemId-CtttlxaS.js";import"./CSSTransitionAnimate-B71LT0SH.js";import"./useAnimationId-nEXiQ4wd.js";import"./ZIndexLayer-DX-nM8qM.js";import"./CartesianChart-C8IYYlhJ.js";import"./chartDataContext-DR_cij4x.js";import"./CategoricalChart-DrEP-5RI.js";import"./CartesianAxis-GtFYCfV6.js";import"./Text-D7VqnjvF.js";import"./DOMUtils-CUsjemqf.js";import"./Label-BeTMxE7h.js";import"./types-CFdz9x_M.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-Dla0XjmI.js";import"./Curve-D2S6CN-2.js";import"./step-BxFdL0zf.js";import"./tooltipContext-CfLoOiAX.js";import"./Symbols-CqgbDjwG.js";import"./symbol-D69U7vWh.js";import"./ActiveShapeUtils-Bc3Bo2kR.js";import"./isPlainObject-DCrRKxze.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-xy71HFhS.js";import"./Trapezoid-Ctq3RZiG.js";import"./Sector-B8iCNGe2.js";import"./GraphicalItemClipPath-bS3Dkt_2.js";import"./SetGraphicalItem-CbRoDUDG.js";import"./index-B_0cWXev.js";import"./ChartSizeDimensions-BOdb3hAs.js";import"./OffsetShower-NinoivPu.js";import"./PlotAreaShower-BvfC-KbU.js";const f=[{x:45,y:100,z:150,errorY:[30,20],errorX:5},{x:100,y:200,z:200,errorY:[20,30],errorX:3},{x:120,y:100,z:260,errorY:20,errorX:[5,3]},{x:170,y:300,z:400,errorY:[15,18],errorX:4},{x:140,y:250,z:280,errorY:23,errorX:[6,7]},{x:150,y:400,z:500,errorY:[21,10],errorX:4},{x:110,y:280,z:200,errorY:21,errorX:[5,6]}],n={animationBegin:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"0"}},defaultValue:0},animationDuration:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"400"}},defaultValue:400},animationEasing:{table:{type:{summary:'"ease" | "ease-in" | "ease-in-out" | "ease-out" | "linear" | "spring" | BezierEasingFunction | SpringEasingFunction | `cubic-bezier(${number},${number},${number},${number})`'},category:"Animation",defaultValue:{summary:"ease-in-out"}},defaultValue:"ease-in-out"},dataKey:{description:"Decides how to extract the value of this ErrorBar from the data:\n- `string`: the name of the field in the data object;\n- `number`: the index of the field in the data;\n- `function`: a function that receives the data object and returns the value of this ErrorBar.\n\nThe error values can be a single value for symmetric error bars;\nor an array of a lower and upper error value for asymmetric error bars.",table:{type:{summary:"DataKey<DataPointType, DataValueType>"},category:"General"}},direction:{description:`Direction of the error bar. Usually determined by chart layout, except in Scatter chart.
In Scatter chart, "x" means horizontal error bars, "y" means vertical error bars.`,table:{type:{summary:"number | string"},category:"General"}},isAnimationActive:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"Animation",defaultValue:{summary:"true"}},defaultValue:!0},stroke:{description:'The stroke color. If "none", no line will be drawn.',control:{type:"color"},table:{type:{summary:"string"},category:"Style",defaultValue:{summary:"black"}},defaultValue:"black"},strokeWidth:{description:"The width of the stroke",table:{type:{summary:"number | string"},category:"Style",defaultValue:{summary:"1.5"}},defaultValue:1.5},width:{description:`Width of the error bar ends (the serifs) in pixels.
This is not the total width of the error bar, but just the width of the little lines at the ends.

The total width of the error bar is determined by the data value plus/minus the error value.`,table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"5"}},defaultValue:5},zIndex:{control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"400"}},defaultValue:400}},gr={component:i,argTypes:n},e={render:m=>r.createElement(l,{width:"100%",height:500},r.createElement(p,{margin:{top:5,right:30,left:20,bottom:5},width:730,height:250},r.createElement(u,null),r.createElement(y,{dataKey:"x",type:"number"}),r.createElement(c,{dataKey:"y",type:"number"}),r.createElement(d,{data:f,fill:"#ff7300"},r.createElement(i,{dataKey:"errorY",...m})),r.createElement(h,null))),args:{...s(n),width:4,strokeWidth:2,stroke:"green",direction:"y",dataKey:"errorY"}};var t,a,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const xr=["API"];export{e as API,xr as __namedExportsOrder,gr as default};
