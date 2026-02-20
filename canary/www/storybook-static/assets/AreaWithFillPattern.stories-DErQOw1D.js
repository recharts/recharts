import{e as t}from"./iframe-DVKGYMpC.js";import{R as p}from"./arrayEqualityCheck-C3dMZwVz.js";import{C as m}from"./ComposedChart-DpZn3J7A.js";import{A as r}from"./Area-BZFGp0pa.js";import{R as s}from"./RechartsHookInspector-BRvRKLe7.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-m52n9a41.js";import"./immer-mdmEhKTL.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-VcgGm0Mh.js";import"./index-XfA7Rruh.js";import"./hooks-KmYc7udA.js";import"./axisSelectors-C6zo9Ho5.js";import"./d3-scale-CKFP8_y_.js";import"./zIndexSlice-BCKi_K05.js";import"./renderedTicksSlice-DNTEgzlA.js";import"./CartesianChart-20x7b3cD.js";import"./chartDataContext-DkfeKHKL.js";import"./CategoricalChart-lWTiO2LF.js";import"./Curve-DFpbuCXU.js";import"./types-D5_2czw6.js";import"./step-BPnB-OiB.js";import"./Layer-Cbzg46jm.js";import"./ReactUtils-2VJeHFxo.js";import"./Label-CgM8GhgJ.js";import"./Text-D8j9jByl.js";import"./DOMUtils-Cq0pXhle.js";import"./ZIndexLayer-D9yE2b_P.js";import"./ActivePoints-D-CneBw2.js";import"./Dot-Du5UEN4g.js";import"./RegisterGraphicalItemId-DFvy2IAN.js";import"./GraphicalItemClipPath-Dbga3z9T.js";import"./SetGraphicalItem-Dd-xAAAu.js";import"./useAnimationId-BLC1f5rw.js";import"./getRadiusAndStrokeWidthFromDot-DUAFpNa5.js";import"./graphicalItemSelectors-2hcKKw8o.js";import"./index-DH-aWMW3.js";import"./ChartSizeDimensions-DAFzj3WJ.js";import"./OffsetShower-lcp6F4HW.js";import"./PlotAreaShower-BUpHI0ia.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
