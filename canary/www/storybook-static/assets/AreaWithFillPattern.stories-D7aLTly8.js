import{e as t}from"./iframe-B4ZOa_Yu.js";import{R as p}from"./arrayEqualityCheck-C7qm6m5x.js";import{C as m}from"./ComposedChart-Bx4qcLUx.js";import{A as r}from"./Area-nObDQ_es.js";import{R as s}from"./RechartsHookInspector-D8rerupA.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DcaNso53.js";import"./immer-B05rlcy5.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B66RMWp1.js";import"./index-DBSwNlxD.js";import"./hooks-BoWukVEP.js";import"./axisSelectors-CUTvv79j.js";import"./d3-scale-xF4QVF1U.js";import"./zIndexSlice-L-52L8l2.js";import"./renderedTicksSlice-BHPoCGKs.js";import"./CartesianChart-Dq-7HfpP.js";import"./chartDataContext-CeyVK9Tw.js";import"./CategoricalChart-CIWpFNpg.js";import"./Curve-BSyKD1Ot.js";import"./types-Cvz57JP2.js";import"./step-bVfLcMGZ.js";import"./Layer-D8UY7UMK.js";import"./ReactUtils-upui8jKZ.js";import"./Label-CDxkI7IB.js";import"./Text-RCR9lAA9.js";import"./DOMUtils-WUmSdG9_.js";import"./ZIndexLayer-DJVNNdtG.js";import"./ActivePoints-DrOeuumg.js";import"./Dot-C8akGE8Z.js";import"./RegisterGraphicalItemId-DSbtEDT7.js";import"./GraphicalItemClipPath-DUfb3-iB.js";import"./SetGraphicalItem-DHjcaBbG.js";import"./useAnimationId-BoXeTLIY.js";import"./getRadiusAndStrokeWidthFromDot-CUYccmbg.js";import"./graphicalItemSelectors-Cs1rdFjJ.js";import"./index-C8tftqM8.js";import"./ChartSizeDimensions-CgbdMiCv.js";import"./OffsetShower-z8r0Gugh.js";import"./PlotAreaShower-CPk3ggQs.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
