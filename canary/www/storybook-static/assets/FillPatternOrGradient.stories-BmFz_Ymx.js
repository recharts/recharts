import{e as t}from"./iframe-BD1KoWK2.js";import{R as s}from"./arrayEqualityCheck-Cde7DPwP.js";import{C as l}from"./ComposedChart-CpHM8O-c.js";import{B as r}from"./Bar-UqBrJhnT.js";import{R as m}from"./RechartsHookInspector-D7IHkHn9.js";import{p as c}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-jJ9mOY4z.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CyX5gEfk.js";import"./hooks-BYJ871TN.js";import"./axisSelectors-CEc7xIMq.js";import"./zIndexSlice-BvhylE7E.js";import"./CartesianChart-Dhtf_0dk.js";import"./chartDataContext-CnDpTFyo.js";import"./CategoricalChart-CI3_eBBD.js";import"./Layer-CRI4mTHm.js";import"./tooltipContext-DR1TWxOU.js";import"./ReactUtils-Z9JD7jXO.js";import"./Label-DKDP8eG9.js";import"./Text-NBPo0mLT.js";import"./DOMUtils-Lc23xLhb.js";import"./ZIndexLayer-CVx_Xq-U.js";import"./types-CvLbK4WM.js";import"./ActiveShapeUtils-D4Tjr80H.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dqzy-26l.js";import"./useAnimationId-C52_k4XW.js";import"./Trapezoid-Ce1Zpmiv.js";import"./Sector-BVsQ6t1D.js";import"./Symbols-Cd74flzx.js";import"./Curve-CTi9DAae.js";import"./RegisterGraphicalItemId-BdofLPRs.js";import"./ErrorBarContext-DDBG_BG0.js";import"./GraphicalItemClipPath-CHbmwSgW.js";import"./SetGraphicalItem-BNcYp_R3.js";import"./getZIndexFromUnknown-l885V_di.js";import"./graphicalItemSelectors-dyKU1Amc.js";import"./index-G9AZeeqA.js";import"./ChartSizeDimensions-asr3RhFu.js";import"./OffsetShower-CBrp3efF.js";import"./PlotAreaShower-Bn3UIJhb.js";const tt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(l,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:c},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(m,null)))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
