import{R as t}from"./iframe-DLBrGVIL.js";import{R as p}from"./zIndexSlice-D04f94zz.js";import{C as m}from"./ComposedChart-B19GUyoN.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-Co8j0q4K.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DCNaX0Un.js";import"./get-CjriyByo.js";import"./throttle-Csq4RHLA.js";import"./index-B7CtExx5.js";import"./index-DQTJ-3mG.js";import"./RechartsWrapper-CQD9R6Ch.js";import"./axisSelectors-e5FgB8sH.js";import"./polarAxisSelectors-5dY8QunD.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B7f23rgt.js";import"./index-wzkov3Za.js";import"./index-C5Iik6-v.js";import"./renderedTicksSlice-C3k9zhPb.js";import"./index-71o-Y0_J.js";import"./fillDefinitions-3l2D0OPm.js";import"./CartesianChart-DqjyD4mn.js";import"./chartDataContext-Xl7iaHZA.js";import"./CategoricalChart-D7HNeFeV.js";import"./getRadiusAndStrokeWidthFromDot-XT9ud7Ex.js";import"./Layer-fmxJ3YOZ.js";import"./dataEntryStyles-C-aMudj3.js";import"./Label-B42eZj7W.js";import"./Text-3dSBCvrE.js";import"./ZIndexLayer-R8fInGM9.js";import"./ActivePoints-9q7wkDTC.js";import"./Dot-DOIYCHL9.js";import"./types-Bhx-lAgy.js";import"./activeStyles-DixW-39S.js";import"./useAnimationId-UzUbsW_e.js";import"./Symbols-CwwyfWDy.js";import"./symbol-CTUGUG7K.js";import"./path-BBMZd4YL.js";import"./SetGraphicalItem-mnwtfu-X.js";import"./ActiveShapeUtils-BggRH-Y1.js";import"./Curve-COZ7WQ5e.js";import"./step-Rw1feLL3.js";import"./useEffectiveDataKey-CzXzkxYB.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},et=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};export{e as FillPattern,et as __namedExportsOrder,tt as default};
