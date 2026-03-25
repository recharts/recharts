import{e as t}from"./iframe-BUUPGxKW.js";import{R as s}from"./arrayEqualityCheck-uAaGhnkl.js";import{C as m}from"./ComposedChart-DSmYFUeE.js";import{B as e}from"./Bar-Bzl0KGI-.js";import{R as l}from"./RechartsHookInspector-Bw28QuEh.js";import{p as c}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DyTAkq0H.js";import"./immer-kqZDXGZE.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DdW9qina.js";import"./index-oLTRUqnU.js";import"./hooks-BNCSk-QW.js";import"./axisSelectors-CQVyKxdV.js";import"./d3-scale-b1qoVJWC.js";import"./zIndexSlice-DsPDLjCa.js";import"./renderedTicksSlice-GPCqPVlj.js";import"./CartesianChart-npq1asZ9.js";import"./chartDataContext-D2ei2EEV.js";import"./CategoricalChart-BjzN8N8f.js";import"./Layer-DlNKk7f2.js";import"./tooltipContext-C54dPmVz.js";import"./ReactUtils-BaDlyhyr.js";import"./Label-C0y-OKmx.js";import"./Text-CHP1LCbq.js";import"./DOMUtils-z8uKMvkf.js";import"./ZIndexLayer-CiKkYojy.js";import"./types-DBwevUA7.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-yXhTLdG6.js";import"./isPlainObject-BGZcR8iC.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-3zO8wV20.js";import"./useAnimationId-CMTrGaHR.js";import"./Trapezoid-BV5ztp3S.js";import"./Sector-DdslfAV3.js";import"./Symbols-xIV2Z4Ym.js";import"./symbol-BvvTpJyA.js";import"./step-C9wD-hig.js";import"./Curve-C5yOoaqn.js";import"./RegisterGraphicalItemId-F7IP_4jr.js";import"./ErrorBarContext-CwmlQaa8.js";import"./GraphicalItemClipPath-D_imBHSf.js";import"./SetGraphicalItem-BXWccnGO.js";import"./getZIndexFromUnknown-Ypu64hNE.js";import"./graphicalItemSelectors-CfXVXN3C.js";import"./index-ByfBPDju.js";import"./ChartSizeDimensions-Db9Stn-A.js";import"./OffsetShower-Di7UReX2.js";import"./PlotAreaShower-BDM2L963.js";const mt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:c},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(l,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
