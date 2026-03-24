import{e as t}from"./iframe-Be0JMHKG.js";import{R as s}from"./arrayEqualityCheck-EyQ3L5Ga.js";import{C as m}from"./ComposedChart-CGSNhVQA.js";import{B as e}from"./Bar-CLP0Pu0-.js";import{R as l}from"./RechartsHookInspector-L4PsTFM9.js";import{p as c}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-P4FnSb9y.js";import"./immer-CtKQQ-wS.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BN1eXA1J.js";import"./index-C3PHkgdT.js";import"./hooks-xrwIZsei.js";import"./axisSelectors-C9mh9qYD.js";import"./d3-scale-DcVoBlH3.js";import"./zIndexSlice-Dprd7Xhy.js";import"./renderedTicksSlice-Z7QNJQ_Y.js";import"./CartesianChart-DHx86xgd.js";import"./chartDataContext-BmO3bTO_.js";import"./CategoricalChart-Cj__GJYp.js";import"./Layer-Ce00NG_9.js";import"./tooltipContext-Cj-A2kO3.js";import"./ReactUtils-BDRjtMGi.js";import"./Label-CgKr6rFd.js";import"./Text-Bbi69GeO.js";import"./DOMUtils-xnRjlpdc.js";import"./ZIndexLayer-C2oM15Rp.js";import"./types-BE6ispln.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-Djxieeih.js";import"./isPlainObject-Bd8ieRPg.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B5cLj3QF.js";import"./useAnimationId-kpn7-WPo.js";import"./Trapezoid-CONlCK3y.js";import"./Sector-Qb-LMRcI.js";import"./Symbols-CKbcWLtD.js";import"./symbol-CXMp1weA.js";import"./step-HmHdlQax.js";import"./Curve-X4p0VWII.js";import"./RegisterGraphicalItemId-B6mWng-O.js";import"./ErrorBarContext-CSxGgjy5.js";import"./GraphicalItemClipPath-BI28y9oi.js";import"./SetGraphicalItem-owgD-Syr.js";import"./getZIndexFromUnknown-CtQV5ZfO.js";import"./graphicalItemSelectors-j3KvFxjp.js";import"./index-B0wdhlLK.js";import"./ChartSizeDimensions-C6t0D3ol.js";import"./OffsetShower-DAHfT2r_.js";import"./PlotAreaShower-BtjPjtQq.js";const mt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:c},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(l,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
