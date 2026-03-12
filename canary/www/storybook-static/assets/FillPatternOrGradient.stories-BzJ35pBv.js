import{e as t}from"./iframe-COcG-qbh.js";import{R as s}from"./arrayEqualityCheck-BeOMvnb3.js";import{C as m}from"./ComposedChart-Bj1Kn6Ah.js";import{B as e}from"./Bar-k4uNftwS.js";import{R as l}from"./RechartsHookInspector-D4zrFLHG.js";import{p as c}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B_uk6Xbm.js";import"./immer-Ca_zwxaB.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C1tql2K4.js";import"./index-L5JLgxKc.js";import"./hooks-B6EdczHv.js";import"./axisSelectors-CYW86iHh.js";import"./d3-scale-CT6TP1ZB.js";import"./zIndexSlice-DLKXsrK7.js";import"./renderedTicksSlice-CPg6Eb9Y.js";import"./CartesianChart-C0k3xA_C.js";import"./chartDataContext-BfM2rVtS.js";import"./CategoricalChart-DbHJ5slW.js";import"./Layer-vnezQjXg.js";import"./tooltipContext-CBZyweKL.js";import"./ReactUtils-ByNOpxgT.js";import"./Label-DoQmsUBD.js";import"./Text-C_7F8gzT.js";import"./DOMUtils-DToY1wG2.js";import"./ZIndexLayer-BbjqRzm7.js";import"./types-BmPLOBN4.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-RW2zb_O9.js";import"./isPlainObject-C1cKrmsx.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DI-yKH8h.js";import"./useAnimationId-C4wu98Fe.js";import"./Trapezoid-CsCypRfT.js";import"./Sector-DxAh5Ohi.js";import"./Symbols-BHgUqhVd.js";import"./symbol-DxkjCDul.js";import"./step-CYjHyJAh.js";import"./Curve-C3xLkezj.js";import"./RegisterGraphicalItemId-DgZGaJJ7.js";import"./ErrorBarContext-DI230CHI.js";import"./GraphicalItemClipPath-B0HdbPwh.js";import"./SetGraphicalItem-D9CK4gaX.js";import"./getZIndexFromUnknown-BDxRIK1i.js";import"./graphicalItemSelectors-9vdvgeJj.js";import"./index-R98a5OxC.js";import"./ChartSizeDimensions-DH_xn-IL.js";import"./OffsetShower-aZbRgbm7.js";import"./PlotAreaShower-Dce4f1ZD.js";const mt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:c},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(l,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
