import{e as t}from"./iframe-DRzfceQj.js";import{R as s}from"./arrayEqualityCheck-rosVEDiH.js";import{C as m}from"./ComposedChart-cRVCNOzO.js";import{B as e}from"./Bar-QWDMyTWD.js";import{R as l}from"./RechartsHookInspector-iKfkRHZC.js";import{p as c}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Yo3rtldJ.js";import"./immer-CpErEFQU.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Cr19GrQC.js";import"./index-DhdVzYen.js";import"./hooks-BGhayb2I.js";import"./axisSelectors-KcSamBS9.js";import"./d3-scale-DMFBv7ef.js";import"./zIndexSlice-DFfzt0na.js";import"./renderedTicksSlice-WbT8TKLW.js";import"./CartesianChart-BpAHu02o.js";import"./chartDataContext-uibfkBE8.js";import"./CategoricalChart-BFsoF5NC.js";import"./Layer-sUtHTMZe.js";import"./tooltipContext-AJFVvBA8.js";import"./ReactUtils-BLIIVErJ.js";import"./Label-CCBnxLca.js";import"./Text-5VoS0hOZ.js";import"./DOMUtils-D7MRyEG_.js";import"./ZIndexLayer-rLB6bkwI.js";import"./types-BIqkUGja.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-sMNt0TF2.js";import"./isPlainObject-8xjKwYHh.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CbvKmtU7.js";import"./useAnimationId-B4oBcBYL.js";import"./Trapezoid-DfLXoIUq.js";import"./Sector-BA0kpTkH.js";import"./Symbols-DyXfCvIa.js";import"./symbol-CU4mK3u6.js";import"./step-vYfigx3D.js";import"./Curve-BAw1ZqwZ.js";import"./RegisterGraphicalItemId-CA-NkALt.js";import"./ErrorBarContext-CVJ7HQM6.js";import"./GraphicalItemClipPath-C-4x0c47.js";import"./SetGraphicalItem-DmvCdKvK.js";import"./getZIndexFromUnknown-BzmnLhtT.js";import"./graphicalItemSelectors-CChr7ypA.js";import"./index-DKayDJ64.js";import"./ChartSizeDimensions-BcANsdLL.js";import"./OffsetShower-MalEY5Hj.js";import"./PlotAreaShower-BKiBhzbZ.js";const mt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:c},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(l,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
