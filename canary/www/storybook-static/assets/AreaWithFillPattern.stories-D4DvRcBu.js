import{e as t}from"./iframe-CYBvhlZy.js";import{R as p}from"./arrayEqualityCheck-CK8f-Z2u.js";import{C as m}from"./ComposedChart-Bvvd3hm_.js";import{c as s}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-DTmC9TGz.js";import{R as l}from"./RechartsHookInspector-CaeSkNQM.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-fdlpGSvO.js";import"./immer-DZ9JDNpk.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D_53Ouva.js";import"./index-nd8_1HWo.js";import"./hooks-CR7YY56P.js";import"./axisSelectors-BoLkhT_J.js";import"./d3-scale-DTdaSeXE.js";import"./zIndexSlice-vzQlxu4v.js";import"./renderedTicksSlice-PTTaozgG.js";import"./CartesianChart-B_feyW6L.js";import"./chartDataContext-CoyQinM0.js";import"./CategoricalChart-BXlXDqQY.js";import"./Curve-BOm9EQk3.js";import"./types-BeBHA9WF.js";import"./step-CGLzAmAZ.js";import"./Layer-DAuVz3MT.js";import"./ReactUtils-BYIbW4_R.js";import"./Label-C0OOgdLf.js";import"./Text-CrKmtYV0.js";import"./DOMUtils-DaBDLSWT.js";import"./ZIndexLayer-CJwEcLcc.js";import"./ActivePoints-CMoiNPrV.js";import"./Dot-D7HQ1K3c.js";import"./RegisterGraphicalItemId-BV1Az0SU.js";import"./GraphicalItemClipPath-CgGJbcJo.js";import"./SetGraphicalItem-D2M6v_rh.js";import"./useAnimationId-DVYg6VJa.js";import"./getRadiusAndStrokeWidthFromDot-XsFMXGfI.js";import"./graphicalItemSelectors-DNX_hSAl.js";import"./index-2ZvuN1gp.js";import"./ChartSizeDimensions-Be7xBjpI.js";import"./OffsetShower-ByB6-I6e.js";import"./PlotAreaShower-DizTc5Ay.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:s},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(l,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
