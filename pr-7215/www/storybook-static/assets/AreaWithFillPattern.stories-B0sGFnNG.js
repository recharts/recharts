import{e as t}from"./iframe-Cbg-fKNU.js";import{g as p}from"./arrayEqualityCheck-hFPRsS2v.js";import{C as m}from"./ComposedChart-Cte27ylB.js";import{a as s}from"./Coordinate-CcdTesrj.js";import{A as r}from"./Area-CQsBb6ZC.js";import{R as l}from"./RechartsHookInspector-D7okJ7xS.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-D6T4fIvs.js";import"./immer-S1zDTrNa.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-EdxkrsQJ.js";import"./index-tFSrK1wv.js";import"./hooks-CL-gQxGz.js";import"./axisSelectors-COlbOcyl.js";import"./d3-scale-DuHK7VZm.js";import"./string-yHBgcFlJ.js";import"./zIndexSlice-ByH7lQpu.js";import"./renderedTicksSlice-BAcUufvh.js";import"./CartesianChart-IEffqnC4.js";import"./chartDataContext-BUHR6knq.js";import"./CategoricalChart-DAwQUD4-.js";import"./Layer-OlYOmPUf.js";import"./AnimatedItems-POHvOeVE.js";import"./Label-Dne7i20P.js";import"./Text-BtrwnnO1.js";import"./DOMUtils-BOYR8naz.js";import"./ZIndexLayer-qeHNPcT8.js";import"./useAnimationId-ClgLuj6x.js";import"./ActivePoints-CVBcNwxF.js";import"./Dot-CvNBt79L.js";import"./types-BpyuZwQS.js";import"./RegisterGraphicalItemId-CwmBMhGa.js";import"./GraphicalItemClipPath-B0xiuhMH.js";import"./SetGraphicalItem-BIH6QpC3.js";import"./getRadiusAndStrokeWidthFromDot-Cg3OgevG.js";import"./ActiveShapeUtils-Drq8bts1.js";import"./Curve-C22NWxJ6.js";import"./step-CgbJhf5W.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-C0F3swNy.js";import"./index-BkDgLzYn.js";import"./ChartSizeDimensions-D9mNUeVH.js";import"./OffsetShower-DsmXSBYW.js";import"./PlotAreaShower-CeGNuSiV.js";const it={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:s},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(l,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const ot=["FillPattern"];export{e as FillPattern,ot as __namedExportsOrder,it as default};
