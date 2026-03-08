import{e as t}from"./iframe-CV07hTJo.js";import{R as p}from"./arrayEqualityCheck-DZYwMANi.js";import{C as m}from"./ComposedChart-DtynIp2o.js";import{A as r}from"./Area-Dw1GFpC2.js";import{R as s}from"./RechartsHookInspector-ouq6dPls.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps--Z_AJC6X.js";import"./immer-DZr-3B4h.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B_A_zLwr.js";import"./index-BbPZUkKO.js";import"./hooks-hiQan1d_.js";import"./axisSelectors-Colr1FXT.js";import"./d3-scale-Dsv-X1x3.js";import"./zIndexSlice-bGazLamm.js";import"./renderedTicksSlice-BVud2Eit.js";import"./CartesianChart-DxPhfcnf.js";import"./chartDataContext-Diiede2r.js";import"./CategoricalChart-BXVtqco4.js";import"./Curve-6Ct2z4dM.js";import"./types-BW-iMsEE.js";import"./step-DxAhMwRF.js";import"./Layer-CjSu9kHg.js";import"./ReactUtils-C6WIusF5.js";import"./Label-DYpp1LIm.js";import"./Text-DQ9H0cYG.js";import"./DOMUtils-tjr3CYLs.js";import"./ZIndexLayer-Bsxd_xbk.js";import"./ActivePoints-DKxtfJTG.js";import"./Dot-CJkLJ9KV.js";import"./RegisterGraphicalItemId-C78YkPgS.js";import"./GraphicalItemClipPath-DbLJ1P35.js";import"./SetGraphicalItem-CWJSiYUF.js";import"./useAnimationId-DLuTmxa5.js";import"./getRadiusAndStrokeWidthFromDot-DlSSP4S2.js";import"./graphicalItemSelectors-B3j-xLsb.js";import"./index-NB669Q6L.js";import"./ChartSizeDimensions-DYT9YPss.js";import"./OffsetShower-CIa2yD69.js";import"./PlotAreaShower-Lc3Ppbaa.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
