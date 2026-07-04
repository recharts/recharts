import{R as r}from"./iframe-DD3MNlJs.js";import{g as s}from"./utils-ePvtT4un.js";import{E as i}from"./ErrorBar-DK3IT0X1.js";import{R as l}from"./zIndexSlice-DsPtdaG-.js";import{S as u}from"./ScatterChart-CeUxmtkL.js";import{C as p}from"./CartesianGrid-C9oxbD3w.js";import{X as y}from"./XAxis-C5LFfJlv.js";import{Y as d}from"./YAxis-BU-eH5Uj.js";import{S as c}from"./Scatter-BGgIVkcb.js";import"./preload-helper-Dp1pzeXC.js";import"./Layer-BSwpDfMb.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Bl223uSE.js";import"./ErrorBarContext-C82oMdbu.js";import"./RechartsWrapper-CCnqh_-x.js";import"./index-DseUKmqi.js";import"./index-D7phJECN.js";import"./index-Bck27UYR.js";import"./index-a_wokTdP.js";import"./throttle-BsgVdVzc.js";import"./renderedTicksSlice-BfcmamU7.js";import"./axisSelectors-BHK7QjqO.js";import"./isWellBehavedNumber-CNMhuHyW.js";import"./d3-scale-yWlQ4_Nx.js";import"./PolarUtils-CTnnDHZv.js";import"./RegisterGraphicalItemId-UFa7fX9c.js";import"./CategoricalChart-Cq7n2KtT.js";import"./CSSTransitionAnimate-DbonM5nk.js";import"./useAnimationId-3wwsxOl9.js";import"./util-Dxo8gN5i.js";import"./ZIndexLayer-BIp4crEt.js";import"./CartesianChart-aRdig7-B.js";import"./chartDataContext-B7qXvLbV.js";import"./CartesianAxis-BeN5FwRC.js";import"./Text-BWwrC4eC.js";import"./DOMUtils-CKULAiMw.js";import"./Label-CTgAmEuq.js";import"./types-3SXpu3DM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems--KiCkiyG.js";import"./Curve-Bmu0g7Ld.js";import"./step-C2Nk1uI6.js";import"./path-DyVhHtw_.js";import"./tooltipContext-zpYBwVet.js";import"./Symbols-DO_i8AaJ.js";import"./symbol-BwzlA26m.js";import"./ActiveShapeUtils-DNZIetEU.js";import"./GraphicalItemClipPath-NC5NbT5H.js";import"./SetGraphicalItem-BanwGypR.js";const h=[{x:45,y:100,z:150,errorY:[30,20],errorX:5},{x:100,y:200,z:200,errorY:[20,30],errorX:3},{x:120,y:100,z:260,errorY:20,errorX:[5,3]},{x:170,y:300,z:400,errorY:[15,18],errorX:4},{x:140,y:250,z:280,errorY:23,errorX:[6,7]},{x:150,y:400,z:500,errorY:[21,10],errorX:4},{x:110,y:280,z:200,errorY:21,errorX:[5,6]}],n={animationBegin:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"0"}},defaultValue:0},animationDuration:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"400"}},defaultValue:400},animationEasing:{table:{type:{summary:'"ease" | "ease-in" | "ease-in-out" | "ease-out" | "linear" | "spring" | EasingFunction | `cubic-bezier(${number},${number},${number},${number})`'},category:"Animation",defaultValue:{summary:"ease-in-out"}},defaultValue:"ease-in-out"},dataKey:{description:"Decides how to extract the value of this ErrorBar from the data:\n- `string`: the name of the field in the data object;\n- `number`: the index of the field in the data;\n- `function`: a function that receives the data object and returns the value of this ErrorBar.\n\nThe error values can be a single value for symmetric error bars;\nor an array of a lower and upper error value for asymmetric error bars.",table:{type:{summary:"DataKey<DataPointType, DataValueType>"},category:"General"}},direction:{description:`Direction of the error bar. Usually determined by chart layout, except in Scatter chart.
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
