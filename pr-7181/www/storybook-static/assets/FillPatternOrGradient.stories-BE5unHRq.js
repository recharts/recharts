import{e as t}from"./iframe-C5xSgLrQ.js";import{R as s}from"./arrayEqualityCheck-y9OahTCZ.js";import{C as m}from"./ComposedChart-Cii0yw7e.js";import{B as e}from"./Bar-CukmCO32.js";import{R as l}from"./RechartsHookInspector-DGw_Tn__.js";import{p as c}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CvWnTU23.js";import"./immer-CibMA2Vd.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C6VkPGGy.js";import"./index-7mth2ygc.js";import"./hooks-D_Ct_jBZ.js";import"./axisSelectors-Cjz2FycN.js";import"./d3-scale-DSnNq-Zb.js";import"./zIndexSlice-Bh8d7RDS.js";import"./renderedTicksSlice-3asYpfwT.js";import"./CartesianChart-DEUFIUWW.js";import"./chartDataContext-DLPHSsFH.js";import"./CategoricalChart-CdAWxs2w.js";import"./Layer-BwFEHJgH.js";import"./tooltipContext-D4kX2TZ6.js";import"./ReactUtils-BVTYGt8W.js";import"./Label-BiYutikV.js";import"./Text-D6Wg1Fki.js";import"./DOMUtils-DtO1NYEm.js";import"./ZIndexLayer-BcEHBZGv.js";import"./types-BYICSsoS.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-8cpt_Ena.js";import"./isPlainObject-3QUEcvgB.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-FhpSgi7L.js";import"./useAnimationId-CQohD0O1.js";import"./Trapezoid-C6D7yGaZ.js";import"./Sector-DJx2xoEl.js";import"./Symbols-DwxktYbI.js";import"./symbol-B65zJ9aN.js";import"./step-D0TR_J7h.js";import"./Curve-BgNWnWhG.js";import"./RegisterGraphicalItemId-B7TKQ3nD.js";import"./ErrorBarContext-C-GsEDOJ.js";import"./GraphicalItemClipPath-2_yqp8aO.js";import"./SetGraphicalItem-DGqH91p1.js";import"./getZIndexFromUnknown-Dpx2smIr.js";import"./graphicalItemSelectors-CTP79arQ.js";import"./index-DNx2k_-S.js";import"./ChartSizeDimensions-ChWtlIEh.js";import"./OffsetShower-ChplnW4p.js";import"./PlotAreaShower-UojNVDVn.js";const mt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:c},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(l,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
