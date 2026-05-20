import{e as t}from"./iframe-B524E5yX.js";import{g as s}from"./arrayEqualityCheck-DWzVcokC.js";import{C as m}from"./ComposedChart-DDHEMHRT.js";import{p as l}from"./Page-DPte-9pC.js";import{B as e}from"./Bar-BeEgQmum.js";import{R as c}from"./RechartsHookInspector-BHkEwc51.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-erGoKRoU.js";import"./immer-DblGCQ6f.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-kVOVOGBx.js";import"./index-Cxa1JxZ8.js";import"./hooks-C4xKpp4Q.js";import"./axisSelectors-DIkxL-UY.js";import"./d3-scale-1dd7ZUuT.js";import"./zIndexSlice-6cosYb1s.js";import"./renderedTicksSlice-BCQv1ELk.js";import"./CartesianChart-DygjFtzj.js";import"./chartDataContext-BHiuOcfW.js";import"./CategoricalChart-DT5wuxyP.js";import"./Layer-a-5--1A5.js";import"./tooltipContext-B8eJmi2-.js";import"./ReactUtils-rdzq-Cpq.js";import"./Label-LjLfzFR2.js";import"./Text-DAjJQcIE.js";import"./DOMUtils-Cs0OrDMQ.js";import"./ZIndexLayer-kw2kBg7s.js";import"./types-D278CuUF.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-Be6-XL7t.js";import"./isPlainObject-Q96JMfqI.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CnF6718M.js";import"./useAnimationId-B8WApGhr.js";import"./Trapezoid-JGHb5kPs.js";import"./Sector-DHhMbTkM.js";import"./Symbols-DVHiTs4H.js";import"./symbol-FWxgSMGi.js";import"./step-e5eeyF96.js";import"./Curve-CP7expTy.js";import"./RegisterGraphicalItemId-D0FVAtQu.js";import"./ErrorBarContext-LOKpn0lF.js";import"./GraphicalItemClipPath-Day9CREm.js";import"./SetGraphicalItem-Cuswj8oR.js";import"./getZIndexFromUnknown-IehX3q3e.js";import"./graphicalItemSelectors-CV9AMpYP.js";import"./index-BXZ80ZzE.js";import"./ChartSizeDimensions-B4ZLNDb6.js";import"./OffsetShower-CeXcOY0B.js";import"./PlotAreaShower-CsAAvQPX.js";const mt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(c,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
