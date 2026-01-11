import{e as t}from"./iframe-D2G3HIAp.js";import{R as p}from"./arrayEqualityCheck-D7f_pFRZ.js";import{C as m}from"./ComposedChart-B3gygK9L.js";import{A as r}from"./Area-C1gztC4v.js";import{R as s}from"./RechartsHookInspector-Bl5k7Hvc.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DUSJViu-.js";import"./PolarUtils-Dps0SkyA.js";import"./RechartsWrapper-CZfXu9Bm.js";import"./hooks-sNKmgtMM.js";import"./axisSelectors-276H6COd.js";import"./zIndexSlice-DJ_SqHH-.js";import"./CartesianChart-Cd_D9K81.js";import"./chartDataContext-BdGyYEQ1.js";import"./CategoricalChart-DtaGr5KL.js";import"./Curve-DwXIRY2H.js";import"./types-DJ8_iZaM.js";import"./Layer--_yZLHYD.js";import"./ReactUtils-BiGt9Rwl.js";import"./Label-Dmvkas3w.js";import"./Text-BktKgt0G.js";import"./DOMUtils-CXrXcMzN.js";import"./ZIndexLayer-CUBtDPQX.js";import"./ActivePoints-BghVk57_.js";import"./Dot-C5hzWh_I.js";import"./RegisterGraphicalItemId-Dydu6q-y.js";import"./GraphicalItemClipPath-Ct9ZNJk2.js";import"./SetGraphicalItem-4DzlkcSy.js";import"./useAnimationId-P64LV0gd.js";import"./getRadiusAndStrokeWidthFromDot-C1YLbI6G.js";import"./graphicalItemSelectors-DkJAOwku.js";import"./index-BwQRywFC.js";import"./ChartSizeDimensions-C1G0XugS.js";import"./OffsetShower-vnVO-R-R.js";import"./PlotAreaShower-8nMbOvlD.js";const N={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
