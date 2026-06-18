import{R as r}from"./iframe-BBGBS6DV.js";import{g as s}from"./utils-ePvtT4un.js";import{E as i}from"./ErrorBar-P_Aol3q9.js";import{R as l}from"./zIndexSlice-C7go6sDc.js";import{S as u}from"./ScatterChart-CTdds1rR.js";import{C as p}from"./CartesianGrid-CMWgKooE.js";import{X as y}from"./XAxis-CMxF0Wjl.js";import{Y as d}from"./YAxis-DsrpZZjl.js";import{S as c}from"./Scatter-7gJCN8HQ.js";import"./preload-helper-Dp1pzeXC.js";import"./Layer-C7b9GhMV.js";import"./get-BV7Nc0IZ.js";import"./resolveDefaultProps-CdaEo1sJ.js";import"./ErrorBarContext-BeUQIIOs.js";import"./RechartsWrapper-CZVIAxqy.js";import"./index-CLfBpOwp.js";import"./index-Bl5evuWS.js";import"./index-sfHPztcf.js";import"./index-BfdY1IDa.js";import"./immer-u2-xWsf6.js";import"./renderedTicksSlice-DeFm9vmM.js";import"./axisSelectors-DUU6Ovr8.js";import"./d3-scale-Ceq_dgL5.js";import"./string-B6fdYHAA.js";import"./isWellBehavedNumber-DqttSiMx.js";import"./PolarUtils-CTnnDHZv.js";import"./RegisterGraphicalItemId-B9dZ270Y.js";import"./CategoricalChart-BNe26d_a.js";import"./CSSTransitionAnimate-BG-j2fSt.js";import"./useAnimationId-CCG8jh7R.js";import"./ZIndexLayer-WmfwTIzB.js";import"./CartesianChart-8bJyHLLZ.js";import"./chartDataContext-6hP0GYiP.js";import"./CartesianAxis-DBDeoTme.js";import"./Text-CCZTp9OW.js";import"./DOMUtils-Da1klpxA.js";import"./Label-Iqg4BS5e.js";import"./types-Bj7fEVXg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-alz79Juh.js";import"./Curve-D7BUefvS.js";import"./step-Deq8dNp2.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DwcJ1qdw.js";import"./Symbols-RhqujVO2.js";import"./symbol-BVubqoOw.js";import"./ActiveShapeUtils-NLKbpFnA.js";import"./GraphicalItemClipPath-CkBiEPpf.js";import"./SetGraphicalItem-QS7NgdyV.js";const h=[{x:45,y:100,z:150,errorY:[30,20],errorX:5},{x:100,y:200,z:200,errorY:[20,30],errorX:3},{x:120,y:100,z:260,errorY:20,errorX:[5,3]},{x:170,y:300,z:400,errorY:[15,18],errorX:4},{x:140,y:250,z:280,errorY:23,errorX:[6,7]},{x:150,y:400,z:500,errorY:[21,10],errorX:4},{x:110,y:280,z:200,errorY:21,errorX:[5,6]}],n={animationBegin:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"0"}},defaultValue:0},animationDuration:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"400"}},defaultValue:400},animationEasing:{table:{type:{summary:'"ease" | "ease-in" | "ease-in-out" | "ease-out" | "linear" | "spring" | EasingFunction | `cubic-bezier(${number},${number},${number},${number})`'},category:"Animation",defaultValue:{summary:"ease-in-out"}},defaultValue:"ease-in-out"},dataKey:{description:"Decides how to extract the value of this ErrorBar from the data:\n- `string`: the name of the field in the data object;\n- `number`: the index of the field in the data;\n- `function`: a function that receives the data object and returns the value of this ErrorBar.\n\nThe error values can be a single value for symmetric error bars;\nor an array of a lower and upper error value for asymmetric error bars.",table:{type:{summary:"DataKey<DataPointType, DataValueType>"},category:"General"}},direction:{description:`Direction of the error bar. Usually determined by chart layout, except in Scatter chart.
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
