import{R as r}from"./iframe-Dn7uhoyL.js";import{g as s}from"./utils-ePvtT4un.js";import{E as i}from"./ErrorBar-Dfa6sYMK.js";import{R as l}from"./zIndexSlice-CVPi3ttj.js";import{S as u}from"./ScatterChart-Bh6JDxeG.js";import{C as p}from"./CartesianGrid-NxJU1X0z.js";import{X as y}from"./XAxis-CM-PbRui.js";import{Y as d}from"./YAxis-BfFk8v58.js";import{S as c}from"./Scatter-C8TgAXah.js";import"./preload-helper-Dp1pzeXC.js";import"./Layer-0_0lU0ce.js";import"./get-BWJg7GwY.js";import"./resolveDefaultProps-CdaF0R9o.js";import"./ErrorBarContext-8EwqaTjA.js";import"./RechartsWrapper-BxRk2Gdp.js";import"./index-Bq40lsYa.js";import"./index-DD0InOiJ.js";import"./index-Cy5HZ0nr.js";import"./index-CSiJtewq.js";import"./immer-jPz9tOCf.js";import"./renderedTicksSlice-C-NsLko8.js";import"./axisSelectors-CcayQcVn.js";import"./d3-scale-Cgmb0cG0.js";import"./string-B6fdYHAA.js";import"./isWellBehavedNumber-CWLsfq8q.js";import"./PolarUtils-CTnnDHZv.js";import"./RegisterGraphicalItemId-DNlA1n-y.js";import"./CategoricalChart-vFRRVoOy.js";import"./CSSTransitionAnimate-B7XsnJ0H.js";import"./useAnimationId-DyeHQUGR.js";import"./ZIndexLayer-DWtyWVlG.js";import"./CartesianChart-BTxfKGwU.js";import"./chartDataContext-CxM1m1he.js";import"./CartesianAxis-BFlE9wN2.js";import"./Text-Coel_U_-.js";import"./DOMUtils-DMf79wlK.js";import"./Label-BkxCdWVF.js";import"./types-Bnw4G7MR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-BOxaWbpG.js";import"./Curve-dLTkUQDk.js";import"./step-DtaB3Afi.js";import"./path-DyVhHtw_.js";import"./tooltipContext-Cbb2NkgC.js";import"./Symbols-D0L3NZVE.js";import"./symbol-Sc7zzrJc.js";import"./ActiveShapeUtils-dzMUbVJX.js";import"./GraphicalItemClipPath-Ml5Lm9cP.js";import"./SetGraphicalItem-r_k8Lha2.js";const h=[{x:45,y:100,z:150,errorY:[30,20],errorX:5},{x:100,y:200,z:200,errorY:[20,30],errorX:3},{x:120,y:100,z:260,errorY:20,errorX:[5,3]},{x:170,y:300,z:400,errorY:[15,18],errorX:4},{x:140,y:250,z:280,errorY:23,errorX:[6,7]},{x:150,y:400,z:500,errorY:[21,10],errorX:4},{x:110,y:280,z:200,errorY:21,errorX:[5,6]}],n={animationBegin:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"0"}},defaultValue:0},animationDuration:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"400"}},defaultValue:400},animationEasing:{table:{type:{summary:'"ease" | "ease-in" | "ease-in-out" | "ease-out" | "linear" | "spring" | BezierEasingFunction | SpringEasingFunction | `cubic-bezier(${number},${number},${number},${number})`'},category:"Animation",defaultValue:{summary:"ease-in-out"}},defaultValue:"ease-in-out"},dataKey:{description:"Decides how to extract the value of this ErrorBar from the data:\n- `string`: the name of the field in the data object;\n- `number`: the index of the field in the data;\n- `function`: a function that receives the data object and returns the value of this ErrorBar.\n\nThe error values can be a single value for symmetric error bars;\nor an array of a lower and upper error value for asymmetric error bars.",table:{type:{summary:"DataKey<DataPointType, DataValueType>"},category:"General"}},direction:{description:`Direction of the error bar. Usually determined by chart layout, except in Scatter chart.
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
