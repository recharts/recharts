import{e as t}from"./iframe-6EykQKfG.js";import{R as p}from"./arrayEqualityCheck-CqC3jwM6.js";import{C as m}from"./ComposedChart-D9Ylu3vF.js";import{A as r}from"./Area-DJurA9-9.js";import{R as s}from"./RechartsHookInspector-De58Dhu7.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CZLGh6RG.js";import"./immer-DZYxGOvJ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B-8Vi1YZ.js";import"./index-C5RNfFWo.js";import"./hooks-C3ySExDc.js";import"./axisSelectors-FAny2dXm.js";import"./d3-scale-ZR-RinUh.js";import"./zIndexSlice-C6kP2rU-.js";import"./renderedTicksSlice-ChlibOAb.js";import"./CartesianChart-yFNUOVem.js";import"./chartDataContext-vZs3YuCl.js";import"./CategoricalChart-B0C_vbjT.js";import"./Curve-BHG7-tm7.js";import"./types-DI1ZOnYm.js";import"./step-DU4Jxd72.js";import"./Layer-DsfYNbWJ.js";import"./ReactUtils-CfLs9KKR.js";import"./Label-AanK--nR.js";import"./Text-ByiAR9HY.js";import"./DOMUtils-BptD102S.js";import"./ZIndexLayer-Dj7WhaOm.js";import"./ActivePoints-BuDRjoco.js";import"./Dot-CjdQs5Xf.js";import"./RegisterGraphicalItemId-SLc1E9Mg.js";import"./GraphicalItemClipPath-CyC67rpY.js";import"./SetGraphicalItem-D4EZqEL5.js";import"./useAnimationId-SK1GTTks.js";import"./getRadiusAndStrokeWidthFromDot-BPPKe8oa.js";import"./graphicalItemSelectors-DOMUNDx9.js";import"./index-DoXoLnYR.js";import"./ChartSizeDimensions-4WehLi-t.js";import"./OffsetShower-DPGgRtYl.js";import"./PlotAreaShower-DJZyMIDk.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
