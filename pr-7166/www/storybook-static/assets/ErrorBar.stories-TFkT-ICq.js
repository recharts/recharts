import{e as r}from"./iframe-BA0Mk_bm.js";import{g as s}from"./utils-ePvtT4un.js";import{E as i}from"./ErrorBar-DVpDltHV.js";import{R as l}from"./arrayEqualityCheck-BXIKBtlL.js";import{S as p}from"./ScatterChart-B4NMV6es.js";import{C as u}from"./CartesianGrid-BFzdfSIZ.js";import{X as y}from"./XAxis-BJCrLdXA.js";import{Y as c}from"./YAxis-BeQUgSYX.js";import{S as d}from"./Scatter-C5QgcTOe.js";import{R as h}from"./RechartsHookInspector-07Cffhze.js";import"./preload-helper-Dp1pzeXC.js";import"./Layer-UodA2S_o.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B36LrC6B.js";import"./ErrorBarContext-qCzTcwLw.js";import"./RechartsWrapper-BFZ1uel6.js";import"./index-DOFwstvs.js";import"./immer-CuXxKPwW.js";import"./hooks-TaUW4PzE.js";import"./axisSelectors-BPwVyIe5.js";import"./d3-scale-C-j_j56q.js";import"./zIndexSlice-IJtIz665.js";import"./renderedTicksSlice-k5mZM9in.js";import"./PolarUtils-CTnnDHZv.js";import"./RegisterGraphicalItemId-B9TRMD4g.js";import"./CSSTransitionAnimate-ijfQ_-HZ.js";import"./useAnimationId-Del0ERlM.js";import"./ZIndexLayer-7XpdSr6g.js";import"./CartesianChart-ojIzik51.js";import"./chartDataContext-BS06iSAA.js";import"./CategoricalChart-Dl2FpaUQ.js";import"./CartesianAxis-BT4UVk71.js";import"./Text-CQNk2n0w.js";import"./DOMUtils-dYc2sDor.js";import"./Label-BRfB6AgB.js";import"./types-bktBoSaY.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-DsC8Xpl6.js";import"./Curve-DYn67gsG.js";import"./step-BTgjudL3.js";import"./tooltipContext-nmEiNHsK.js";import"./Symbols-BlFKSVPh.js";import"./symbol-B4YfvXWL.js";import"./ActiveShapeUtils-jRacbU19.js";import"./isPlainObject-DqKcpOXv.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CRPXSI0S.js";import"./Trapezoid-CwhddTPc.js";import"./Sector-BUd4hzuV.js";import"./GraphicalItemClipPath-D9S218iW.js";import"./SetGraphicalItem-pHlPp9Gw.js";import"./index-BMjkAMKv.js";import"./ChartSizeDimensions-XLtPrUd2.js";import"./OffsetShower-DE5bCLFy.js";import"./PlotAreaShower-noNIcByU.js";const f=[{x:45,y:100,z:150,errorY:[30,20],errorX:5},{x:100,y:200,z:200,errorY:[20,30],errorX:3},{x:120,y:100,z:260,errorY:20,errorX:[5,3]},{x:170,y:300,z:400,errorY:[15,18],errorX:4},{x:140,y:250,z:280,errorY:23,errorX:[6,7]},{x:150,y:400,z:500,errorY:[21,10],errorX:4},{x:110,y:280,z:200,errorY:21,errorX:[5,6]}],m={animationBegin:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"0"}},defaultValue:0},animationDuration:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"400"}},defaultValue:400},animationEasing:{control:{type:"select"},options:["linear","ease","ease-in","ease-out","ease-in-out"],table:{type:{summary:'"ease" | "ease-in" | "ease-in-out" | "ease-out" | "linear"'},category:"Animation",defaultValue:{summary:"ease-in-out"}},defaultValue:"ease-in-out"},dataKey:{description:"Decides how to extract the value of this ErrorBar from the data:\n- `string`: the name of the field in the data object;\n- `number`: the index of the field in the data;\n- `function`: a function that receives the data object and returns the value of this ErrorBar.\n\nThe error values can be a single value for symmetric error bars;\nor an array of a lower and upper error value for asymmetric error bars.",table:{type:{summary:"DataKey<DataPointType, DataValueType>"},category:"General"}},direction:{description:`Direction of the error bar. Usually determined by chart layout, except in Scatter chart.
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
