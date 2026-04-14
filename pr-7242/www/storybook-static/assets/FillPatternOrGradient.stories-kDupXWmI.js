import{e as t}from"./iframe-DvnDov4A.js";import{R as s}from"./arrayEqualityCheck-C9lnY2Jk.js";import{C as m}from"./ComposedChart-Dakl-_yO.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as e}from"./Bar-6deIU33g.js";import{R as c}from"./RechartsHookInspector-4zpoQdEh.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-G5H4W-ZU.js";import"./immer-sZpCrch2.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-TcHv2uQV.js";import"./index-C2oOJWkO.js";import"./hooks-BvQWUlQP.js";import"./axisSelectors-CqBaekTZ.js";import"./d3-scale-BcO2Qy0K.js";import"./zIndexSlice-SWDQ-CoV.js";import"./renderedTicksSlice-031iG6wN.js";import"./CartesianChart-B_ZS3e1w.js";import"./chartDataContext-i-tilv0W.js";import"./CategoricalChart-D_33J7_3.js";import"./Layer-nkTMaplG.js";import"./tooltipContext-BIjqbsLZ.js";import"./ReactUtils-CIfEwxbL.js";import"./Label-DplSYrhy.js";import"./Text-spNYJ-qR.js";import"./DOMUtils-DdQ6eDLq.js";import"./ZIndexLayer-CM0jcixQ.js";import"./types-TD_Bh_Hf.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-lzwBTbm9.js";import"./isPlainObject-Bm-7eQPN.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-7q3XGzAF.js";import"./useAnimationId-6CABSB-X.js";import"./Trapezoid-D2p22PjP.js";import"./Sector-bYTZ9FBx.js";import"./Symbols-D2whzrea.js";import"./symbol-B4kl7GNn.js";import"./step-hQY7d3_H.js";import"./Curve-BY4G9kL5.js";import"./RegisterGraphicalItemId-BIRi2jKj.js";import"./ErrorBarContext-CvFDt4Lo.js";import"./GraphicalItemClipPath-kvMDTclB.js";import"./SetGraphicalItem-tfmCk3IV.js";import"./getZIndexFromUnknown-kqPrKk7S.js";import"./graphicalItemSelectors-CLVI2Tyq.js";import"./index-DCGexNIF.js";import"./ChartSizeDimensions-CTHGO4oG.js";import"./OffsetShower-DvcNQrDC.js";import"./PlotAreaShower-DoBolyp8.js";const mt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(c,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
