import{e as t}from"./iframe-DTgyoVvk.js";import{R as s}from"./arrayEqualityCheck-EHbEP26L.js";import{C as m}from"./ComposedChart-DxsdSTLV.js";import{B as e}from"./Bar-sAdwoKJt.js";import{R as l}from"./RechartsHookInspector-CEM_bNOG.js";import{p as c}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-D6qERWpv.js";import"./immer-Cali6Ur_.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Chfcl0hS.js";import"./index-BZ07V7b0.js";import"./hooks-C2ewgjKA.js";import"./axisSelectors-etAOI9l8.js";import"./d3-scale-OH59Lrba.js";import"./zIndexSlice-C5hUHulT.js";import"./renderedTicksSlice-lIBtZyXl.js";import"./CartesianChart-3k35313H.js";import"./chartDataContext-DEXCwpe8.js";import"./CategoricalChart-tWQ6qvk8.js";import"./Layer-CN_vGRpI.js";import"./tooltipContext-BkxvYNDl.js";import"./ReactUtils-BYwaZR_U.js";import"./Label-Ceoi0MO2.js";import"./Text-DzAJvHlo.js";import"./DOMUtils-BzN38qwO.js";import"./ZIndexLayer-BR0xXhbH.js";import"./types-CFHwNx79.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-D1UYsbu-.js";import"./isPlainObject-cO95R4gJ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-pA7LeOq9.js";import"./useAnimationId-fmEgFYYy.js";import"./Trapezoid-C0NYHdgo.js";import"./Sector-lyZE52ex.js";import"./Symbols-DIOiPUYO.js";import"./symbol-DLAst82x.js";import"./step-C7wlxZdo.js";import"./Curve-DHT2OdXm.js";import"./RegisterGraphicalItemId-B8FdEXiZ.js";import"./ErrorBarContext-DyEpq3qQ.js";import"./GraphicalItemClipPath-fMgbbWOb.js";import"./SetGraphicalItem-DlupFmAY.js";import"./getZIndexFromUnknown-87Q7bzwL.js";import"./graphicalItemSelectors-DhYPmqSU.js";import"./index-BSHSP00B.js";import"./ChartSizeDimensions-DEWYFyG1.js";import"./OffsetShower-DkHEZ74E.js";import"./PlotAreaShower-VzN6bTnW.js";const mt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:c},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(l,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
