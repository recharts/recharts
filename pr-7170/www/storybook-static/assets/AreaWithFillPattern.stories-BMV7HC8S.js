import{e as t}from"./iframe-CYwaFdjn.js";import{R as p}from"./arrayEqualityCheck-h7hJTZeM.js";import{C as m}from"./ComposedChart-Bhc9oZML.js";import{A as r}from"./Area-CsQ9nyCF.js";import{R as s}from"./RechartsHookInspector-Cc3cBFx4.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-4Ca1v930.js";import"./immer-5b19dBsP.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-cjgjDUYZ.js";import"./index-DPTx4Thk.js";import"./hooks-GLHTS7XJ.js";import"./axisSelectors-EAo2gJk2.js";import"./d3-scale-DeBKatuR.js";import"./zIndexSlice-Ccl7S4Cq.js";import"./renderedTicksSlice-CJ6ZtBLo.js";import"./CartesianChart-C448597b.js";import"./chartDataContext-Cd6g7rnb.js";import"./CategoricalChart-DF3SypHH.js";import"./Curve-DtLfkKFm.js";import"./types-DF6SdF0Y.js";import"./step-BGhwLfjY.js";import"./Layer-B_rFu8MB.js";import"./ReactUtils-DjhHO1D7.js";import"./Label-C4yjQiQy.js";import"./Text-BJUH7gc5.js";import"./DOMUtils-PiUaL3gF.js";import"./ZIndexLayer-Bzm3_eCs.js";import"./ActivePoints-lICUnLRA.js";import"./Dot-C9RSUdFa.js";import"./RegisterGraphicalItemId-p7bSWKiK.js";import"./GraphicalItemClipPath-Csh7Z4rj.js";import"./SetGraphicalItem-B2q6sSST.js";import"./useAnimationId-CHCcDWBw.js";import"./getRadiusAndStrokeWidthFromDot-anW380QN.js";import"./graphicalItemSelectors-CXcRU96P.js";import"./index-CEnowju6.js";import"./ChartSizeDimensions-CH8vjifh.js";import"./OffsetShower-DG_CC1wX.js";import"./PlotAreaShower-CPSVbCba.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
