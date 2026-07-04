import{R as r}from"./iframe-CwAvad--.js";import{g as s}from"./utils-ePvtT4un.js";import{E as i}from"./ErrorBar-DBuBA59O.js";import{R as l}from"./zIndexSlice-B2fpzDns.js";import{S as u}from"./ScatterChart-DyvYQuFh.js";import{C as p}from"./CartesianGrid-DllQ9z3q.js";import{X as y}from"./XAxis-BvogKVrk.js";import{Y as d}from"./YAxis-MJLPmDW2.js";import{S as c}from"./Scatter-BFRCDM92.js";import"./preload-helper-Dp1pzeXC.js";import"./Layer-DrEfcBvU.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-IMOML7UF.js";import"./ErrorBarContext-CChsqgpp.js";import"./RechartsWrapper-yCiiQ5ZZ.js";import"./index-C7e37hiD.js";import"./index-Be6HzbxO.js";import"./index-Dn-gVD0q.js";import"./index-Bp9sH-Ly.js";import"./throttle-CrTklCSM.js";import"./renderedTicksSlice-DxVowf0r.js";import"./axisSelectors-gPKIePgu.js";import"./isWellBehavedNumber-zbfLgurd.js";import"./d3-scale-D8xH9yG8.js";import"./PolarUtils-CTnnDHZv.js";import"./RegisterGraphicalItemId-C2zHigBB.js";import"./CategoricalChart-Bfs9hS_5.js";import"./CSSTransitionAnimate-CNn3PHb5.js";import"./useAnimationId--5AtISHD.js";import"./util-Dxo8gN5i.js";import"./ZIndexLayer-nfC8QR9T.js";import"./CartesianChart-DnHhaR9q.js";import"./chartDataContext-QAMmb-FO.js";import"./CartesianAxis-Bp0BWyNg.js";import"./Text-CMmFO1Ku.js";import"./DOMUtils-Wq5LU4mE.js";import"./Label-Bfni9WDi.js";import"./types-MLS83tAs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-ChIe5_bS.js";import"./Curve-D0-SKbNI.js";import"./step-2IVSrnG4.js";import"./path-DyVhHtw_.js";import"./tooltipContext-Dk_76_YD.js";import"./Symbols-Gg7Vpfem.js";import"./symbol-BMZOsAHr.js";import"./ActiveShapeUtils-BNg4U5cF.js";import"./GraphicalItemClipPath-BiAQEIv1.js";import"./SetGraphicalItem-BRzb5Fh_.js";const h=[{x:45,y:100,z:150,errorY:[30,20],errorX:5},{x:100,y:200,z:200,errorY:[20,30],errorX:3},{x:120,y:100,z:260,errorY:20,errorX:[5,3]},{x:170,y:300,z:400,errorY:[15,18],errorX:4},{x:140,y:250,z:280,errorY:23,errorX:[6,7]},{x:150,y:400,z:500,errorY:[21,10],errorX:4},{x:110,y:280,z:200,errorY:21,errorX:[5,6]}],n={animationBegin:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"0"}},defaultValue:0},animationDuration:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"400"}},defaultValue:400},animationEasing:{table:{type:{summary:'"ease" | "ease-in" | "ease-in-out" | "ease-out" | "linear" | "spring" | EasingFunction | `cubic-bezier(${number},${number},${number},${number})`'},category:"Animation",defaultValue:{summary:"ease-in-out"}},defaultValue:"ease-in-out"},dataKey:{description:"Decides how to extract the value of this ErrorBar from the data:\n- `string`: the name of the field in the data object;\n- `number`: the index of the field in the data;\n- `function`: a function that receives the data object and returns the value of this ErrorBar.\n\nThe error values can be a single value for symmetric error bars;\nor an array of a lower and upper error value for asymmetric error bars.",table:{type:{summary:"DataKey<DataPointType, DataValueType>"},category:"General"}},direction:{description:`Direction of the error bar. Usually determined by chart layout, except in Scatter chart.
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
