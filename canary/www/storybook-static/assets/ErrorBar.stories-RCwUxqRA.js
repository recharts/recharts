import{R as r}from"./iframe-CEaKFLOD.js";import{g as s}from"./utils-ePvtT4un.js";import{E as i}from"./ErrorBar-DR5tvPEk.js";import{R as p}from"./zIndexSlice-BW_-kNl2.js";import{S as l}from"./ScatterChart-CxPSgZ1g.js";import{C as u}from"./CartesianGrid-AgVp7jlP.js";import{X as y}from"./XAxis-xN7pSHzN.js";import{Y as c}from"./YAxis-Cm2tjuJm.js";import{S as d}from"./Scatter-BJtcM3CC.js";import"./preload-helper-Dp1pzeXC.js";import"./Layer-CAr7LORZ.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-y1moel4K.js";import"./ErrorBarContext-CtrcR3pN.js";import"./RechartsWrapper-CWplp24t.js";import"./axisSelectors-CCBeMCMj.js";import"./throttle-BTwCYOHA.js";import"./index-BP77GY6y.js";import"./index-Pesxz8sF.js";import"./isWellBehavedNumber-DMSwtAM2.js";import"./d3-scale-xgyjEPPy.js";import"./index-_btimE9G.js";import"./index-CqNUlXBo.js";import"./renderedTicksSlice-pAYw7YNa.js";import"./index-CA_j_GK2.js";import"./PolarUtils-CTnnDHZv.js";import"./RegisterGraphicalItemId-BZrlXr-M.js";import"./useId-DBCCsHcD.js";import"./CSSTransitionAnimate-CxH9PUwd.js";import"./useAnimationId-D_rlhFDI.js";import"./util-Dxo8gN5i.js";import"./ZIndexLayer--MuvhbKE.js";import"./useBackwardsCompatibleTheme-VjyVXj2U.js";import"./CartesianChart-BqEoKcYr.js";import"./chartDataContext-ehQpVm1w.js";import"./CategoricalChart-BHppyMGY.js";import"./CartesianAxis-DZYvFW8B.js";import"./Text-Bjai807M.js";import"./DOMUtils-DMHzK5Q0.js";import"./Label-BzoSUysL.js";import"./types-Da2TODPT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-BousSNqt.js";import"./Curve-DFnxsFyy.js";import"./step-SqhK0zoK.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DdgASxLO.js";import"./Symbols-5r6rCeAJ.js";import"./symbol-6uRkNH0Z.js";import"./ActiveShapeUtils-5t5AMzdk.js";import"./GraphicalItemClipPath-CA8fPvSm.js";import"./SetGraphicalItem-BktkMU9R.js";import"./useGraphicalItemIdentity-BnhZXg65.js";const h=[{x:45,y:100,z:150,errorY:[30,20],errorX:5},{x:100,y:200,z:200,errorY:[20,30],errorX:3},{x:120,y:100,z:260,errorY:20,errorX:[5,3]},{x:170,y:300,z:400,errorY:[15,18],errorX:4},{x:140,y:250,z:280,errorY:23,errorX:[6,7]},{x:150,y:400,z:500,errorY:[21,10],errorX:4},{x:110,y:280,z:200,errorY:21,errorX:[5,6]}],n={animationBegin:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"0"}},defaultValue:0},animationDuration:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"400"}},defaultValue:400},animationEasing:{table:{type:{summary:'"ease" | "ease-in" | "ease-in-out" | "ease-out" | "linear" | "spring" | EasingFunction | `cubic-bezier(${number},${number},${number},${number})`'},category:"Animation",defaultValue:{summary:"ease-in-out"}},defaultValue:"ease-in-out"},dataKey:{description:"Decides how to extract the value of this ErrorBar from the data:\n- `string`: the name of the field in the data object;\n- `number`: the index of the field in the data;\n- `function`: a function that receives the data object and returns the value of this ErrorBar.\n\nThe error values can be a single value for symmetric error bars;\nor an array of a lower and upper error value for asymmetric error bars.",table:{type:{summary:"DataKey<DataPointType, DataValueType>"},category:"General"}},direction:{description:`Direction of the error bar. Usually determined by chart layout, except in Scatter chart.
In Scatter chart, "x" means horizontal error bars, "y" means vertical error bars.`,table:{type:{summary:"number | string"},category:"General"}},isAnimationActive:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"Animation",defaultValue:{summary:"true"}},defaultValue:!0},stroke:{description:'The stroke color. If "none", no line will be drawn.',control:{type:"color"},table:{type:{summary:"string"},category:"Style"}},strokeWidth:{description:"The width of the stroke",table:{type:{summary:"number | string"},category:"Style"}},width:{description:`Width of the error bar ends (the serifs) in pixels.
This is not the total width of the error bar, but just the width of the little lines at the ends.

The total width of the error bar is determined by the data value plus/minus the error value.`,table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"5"}},defaultValue:5},zIndex:{control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"400"}},defaultValue:400}},br={component:i,argTypes:n},e={render:m=>r.createElement(p,{width:"100%",height:500},r.createElement(l,{margin:{top:5,right:30,left:20,bottom:5},width:730,height:250},r.createElement(u,null),r.createElement(y,{dataKey:"x",type:"number"}),r.createElement(c,{dataKey:"y",type:"number"}),r.createElement(d,{data:h,fill:"#ff7300"},r.createElement(i,{dataKey:"errorY",...m})))),args:{...s(n),width:4,strokeWidth:2,stroke:"green",direction:"y",dataKey:"errorY"}},fr=["API"];var t,a,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};export{e as API,fr as __namedExportsOrder,br as default};
