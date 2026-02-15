import{e as t}from"./iframe-NOjYqVDf.js";import{R as p}from"./arrayEqualityCheck-CKPvr2Sv.js";import{C as m}from"./ComposedChart-DP1DcGpI.js";import{A as r}from"./Area-k4V-TotW.js";import{R as s}from"./RechartsHookInspector-CZuAKH0J.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B4jksYlp.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CYtF97y_.js";import"./hooks-DkToD0vA.js";import"./axisSelectors-_b35tTPj.js";import"./zIndexSlice-Doe50Ljr.js";import"./renderedTicksSlice-CNdDn6G4.js";import"./CartesianChart-DlSo8JUa.js";import"./chartDataContext-BCOGOXd9.js";import"./CategoricalChart-BxTZW61W.js";import"./Curve-DR3tx7PX.js";import"./types-Cdrp97aK.js";import"./Layer-C5eEc_aO.js";import"./ReactUtils-B9O68L3J.js";import"./Label-DSmhxnyp.js";import"./Text-C7FUzYMA.js";import"./DOMUtils-BMDxU690.js";import"./ZIndexLayer-CmnykYAa.js";import"./ActivePoints-CQfp67or.js";import"./Dot-B8-r0lP5.js";import"./RegisterGraphicalItemId-YVRRFCp2.js";import"./GraphicalItemClipPath-C6swNonr.js";import"./SetGraphicalItem-BeKk8_xu.js";import"./useAnimationId-DyWolGb_.js";import"./getRadiusAndStrokeWidthFromDot-Cr1dXyad.js";import"./graphicalItemSelectors-BdU_bpR-.js";import"./index-Ioy1DO1u.js";import"./ChartSizeDimensions-CVj6kL6N.js";import"./OffsetShower-BtzaIgV3.js";import"./PlotAreaShower-BDFeD2A4.js";const Q={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
