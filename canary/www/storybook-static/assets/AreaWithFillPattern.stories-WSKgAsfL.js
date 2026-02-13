import{e as t}from"./iframe-BqavfRSI.js";import{R as p}from"./arrayEqualityCheck-Ra3gjxaW.js";import{C as m}from"./ComposedChart-B1SQxHiJ.js";import{A as r}from"./Area-Drltp5Bl.js";import{R as s}from"./RechartsHookInspector-DIZI_dr5.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BagVy590.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BQN53ECK.js";import"./hooks-BhizAxMH.js";import"./axisSelectors-CrlizjCS.js";import"./zIndexSlice-cuW5CNY3.js";import"./CartesianChart-ANLepPjj.js";import"./chartDataContext-eZIgvl_0.js";import"./CategoricalChart-IGjGR71r.js";import"./Curve-Bl7M7m7v.js";import"./types-etyYATxu.js";import"./Layer-7F20iT3S.js";import"./ReactUtils-wyfG9-H0.js";import"./Label-DNJA6zIC.js";import"./Text-D8aeDJgV.js";import"./DOMUtils-BJ4FDKUp.js";import"./ZIndexLayer-BDqdije3.js";import"./ActivePoints-OGEKIs-O.js";import"./Dot-JmokcpW7.js";import"./RegisterGraphicalItemId-BslGmMBw.js";import"./GraphicalItemClipPath-yqNdVZ5Z.js";import"./SetGraphicalItem-Chc8WLtN.js";import"./useAnimationId-CE6HvtJ3.js";import"./getRadiusAndStrokeWidthFromDot-D8tTG8Mp.js";import"./graphicalItemSelectors-CTYjA39m.js";import"./index-BwE92fQv.js";import"./ChartSizeDimensions-uf7awrTX.js";import"./OffsetShower-CmxTasWx.js";import"./PlotAreaShower-RwBV7968.js";const N={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
