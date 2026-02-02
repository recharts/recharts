import{e as t}from"./iframe-CdO7Aj1B.js";import{R as p}from"./arrayEqualityCheck-DSjGda-c.js";import{C as m}from"./ComposedChart-D7sGpZBQ.js";import{A as r}from"./Area-CQvGBKO0.js";import{R as s}from"./RechartsHookInspector-8WkUE3nw.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Dyq-HTDO.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-CFINL4TS.js";import"./hooks-ByFk5pNE.js";import"./axisSelectors-Cz6m7_H_.js";import"./zIndexSlice-Cqlz5Qvk.js";import"./CartesianChart-K1VjCNnA.js";import"./chartDataContext-CXvLn27W.js";import"./CategoricalChart-CJknGgTn.js";import"./Curve-BvwXZ_2X.js";import"./types-DFIEYgnV.js";import"./Layer-oFeUaaGY.js";import"./ReactUtils-D5Zl77ai.js";import"./Label-BR3nHz9_.js";import"./Text-gQNQGlDJ.js";import"./DOMUtils-Dc62r5Je.js";import"./ZIndexLayer-Dre2jW6R.js";import"./ActivePoints-qmc9cdem.js";import"./Dot-BR-Bd9Ri.js";import"./RegisterGraphicalItemId-DmbEzUCY.js";import"./GraphicalItemClipPath-C-aricuY.js";import"./SetGraphicalItem-Bu99Otwj.js";import"./useAnimationId-Ci_KtL1a.js";import"./getRadiusAndStrokeWidthFromDot-CcsWdYYV.js";import"./graphicalItemSelectors-Cis3iNGY.js";import"./index-B2k25Twf.js";import"./ChartSizeDimensions-ximU9rqf.js";import"./OffsetShower-zZ47YVPO.js";import"./PlotAreaShower-D_H3WfKK.js";const N={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
