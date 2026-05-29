import{c as r}from"./iframe-ayfxMcMc.js";import{g as s}from"./utils-ePvtT4un.js";import{E as i}from"./ErrorBar-C6Jzi3w_.js";import{g as l}from"./zIndexSlice-CBS9H6Fq.js";import{S as u}from"./ScatterChart-DWApwBVg.js";import{C as p}from"./CartesianGrid-Cu2hXhNs.js";import{X as y}from"./XAxis-CQCosfOX.js";import{Y as c}from"./YAxis-CboDD1HN.js";import{S as d}from"./Scatter-DJYrjVcF.js";import"./preload-helper-Dp1pzeXC.js";import"./Layer-DRx_WgZU.js";import"./get-DE-GTO8K.js";import"./resolveDefaultProps-DUvm9h9z.js";import"./ErrorBarContext-Cs3TpoeV.js";import"./RechartsWrapper-Dt3ctKzU.js";import"./index-CnDnhuhh.js";import"./index-qYP6YSZE.js";import"./index-ChfXHuaM.js";import"./index-uB2AF80P.js";import"./immer-CvfGnc1k.js";import"./renderedTicksSlice-kyxhp8XW.js";import"./axisSelectors-DiADRWeJ.js";import"./d3-scale-DvksmR-t.js";import"./isWellBehavedNumber-0ySD8Cyp.js";import"./PolarUtils-CTnnDHZv.js";import"./RegisterGraphicalItemId-B5JbPzoa.js";import"./CategoricalChart-YvgC-s3M.js";import"./CSSTransitionAnimate-Cq0joala.js";import"./useAnimationId-CPZ6UJKm.js";import"./ZIndexLayer-ChQFeTnT.js";import"./CartesianChart-asOappaa.js";import"./chartDataContext-ncJihXoM.js";import"./CartesianAxis-CJYfwd48.js";import"./Text-D472vA6a.js";import"./DOMUtils-DhrlxvLL.js";import"./Label-ii_PgfeB.js";import"./types-DKuO6oNB.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./ReactUtils-D4TRRjvu.js";import"./Curve-CTFqdp98.js";import"./step-C4Edu8du.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CErG83J1.js";import"./Symbols-O67rkH-4.js";import"./symbol-DsIeXTTT.js";import"./ActiveShapeUtils-gZf-7tTS.js";import"./GraphicalItemClipPath-D8mHMzmD.js";import"./SetGraphicalItem-B-R5cRe6.js";const h=[{x:45,y:100,z:150,errorY:[30,20],errorX:5},{x:100,y:200,z:200,errorY:[20,30],errorX:3},{x:120,y:100,z:260,errorY:20,errorX:[5,3]},{x:170,y:300,z:400,errorY:[15,18],errorX:4},{x:140,y:250,z:280,errorY:23,errorX:[6,7]},{x:150,y:400,z:500,errorY:[21,10],errorX:4},{x:110,y:280,z:200,errorY:21,errorX:[5,6]}],n={animationBegin:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"0"}},defaultValue:0},animationDuration:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"400"}},defaultValue:400},animationEasing:{table:{type:{summary:'"ease" | "ease-in" | "ease-in-out" | "ease-out" | "linear" | "spring" | BezierEasingFunction | SpringEasingFunction | `cubic-bezier(${number},${number},${number},${number})`'},category:"Animation",defaultValue:{summary:"ease-in-out"}},defaultValue:"ease-in-out"},dataKey:{description:"Decides how to extract the value of this ErrorBar from the data:\n- `string`: the name of the field in the data object;\n- `number`: the index of the field in the data;\n- `function`: a function that receives the data object and returns the value of this ErrorBar.\n\nThe error values can be a single value for symmetric error bars;\nor an array of a lower and upper error value for asymmetric error bars.",table:{type:{summary:"DataKey<DataPointType, DataValueType>"},category:"General"}},direction:{description:`Direction of the error bar. Usually determined by chart layout, except in Scatter chart.
In Scatter chart, "x" means horizontal error bars, "y" means vertical error bars.`,table:{type:{summary:"number | string"},category:"General"}},isAnimationActive:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"Animation",defaultValue:{summary:"true"}},defaultValue:!0},stroke:{description:'The stroke color. If "none", no line will be drawn.',control:{type:"color"},table:{type:{summary:"string"},category:"Style",defaultValue:{summary:"black"}},defaultValue:"black"},strokeWidth:{description:"The width of the stroke",table:{type:{summary:"number | string"},category:"Style",defaultValue:{summary:"1.5"}},defaultValue:1.5},width:{description:`Width of the error bar ends (the serifs) in pixels.
This is not the total width of the error bar, but just the width of the little lines at the ends.

The total width of the error bar is determined by the data value plus/minus the error value.`,table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"5"}},defaultValue:5},zIndex:{control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"400"}},defaultValue:400}},ur={component:i,argTypes:n},e={render:m=>r.createElement(l,{width:"100%",height:500},r.createElement(u,{margin:{top:5,right:30,left:20,bottom:5},width:730,height:250},r.createElement(p,null),r.createElement(y,{dataKey:"x",type:"number"}),r.createElement(c,{dataKey:"y",type:"number"}),r.createElement(d,{data:h,fill:"#ff7300"},r.createElement(i,{dataKey:"errorY",...m})))),args:{...s(n),width:4,strokeWidth:2,stroke:"green",direction:"y",dataKey:"errorY"}};var t,a,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const pr=["API"];export{e as API,pr as __namedExportsOrder,ur as default};
