import{e as t}from"./iframe-CPMBPDiW.js";import{R as p}from"./arrayEqualityCheck-BuDnjzUV.js";import{C as m}from"./ComposedChart-DtpNVTCG.js";import{c as s}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-CF4C5ihh.js";import{R as l}from"./RechartsHookInspector-DxdSXL0K.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-x-xJryKY.js";import"./immer-vUXr1xyy.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D7X0iTSa.js";import"./index-41kzo7-f.js";import"./hooks-CZjbEOHJ.js";import"./axisSelectors-DS_oX4Yb.js";import"./d3-scale-DxZ452bO.js";import"./zIndexSlice-Dr6oT2qB.js";import"./renderedTicksSlice-BJAXzV77.js";import"./CartesianChart-DH2v7K23.js";import"./chartDataContext-CV0cJvXm.js";import"./CategoricalChart-Cbmwan-l.js";import"./Curve-JHKdodnE.js";import"./types-BEArBsqN.js";import"./step-CaCTG7D1.js";import"./Layer-BU-6_6Kb.js";import"./ReactUtils-CfsI_UnC.js";import"./Label-DxWyVNuC.js";import"./Text-3lL52T9r.js";import"./DOMUtils-DD4Lzq5B.js";import"./ZIndexLayer-D5fxgLpy.js";import"./ActivePoints-wTJjK4Ig.js";import"./Dot-C0mRoZzJ.js";import"./RegisterGraphicalItemId-BB9O0Mjy.js";import"./GraphicalItemClipPath-qTNWK1mm.js";import"./SetGraphicalItem-33kMbvyx.js";import"./useAnimationId-B2ugAfTp.js";import"./getRadiusAndStrokeWidthFromDot-DuRb3MXi.js";import"./graphicalItemSelectors-DSHBVqjK.js";import"./index-B8_wGQ9D.js";import"./ChartSizeDimensions-DELo0r0O.js";import"./OffsetShower-HzHsLlkW.js";import"./PlotAreaShower-BJ8q8bHN.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:s},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(l,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={coordinateWithValueData}>
          <defs>
            <pattern id="left" width="12" height="4" patternUnits="userSpaceOnUse">
              <rect width="4" height="4" fill="#8884d8" />
            </pattern>
            <pattern id="right" width="8" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect width="4" height="4" fill="#82ca9d" />
            </pattern>
          </defs>
          <Area type="monotone" dataKey="x" stroke="#8884d8" fillOpacity={1} fill="url(#left)" />
          <Area type="monotone" dataKey="y" stroke="#82ca9d" fillOpacity={1} fill="url(#right)" />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const et=["FillPattern"];export{e as FillPattern,et as __namedExportsOrder,tt as default};
