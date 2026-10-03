import{R as r}from"./iframe-SCBQwNxQ.js";import{g as s}from"./utils-ePvtT4un.js";import{E as i}from"./ErrorBar-DQOJT2mb.js";import{R as p}from"./zIndexSlice-j2Iu_2in.js";import{S as l}from"./ScatterChart-DVIFJKqU.js";import{C as u}from"./CartesianGrid-GsmgNXW2.js";import{X as y}from"./XAxis-Cc0l9D0i.js";import{Y as c}from"./YAxis-CjkWE18a.js";import{S as d}from"./Scatter-B3iwS2qR.js";import"./preload-helper-Dp1pzeXC.js";import"./Layer-Cqwrwd-u.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CyZ9SZnI.js";import"./ErrorBarContext-SniQgvjJ.js";import"./RechartsWrapper-BlKrxgAY.js";import"./axisSelectors-DLhQ9sAD.js";import"./throttle-CzCySKF_.js";import"./index-DsLPnsoz.js";import"./index-Co8Np-XD.js";import"./isWellBehavedNumber-DvdKXsqM.js";import"./d3-scale-G26x6J9Q.js";import"./index-B6uIZp6g.js";import"./index-B0bY_C-Z.js";import"./renderedTicksSlice-DJfakFhE.js";import"./index-CE5ovKc5.js";import"./PolarUtils-CTnnDHZv.js";import"./RegisterGraphicalItemId-ArfZLync.js";import"./useId-GXBIOTNS.js";import"./CSSTransitionAnimate-D-jPVqKr.js";import"./useAnimationId-DXE0JH3K.js";import"./util-Dxo8gN5i.js";import"./ZIndexLayer-D6bO2lss.js";import"./useBackwardsCompatibleTheme-BnvgZvcH.js";import"./CartesianChart-CfXQSmt5.js";import"./chartDataContext-1NVWGtYz.js";import"./CategoricalChart-Byg7V9pR.js";import"./CartesianAxis-Cxx7AUTO.js";import"./Text-CXiXfLVx.js";import"./DOMUtils-htjTn9rf.js";import"./Label-5iI9wFuI.js";import"./types-tzKuPEFf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-Wlp1qaKk.js";import"./Curve-DfnFB90y.js";import"./step-x-If1Moz.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CGZwaRme.js";import"./Symbols-B3tjl2Qz.js";import"./symbol-WqTKNL9g.js";import"./ActiveShapeUtils-HcSLNl9S.js";import"./GraphicalItemClipPath-DklClpWQ.js";import"./SetGraphicalItem-CM8VxQRS.js";import"./useGraphicalItemIdentity-D5Od3f0u.js";import"./dataEntryStyles-dNPvN40_.js";const h=[{x:45,y:100,z:150,errorY:[30,20],errorX:5},{x:100,y:200,z:200,errorY:[20,30],errorX:3},{x:120,y:100,z:260,errorY:20,errorX:[5,3]},{x:170,y:300,z:400,errorY:[15,18],errorX:4},{x:140,y:250,z:280,errorY:23,errorX:[6,7]},{x:150,y:400,z:500,errorY:[21,10],errorX:4},{x:110,y:280,z:200,errorY:21,errorX:[5,6]}],n={animationBegin:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"0"}},defaultValue:0},animationDuration:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"400"}},defaultValue:400},animationEasing:{table:{type:{summary:'"ease" | "ease-in" | "ease-in-out" | "ease-out" | "linear" | "spring" | EasingFunction | `cubic-bezier(${number},${number},${number},${number})`'},category:"Animation",defaultValue:{summary:"ease-in-out"}},defaultValue:"ease-in-out"},dataKey:{description:"Decides how to extract the value of this ErrorBar from the data:\n- `string`: the name of the field in the data object;\n- `number`: the index of the field in the data;\n- `function`: a function that receives the data object and returns the value of this ErrorBar.\n\nThe error values can be a single value for symmetric error bars;\nor an array of a lower and upper error value for asymmetric error bars.",table:{type:{summary:"DataKey<DataPointType, DataValueType>"},category:"General"}},direction:{description:`Direction of the error bar. Usually determined by chart layout, except in Scatter chart.
In Scatter chart, "x" means horizontal error bars, "y" means vertical error bars.`,table:{type:{summary:"number | string"},category:"General"}},isAnimationActive:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"Animation",defaultValue:{summary:"true"}},defaultValue:!0},stroke:{description:'The stroke color. If "none", no line will be drawn.',control:{type:"color"},table:{type:{summary:"string"},category:"Style"}},strokeWidth:{description:"The width of the stroke",table:{type:{summary:"number | string"},category:"Style"}},width:{description:`Width of the error bar ends (the serifs) in pixels.
This is not the total width of the error bar, but just the width of the little lines at the ends.

The total width of the error bar is determined by the data value plus/minus the error value.`,table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"5"}},defaultValue:5},zIndex:{control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"400"}},defaultValue:400}},fr={component:i,argTypes:n},e={render:m=>r.createElement(p,{width:"100%",height:500},r.createElement(l,{margin:{top:5,right:30,left:20,bottom:5},width:730,height:250},r.createElement(u,null),r.createElement(y,{dataKey:"x",type:"number"}),r.createElement(c,{dataKey:"y",type:"number"}),r.createElement(d,{data:h,fill:"#ff7300"},r.createElement(i,{dataKey:"errorY",...m})))),args:{...s(n),width:4,strokeWidth:2,stroke:"green",direction:"y",dataKey:"errorY"}},gr=["API"];var t,a,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};export{e as API,gr as __namedExportsOrder,fr as default};
