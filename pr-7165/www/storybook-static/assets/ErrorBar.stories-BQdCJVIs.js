import{e as r}from"./iframe-B-0BbsAX.js";import{g as s}from"./utils-ePvtT4un.js";import{E as i}from"./ErrorBar-D6JDtP9a.js";import{R as l}from"./arrayEqualityCheck-D0GIznF3.js";import{S as p}from"./ScatterChart-DPU6AMt1.js";import{C as u}from"./CartesianGrid-DtezH6A5.js";import{X as y}from"./XAxis-DbUi1vPs.js";import{Y as c}from"./YAxis-CX3uKBZw.js";import{S as d}from"./Scatter-CHFSztQl.js";import{R as h}from"./RechartsHookInspector-a5VIBXh4.js";import"./preload-helper-Dp1pzeXC.js";import"./Layer-DmBsOgtN.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CeHfSYTr.js";import"./ErrorBarContext-B191cjJB.js";import"./RechartsWrapper-DdelftvL.js";import"./index-CC_jrfcS.js";import"./immer-16Lk8WhM.js";import"./hooks-CLbcsvpt.js";import"./axisSelectors-B5M5y7tb.js";import"./d3-scale-CRpFVGXV.js";import"./zIndexSlice-k5NGco1R.js";import"./renderedTicksSlice-DrnPsf35.js";import"./PolarUtils-CTnnDHZv.js";import"./RegisterGraphicalItemId-EYUIR0Rr.js";import"./CSSTransitionAnimate-QKqIpi9R.js";import"./useAnimationId-C_pphjez.js";import"./ZIndexLayer-BS0cCdPh.js";import"./CartesianChart-BzA52Q7h.js";import"./chartDataContext-ZzZnHAfn.js";import"./CategoricalChart-CiBn8gUj.js";import"./CartesianAxis-DSL26GAi.js";import"./Text-BDsrdoFV.js";import"./DOMUtils-ChlQnBsE.js";import"./Label-RKv-aJqQ.js";import"./types-CmNjNiS4.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-Dc4L6Dcx.js";import"./Curve-zb7_jZJr.js";import"./step-BJ3svLa1.js";import"./tooltipContext-3p5S3cTB.js";import"./Symbols-D_XjywmB.js";import"./symbol-mrFX37Pu.js";import"./ActiveShapeUtils-nrA-vqiB.js";import"./isPlainObject-CkRpqEDw.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-ApzVODqx.js";import"./Trapezoid-Coy9-nSc.js";import"./Sector-Czl1xAWH.js";import"./GraphicalItemClipPath-j2FZHUrx.js";import"./SetGraphicalItem--6EOKRx7.js";import"./index-BMYt7gcu.js";import"./ChartSizeDimensions-BoIgW8rA.js";import"./OffsetShower-DSqgSq0T.js";import"./PlotAreaShower-DqxXtLCD.js";const f=[{x:45,y:100,z:150,errorY:[30,20],errorX:5},{x:100,y:200,z:200,errorY:[20,30],errorX:3},{x:120,y:100,z:260,errorY:20,errorX:[5,3]},{x:170,y:300,z:400,errorY:[15,18],errorX:4},{x:140,y:250,z:280,errorY:23,errorX:[6,7]},{x:150,y:400,z:500,errorY:[21,10],errorX:4},{x:110,y:280,z:200,errorY:21,errorX:[5,6]}],m={animationBegin:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"0"}},defaultValue:0},animationDuration:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"400"}},defaultValue:400},animationEasing:{control:{type:"select"},options:["linear","ease","ease-in","ease-out","ease-in-out"],table:{type:{summary:'"ease" | "ease-in" | "ease-in-out" | "ease-out" | "linear"'},category:"Animation",defaultValue:{summary:"ease-in-out"}},defaultValue:"ease-in-out"},dataKey:{description:"Decides how to extract the value of this ErrorBar from the data:\n- `string`: the name of the field in the data object;\n- `number`: the index of the field in the data;\n- `function`: a function that receives the data object and returns the value of this ErrorBar.\n\nThe error values can be a single value for symmetric error bars;\nor an array of a lower and upper error value for asymmetric error bars.",table:{type:{summary:"DataKey<DataPointType, DataValueType>"},category:"General"}},direction:{description:`Direction of the error bar. Usually determined by chart layout, except in Scatter chart.
In Scatter chart, "x" means horizontal error bars, "y" means vertical error bars.`,table:{type:{summary:"number | string"},category:"General"}},isAnimationActive:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"Animation",defaultValue:{summary:"true"}},defaultValue:!0},stroke:{description:'The stroke color. If "none", no line will be drawn.',control:{type:"color"},table:{type:{summary:"string"},category:"Style",defaultValue:{summary:"black"}},defaultValue:"black"},strokeWidth:{description:"The width of the stroke",table:{type:{summary:"number | string"},category:"Style",defaultValue:{summary:"1.5"}},defaultValue:1.5},width:{description:`Width of the error bar ends (the serifs) in pixels.
This is not the total width of the error bar, but just the width of the little lines at the ends.

The total width of the error bar is determined by the data value plus/minus the error value.`,table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"5"}},defaultValue:5},zIndex:{control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"400"}},defaultValue:400}},gr={component:i,argTypes:m},e={render:n=>r.createElement(l,{width:"100%",height:500},r.createElement(p,{margin:{top:5,right:30,left:20,bottom:5},width:730,height:250},r.createElement(u,null),r.createElement(y,{dataKey:"x",type:"number"}),r.createElement(c,{dataKey:"y",type:"number"}),r.createElement(d,{data:f,fill:"#ff7300"},r.createElement(i,{dataKey:"errorY",...n})),r.createElement(h,null))),args:{...s(m),width:4,strokeWidth:2,stroke:"green",direction:"y",dataKey:"errorY"}};var t,a,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
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
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const xr=["API"];export{e as API,xr as __namedExportsOrder,gr as default};
