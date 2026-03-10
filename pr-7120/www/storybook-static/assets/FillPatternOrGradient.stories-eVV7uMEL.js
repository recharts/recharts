import{e as t}from"./iframe-DHjTBwa0.js";import{R as s}from"./arrayEqualityCheck-CGXWmECa.js";import{C as m}from"./ComposedChart-CoHd_5kA.js";import{B as e}from"./Bar-DQnJWcO9.js";import{R as l}from"./RechartsHookInspector-D6nhtH8K.js";import{p as c}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DXy8j8LY.js";import"./immer-BrXT1eSW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DyX2fUcK.js";import"./index-BPCnijYz.js";import"./hooks-BI4eFA2i.js";import"./axisSelectors-DhPURh7h.js";import"./d3-scale-BUA-RFqD.js";import"./zIndexSlice-DqtSbfBR.js";import"./renderedTicksSlice-DkHSSwGo.js";import"./CartesianChart-Dm1WBf-W.js";import"./chartDataContext-j2R-tyUk.js";import"./CategoricalChart-ByXlXeCM.js";import"./Layer-CoFjoalk.js";import"./tooltipContext-C8KY5Efg.js";import"./ReactUtils-DXoYQqwM.js";import"./Label-DMGH-XEw.js";import"./Text-BWLl8TIe.js";import"./DOMUtils-DL_tkNCI.js";import"./ZIndexLayer-CWpbiknC.js";import"./types-B-PC6Emj.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-9h77ymCT.js";import"./isPlainObject-DLGkOX2v.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dj02ipMQ.js";import"./useAnimationId-C2i6VIVJ.js";import"./Trapezoid-DxOEh9VV.js";import"./Sector-CIZ18yvj.js";import"./Symbols-CnglQ83s.js";import"./symbol-LmxUlDu5.js";import"./step-C25GYkrO.js";import"./Curve-DPzG6TNm.js";import"./RegisterGraphicalItemId-DKDKYGnd.js";import"./ErrorBarContext-By3ClU9F.js";import"./GraphicalItemClipPath-CGzigbYh.js";import"./SetGraphicalItem-XHeepBo6.js";import"./getZIndexFromUnknown-BvtEXJQE.js";import"./graphicalItemSelectors-D_K7F2ot.js";import"./index-CGH8qd9t.js";import"./ChartSizeDimensions-xCJQuae6.js";import"./OffsetShower-DuOTKuKX.js";import"./PlotAreaShower-H4JN1u5I.js";const mt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:c},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(l,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    const [surfaceWidth, surfaceHeight] = [600, 300];
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={pageData}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <pattern id="star" width="10" height="10" patternUnits="userSpaceOnUse">
              <polygon points="0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2" />
            </pattern>
            <pattern id="stripe" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect width="2" height="4" fill="red" />
            </pattern>
          </defs>
          <Bar dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
          <Bar dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#stripe)" />
          <Bar dataKey="amt" stroke="#8884d8" fillOpacity={1} fill="url(#star)" />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(p=(a=r.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const lt=["Fill"];export{r as Fill,lt as __namedExportsOrder,mt as default};
