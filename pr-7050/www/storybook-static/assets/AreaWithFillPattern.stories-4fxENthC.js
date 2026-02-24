import{e as t}from"./iframe-zwlZ9sO1.js";import{R as p}from"./arrayEqualityCheck-CJjag0zJ.js";import{C as m}from"./ComposedChart-B-ZDBPB-.js";import{A as r}from"./Area-C-3ZBuJu.js";import{R as s}from"./RechartsHookInspector-DHSpqDma.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BQQGnYzX.js";import"./immer-BiA4uk1x.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C3nGIabu.js";import"./index-eUA2bMWQ.js";import"./hooks-DVdpADFp.js";import"./axisSelectors-B00kI0GG.js";import"./d3-scale-5RI03Ty3.js";import"./zIndexSlice-oDtJWVOP.js";import"./renderedTicksSlice-DgjXgpF0.js";import"./CartesianChart-DC-pRf_l.js";import"./chartDataContext-7-VMSKg2.js";import"./CategoricalChart-BEqoCUOW.js";import"./Curve-D-syDesq.js";import"./types-B9pmE4ka.js";import"./step-DUUdO3U1.js";import"./Layer-BoZ3FYfy.js";import"./ReactUtils-KsuQNZ47.js";import"./Label-IHkKI2op.js";import"./Text-tkFuu0zo.js";import"./DOMUtils-p8GgN5aM.js";import"./ZIndexLayer-DApcsQWW.js";import"./ActivePoints-DGPPefSL.js";import"./Dot-D8W5fYzP.js";import"./RegisterGraphicalItemId-HxfmjJrU.js";import"./GraphicalItemClipPath-DA28tNWG.js";import"./SetGraphicalItem-BCd9_sGO.js";import"./useAnimationId-BwEUZfoI.js";import"./getRadiusAndStrokeWidthFromDot-DJU7uBWj.js";import"./graphicalItemSelectors-bRBt4LBE.js";import"./index-CfDL0XYd.js";import"./ChartSizeDimensions-DUwgzJDd.js";import"./OffsetShower-CZf4Y8fK.js";import"./PlotAreaShower-B03de4RT.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
