import{e as t}from"./iframe-C9kyXynm.js";import{R as p}from"./arrayEqualityCheck-BdbBdFIu.js";import{C as m}from"./ComposedChart-CNIVaO9y.js";import{A as r}from"./Area-Jve-7ksP.js";import{R as s}from"./RechartsHookInspector-CKajdCMN.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BCZIpR14.js";import"./PolarUtils-B_1hBJ6O.js";import"./RechartsWrapper-ultCJT0w.js";import"./hooks-BzniDeZ2.js";import"./axisSelectors-50fqgJ0X.js";import"./zIndexSlice-cJxKJ8ug.js";import"./CartesianChart-EinDqxZ_.js";import"./chartDataContext-CZ4PAiww.js";import"./CategoricalChart-5uqkh1gH.js";import"./Curve-WEIhibNB.js";import"./types-BfqR7E8K.js";import"./Layer-LG3hnzpE.js";import"./ReactUtils-D_EEBxyT.js";import"./Label-C-oa8ua5.js";import"./Text-BcrXlrdS.js";import"./DOMUtils-CQZn70zK.js";import"./ZIndexLayer-7ELyukPI.js";import"./ActivePoints-B59gHKqE.js";import"./Dot-BiJvCsb9.js";import"./RegisterGraphicalItemId-oP_vlkHV.js";import"./GraphicalItemClipPath-DJAtFFUQ.js";import"./SetGraphicalItem-DyyRaUbx.js";import"./useAnimationId-XLZTjrUv.js";import"./getRadiusAndStrokeWidthFromDot-Bxt3ny70.js";import"./graphicalItemSelectors-CpyVq7h_.js";import"./index-DVm8rubF.js";import"./ChartSizeDimensions-COOovYk2.js";import"./OffsetShower-D9P9ThB2.js";import"./PlotAreaShower-B7fr2_CT.js";const N={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const Q=["FillPattern"];export{e as FillPattern,Q as __namedExportsOrder,N as default};
