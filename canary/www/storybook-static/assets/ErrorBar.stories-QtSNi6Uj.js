import{R as r}from"./iframe-CuGhPmlk.js";import{g as s}from"./utils-ePvtT4un.js";import{E as i}from"./ErrorBar-B4L1tcLy.js";import{R as p}from"./zIndexSlice-BOf55cXv.js";import{S as l}from"./ScatterChart-hCBLyS4j.js";import{C as u}from"./CartesianGrid-Dm2DOXaA.js";import{X as y}from"./XAxis-CKjURUro.js";import{Y as c}from"./YAxis-DLBgWodt.js";import{S as d}from"./Scatter-B-WcStXp.js";import"./preload-helper-Dp1pzeXC.js";import"./Layer-C-miwaoG.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-JU216Ibw.js";import"./ErrorBarContext-B35UIqZH.js";import"./RechartsWrapper-CkD6y7S6.js";import"./axisSelectors-Bzh2qDn8.js";import"./throttle-D0-4r1vg.js";import"./index-D9ZLEpwh.js";import"./index-CLkWjMz0.js";import"./polarAxisSelectors-BwdXKLtW.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DH8f3Idv.js";import"./index-pU8qqa02.js";import"./index--76JpPy7.js";import"./renderedTicksSlice-DbYgrNox.js";import"./index-CxvEfTaS.js";import"./dataEntryStyles-DpUTp7qZ.js";import"./pageBackground-DCo2yzAB.js";import"./CSSTransitionAnimate-pAo-D6Kc.js";import"./useAnimationId-DwU2Zwh7.js";import"./util-Dxo8gN5i.js";import"./ZIndexLayer-BtXB3z2o.js";import"./CartesianChart-CEtK8vTY.js";import"./ZIndexPortal-ClQ_oNM2.js";import"./CategoricalChart-DiUb-iYo.js";import"./CartesianAxis-D0E-Hq6W.js";import"./Text-L-8TUXNX.js";import"./Label-B62wTY7D.js";import"./types-B0LhVrLk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-T4o6_Eqe.js";import"./activeStyles-U82greWp.js";import"./Curve-Cv9VJ7_-.js";import"./step-Bpop3Ls-.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DBELoiW1.js";import"./Symbols-DiagS28o.js";import"./symbol-CetSzj0T.js";import"./ActiveShapeUtils-BpXA90LR.js";import"./SetGraphicalItem-Csvl1Ioj.js";import"./useEffectiveDataKey-Q10jxXsl.js";const h=[{x:45,y:100,z:150,errorY:[30,20],errorX:5},{x:100,y:200,z:200,errorY:[20,30],errorX:3},{x:120,y:100,z:260,errorY:20,errorX:[5,3]},{x:170,y:300,z:400,errorY:[15,18],errorX:4},{x:140,y:250,z:280,errorY:23,errorX:[6,7]},{x:150,y:400,z:500,errorY:[21,10],errorX:4},{x:110,y:280,z:200,errorY:21,errorX:[5,6]}],n={animationBegin:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"0"}},defaultValue:0},animationDuration:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"400"}},defaultValue:400},animationEasing:{table:{type:{summary:'"ease" | "ease-in" | "ease-in-out" | "ease-out" | "linear" | "spring" | EasingFunction | `cubic-bezier(${number},${number},${number},${number})`'},category:"Animation",defaultValue:{summary:"ease-in-out"}},defaultValue:"ease-in-out"},dataKey:{description:"Decides how to extract the value of this ErrorBar from the data:\n- `string`: the name of the field in the data object;\n- `number`: the index of the field in the data;\n- `function`: a function that receives the data object and returns the value of this ErrorBar.\n\nThe error values can be a single value for symmetric error bars;\nor an array of a lower and upper error value for asymmetric error bars.",table:{type:{summary:"DataKey<DataPointType, DataValueType>"},category:"General"}},direction:{description:`Direction of the error bar. Usually determined by chart layout, except in Scatter chart.
In Scatter chart, "x" means horizontal error bars, "y" means vertical error bars.`,table:{type:{summary:"number | string"},category:"General"}},isAnimationActive:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"Animation",defaultValue:{summary:"true"}},defaultValue:!0},stroke:{description:'The stroke color. If "none", no line will be drawn.',control:{type:"color"},table:{type:{summary:"string"},category:"Style"}},strokeWidth:{description:"The width of the stroke",table:{type:{summary:"number | string"},category:"Style"}},width:{description:`Width of the error bar ends (the serifs) in pixels.
This is not the total width of the error bar, but just the width of the little lines at the ends.

The total width of the error bar is determined by the data value plus/minus the error value.`,table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"5"}},defaultValue:5},zIndex:{control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"400"}},defaultValue:400}},dr={component:i,argTypes:n},e={render:m=>r.createElement(p,{width:"100%",height:500},r.createElement(l,{margin:{top:5,right:30,left:20,bottom:5},width:730,height:250},r.createElement(u,null),r.createElement(y,{dataKey:"x",type:"number"}),r.createElement(c,{dataKey:"y",type:"number"}),r.createElement(d,{data:h,fill:"#ff7300"},r.createElement(i,{dataKey:"errorY",...m})))),args:{...s(n),width:4,strokeWidth:2,stroke:"green",direction:"y",dataKey:"errorY"}},hr=["API"];var t,a,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};export{e as API,hr as __namedExportsOrder,dr as default};
