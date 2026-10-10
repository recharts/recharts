import{R as r}from"./iframe-CMIMGlWj.js";import{g as s}from"./utils-ePvtT4un.js";import{E as i}from"./ErrorBar-jJNAI1Zq.js";import{R as p}from"./zIndexSlice-wuzXiITR.js";import{S as l}from"./ScatterChart-XWRGb08h.js";import{C as u}from"./CartesianGrid-3hhx0pRp.js";import{X as y}from"./XAxis-D-eD-ZKH.js";import{Y as c}from"./YAxis-QT5bDNHN.js";import{S as d}from"./Scatter-DVLwSgL2.js";import"./preload-helper-Dp1pzeXC.js";import"./Layer-DEZqQRHO.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BjTUlmaN.js";import"./ErrorBarContext-qJfLExSm.js";import"./RechartsWrapper-BgfG_ZAZ.js";import"./axisSelectors-Bmc6RJCp.js";import"./throttle-BCA5qR4E.js";import"./index-DwSr_A0C.js";import"./index-CWAjLZC8.js";import"./isWellBehavedNumber-BbJa2uqW.js";import"./d3-scale-CuGTTQPB.js";import"./index-FLl3VRzC.js";import"./index-CywZrMsp.js";import"./renderedTicksSlice-C4raIVaG.js";import"./index-C3fJL_AW.js";import"./PolarUtils-CTnnDHZv.js";import"./dataEntryStyles-TQ5R--o5.js";import"./useId-DTR3y050.js";import"./CSSTransitionAnimate-BrU9nj7E.js";import"./useAnimationId-x76x2OiL.js";import"./util-Dxo8gN5i.js";import"./ZIndexLayer-D_EAZsge.js";import"./useBackwardsCompatibleTheme-MBdvqbhw.js";import"./CartesianChart-DIp5NX_F.js";import"./chartDataContext-D68hLw7p.js";import"./CategoricalChart-DZk0PJqR.js";import"./CartesianAxis-Dlpx8iT-.js";import"./Text-BN1TaMnw.js";import"./pageBackground-DO_pzhaN.js";import"./Label-BNdyp9o_.js";import"./types-DSyx3F07.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-BjpwlZ4G.js";import"./Curve-D4pLn_ye.js";import"./step-C3qFiRpn.js";import"./path-DyVhHtw_.js";import"./tooltipContext-A6E9dtvS.js";import"./Symbols-BGbhxLkB.js";import"./symbol-B2_p0roD.js";import"./ActiveShapeUtils-1w8yv5Vh.js";import"./GraphicalItemClipPath-BGm7g6KG.js";import"./SetGraphicalItem-DP6zOJ07.js";import"./useGraphicalItemIdentity-9tRqDWZI.js";const h=[{x:45,y:100,z:150,errorY:[30,20],errorX:5},{x:100,y:200,z:200,errorY:[20,30],errorX:3},{x:120,y:100,z:260,errorY:20,errorX:[5,3]},{x:170,y:300,z:400,errorY:[15,18],errorX:4},{x:140,y:250,z:280,errorY:23,errorX:[6,7]},{x:150,y:400,z:500,errorY:[21,10],errorX:4},{x:110,y:280,z:200,errorY:21,errorX:[5,6]}],n={animationBegin:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"0"}},defaultValue:0},animationDuration:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"400"}},defaultValue:400},animationEasing:{table:{type:{summary:'"ease" | "ease-in" | "ease-in-out" | "ease-out" | "linear" | "spring" | EasingFunction | `cubic-bezier(${number},${number},${number},${number})`'},category:"Animation",defaultValue:{summary:"ease-in-out"}},defaultValue:"ease-in-out"},dataKey:{description:"Decides how to extract the value of this ErrorBar from the data:\n- `string`: the name of the field in the data object;\n- `number`: the index of the field in the data;\n- `function`: a function that receives the data object and returns the value of this ErrorBar.\n\nThe error values can be a single value for symmetric error bars;\nor an array of a lower and upper error value for asymmetric error bars.",table:{type:{summary:"DataKey<DataPointType, DataValueType>"},category:"General"}},direction:{description:`Direction of the error bar. Usually determined by chart layout, except in Scatter chart.
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
