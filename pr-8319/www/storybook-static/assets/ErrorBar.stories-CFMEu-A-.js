import{R as r}from"./iframe-B9Tl-Ens.js";import{g as s}from"./utils-ePvtT4un.js";import{E as i}from"./ErrorBar-PxdZ3cJ2.js";import{R as p}from"./zIndexSlice-CeB5DPsb.js";import{S as l}from"./ScatterChart-HcGJxFD3.js";import{C as u}from"./CartesianGrid-UZ-yUTT_.js";import{X as y}from"./XAxis-DgmkF9Yy.js";import{Y as c}from"./YAxis-CjYRlTBq.js";import{S as d}from"./Scatter-BYlnGX_R.js";import"./preload-helper-Dp1pzeXC.js";import"./Layer-Bu8k813y.js";import"./resolveDefaultProps-Dx7qzCwA.js";import"./get-CjriyByo.js";import"./ErrorBarContext-BP3iz7Vb.js";import"./RechartsWrapper-DeTgaRib.js";import"./axisSelectors-x8C92zXU.js";import"./throttle-dfeJw9jR.js";import"./index-DuaVn5It.js";import"./index-DQWwV-s1.js";import"./polarAxisSelectors-C83zEpXU.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-Cl0QaiN4.js";import"./index-166nmvSm.js";import"./index-iYKKcn13.js";import"./renderedTicksSlice-BtRpF17f.js";import"./index-fTBi_u0-.js";import"./fillDefinitions-BDEW-tdf.js";import"./dataEntryStyles-DvmFQkM4.js";import"./Label-Dez-agGk.js";import"./Text-Bu0oCoIY.js";import"./ZIndexLayer-Ci5oHiVJ.js";import"./CSSTransitionAnimate-C0cKfw84.js";import"./useAnimationId-eoD8CiMN.js";import"./util-Dxo8gN5i.js";import"./CartesianChart-BbmwDwWI.js";import"./chartDataContext-DkV3RH4w.js";import"./CategoricalChart-BLl8H6lt.js";import"./CartesianAxis-BYNQxUMc.js";import"./types-BDfLdEx1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./activeStyles-B1QGMcNg.js";import"./Curve-pkk8Hz5i.js";import"./step-BuRhJuEF.js";import"./path-BBMZd4YL.js";import"./tooltipContext-BVEReTSw.js";import"./Symbols-BkCPJOBN.js";import"./symbol-CcaxO5ZF.js";import"./ActiveShapeUtils-CP-Ler3I.js";import"./SetGraphicalItem-BRGOOFmX.js";import"./useEffectiveDataKey-BhVu78c2.js";const h=[{x:45,y:100,z:150,errorY:[30,20],errorX:5},{x:100,y:200,z:200,errorY:[20,30],errorX:3},{x:120,y:100,z:260,errorY:20,errorX:[5,3]},{x:170,y:300,z:400,errorY:[15,18],errorX:4},{x:140,y:250,z:280,errorY:23,errorX:[6,7]},{x:150,y:400,z:500,errorY:[21,10],errorX:4},{x:110,y:280,z:200,errorY:21,errorX:[5,6]}],n={animationBegin:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"0"}},defaultValue:0},animationDuration:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"400"}},defaultValue:400},animationEasing:{table:{type:{summary:'"ease" | "ease-in" | "ease-in-out" | "ease-out" | "linear" | "spring" | EasingFunction | `cubic-bezier(${number},${number},${number},${number})`'},category:"Animation",defaultValue:{summary:"ease-in-out"}},defaultValue:"ease-in-out"},dataKey:{description:"Decides how to extract the value of this ErrorBar from the data:\n- `string`: the name of the field in the data object;\n- `number`: the index of the field in the data;\n- `function`: a function that receives the data object and returns the value of this ErrorBar.\n\nThe error values can be a single value for symmetric error bars;\nor an array of a lower and upper error value for asymmetric error bars.",table:{type:{summary:"DataKey<DataPointType, DataValueType>"},category:"General"}},direction:{description:`Direction of the error bar. Usually determined by chart layout, except in Scatter chart.
In Scatter chart, "x" means horizontal error bars, "y" means vertical error bars.`,table:{type:{summary:"number | string"},category:"General"}},isAnimationActive:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"Animation",defaultValue:{summary:"true"}},defaultValue:!0},stroke:{description:'The stroke color. If "none", no line will be drawn.',control:{type:"color"},table:{type:{summary:"string"},category:"Style"}},strokeWidth:{description:"The width of the stroke",table:{type:{summary:"number | string"},category:"Style"}},width:{description:`Width of the error bar ends (the serifs) in pixels.
This is not the total width of the error bar, but just the width of the little lines at the ends.

The total width of the error bar is determined by the data value plus/minus the error value.`,table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"5"}},defaultValue:5},zIndex:{control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"400"}},defaultValue:400}},cr={component:i,argTypes:n},e={render:m=>r.createElement(p,{width:"100%",height:500},r.createElement(l,{margin:{top:5,right:30,left:20,bottom:5},width:730,height:250},r.createElement(u,null),r.createElement(y,{dataKey:"x",type:"number"}),r.createElement(c,{dataKey:"y",type:"number"}),r.createElement(d,{data:h,fill:"#ff7300"},r.createElement(i,{dataKey:"errorY",...m})))),args:{...s(n),width:4,strokeWidth:2,stroke:"green",direction:"y",dataKey:"errorY"}},dr=["API"];var t,a,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};export{e as API,dr as __namedExportsOrder,cr as default};
