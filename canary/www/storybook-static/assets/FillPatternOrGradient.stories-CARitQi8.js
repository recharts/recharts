import{e as t}from"./iframe-Cq-B9b4f.js";import{R as s}from"./arrayEqualityCheck-CUWGBawt.js";import{C as m}from"./ComposedChart-CWINzm3a.js";import{B as e}from"./Bar-CpNaHkV8.js";import{R as l}from"./RechartsHookInspector-TtpIOyZU.js";import{p as c}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DhciczEd.js";import"./immer-BjLhSv_k.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-ChVZ2Oxv.js";import"./index-BFFNc0YW.js";import"./hooks-QDD28VjS.js";import"./axisSelectors-BgfEPtN4.js";import"./d3-scale-CWQsdIsg.js";import"./zIndexSlice-Di_upqq6.js";import"./renderedTicksSlice-Bgy9EKjI.js";import"./CartesianChart-Dc8WF-dR.js";import"./chartDataContext-0fGuXHUE.js";import"./CategoricalChart-ByiniKNN.js";import"./Layer-D-rMBlaW.js";import"./tooltipContext-huFtfy2L.js";import"./ReactUtils-DE2SzpPB.js";import"./Label-BzBxAWSn.js";import"./Text-rY40w2fD.js";import"./DOMUtils-06HVeAr7.js";import"./ZIndexLayer-DheZEBBb.js";import"./types--yHmHFNL.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BlQ6Z5B2.js";import"./isPlainObject-uQm6Hr4Y.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-6bO7r_4r.js";import"./useAnimationId-DXcWRCnH.js";import"./Trapezoid-B2U15woU.js";import"./Sector-C1hvtgaN.js";import"./Symbols-cf93Ahow.js";import"./symbol-BzYV9rTp.js";import"./step-DUU-NJz1.js";import"./Curve-CYxX35BT.js";import"./RegisterGraphicalItemId-paQBjngI.js";import"./ErrorBarContext-DspuidON.js";import"./GraphicalItemClipPath-CioYfDga.js";import"./SetGraphicalItem-CTMfJU_s.js";import"./getZIndexFromUnknown-jWpri74m.js";import"./graphicalItemSelectors-CZRpo5H3.js";import"./index-DJG8mPG-.js";import"./ChartSizeDimensions-BkgXq5jD.js";import"./OffsetShower-D2w7QLxq.js";import"./PlotAreaShower-CD-Amm5T.js";const mt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:c},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(l,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
