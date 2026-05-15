import{e as t}from"./iframe-CYBvhlZy.js";import{R as s}from"./arrayEqualityCheck-CK8f-Z2u.js";import{C as m}from"./ComposedChart-Bvvd3hm_.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as e}from"./Bar-aTW_zZkH.js";import{R as c}from"./RechartsHookInspector-CaeSkNQM.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-fdlpGSvO.js";import"./immer-DZ9JDNpk.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D_53Ouva.js";import"./index-nd8_1HWo.js";import"./hooks-CR7YY56P.js";import"./axisSelectors-BoLkhT_J.js";import"./d3-scale-DTdaSeXE.js";import"./zIndexSlice-vzQlxu4v.js";import"./renderedTicksSlice-PTTaozgG.js";import"./CartesianChart-B_feyW6L.js";import"./chartDataContext-CoyQinM0.js";import"./CategoricalChart-BXlXDqQY.js";import"./Layer-DAuVz3MT.js";import"./tooltipContext-D-fzSH_v.js";import"./ReactUtils-BYIbW4_R.js";import"./Label-C0OOgdLf.js";import"./Text-CrKmtYV0.js";import"./DOMUtils-DaBDLSWT.js";import"./ZIndexLayer-CJwEcLcc.js";import"./types-BeBHA9WF.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-CCHDnR4M.js";import"./isPlainObject-CS6IzJzX.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CL4E1CJr.js";import"./useAnimationId-DVYg6VJa.js";import"./Trapezoid-CMh-DiG6.js";import"./Sector-CjwyDs-v.js";import"./Symbols-CUYfHAW-.js";import"./symbol-CPTqgyqe.js";import"./step-CGLzAmAZ.js";import"./Curve-BOm9EQk3.js";import"./RegisterGraphicalItemId-BV1Az0SU.js";import"./ErrorBarContext-ggSVFX3T.js";import"./GraphicalItemClipPath-CgGJbcJo.js";import"./SetGraphicalItem-D2M6v_rh.js";import"./getZIndexFromUnknown-Ch_AXV_G.js";import"./graphicalItemSelectors-DNX_hSAl.js";import"./index-2ZvuN1gp.js";import"./ChartSizeDimensions-Be7xBjpI.js";import"./OffsetShower-ByB6-I6e.js";import"./PlotAreaShower-DizTc5Ay.js";const mt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(c,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
