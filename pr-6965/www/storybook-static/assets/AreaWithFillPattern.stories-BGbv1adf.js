import{e as t}from"./iframe-D44FkRcR.js";import{R as p}from"./arrayEqualityCheck-CpHRyEoZ.js";import{C as m}from"./ComposedChart-BJqa9Xh0.js";import{A as r}from"./Area-BPJoK7Pt.js";import{R as s}from"./RechartsHookInspector-BUut-YKB.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-C9MxTna8.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CZxiJS72.js";import"./hooks-yX9SOuhB.js";import"./axisSelectors-DS2aNONq.js";import"./zIndexSlice-By2Q2sEz.js";import"./CartesianChart-MGBUmmtK.js";import"./chartDataContext-DR37Z2O8.js";import"./CategoricalChart-Dy6guSzL.js";import"./Curve-gEApNnTT.js";import"./types-BaOyAkY9.js";import"./Layer-Cw02mn90.js";import"./ReactUtils-Dk5cr1D8.js";import"./Label-BDKklye7.js";import"./Text-m6BVE9y3.js";import"./DOMUtils-DdnL5-6j.js";import"./ZIndexLayer-6GEHbSGN.js";import"./ActivePoints-ClEt73cA.js";import"./Dot-CxuisgTC.js";import"./RegisterGraphicalItemId-Cmin2ECj.js";import"./GraphicalItemClipPath-CVVuYceY.js";import"./SetGraphicalItem-DNNp47_y.js";import"./useAnimationId-B6KoK7rR.js";import"./getRadiusAndStrokeWidthFromDot-c3x0UpIy.js";import"./graphicalItemSelectors-CeIxB5zF.js";import"./index-D7ezxrhm.js";import"./ChartSizeDimensions-B61qSqob.js";import"./OffsetShower-BfGtxzWE.js";import"./PlotAreaShower-DA_KxbUr.js";const N={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const Q=["FillPattern"];export{e as FillPattern,Q as __namedExportsOrder,N as default};
