import{e as t}from"./iframe-CbsqwKCk.js";import{R as p}from"./arrayEqualityCheck-B4FTx25I.js";import{C as m}from"./ComposedChart-CyCs0zfk.js";import{c as s}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-Dxkjpwxj.js";import{R as l}from"./RechartsHookInspector-Damt6MYH.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DHVE9Qfq.js";import"./immer-D83u5OhZ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CaUG62oZ.js";import"./index-Bo04Zijq.js";import"./hooks-F0Z_c1HD.js";import"./axisSelectors-DXxkO63G.js";import"./d3-scale-PAY7D1_G.js";import"./zIndexSlice-CDw3ZEmc.js";import"./renderedTicksSlice-BdDgwbXy.js";import"./CartesianChart-CbTSIjqR.js";import"./chartDataContext-IGsi4pC_.js";import"./CategoricalChart-Xd7p2iPq.js";import"./Curve-d3v-cFMl.js";import"./types-QtIGWOWS.js";import"./step-uZ9iGWhX.js";import"./Layer-wLThQp-f.js";import"./ReactUtils-DODSDo-0.js";import"./Label-r3u5Hs--.js";import"./Text-DA8mBm_w.js";import"./DOMUtils-BTAw3duz.js";import"./ZIndexLayer-CIamb34_.js";import"./ActivePoints-lpfaj2C4.js";import"./Dot-CuN0ZmgD.js";import"./RegisterGraphicalItemId-DHXh_EOv.js";import"./GraphicalItemClipPath-Cc_74RAJ.js";import"./SetGraphicalItem-wEHd-RTz.js";import"./useAnimationId-ika4uZpq.js";import"./getRadiusAndStrokeWidthFromDot-DI4cxlJn.js";import"./graphicalItemSelectors-v4TiX4--.js";import"./index-BHJKnvwH.js";import"./ChartSizeDimensions-D9ExJIau.js";import"./OffsetShower-Bv4vecoR.js";import"./PlotAreaShower-XHfKy6Ay.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:s},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(l,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
