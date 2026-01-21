import{e as t}from"./iframe-But0a38P.js";import{R as p}from"./arrayEqualityCheck-CYbCyNsP.js";import{C as m}from"./ComposedChart-da7ff5Gu.js";import{A as r}from"./Area-B-R9_Jgc.js";import{R as s}from"./RechartsHookInspector-C5Pe1Yuk.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Bm0IZKgg.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-PnZQcIU_.js";import"./hooks-CpJdPTaX.js";import"./axisSelectors-C4f3hvSw.js";import"./zIndexSlice-BltV0wsp.js";import"./CartesianChart-Cwa6sqm_.js";import"./chartDataContext-BNuUAnVq.js";import"./CategoricalChart-B2oR5-3x.js";import"./Curve-B4UI-EDA.js";import"./types-BORgRnck.js";import"./Layer-afBuC6vE.js";import"./ReactUtils-BkpqDUuI.js";import"./Label-C7EMJJOB.js";import"./Text-CcNcGCTu.js";import"./DOMUtils-Du126Ke7.js";import"./ZIndexLayer-BqdPe-lh.js";import"./ActivePoints-Dnf6qJKf.js";import"./Dot-CcU5UjI7.js";import"./RegisterGraphicalItemId-ByXCQiha.js";import"./GraphicalItemClipPath-YNxfKYWD.js";import"./SetGraphicalItem-BNXEXR48.js";import"./useAnimationId-DCy88jod.js";import"./getRadiusAndStrokeWidthFromDot-BQ0TWRR4.js";import"./graphicalItemSelectors-C0CCNrLU.js";import"./index-C00Mu2Jv.js";import"./ChartSizeDimensions-C_cjOMUb.js";import"./OffsetShower-CyyKWRo3.js";import"./PlotAreaShower-LOYVmRHK.js";const N={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
