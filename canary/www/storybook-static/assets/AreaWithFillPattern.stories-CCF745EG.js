import{e as t}from"./iframe-Dd1Sjt9X.js";import{R as p}from"./arrayEqualityCheck-pUdtrDKv.js";import{C as m}from"./ComposedChart-CuflWUWP.js";import{A as r}from"./Area-D4SO8TUW.js";import{R as s}from"./RechartsHookInspector-Cr2Johcx.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-C6lHiyqW.js";import"./immer-ezkOMCj7.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Dw3RQG7d.js";import"./index-DHxloPwC.js";import"./hooks-CKgsmzQh.js";import"./axisSelectors-DCUpOlmc.js";import"./d3-scale-BBdKeTjL.js";import"./zIndexSlice-B2TlWuzN.js";import"./renderedTicksSlice-DDOiTdbf.js";import"./CartesianChart-BimCUxdh.js";import"./chartDataContext-CLOoHHQa.js";import"./CategoricalChart-CU3zaaGt.js";import"./Curve-DCc30kqb.js";import"./types-5Z667yyH.js";import"./step-3UMSkQg1.js";import"./Layer-CX4gucce.js";import"./ReactUtils-0A2SPQqI.js";import"./Label-ByOVYkgq.js";import"./Text-Cl6XBoxV.js";import"./DOMUtils-BIFKO-UG.js";import"./ZIndexLayer-nfwFwrW8.js";import"./ActivePoints-DahGmIAZ.js";import"./Dot-BMZXiNKw.js";import"./RegisterGraphicalItemId-Cz8x82sR.js";import"./GraphicalItemClipPath-DOJdP2rh.js";import"./SetGraphicalItem-DT-0SkIe.js";import"./useAnimationId-ax-iI9cP.js";import"./getRadiusAndStrokeWidthFromDot-DKdUNLBw.js";import"./graphicalItemSelectors-CSqBE18Y.js";import"./index-CAwGKYht.js";import"./ChartSizeDimensions-CyTaJmPr.js";import"./OffsetShower-BM6oyifk.js";import"./PlotAreaShower-D-MhE31R.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
