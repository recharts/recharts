import{e as t}from"./iframe-CG0qDtBl.js";import{R as p}from"./arrayEqualityCheck-nJzMu5L8.js";import{C as m}from"./ComposedChart-D_9c7I0x.js";import{c as s}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-Cnal-laM.js";import{R as l}from"./RechartsHookInspector-BhrhKqGk.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-68SeDKrz.js";import"./immer-BaG7xZes.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B645yxTo.js";import"./index-LX72MUsT.js";import"./hooks-DK5-oMyB.js";import"./axisSelectors-Cs152sBG.js";import"./d3-scale-BKHwRxJ5.js";import"./zIndexSlice-DlNAFrb6.js";import"./renderedTicksSlice-BjAt54f-.js";import"./CartesianChart-BOM1G1ij.js";import"./chartDataContext-BK7b2xjO.js";import"./CategoricalChart-gdykgj2P.js";import"./Curve--tzE_BoT.js";import"./types--uSAtEO5.js";import"./step-CYBADRl-.js";import"./Layer-C6aCRlIK.js";import"./ReactUtils-B6bmemMx.js";import"./Label-xzQt__ei.js";import"./Text-D5ILnTXV.js";import"./DOMUtils-2oBG8NIz.js";import"./ZIndexLayer-_OpZUWnc.js";import"./ActivePoints-2-a50J1l.js";import"./Dot-rS4fPZDW.js";import"./RegisterGraphicalItemId-CznzVPtc.js";import"./GraphicalItemClipPath-BUh3FPdj.js";import"./SetGraphicalItem-IaY6gKdE.js";import"./useAnimationId-CKL_PQXN.js";import"./getRadiusAndStrokeWidthFromDot-BIESFlMm.js";import"./graphicalItemSelectors-BW-srwJE.js";import"./index-DjPC5fQL.js";import"./ChartSizeDimensions-BGpNAELR.js";import"./OffsetShower-D2nsT2yB.js";import"./PlotAreaShower-CPUgyAdx.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:s},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(l,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
