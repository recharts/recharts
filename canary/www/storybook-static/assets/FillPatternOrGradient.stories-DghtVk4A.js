import{e as t}from"./iframe-CNlB-yu6.js";import{g as s}from"./arrayEqualityCheck-lQwJ1fam.js";import{C as m}from"./ComposedChart-CFG01hB_.js";import{p as l}from"./Page-DPte-9pC.js";import{B as e}from"./Bar-DBYyw0A9.js";import{R as c}from"./RechartsHookInspector-D5_K6jhD.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-uksPlQVK.js";import"./immer-awn-juYO.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BAvxe-5M.js";import"./index-FVVlmF5D.js";import"./hooks-CzETKye0.js";import"./axisSelectors-Sb3f1ocW.js";import"./d3-scale-DgLwc5xh.js";import"./zIndexSlice-BueUxKyz.js";import"./renderedTicksSlice-BhtQt-EH.js";import"./CartesianChart-BAbFLAD3.js";import"./chartDataContext-B8Bgp5-9.js";import"./CategoricalChart-CCKvkIcs.js";import"./Layer-DZ6C1Fsa.js";import"./tooltipContext-B0mhMZlc.js";import"./ReactUtils-CZXZiRZU.js";import"./Label-Bi7SkSuM.js";import"./Text-BkgbSJBB.js";import"./DOMUtils--5Ctvvni.js";import"./ZIndexLayer-DBrFOYBh.js";import"./types-CPecuUPI.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BIq2I243.js";import"./isPlainObject-BpzaTaPh.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B8_swSm0.js";import"./useAnimationId-PuhsBKnu.js";import"./Trapezoid-C-zzOAzy.js";import"./Sector-LS-_W5nP.js";import"./Symbols-C5zVtj1R.js";import"./symbol-DsMOupFF.js";import"./step-D1tlFFQW.js";import"./Curve-tmuRXssi.js";import"./RegisterGraphicalItemId-BYNQWvmg.js";import"./ErrorBarContext-B0g5HTrn.js";import"./GraphicalItemClipPath-D754deXs.js";import"./SetGraphicalItem-DVSS-M3K.js";import"./getZIndexFromUnknown-CDiM_nPw.js";import"./graphicalItemSelectors-C5S0MQyW.js";import"./index-DkFAXYsf.js";import"./ChartSizeDimensions-CofMKbAb.js";import"./OffsetShower-C20eLi2f.js";import"./PlotAreaShower-peVTKEtW.js";const mt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(c,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
