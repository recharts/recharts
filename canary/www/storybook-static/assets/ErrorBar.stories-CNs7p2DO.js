import{R as r}from"./iframe-DyLoEKVT.js";import{g as s}from"./utils-ePvtT4un.js";import{E as i}from"./ErrorBar-BP5WAOAj.js";import{R as l}from"./zIndexSlice-BMJvLT6-.js";import{S as u}from"./ScatterChart-0rIUbudc.js";import{C as p}from"./CartesianGrid-ANxmcrPG.js";import{X as y}from"./XAxis-9OVyrDRG.js";import{Y as d}from"./YAxis-nsTECOPY.js";import{S as c}from"./Scatter-zzXspsHj.js";import"./preload-helper-Dp1pzeXC.js";import"./Layer-1PJWGF6B.js";import"./get-DowO2FG-.js";import"./resolveDefaultProps-v4--KFNE.js";import"./ErrorBarContext-CuSWRyRz.js";import"./RechartsWrapper--UzxIxEu.js";import"./index-CufWBdFA.js";import"./index-PISW76kq.js";import"./index-ChIcT5we.js";import"./index-DlqbmUdM.js";import"./immer-BagcJtG2.js";import"./renderedTicksSlice-BqkZndXs.js";import"./axisSelectors-CnSKWHKt.js";import"./d3-scale-CTXcb0ZT.js";import"./string-B6fdYHAA.js";import"./isWellBehavedNumber-DNtaqKPn.js";import"./PolarUtils-CTnnDHZv.js";import"./RegisterGraphicalItemId-CalLmt4D.js";import"./CategoricalChart-nR7o8SXq.js";import"./CSSTransitionAnimate-DUWMZeRe.js";import"./useAnimationId-C3XlQNNz.js";import"./ZIndexLayer-DHFxHLUr.js";import"./CartesianChart-BuXwJSrD.js";import"./chartDataContext-DJBEQzNo.js";import"./CartesianAxis-DVRkpibw.js";import"./Text-DbHSmtym.js";import"./DOMUtils-DO9od7PA.js";import"./Label-Bc99EiAM.js";import"./types-ChV1_7kb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-DZ2CDn43.js";import"./Curve-aK0jXQoR.js";import"./step-BI2jLazT.js";import"./path-DyVhHtw_.js";import"./tooltipContext-C0k4tkhk.js";import"./Symbols-BgFHj5o9.js";import"./symbol-BzH8IghT.js";import"./ActiveShapeUtils-DR5RhSUS.js";import"./GraphicalItemClipPath-B_O83OKV.js";import"./SetGraphicalItem-Ve1ljg4L.js";const h=[{x:45,y:100,z:150,errorY:[30,20],errorX:5},{x:100,y:200,z:200,errorY:[20,30],errorX:3},{x:120,y:100,z:260,errorY:20,errorX:[5,3]},{x:170,y:300,z:400,errorY:[15,18],errorX:4},{x:140,y:250,z:280,errorY:23,errorX:[6,7]},{x:150,y:400,z:500,errorY:[21,10],errorX:4},{x:110,y:280,z:200,errorY:21,errorX:[5,6]}],n={animationBegin:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"0"}},defaultValue:0},animationDuration:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"400"}},defaultValue:400},animationEasing:{table:{type:{summary:'"ease" | "ease-in" | "ease-in-out" | "ease-out" | "linear" | "spring" | BezierEasingFunction | SpringEasingFunction | `cubic-bezier(${number},${number},${number},${number})`'},category:"Animation",defaultValue:{summary:"ease-in-out"}},defaultValue:"ease-in-out"},dataKey:{description:"Decides how to extract the value of this ErrorBar from the data:\n- `string`: the name of the field in the data object;\n- `number`: the index of the field in the data;\n- `function`: a function that receives the data object and returns the value of this ErrorBar.\n\nThe error values can be a single value for symmetric error bars;\nor an array of a lower and upper error value for asymmetric error bars.",table:{type:{summary:"DataKey<DataPointType, DataValueType>"},category:"General"}},direction:{description:`Direction of the error bar. Usually determined by chart layout, except in Scatter chart.
In Scatter chart, "x" means horizontal error bars, "y" means vertical error bars.`,table:{type:{summary:"number | string"},category:"General"}},isAnimationActive:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"Animation",defaultValue:{summary:"true"}},defaultValue:!0},stroke:{description:'The stroke color. If "none", no line will be drawn.',control:{type:"color"},table:{type:{summary:"string"},category:"Style",defaultValue:{summary:"black"}},defaultValue:"black"},strokeWidth:{description:"The width of the stroke",table:{type:{summary:"number | string"},category:"Style",defaultValue:{summary:"1.5"}},defaultValue:1.5},width:{description:`Width of the error bar ends (the serifs) in pixels.
This is not the total width of the error bar, but just the width of the little lines at the ends.

The total width of the error bar is determined by the data value plus/minus the error value.`,table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"5"}},defaultValue:5},zIndex:{control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"400"}},defaultValue:400}},pr={component:i,argTypes:n},e={render:m=>r.createElement(l,{width:"100%",height:500},r.createElement(u,{margin:{top:5,right:30,left:20,bottom:5},width:730,height:250},r.createElement(p,null),r.createElement(y,{dataKey:"x",type:"number"}),r.createElement(d,{dataKey:"y",type:"number"}),r.createElement(c,{data:h,fill:"#ff7300"},r.createElement(i,{dataKey:"errorY",...m})))),args:{...s(n),width:4,strokeWidth:2,stroke:"green",direction:"y",dataKey:"errorY"}};var t,a,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const yr=["API"];export{e as API,yr as __namedExportsOrder,pr as default};
