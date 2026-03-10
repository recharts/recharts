import{e as t}from"./iframe-O9ArEVIv.js";import{R as s}from"./arrayEqualityCheck-C-MTCypy.js";import{C as m}from"./ComposedChart-DUOXRuR9.js";import{B as e}from"./Bar-SwwJWQOg.js";import{R as l}from"./RechartsHookInspector-16YUtyRB.js";import{p as c}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Cjflm227.js";import"./immer-BFzhs2u-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DOYlziR8.js";import"./index-a21uXOx0.js";import"./hooks-CqiKktT9.js";import"./axisSelectors-CwHYpHLU.js";import"./d3-scale-CJB90U0O.js";import"./zIndexSlice-Sxdp-diY.js";import"./renderedTicksSlice-BvOqc92I.js";import"./CartesianChart-z72RSBTa.js";import"./chartDataContext-B4Ztt00m.js";import"./CategoricalChart-C-oRlLv7.js";import"./Layer-Bs1IQ35S.js";import"./tooltipContext-CkAKGhbX.js";import"./ReactUtils-BfiyyF4-.js";import"./Label-CEXSNWpb.js";import"./Text-DQdIz477.js";import"./DOMUtils-dyLmYPqX.js";import"./ZIndexLayer-gMxYNdgc.js";import"./types-CsxGUr-v.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-Cu-_wtkP.js";import"./isPlainObject-BMtTHHOe.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DTyUjMdM.js";import"./useAnimationId-DFOXeF_s.js";import"./Trapezoid-BgYcRPYD.js";import"./Sector-CeOtRqWC.js";import"./Symbols-BsW0CkYV.js";import"./symbol-D8ksNROS.js";import"./step-CooRIyZW.js";import"./Curve-BaetafJM.js";import"./RegisterGraphicalItemId-CLKZixP7.js";import"./ErrorBarContext-Caa3uBDH.js";import"./GraphicalItemClipPath-FlIwAJHm.js";import"./SetGraphicalItem-Cl8ON75H.js";import"./getZIndexFromUnknown-dvDDHMA9.js";import"./graphicalItemSelectors-ucncYg0i.js";import"./index-CKq64LI9.js";import"./ChartSizeDimensions-BSf1VGM1.js";import"./OffsetShower-DBynPTQJ.js";import"./PlotAreaShower-DzB7vB8a.js";const mt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:c},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(l,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
