import{e as t}from"./iframe-C0b843bJ.js";import{R as s}from"./arrayEqualityCheck-Cbemodpd.js";import{C as l}from"./ComposedChart-E69Ihgri.js";import{B as r}from"./Bar-BIGlxQu-.js";import{R as m}from"./RechartsHookInspector-CBnKyMAv.js";import{p as c}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DhRhZ63O.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-CO19iou7.js";import"./hooks-dTw7M1vz.js";import"./axisSelectors-qWILVFYf.js";import"./zIndexSlice-B8FeRzdW.js";import"./CartesianChart-7cy0WoRj.js";import"./chartDataContext-Btc_iGmV.js";import"./CategoricalChart-Bd7xSF-i.js";import"./Layer-purCCvV2.js";import"./tooltipContext-DNnYpWA8.js";import"./ReactUtils-BUf380BK.js";import"./Label-2fZ2yvU7.js";import"./Text-rJUU6KZ4.js";import"./DOMUtils-C0s6ZPvi.js";import"./ZIndexLayer-_DstmVXN.js";import"./types-B5P-qikU.js";import"./ActiveShapeUtils-BcJOrbCg.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C4tB6UmQ.js";import"./useAnimationId-D7FQIEyi.js";import"./Trapezoid-CtFJUH4H.js";import"./Sector-C0mFPEM4.js";import"./Symbols-C_e-ILSN.js";import"./Curve-Bs2FAeTM.js";import"./RegisterGraphicalItemId-BWOfQp6C.js";import"./ErrorBarContext-CEzzcyRd.js";import"./GraphicalItemClipPath-BXQrJ9Pv.js";import"./SetGraphicalItem-BrMK-Pyd.js";import"./getZIndexFromUnknown-DNt9VrlA.js";import"./graphicalItemSelectors-y619VRn-.js";import"./index-lXdD0Nzr.js";import"./ChartSizeDimensions-DcGIh6Y9.js";import"./OffsetShower-1eskoS1A.js";import"./PlotAreaShower-8zrELIBX.js";const tt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(l,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:c},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(m,null)))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const et=["Fill"];export{e as Fill,et as __namedExportsOrder,tt as default};
