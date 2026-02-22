import{e as t}from"./iframe-DwKnaYxn.js";import{R as s}from"./arrayEqualityCheck-LpIzrfco.js";import{C as m}from"./ComposedChart-DVQptumT.js";import{B as e}from"./Bar-DdPmfMKg.js";import{R as l}from"./RechartsHookInspector-BulN8Qtf.js";import{p as c}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-C4ASXxnl.js";import"./immer-DQq_9s85.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Cx1zvPpd.js";import"./index-CdfNcBdj.js";import"./hooks-hd7QZ5DW.js";import"./axisSelectors-CHTcuo-V.js";import"./d3-scale-DF79GY39.js";import"./zIndexSlice-BYI3CC3N.js";import"./renderedTicksSlice-CSkX6jPi.js";import"./CartesianChart-CzQwlEOC.js";import"./chartDataContext-BLheDghz.js";import"./CategoricalChart-E4I9FfSw.js";import"./Layer-DSEoyjCD.js";import"./tooltipContext-Bp_z7nZo.js";import"./ReactUtils-BWd9nqnf.js";import"./Label-V1o-IcdK.js";import"./Text-Cmd1_Toj.js";import"./DOMUtils-Poqmn9Kz.js";import"./ZIndexLayer-BN-fjZdO.js";import"./types-CuZ_PvfO.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BElib0Bt.js";import"./isPlainObject-CWJcMVMA.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-bCycDAsX.js";import"./useAnimationId-DAuxgXsL.js";import"./Trapezoid-lPFf9vCg.js";import"./Sector-DE27qkYe.js";import"./Symbols-C2QRSUXD.js";import"./symbol-CZd2cT8P.js";import"./step-Cbn8vCGE.js";import"./Curve-BGSMtIpM.js";import"./RegisterGraphicalItemId-DJ-_fktQ.js";import"./ErrorBarContext-C_ynaDio.js";import"./GraphicalItemClipPath-BWTY-wx8.js";import"./SetGraphicalItem-BvmoZ9RU.js";import"./getZIndexFromUnknown-BvopCGcW.js";import"./graphicalItemSelectors-DCxC451_.js";import"./index-DfrlB0-M.js";import"./ChartSizeDimensions-Bj69MEnT.js";import"./OffsetShower-BpsLBEIx.js";import"./PlotAreaShower-5WwlvIXR.js";const mt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:c},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(l,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
