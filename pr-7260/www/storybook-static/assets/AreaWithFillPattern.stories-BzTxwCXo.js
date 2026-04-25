import{e as t}from"./iframe-8w6hSOb3.js";import{R as p}from"./arrayEqualityCheck-BcSkIFjy.js";import{C as m}from"./ComposedChart-BXY8auWm.js";import{c as s}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-B-RtUU4c.js";import{R as l}from"./RechartsHookInspector-64iDxMAV.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B5HxWc-X.js";import"./immer-CNp4ouR9.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CJbnro3S.js";import"./index-DPLqP4cy.js";import"./hooks-DH6TblVT.js";import"./axisSelectors-DJq9vOix.js";import"./d3-scale-DocPO7gd.js";import"./zIndexSlice-xR0tBw_b.js";import"./renderedTicksSlice-CehvSBlF.js";import"./CartesianChart-Bnp5U_KI.js";import"./chartDataContext-CHxjExdF.js";import"./CategoricalChart-C3Pb3oJs.js";import"./Curve-DCDk8LQV.js";import"./types-DDD23-V2.js";import"./step-CO9P-pBw.js";import"./Layer-VbLV2S9I.js";import"./ReactUtils-RNztsw35.js";import"./Label-CbTww8i0.js";import"./Text-Bl83wQcg.js";import"./DOMUtils-DpW_Dxz8.js";import"./ZIndexLayer-BZxHBglw.js";import"./ActivePoints-c5MJ5OkK.js";import"./Dot-B5t0Roay.js";import"./RegisterGraphicalItemId-vJe763ER.js";import"./GraphicalItemClipPath-CMalPiCh.js";import"./SetGraphicalItem-CLkVCWjn.js";import"./useAnimationId-kYjgFxKg.js";import"./getRadiusAndStrokeWidthFromDot-BGkBgNmA.js";import"./graphicalItemSelectors-CTgr6Ywa.js";import"./index-1JoQw62M.js";import"./ChartSizeDimensions-BdSUC2dN.js";import"./OffsetShower-CDnSCRp1.js";import"./PlotAreaShower-xfHEq74j.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:s},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(l,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
