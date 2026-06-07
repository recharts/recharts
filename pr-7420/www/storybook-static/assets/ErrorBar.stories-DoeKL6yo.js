import{R as r}from"./iframe-ebWVliJd.js";import{g as s}from"./utils-ePvtT4un.js";import{E as i}from"./ErrorBar-BaFu19Rj.js";import{R as l}from"./zIndexSlice-BrrGtknp.js";import{S as u}from"./ScatterChart-CH98CeRu.js";import{C as p}from"./CartesianGrid-BSR6Azjm.js";import{X as y}from"./XAxis-BweeNrXM.js";import{Y as d}from"./YAxis-CXtDAlyU.js";import{S as c}from"./Scatter-B3cBUv0h.js";import"./preload-helper-Dp1pzeXC.js";import"./Layer-CrSVK8w0.js";import"./get-D4k_mNx-.js";import"./resolveDefaultProps-B5O-6-WI.js";import"./ErrorBarContext-4bUYjOjX.js";import"./RechartsWrapper-DUxjIduK.js";import"./index-DF02JQD9.js";import"./index-r7VIACUV.js";import"./index-CMkBnQa6.js";import"./index-Ca07HsLe.js";import"./immer-u2yF5cyx.js";import"./renderedTicksSlice-Ba1ooYto.js";import"./axisSelectors-BiXUDLnL.js";import"./d3-scale-BkusLtz6.js";import"./string-B6fdYHAA.js";import"./isWellBehavedNumber-DRTDdH6f.js";import"./PolarUtils-CTnnDHZv.js";import"./RegisterGraphicalItemId-YmUQslDz.js";import"./CategoricalChart-DdVMa29B.js";import"./CSSTransitionAnimate-mS5QqWYK.js";import"./useAnimationId-n62HywHx.js";import"./ZIndexLayer-DymXXG8t.js";import"./CartesianChart-BJML043z.js";import"./chartDataContext-DV3K9IA2.js";import"./CartesianAxis-R8Sp45dD.js";import"./Text-C6J-h8kC.js";import"./DOMUtils-D1VV_WMD.js";import"./Label-CEbu9yOv.js";import"./types-DIjbaJzk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-VPYkwJ4F.js";import"./index-BPJnJB5S.js";import"./Curve-Cnpigwxh.js";import"./step-CrKVzxVu.js";import"./path-DyVhHtw_.js";import"./tooltipContext-XWcfhW_R.js";import"./Symbols-B3k_HJlQ.js";import"./symbol-DwyeBK49.js";import"./ActiveShapeUtils-WXdDf590.js";import"./GraphicalItemClipPath-CLalv2k5.js";import"./SetGraphicalItem-DrFDycKg.js";const h=[{x:45,y:100,z:150,errorY:[30,20],errorX:5},{x:100,y:200,z:200,errorY:[20,30],errorX:3},{x:120,y:100,z:260,errorY:20,errorX:[5,3]},{x:170,y:300,z:400,errorY:[15,18],errorX:4},{x:140,y:250,z:280,errorY:23,errorX:[6,7]},{x:150,y:400,z:500,errorY:[21,10],errorX:4},{x:110,y:280,z:200,errorY:21,errorX:[5,6]}],n={animationBegin:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"0"}},defaultValue:0},animationDuration:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"400"}},defaultValue:400},animationEasing:{table:{type:{summary:'"ease" | "ease-in" | "ease-in-out" | "ease-out" | "linear" | "spring" | BezierEasingFunction | SpringEasingFunction | `cubic-bezier(${number},${number},${number},${number})`'},category:"Animation",defaultValue:{summary:"ease-in-out"}},defaultValue:"ease-in-out"},dataKey:{description:"Decides how to extract the value of this ErrorBar from the data:\n- `string`: the name of the field in the data object;\n- `number`: the index of the field in the data;\n- `function`: a function that receives the data object and returns the value of this ErrorBar.\n\nThe error values can be a single value for symmetric error bars;\nor an array of a lower and upper error value for asymmetric error bars.",table:{type:{summary:"DataKey<DataPointType, DataValueType>"},category:"General"}},direction:{description:`Direction of the error bar. Usually determined by chart layout, except in Scatter chart.
In Scatter chart, "x" means horizontal error bars, "y" means vertical error bars.`,table:{type:{summary:"number | string"},category:"General"}},isAnimationActive:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"Animation",defaultValue:{summary:"true"}},defaultValue:!0},stroke:{description:'The stroke color. If "none", no line will be drawn.',control:{type:"color"},table:{type:{summary:"string"},category:"Style",defaultValue:{summary:"black"}},defaultValue:"black"},strokeWidth:{description:"The width of the stroke",table:{type:{summary:"number | string"},category:"Style",defaultValue:{summary:"1.5"}},defaultValue:1.5},width:{description:`Width of the error bar ends (the serifs) in pixels.
This is not the total width of the error bar, but just the width of the little lines at the ends.

The total width of the error bar is determined by the data value plus/minus the error value.`,table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"5"}},defaultValue:5},zIndex:{control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"400"}},defaultValue:400}},yr={component:i,argTypes:n},e={render:m=>r.createElement(l,{width:"100%",height:500},r.createElement(u,{margin:{top:5,right:30,left:20,bottom:5},width:730,height:250},r.createElement(p,null),r.createElement(y,{dataKey:"x",type:"number"}),r.createElement(d,{dataKey:"y",type:"number"}),r.createElement(c,{data:h,fill:"#ff7300"},r.createElement(i,{dataKey:"errorY",...m})))),args:{...s(n),width:4,strokeWidth:2,stroke:"green",direction:"y",dataKey:"errorY"}};var t,a,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const dr=["API"];export{e as API,dr as __namedExportsOrder,yr as default};
