import{e as t}from"./iframe-Ck9vc756.js";import{R as s}from"./arrayEqualityCheck-vzCieRp2.js";import{C as m}from"./ComposedChart-DfP8SAqH.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as e}from"./Bar-WFLWX3XG.js";import{R as c}from"./RechartsHookInspector-jYNw452D.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-nQu5Go0U.js";import"./immer-DxfnJBPA.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-VxEE_HZc.js";import"./index-DcmFMlNy.js";import"./hooks-e18ms5aC.js";import"./axisSelectors-BUVUYV1B.js";import"./d3-scale-CWye4qHt.js";import"./zIndexSlice-y206Xv9r.js";import"./renderedTicksSlice-DZ5s87U9.js";import"./CartesianChart-DU17ec1s.js";import"./chartDataContext-w_xDJEY9.js";import"./CategoricalChart-dlD1y7dU.js";import"./Layer-C26sMZzH.js";import"./tooltipContext-DYLBHXp0.js";import"./ReactUtils-QBrDvIPv.js";import"./Label-Crw3CPfI.js";import"./Text-DDesK1Nf.js";import"./DOMUtils-BCDfv7vR.js";import"./ZIndexLayer-CJ-WJ8V7.js";import"./types-BGHQe8uG.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BEDy9_pC.js";import"./isPlainObject-BGDfWSco.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DmefmFIR.js";import"./useAnimationId-B40SS4XH.js";import"./Trapezoid-DfEdCmhW.js";import"./Sector-DK3gU8wt.js";import"./Symbols-DO4Vi22k.js";import"./symbol-DBHvF3Bk.js";import"./step-BIffBEER.js";import"./Curve-DcMGJFRD.js";import"./RegisterGraphicalItemId-Ddc28GTk.js";import"./ErrorBarContext-wfunW0SD.js";import"./GraphicalItemClipPath-O2r-hl13.js";import"./SetGraphicalItem-Dos1M3Gw.js";import"./getZIndexFromUnknown-DENUaQ8e.js";import"./graphicalItemSelectors-DCZgLbeh.js";import"./index-D1Nat1jZ.js";import"./ChartSizeDimensions-DeS7AUEB.js";import"./OffsetShower-B5SEMIpQ.js";import"./PlotAreaShower-BRBe-I_w.js";const mt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(c,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
