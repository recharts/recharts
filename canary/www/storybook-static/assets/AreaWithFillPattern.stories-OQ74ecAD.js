import{e as t}from"./iframe-DCHwmqK8.js";import{R as p}from"./arrayEqualityCheck-PCrDa-mZ.js";import{C as m}from"./ComposedChart-cpUGiPkE.js";import{A as r}from"./Area-YxwNwi1z.js";import{R as s}from"./RechartsHookInspector-DqPpRwC6.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-9mPboPW3.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Dam48Pnw.js";import"./hooks-C5KjLV4a.js";import"./axisSelectors-tq781mpa.js";import"./zIndexSlice-xa-TURHG.js";import"./renderedTicksSlice-DwhsECxN.js";import"./CartesianChart-BDUX0Tg9.js";import"./chartDataContext-F7_MHoey.js";import"./CategoricalChart-CR27zK7v.js";import"./Curve-B04YTzst.js";import"./types-B1B-Xneg.js";import"./Layer-7f0xQXhX.js";import"./ReactUtils-CDXy_Xlj.js";import"./Label-BPyHNFQk.js";import"./Text-riFZx0Ep.js";import"./DOMUtils-BGimDYvY.js";import"./ZIndexLayer-B-u8VTE_.js";import"./ActivePoints-Dr3FcZs2.js";import"./Dot-bVWJn8Dw.js";import"./RegisterGraphicalItemId-BsQ61kmL.js";import"./GraphicalItemClipPath-DITSj-MA.js";import"./SetGraphicalItem-ChCpVhsL.js";import"./useAnimationId-C8JLALld.js";import"./getRadiusAndStrokeWidthFromDot-DjsEkiNr.js";import"./graphicalItemSelectors-DSzTlca1.js";import"./index-DsiXN0IX.js";import"./ChartSizeDimensions-GkZwO762.js";import"./OffsetShower-C96P7rJy.js";import"./PlotAreaShower-9zl_p26K.js";const Q={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const X=["FillPattern"];export{e as FillPattern,X as __namedExportsOrder,Q as default};
