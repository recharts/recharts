import{R as r}from"./iframe-BpPwD_oK.js";import{g as s}from"./utils-ePvtT4un.js";import{E as i}from"./ErrorBar-BsuiZZFS.js";import{R as p}from"./zIndexSlice-CZskftau.js";import{S as l}from"./ScatterChart-CMsTYnAX.js";import{C as u}from"./CartesianGrid-CltJRHiR.js";import{X as y}from"./XAxis-Dja-Llqh.js";import{Y as c}from"./YAxis-GMxCrcAm.js";import{S as d}from"./Scatter-D8v5WvEx.js";import"./preload-helper-Dp1pzeXC.js";import"./Layer-uKCEWQEh.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-oHxAH6y3.js";import"./ErrorBarContext-C5It2V8R.js";import"./RechartsWrapper-DtJNI11v.js";import"./axisSelectors-CCOlr32b.js";import"./throttle-jRz9fd5W.js";import"./index-BDbYb2y7.js";import"./index-C-Ap2UZI.js";import"./polarAxisSelectors-gNxk2Qvg.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CBz-jIwW.js";import"./index-sbP1X6JH.js";import"./index-C3FSz61l.js";import"./renderedTicksSlice-BacllR_T.js";import"./index-DaSN1dEV.js";import"./fillDefinitions-BoqwWLdI.js";import"./dataEntryStyles-CSbDp-Df.js";import"./CSSTransitionAnimate-BibcIIBz.js";import"./useAnimationId-DjPYETUK.js";import"./util-Dxo8gN5i.js";import"./ZIndexLayer-BfN85Ldf.js";import"./CartesianChart-DUDm0Jrf.js";import"./ZIndexPortal-CPCtvPJx.js";import"./CategoricalChart-BCsFwQg5.js";import"./CartesianAxis-DPe5aXb5.js";import"./Text-BhQ_ePKx.js";import"./DOMUtils-BrCWiXlY.js";import"./Label-Dm2gX9XZ.js";import"./types-C3LEdY55.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-CdwfQdaD.js";import"./activeStyles-BKBboL8s.js";import"./Curve-CsmQrmZK.js";import"./step-uxJcfdRW.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CEYILYfp.js";import"./Symbols-CmOlxG5J.js";import"./symbol-CEUG_TNl.js";import"./ActiveShapeUtils-D3pEehn2.js";import"./SetGraphicalItem-CtMfZbBm.js";import"./useEffectiveDataKey-CeotyzvV.js";const h=[{x:45,y:100,z:150,errorY:[30,20],errorX:5},{x:100,y:200,z:200,errorY:[20,30],errorX:3},{x:120,y:100,z:260,errorY:20,errorX:[5,3]},{x:170,y:300,z:400,errorY:[15,18],errorX:4},{x:140,y:250,z:280,errorY:23,errorX:[6,7]},{x:150,y:400,z:500,errorY:[21,10],errorX:4},{x:110,y:280,z:200,errorY:21,errorX:[5,6]}],n={animationBegin:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"0"}},defaultValue:0},animationDuration:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"400"}},defaultValue:400},animationEasing:{table:{type:{summary:'"ease" | "ease-in" | "ease-in-out" | "ease-out" | "linear" | "spring" | EasingFunction | `cubic-bezier(${number},${number},${number},${number})`'},category:"Animation",defaultValue:{summary:"ease-in-out"}},defaultValue:"ease-in-out"},dataKey:{description:"Decides how to extract the value of this ErrorBar from the data:\n- `string`: the name of the field in the data object;\n- `number`: the index of the field in the data;\n- `function`: a function that receives the data object and returns the value of this ErrorBar.\n\nThe error values can be a single value for symmetric error bars;\nor an array of a lower and upper error value for asymmetric error bars.",table:{type:{summary:"DataKey<DataPointType, DataValueType>"},category:"General"}},direction:{description:`Direction of the error bar. Usually determined by chart layout, except in Scatter chart.
In Scatter chart, "x" means horizontal error bars, "y" means vertical error bars.`,table:{type:{summary:"number | string"},category:"General"}},isAnimationActive:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"Animation",defaultValue:{summary:"true"}},defaultValue:!0},stroke:{description:'The stroke color. If "none", no line will be drawn.',control:{type:"color"},table:{type:{summary:"string"},category:"Style"}},strokeWidth:{description:"The width of the stroke",table:{type:{summary:"number | string"},category:"Style"}},width:{description:`Width of the error bar ends (the serifs) in pixels.
This is not the total width of the error bar, but just the width of the little lines at the ends.

The total width of the error bar is determined by the data value plus/minus the error value.`,table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"5"}},defaultValue:5},zIndex:{control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"400"}},defaultValue:400}},hr={component:i,argTypes:n},e={render:m=>r.createElement(p,{width:"100%",height:500},r.createElement(l,{margin:{top:5,right:30,left:20,bottom:5},width:730,height:250},r.createElement(u,null),r.createElement(y,{dataKey:"x",type:"number"}),r.createElement(c,{dataKey:"y",type:"number"}),r.createElement(d,{data:h,fill:"#ff7300"},r.createElement(i,{dataKey:"errorY",...m})))),args:{...s(n),width:4,strokeWidth:2,stroke:"green",direction:"y",dataKey:"errorY"}},br=["API"];var t,a,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};export{e as API,br as __namedExportsOrder,hr as default};
