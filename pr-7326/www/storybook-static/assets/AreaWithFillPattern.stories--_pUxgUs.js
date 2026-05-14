import{e as t}from"./iframe-BH41_KsK.js";import{R as p}from"./arrayEqualityCheck-CGbsBh9H.js";import{C as m}from"./ComposedChart-ClapdULO.js";import{c as s}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-7EYRhPlK.js";import{R as l}from"./RechartsHookInspector-DcrWhI6K.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-C5jg0EzG.js";import"./immer-ZwRip_iH.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B5rnF5yF.js";import"./index-Bz_RkPth.js";import"./hooks-DSeH88Zv.js";import"./axisSelectors-C71PNMoj.js";import"./d3-scale-DNp6AOXD.js";import"./zIndexSlice-Dbf9wnDO.js";import"./renderedTicksSlice-3bqcLC8e.js";import"./CartesianChart-DMgQ1LDd.js";import"./chartDataContext-DMreHK63.js";import"./CategoricalChart-Cd1ApljN.js";import"./Curve-CO9gbDjZ.js";import"./types-BL4s3hIy.js";import"./step-DW6seU4F.js";import"./Layer-C2G5KafR.js";import"./ReactUtils-DkBJREDm.js";import"./Label-CXdyAx7z.js";import"./Text-DDTyrmBt.js";import"./DOMUtils-BSZC47d4.js";import"./ZIndexLayer-CP6TEiwa.js";import"./ActivePoints-C4m1trAF.js";import"./Dot-_SaUOdRl.js";import"./RegisterGraphicalItemId-r9QXM6NT.js";import"./GraphicalItemClipPath-Bh82AnDN.js";import"./SetGraphicalItem-DdDIdBuP.js";import"./useAnimationId-BwPLyDxM.js";import"./getRadiusAndStrokeWidthFromDot-av-B5cKk.js";import"./graphicalItemSelectors-CKaxkyVq.js";import"./index-Dm7aDTFq.js";import"./ChartSizeDimensions-DM4vIE32.js";import"./OffsetShower-U9U3cZHq.js";import"./PlotAreaShower-D2pJ4Br5.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:s},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(l,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
