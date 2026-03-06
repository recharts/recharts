import{e as t}from"./iframe-aCccIK8W.js";import{R as p}from"./arrayEqualityCheck-ClrrSpKq.js";import{C as m}from"./ComposedChart-BI19kJGr.js";import{A as r}from"./Area-DrVki1W-.js";import{R as s}from"./RechartsHookInspector-DXULShHw.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BiMbCPR1.js";import"./immer-CMSDbRto.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-KXQQ6Aed.js";import"./index-7BGALgNU.js";import"./hooks-BQl6gm9P.js";import"./axisSelectors-BqKDnBGl.js";import"./d3-scale-CSKaLMYw.js";import"./zIndexSlice-dI_hsE6E.js";import"./renderedTicksSlice-C5CpkahC.js";import"./CartesianChart-Dg_vwzFX.js";import"./chartDataContext-DcZ4BnGt.js";import"./CategoricalChart-43yq3nHJ.js";import"./Curve-BLf6fQkp.js";import"./types-BigTFNah.js";import"./step-DZfgQXrh.js";import"./Layer-CmBSmthE.js";import"./ReactUtils-DHbtMuek.js";import"./Label-BjurlKVT.js";import"./Text-CNK9ky3H.js";import"./DOMUtils-6k1qM2nD.js";import"./ZIndexLayer-B0CgEJFf.js";import"./ActivePoints-CPXBnAoH.js";import"./Dot-DtYrWfLR.js";import"./RegisterGraphicalItemId-taqDOdbV.js";import"./GraphicalItemClipPath-DFzOqGMg.js";import"./SetGraphicalItem-C9DhQ9yz.js";import"./useAnimationId-DA5IV2DG.js";import"./getRadiusAndStrokeWidthFromDot-BvcMpZcb.js";import"./graphicalItemSelectors-DfsXJl_5.js";import"./index-B0bVpeoD.js";import"./ChartSizeDimensions-6pSaZa--.js";import"./OffsetShower-zTVqoSRT.js";import"./PlotAreaShower-DtT8gIxN.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
