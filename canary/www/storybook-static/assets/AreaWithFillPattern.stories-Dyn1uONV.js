import{e as t}from"./iframe-BEaYZ8Ke.js";import{R as p}from"./arrayEqualityCheck-BO9iL3J2.js";import{C as m}from"./ComposedChart-DUwCMO8t.js";import{c as s}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-DT4lpdkL.js";import{R as l}from"./RechartsHookInspector-D2tl7RgO.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-w4GCi4u5.js";import"./immer-ByOrN6rV.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BxjX8qFn.js";import"./index-BUXBVCXz.js";import"./hooks-BJ-fa7mf.js";import"./axisSelectors-DCKCETlC.js";import"./d3-scale-BqTC062g.js";import"./zIndexSlice-DSliDKHU.js";import"./renderedTicksSlice-2DyJU65H.js";import"./CartesianChart-Da_Lqy5J.js";import"./chartDataContext-416DyL2h.js";import"./CategoricalChart-CsR3P7Yd.js";import"./Curve-atLapjtD.js";import"./types-N9mcSd1s.js";import"./step-C3Uiieba.js";import"./Layer-BLQnqq8X.js";import"./ReactUtils-DilCfUhS.js";import"./Label-CF7kInX4.js";import"./Text-DmuVr28j.js";import"./DOMUtils-w1bHB0TX.js";import"./ZIndexLayer-D6bVHPc-.js";import"./ActivePoints-D_4hsixX.js";import"./Dot-CcBnwLaV.js";import"./RegisterGraphicalItemId-BaBHxSFh.js";import"./GraphicalItemClipPath-CM553tH1.js";import"./SetGraphicalItem-CxB6zzLj.js";import"./useAnimationId-Ngy9FXMV.js";import"./getRadiusAndStrokeWidthFromDot-Ditulol4.js";import"./graphicalItemSelectors-oSNnCF1a.js";import"./index-D7lPj8lh.js";import"./ChartSizeDimensions-57Mz-9Pr.js";import"./OffsetShower-D0pz8TZy.js";import"./PlotAreaShower-uQsOnF-d.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:s},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(l,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
