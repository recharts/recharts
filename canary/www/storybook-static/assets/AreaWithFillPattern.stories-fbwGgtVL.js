import{e as t}from"./iframe-BaY_xsSZ.js";import{R as p}from"./arrayEqualityCheck-Bdjqc4Ae.js";import{C as m}from"./ComposedChart-4BbEyXcR.js";import{c as s}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-BWOvjpJ7.js";import{R as l}from"./RechartsHookInspector-BZJAdbFr.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-VJ-BUAvR.js";import"./immer-BxBygCNY.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DGEkw1V9.js";import"./index-BSMrFEqd.js";import"./hooks-CRXiVztC.js";import"./axisSelectors-B-OR9MKB.js";import"./d3-scale-DIZez8ZA.js";import"./zIndexSlice-CtFEU_Ni.js";import"./renderedTicksSlice-B0xJlAOa.js";import"./CartesianChart-D3S0Vg1A.js";import"./chartDataContext-Dfnon4gt.js";import"./CategoricalChart-CR4gEzum.js";import"./Curve-B7UPBPeR.js";import"./types-BZAl2150.js";import"./step-CLF9a_rc.js";import"./Layer-04iznQcl.js";import"./ReactUtils-B7IYIUp3.js";import"./Label-B4b2gNZT.js";import"./Text-F1Mr-vkp.js";import"./DOMUtils-DVKXUmKU.js";import"./ZIndexLayer-BzH8oXrO.js";import"./ActivePoints-t-qLyG_8.js";import"./Dot-BqkojDsv.js";import"./RegisterGraphicalItemId-x5Fjg9Mp.js";import"./GraphicalItemClipPath-C_oN7uRQ.js";import"./SetGraphicalItem-13HzTRgX.js";import"./useAnimationId-CntPUL-4.js";import"./getRadiusAndStrokeWidthFromDot-BrRZUxyx.js";import"./graphicalItemSelectors-BJwHUBxW.js";import"./index-D_Zsn0a-.js";import"./ChartSizeDimensions-Tq7694Qh.js";import"./OffsetShower-D7qcdJv9.js";import"./PlotAreaShower-DF_9siN1.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:s},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(l,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
