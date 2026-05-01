import{e as t}from"./iframe-BRNudyUC.js";import{R as s}from"./arrayEqualityCheck-BDDqf68l.js";import{C as m}from"./ComposedChart-L_fez2fu.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as e}from"./Bar-CPkOULeV.js";import{R as c}from"./RechartsHookInspector-bCgKsqnr.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-bvYT90Do.js";import"./immer-efUMdrFM.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Ny_QHnuL.js";import"./index-BpzgcC1p.js";import"./hooks-g1pwYnn9.js";import"./axisSelectors-DBRNeiSB.js";import"./d3-scale-BE1R65Yr.js";import"./string-B6fdYHAA.js";import"./zIndexSlice-Bxbwbl5M.js";import"./renderedTicksSlice-Dd_sUH3I.js";import"./CartesianChart-DtfUiseX.js";import"./chartDataContext-DWt96v8T.js";import"./CategoricalChart-BAXoX5YA.js";import"./Layer-72bRSYZY.js";import"./tooltipContext-a1yvY8Zp.js";import"./AnimatedItems-DyV65I1f.js";import"./Label-C0IwlP1f.js";import"./Text-DYXt0Tk2.js";import"./DOMUtils-BUce29Ys.js";import"./ZIndexLayer-BqNsDADZ.js";import"./useAnimationId-DKTA-eAm.js";import"./types-CuUkJyrv.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BgG6X-fa.js";import"./isPlainObject-D-_-2woO.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DWclrIl5.js";import"./Trapezoid-Da1UYdj_.js";import"./Sector-D7BMvRVb.js";import"./Symbols-hkZNpq1J.js";import"./symbol-BcfkrHFP.js";import"./step-OjWirnGE.js";import"./Curve-DS1o2tEO.js";import"./RegisterGraphicalItemId-DKtlUZkV.js";import"./ErrorBarContext-D3Lj0Odf.js";import"./GraphicalItemClipPath-sl_sf-ia.js";import"./SetGraphicalItem-BMN_yPrU.js";import"./getZIndexFromUnknown-CMXRnERf.js";import"./graphicalItemSelectors-BJwrjMjb.js";import"./index-DrL1-A17.js";import"./ChartSizeDimensions-Bj0myzFp.js";import"./OffsetShower-6Jy39FxY.js";import"./PlotAreaShower-DGNr6qsk.js";const lt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(c,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(a=r.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const ct=["Fill"];export{r as Fill,ct as __namedExportsOrder,lt as default};
