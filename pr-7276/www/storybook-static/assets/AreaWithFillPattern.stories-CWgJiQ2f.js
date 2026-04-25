import{e as t}from"./iframe-C-KAowuO.js";import{R as p}from"./arrayEqualityCheck-yVLbm2Ok.js";import{C as m}from"./ComposedChart-Dd-r8GjN.js";import{c as s}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-9JC3-_Ja.js";import{R as l}from"./RechartsHookInspector-CNWyvN3d.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-D05KRY5H.js";import"./immer-lrri1Ibi.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DqKSuNH3.js";import"./index-KvyLAFD0.js";import"./hooks-DeKQ2gqZ.js";import"./axisSelectors-CE5Vd0Tc.js";import"./d3-scale-Bopu8Aci.js";import"./zIndexSlice-DrTp_sFl.js";import"./renderedTicksSlice-C1ShKB3N.js";import"./CartesianChart-nT9KcNTp.js";import"./chartDataContext-vxdgRKIh.js";import"./CategoricalChart-Ds0xAivg.js";import"./Curve-HzHLtdOZ.js";import"./types-B6CmVkmP.js";import"./step-BtXew3Rl.js";import"./Layer-BbNCaHIe.js";import"./ReactUtils-CCkd_fXV.js";import"./Label-D0CeoZx_.js";import"./Text-Bcc2ZqXe.js";import"./DOMUtils-Cs_o0Y2m.js";import"./ZIndexLayer-D6XED_N0.js";import"./ActivePoints-DwGdY9lY.js";import"./Dot-B1iig8sS.js";import"./RegisterGraphicalItemId-D73RknhP.js";import"./GraphicalItemClipPath-d-0sskKm.js";import"./SetGraphicalItem-DNbpLx8W.js";import"./useAnimationId-TM9zYSCO.js";import"./getRadiusAndStrokeWidthFromDot-D7K-VjZE.js";import"./graphicalItemSelectors-CHbq-a6F.js";import"./index-BQFUVKnT.js";import"./ChartSizeDimensions-DTvYXLHc.js";import"./OffsetShower-CVdVAOLR.js";import"./PlotAreaShower-ZPJ89wbY.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:s},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(l,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
