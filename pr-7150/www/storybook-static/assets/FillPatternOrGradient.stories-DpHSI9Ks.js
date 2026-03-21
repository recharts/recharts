import{e as t}from"./iframe-rLfMAXZA.js";import{R as s}from"./arrayEqualityCheck-OjJIGGxq.js";import{C as m}from"./ComposedChart-BjVk6FMS.js";import{B as e}from"./Bar-DYWDdnde.js";import{R as l}from"./RechartsHookInspector-CGMMyBd8.js";import{p as c}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Cy3Gz-UL.js";import"./immer-DvqdMPbs.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C5rZD4qh.js";import"./index-1CgFOnhG.js";import"./hooks-DgA2khsF.js";import"./axisSelectors-Cq_h1C-j.js";import"./d3-scale-DULTCxaQ.js";import"./zIndexSlice-CNK81FG0.js";import"./renderedTicksSlice-BlSnCr41.js";import"./CartesianChart-C_VZaAy7.js";import"./chartDataContext-B3WND6K7.js";import"./CategoricalChart-CTzB8VLC.js";import"./Layer-B0Vv-b1h.js";import"./tooltipContext-BiA8xJam.js";import"./ReactUtils-BClzbOkG.js";import"./Label-BHs-e8Zr.js";import"./Text-BWQYbcH-.js";import"./DOMUtils-CYiDz4oM.js";import"./ZIndexLayer-CsEI63Vc.js";import"./types-BRd5e3b8.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BxNoVXTY.js";import"./isPlainObject-xuio5Ndz.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CweQqCr6.js";import"./useAnimationId-Bi7bZ4Q9.js";import"./Trapezoid-BajFM_G_.js";import"./Sector-Bx3vc8cf.js";import"./Symbols-DNEFR3nz.js";import"./symbol-CTj6pWvp.js";import"./step-DkSlwgc8.js";import"./Curve-DS3UGKj9.js";import"./RegisterGraphicalItemId-5AOI34gd.js";import"./ErrorBarContext-BvpDrqLU.js";import"./GraphicalItemClipPath-f54LuI1V.js";import"./SetGraphicalItem-Coif6o--.js";import"./getZIndexFromUnknown-B9VAhH5P.js";import"./graphicalItemSelectors-BXXhlkhw.js";import"./index-Ck4Yf9Sw.js";import"./ChartSizeDimensions-83vg2xh3.js";import"./OffsetShower-E_iTtzu1.js";import"./PlotAreaShower-Df-GR4o6.js";const mt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:c},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(l,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
