import{e as t}from"./iframe-eSAJEZht.js";import{R as p}from"./arrayEqualityCheck-DIP4cf6Y.js";import{C as m}from"./ComposedChart-C-MvXfhH.js";import{c as s}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-32j4mz-3.js";import{R as l}from"./RechartsHookInspector-CNBbry69.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BhREbLw9.js";import"./immer-TNEPjPCB.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CiRDGflb.js";import"./index-zRxxYhEY.js";import"./hooks-Q2uSt6yB.js";import"./axisSelectors-DyoITJEq.js";import"./d3-scale-CjiJ_ZTy.js";import"./zIndexSlice-BGPHYbVg.js";import"./renderedTicksSlice-B8h_p9LR.js";import"./CartesianChart-C2iAnTHm.js";import"./chartDataContext-eyhsy6xY.js";import"./CategoricalChart-B1JvHwji.js";import"./Curve-dniblYNk.js";import"./types-BwWrJ-BL.js";import"./step-n_okOr0Q.js";import"./Layer-Cp_zb8Y2.js";import"./ReactUtils-H-FoJgDc.js";import"./Label-C16feiqK.js";import"./Text-BIJyaKeQ.js";import"./DOMUtils-tcwXxObr.js";import"./ZIndexLayer-D46bbrBq.js";import"./ActivePoints-DV8ALALF.js";import"./Dot--nNeygLj.js";import"./RegisterGraphicalItemId-BbmjudUD.js";import"./GraphicalItemClipPath-8GCAR-eN.js";import"./SetGraphicalItem-x3BMDizg.js";import"./useAnimationId-Cu-vgNv6.js";import"./getRadiusAndStrokeWidthFromDot-CDzYNMm_.js";import"./graphicalItemSelectors-CtTHxHbt.js";import"./index-BGg-RllE.js";import"./ChartSizeDimensions-DwToSRXW.js";import"./OffsetShower-UG9ad5J7.js";import"./PlotAreaShower-ltT9O7XE.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:s},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(l,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
