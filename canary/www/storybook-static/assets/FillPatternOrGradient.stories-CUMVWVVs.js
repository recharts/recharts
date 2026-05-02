import{e as t}from"./iframe-DbVDg_ca.js";import{R as s}from"./arrayEqualityCheck-BSVOQ7T-.js";import{C as m}from"./ComposedChart-BlXi-i9v.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as e}from"./Bar-D2gqqMwU.js";import{R as c}from"./RechartsHookInspector-WP52i-1p.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DgDD8GmR.js";import"./immer-0ZZjS5Nj.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-sJojUHlC.js";import"./index-CUo349tj.js";import"./hooks-8LGpZrMc.js";import"./axisSelectors-DuQQA8AF.js";import"./d3-scale-Ca2GXXvQ.js";import"./zIndexSlice-CDzSIoPc.js";import"./renderedTicksSlice-BYUGSQCb.js";import"./CartesianChart-BIeZSTsS.js";import"./chartDataContext-DkZqMAvH.js";import"./CategoricalChart-DW6_TUNV.js";import"./Layer-C9NfejAk.js";import"./tooltipContext-By3RIlXL.js";import"./ReactUtils-ruqV-srf.js";import"./Label-CT2eYMKi.js";import"./Text-BjaMrcvh.js";import"./DOMUtils-DXLQ8uU1.js";import"./ZIndexLayer-D5PjewgR.js";import"./types-9bS4DgjT.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-a-btUYcY.js";import"./isPlainObject-qXbjbrRe.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C71dLN6n.js";import"./useAnimationId-BGASjBYn.js";import"./Trapezoid-DCNj78K7.js";import"./Sector-DIpZMX41.js";import"./Symbols-h61-aZIG.js";import"./symbol-suQNbvDu.js";import"./step-DVp28hgV.js";import"./Curve-7li-NOkq.js";import"./RegisterGraphicalItemId-BdjwpoFI.js";import"./ErrorBarContext-BvEmMKSO.js";import"./GraphicalItemClipPath-CLSG_HT0.js";import"./SetGraphicalItem-BwNPbTjt.js";import"./getZIndexFromUnknown-D-b5Gqbj.js";import"./graphicalItemSelectors-DRaebRWv.js";import"./index-SfPrSKbK.js";import"./ChartSizeDimensions-DQlshRXH.js";import"./OffsetShower-DH3pRQIv.js";import"./PlotAreaShower-D9cE9N3J.js";const mt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(c,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
