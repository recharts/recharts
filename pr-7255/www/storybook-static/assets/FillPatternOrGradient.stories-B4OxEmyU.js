import{e as t}from"./iframe-Bs9ufhmU.js";import{R as s}from"./arrayEqualityCheck-bNviqcqR.js";import{C as m}from"./ComposedChart-K0C4_WI2.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as e}from"./Bar-DikLeVmF.js";import{R as c}from"./RechartsHookInspector-BLOzRcf9.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CGjn5uwQ.js";import"./immer-7dvTdnME.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BZIvkK7Y.js";import"./index-Dj-F8bgJ.js";import"./hooks-DNTcenQI.js";import"./axisSelectors-B6DmQDXD.js";import"./d3-scale-QYSZWFrh.js";import"./zIndexSlice-B-DHuVWa.js";import"./renderedTicksSlice-D4shqqjC.js";import"./CartesianChart-BB1EgM6J.js";import"./chartDataContext-pLUBtclw.js";import"./CategoricalChart-jwpeEM8k.js";import"./Layer-BeNhTzXz.js";import"./tooltipContext-BemE5Utq.js";import"./ReactUtils-DhI6Oe1E.js";import"./Label-DU0nM-QI.js";import"./Text-hajrhHnl.js";import"./DOMUtils-DooEv1Ok.js";import"./ZIndexLayer-BNfspdHK.js";import"./types-iG6YPFqe.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BF7TNpr9.js";import"./isPlainObject-DsuLoG7m.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DUsMUIL7.js";import"./useAnimationId-B97gwkv5.js";import"./Trapezoid-5VBN_EIn.js";import"./Sector-mpY_PZJM.js";import"./Symbols-D0Ncjn54.js";import"./symbol-BG2oG_xM.js";import"./step-Egwu_prR.js";import"./Curve-B9iYmKCN.js";import"./RegisterGraphicalItemId-_wgk5kOH.js";import"./ErrorBarContext-E0MFYBlH.js";import"./GraphicalItemClipPath-cqIDCUaZ.js";import"./SetGraphicalItem-DGPcT5tY.js";import"./getZIndexFromUnknown-6lFgwBH1.js";import"./graphicalItemSelectors-DaJdvWiA.js";import"./index-bM7E3l5J.js";import"./ChartSizeDimensions-SAcKlyRY.js";import"./OffsetShower-BK-2MEQe.js";import"./PlotAreaShower-BHBQx0G4.js";const mt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(c,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
