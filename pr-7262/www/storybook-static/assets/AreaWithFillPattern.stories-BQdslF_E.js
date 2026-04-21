import{e as t}from"./iframe-DkoPPqoz.js";import{R as p}from"./arrayEqualityCheck-ConoiXxh.js";import{C as m}from"./ComposedChart-BDGpBivc.js";import{c as s}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-D4lJS2v6.js";import{R as l}from"./RechartsHookInspector-JABbqkig.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-rTEBizGM.js";import"./immer-h70EVoAC.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D7r7vnZw.js";import"./index-avHK6rAb.js";import"./hooks-kkIG_obm.js";import"./axisSelectors-DrsKaFAE.js";import"./d3-scale-DMaSDVSj.js";import"./zIndexSlice-DRo4EBFA.js";import"./renderedTicksSlice-C3i94H6-.js";import"./CartesianChart-FkpJPUOg.js";import"./chartDataContext-RI6mXRe4.js";import"./CategoricalChart-BVNqzoUx.js";import"./Curve-Ue3PdtjH.js";import"./types-BY9uJX-K.js";import"./step-BXtSxhKs.js";import"./Layer-zW4foO2t.js";import"./ReactUtils-t--G_5qe.js";import"./Label-bvaOdScm.js";import"./Text-Czgex7sv.js";import"./DOMUtils-BK7Rx0Uu.js";import"./ZIndexLayer-DkIqpuZB.js";import"./ActivePoints-CofuFEcX.js";import"./Dot-C9hCbkHm.js";import"./RegisterGraphicalItemId-DO3T0gKQ.js";import"./GraphicalItemClipPath-DPMqkNK-.js";import"./SetGraphicalItem-Dy_UcRx-.js";import"./useAnimationId-BkaDppf2.js";import"./getRadiusAndStrokeWidthFromDot-DA4yVcY7.js";import"./graphicalItemSelectors-DJVaZkKs.js";import"./index-B78ZsepT.js";import"./ChartSizeDimensions-DJpvKh-u.js";import"./OffsetShower-x7RdLh9q.js";import"./PlotAreaShower-BlqZdS3t.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:s},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(l,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
