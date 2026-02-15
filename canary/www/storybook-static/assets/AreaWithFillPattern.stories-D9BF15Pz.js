import{e as t}from"./iframe-CcI14rjx.js";import{R as p}from"./arrayEqualityCheck-B8tVyMzV.js";import{C as m}from"./ComposedChart-FcFBNN0D.js";import{A as r}from"./Area-BkDr32fl.js";import{R as s}from"./RechartsHookInspector-BirTV-4S.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-po8mUv-4.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Ds5PaNoP.js";import"./hooks-CRZN5urL.js";import"./axisSelectors-RKSisFMT.js";import"./zIndexSlice-BZyTHnj4.js";import"./CartesianChart-DnBMHEHS.js";import"./chartDataContext-BY-Xyvma.js";import"./CategoricalChart-DcuTq1rr.js";import"./Curve-CHXnr1rt.js";import"./types-Ce3J44ym.js";import"./Layer-8dVuGqJD.js";import"./ReactUtils-C84uddRP.js";import"./Label-Dpi6i3BM.js";import"./Text-D_czYdq0.js";import"./DOMUtils-BjGcEiQ0.js";import"./ZIndexLayer-DuQEL0lP.js";import"./ActivePoints-Ca2XV1yH.js";import"./Dot-B9LqMTkT.js";import"./RegisterGraphicalItemId-hDx3Uu0O.js";import"./GraphicalItemClipPath-CPgfiSVt.js";import"./SetGraphicalItem-GKBrKzuX.js";import"./useAnimationId-B5oI4zFf.js";import"./getRadiusAndStrokeWidthFromDot-TOKn8Uzz.js";import"./graphicalItemSelectors-BKqXZH6g.js";import"./index-DRUD6mwN.js";import"./ChartSizeDimensions-DOkJnWBq.js";import"./OffsetShower-CLsXqqyI.js";import"./PlotAreaShower-BWzOW3_u.js";const N={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
