import{R as r}from"./iframe-Bs1YcocL.js";import{g as s}from"./utils-ePvtT4un.js";import{E as i}from"./ErrorBar-CXBosrAH.js";import{R as l}from"./zIndexSlice-t-gzu3GV.js";import{S as u}from"./ScatterChart-DsFGnXJ5.js";import{C as p}from"./CartesianGrid-BCkiCSha.js";import{X as y}from"./XAxis-CkMNNwML.js";import{Y as d}from"./YAxis-DPiwbt5y.js";import{S as c}from"./Scatter-Bgjwitji.js";import"./preload-helper-Dp1pzeXC.js";import"./Layer-C-8BEA-e.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BnOzFFcK.js";import"./ErrorBarContext-CMWCgNCI.js";import"./RechartsWrapper-DZyIyn43.js";import"./index-D9ADN89d.js";import"./index-CKxampel.js";import"./index-UwTvLFMH.js";import"./index-BRumuJ4r.js";import"./throttle--2-Gh3Mm.js";import"./renderedTicksSlice-BTmhgiNO.js";import"./axisSelectors-DMllfokS.js";import"./isWellBehavedNumber-BSPOqlf0.js";import"./d3-scale-37tvwNAS.js";import"./PolarUtils-CTnnDHZv.js";import"./RegisterGraphicalItemId-CjkTx9Ub.js";import"./CategoricalChart-WxCIVI_m.js";import"./CSSTransitionAnimate-cdbjac51.js";import"./useAnimationId-BX2lcr_s.js";import"./util-Dxo8gN5i.js";import"./ZIndexLayer-CN0cINvr.js";import"./CartesianChart-CcQU6wxH.js";import"./chartDataContext-CPXqqfzF.js";import"./CartesianAxis-D8VsSsOs.js";import"./Text-BklYvR7D.js";import"./DOMUtils-cVtaUTCs.js";import"./Label-XTRgfpgH.js";import"./types-DYZE7YT1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-BJx7sqXo.js";import"./Curve-Bk-KwfJi.js";import"./step-Bu2gjmXw.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CysZnF7i.js";import"./Symbols-B5HVxo-V.js";import"./symbol-CTzxYCh9.js";import"./ActiveShapeUtils-CQH8McUN.js";import"./GraphicalItemClipPath-DVFJRr4Y.js";import"./SetGraphicalItem-Bacz05Gx.js";const h=[{x:45,y:100,z:150,errorY:[30,20],errorX:5},{x:100,y:200,z:200,errorY:[20,30],errorX:3},{x:120,y:100,z:260,errorY:20,errorX:[5,3]},{x:170,y:300,z:400,errorY:[15,18],errorX:4},{x:140,y:250,z:280,errorY:23,errorX:[6,7]},{x:150,y:400,z:500,errorY:[21,10],errorX:4},{x:110,y:280,z:200,errorY:21,errorX:[5,6]}],n={animationBegin:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"0"}},defaultValue:0},animationDuration:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"400"}},defaultValue:400},animationEasing:{table:{type:{summary:'"ease" | "ease-in" | "ease-in-out" | "ease-out" | "linear" | "spring" | EasingFunction | `cubic-bezier(${number},${number},${number},${number})`'},category:"Animation",defaultValue:{summary:"ease-in-out"}},defaultValue:"ease-in-out"},dataKey:{description:"Decides how to extract the value of this ErrorBar from the data:\n- `string`: the name of the field in the data object;\n- `number`: the index of the field in the data;\n- `function`: a function that receives the data object and returns the value of this ErrorBar.\n\nThe error values can be a single value for symmetric error bars;\nor an array of a lower and upper error value for asymmetric error bars.",table:{type:{summary:"DataKey<DataPointType, DataValueType>"},category:"General"}},direction:{description:`Direction of the error bar. Usually determined by chart layout, except in Scatter chart.
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
