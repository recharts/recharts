import{e as t}from"./iframe-GfPTcwVI.js";import{R as s}from"./arrayEqualityCheck-zByCBXfp.js";import{C as m}from"./ComposedChart-g_3yl1AM.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as e}from"./Bar-CUrXIHso.js";import{R as c}from"./RechartsHookInspector-BbE71-mZ.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DyMlioZM.js";import"./immer-C_ivLHTT.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-xCEfQ3e6.js";import"./index-BPTb04yT.js";import"./hooks-CkLAhtAF.js";import"./axisSelectors-C1I30lvY.js";import"./d3-scale-CZ7HbC41.js";import"./zIndexSlice-BiywrOzN.js";import"./renderedTicksSlice-DubTevQM.js";import"./CartesianChart-C7artJXa.js";import"./chartDataContext-Dnq1iHBW.js";import"./CategoricalChart-DT84xA7C.js";import"./Layer-D5BHTSBb.js";import"./tooltipContext-DZiQrflG.js";import"./ReactUtils-D6XtI53O.js";import"./Label-Dcg-6Pxd.js";import"./Text-Cz6Ir0Bd.js";import"./DOMUtils-CBAOKK6G.js";import"./ZIndexLayer-ci0MSbfQ.js";import"./types-D3MLb6DN.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-DMmYEdu0.js";import"./isPlainObject-2G-hgaEW.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-ChBxJEym.js";import"./useAnimationId-CJpqr1GQ.js";import"./Trapezoid-CUiisPn6.js";import"./Sector-F_1AI-V0.js";import"./Symbols-BG3HhGrw.js";import"./symbol-Dj4Qey2P.js";import"./step-BJ9jGGmt.js";import"./Curve-sYWT_Cke.js";import"./RegisterGraphicalItemId-BQasV6-Q.js";import"./ErrorBarContext-C9NklHyW.js";import"./GraphicalItemClipPath-DGk_Ausf.js";import"./SetGraphicalItem-v2qQdmnb.js";import"./getZIndexFromUnknown-DWVYwqmN.js";import"./graphicalItemSelectors-gGFkZTvU.js";import"./index-CtTj3QoQ.js";import"./ChartSizeDimensions-BaFn1hfG.js";import"./OffsetShower-C19M18-p.js";import"./PlotAreaShower-Bq5P1fMQ.js";const mt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(c,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
