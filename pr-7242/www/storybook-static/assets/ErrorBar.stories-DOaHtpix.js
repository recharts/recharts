import{e as r}from"./iframe-DvnDov4A.js";import{g as s}from"./utils-ePvtT4un.js";import{E as i}from"./ErrorBar-kJ0jxn85.js";import{R as l}from"./arrayEqualityCheck-C9lnY2Jk.js";import{S as p}from"./ScatterChart-DfWT3c3w.js";import{C as u}from"./CartesianGrid-DBBND29e.js";import{X as y}from"./XAxis-C1tPrrXX.js";import{Y as c}from"./YAxis-6mOD6R15.js";import{S as d}from"./Scatter-BmgcjPjD.js";import{R as h}from"./RechartsHookInspector-4zpoQdEh.js";import"./preload-helper-Dp1pzeXC.js";import"./Layer-nkTMaplG.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-G5H4W-ZU.js";import"./ErrorBarContext-CvFDt4Lo.js";import"./RechartsWrapper-TcHv2uQV.js";import"./index-C2oOJWkO.js";import"./immer-sZpCrch2.js";import"./hooks-BvQWUlQP.js";import"./axisSelectors-CqBaekTZ.js";import"./d3-scale-BcO2Qy0K.js";import"./zIndexSlice-SWDQ-CoV.js";import"./renderedTicksSlice-031iG6wN.js";import"./PolarUtils-CTnnDHZv.js";import"./RegisterGraphicalItemId-BIRi2jKj.js";import"./CSSTransitionAnimate-COaJk02V.js";import"./useAnimationId-6CABSB-X.js";import"./ZIndexLayer-CM0jcixQ.js";import"./CartesianChart-B_ZS3e1w.js";import"./chartDataContext-i-tilv0W.js";import"./CategoricalChart-D_33J7_3.js";import"./CartesianAxis-DShCHaKT.js";import"./Text-spNYJ-qR.js";import"./DOMUtils-DdQ6eDLq.js";import"./Label-DplSYrhy.js";import"./types-TD_Bh_Hf.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CIfEwxbL.js";import"./Curve-BY4G9kL5.js";import"./step-hQY7d3_H.js";import"./tooltipContext-BIjqbsLZ.js";import"./Symbols-D2whzrea.js";import"./symbol-B4kl7GNn.js";import"./ActiveShapeUtils-lzwBTbm9.js";import"./isPlainObject-Bm-7eQPN.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-7q3XGzAF.js";import"./Trapezoid-D2p22PjP.js";import"./Sector-bYTZ9FBx.js";import"./GraphicalItemClipPath-kvMDTclB.js";import"./SetGraphicalItem-tfmCk3IV.js";import"./index-DCGexNIF.js";import"./ChartSizeDimensions-CTHGO4oG.js";import"./OffsetShower-DvcNQrDC.js";import"./PlotAreaShower-DoBolyp8.js";const f=[{x:45,y:100,z:150,errorY:[30,20],errorX:5},{x:100,y:200,z:200,errorY:[20,30],errorX:3},{x:120,y:100,z:260,errorY:20,errorX:[5,3]},{x:170,y:300,z:400,errorY:[15,18],errorX:4},{x:140,y:250,z:280,errorY:23,errorX:[6,7]},{x:150,y:400,z:500,errorY:[21,10],errorX:4},{x:110,y:280,z:200,errorY:21,errorX:[5,6]}],n={animationBegin:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"0"}},defaultValue:0},animationDuration:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"400"}},defaultValue:400},animationEasing:{table:{type:{summary:'"ease" | "ease-in" | "ease-in-out" | "ease-out" | "linear" | "spring" | BezierEasingFunction | SpringEasingFunction | `cubic-bezier(${number},${number},${number},${number})`'},category:"Animation",defaultValue:{summary:"ease-in-out"}},defaultValue:"ease-in-out"},dataKey:{description:"Decides how to extract the value of this ErrorBar from the data:\n- `string`: the name of the field in the data object;\n- `number`: the index of the field in the data;\n- `function`: a function that receives the data object and returns the value of this ErrorBar.\n\nThe error values can be a single value for symmetric error bars;\nor an array of a lower and upper error value for asymmetric error bars.",table:{type:{summary:"DataKey<DataPointType, DataValueType>"},category:"General"}},direction:{description:`Direction of the error bar. Usually determined by chart layout, except in Scatter chart.
In Scatter chart, "x" means horizontal error bars, "y" means vertical error bars.`,table:{type:{summary:"number | string"},category:"General"}},isAnimationActive:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"Animation",defaultValue:{summary:"true"}},defaultValue:!0},stroke:{description:'The stroke color. If "none", no line will be drawn.',control:{type:"color"},table:{type:{summary:"string"},category:"Style",defaultValue:{summary:"black"}},defaultValue:"black"},strokeWidth:{description:"The width of the stroke",table:{type:{summary:"number | string"},category:"Style",defaultValue:{summary:"1.5"}},defaultValue:1.5},width:{description:`Width of the error bar ends (the serifs) in pixels.
This is not the total width of the error bar, but just the width of the little lines at the ends.

The total width of the error bar is determined by the data value plus/minus the error value.`,table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"5"}},defaultValue:5},zIndex:{control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"400"}},defaultValue:400}},gr={component:i,argTypes:n},e={render:m=>r.createElement(l,{width:"100%",height:500},r.createElement(p,{margin:{top:5,right:30,left:20,bottom:5},width:730,height:250},r.createElement(u,null),r.createElement(y,{dataKey:"x",type:"number"}),r.createElement(c,{dataKey:"y",type:"number"}),r.createElement(d,{data:f,fill:"#ff7300"},r.createElement(i,{dataKey:"errorY",...m})),r.createElement(h,null))),args:{...s(n),width:4,strokeWidth:2,stroke:"green",direction:"y",dataKey:"errorY"}};var t,a,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
