import{e as t}from"./iframe-DAZKVxz9.js";import{R as p}from"./arrayEqualityCheck-dPOQS8pO.js";import{C as m}from"./ComposedChart-DTJu-yAB.js";import{A as r}from"./Area-D8rK5gd9.js";import{R as s}from"./RechartsHookInspector-B2Mat80Z.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Xx_SsgwN.js";import"./immer-4-TXwIq-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BjWlMXU1.js";import"./index-D3IpfJcR.js";import"./hooks-Dot9B-8s.js";import"./axisSelectors-DztuZ7GM.js";import"./d3-scale-ChhyAw2W.js";import"./zIndexSlice-D3HE9JYU.js";import"./renderedTicksSlice-BvtRkGHb.js";import"./CartesianChart-CKg6csWi.js";import"./chartDataContext-DGYaAAtE.js";import"./CategoricalChart-DeG47lga.js";import"./Curve-ZE8xv1Ny.js";import"./types-4_oq0AJp.js";import"./step-DOJR22o0.js";import"./Layer-B5mQaLs_.js";import"./ReactUtils-CccuW9N4.js";import"./Label-DNW4k13o.js";import"./Text-CNFMu9xe.js";import"./DOMUtils-Dpu0-rWt.js";import"./ZIndexLayer-CksZ3gAG.js";import"./ActivePoints-bxmGK7jd.js";import"./Dot-CM5RhIFl.js";import"./RegisterGraphicalItemId-NvV6Z6oD.js";import"./GraphicalItemClipPath-Dp6p8o2v.js";import"./SetGraphicalItem-D9fO1f5d.js";import"./useAnimationId-Bfut_0eb.js";import"./getRadiusAndStrokeWidthFromDot-D5fiNOfX.js";import"./graphicalItemSelectors-CXD6VIxA.js";import"./index-B6PIiwfp.js";import"./ChartSizeDimensions-BLB7KQxE.js";import"./OffsetShower-DvPblFBG.js";import"./PlotAreaShower-CQAhfZmY.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
