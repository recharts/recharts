import{e as t}from"./iframe-BtpSaGeD.js";import{R as p}from"./arrayEqualityCheck-csfjq8mV.js";import{C as m}from"./ComposedChart-D3TQl5Wu.js";import{A as r}from"./Area-DLL9_xEj.js";import{R as s}from"./RechartsHookInspector-Dh2n9Wob.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DkARaCDv.js";import"./PolarUtils-5F1_zZA0.js";import"./RechartsWrapper-BQPGXXGO.js";import"./hooks-DULxqo3A.js";import"./axisSelectors-CQvuHlQI.js";import"./zIndexSlice-ydm78BYW.js";import"./CartesianChart-2vMAanpf.js";import"./chartDataContext-D1JeIz7Q.js";import"./CategoricalChart-BIOH4Ga_.js";import"./Curve-BC2lzeAQ.js";import"./types-245F3-IH.js";import"./Layer-CYyvuKkx.js";import"./ReactUtils-TAFDop8V.js";import"./Label-BOlhuZqt.js";import"./Text-DH63q3ed.js";import"./DOMUtils-CVzw1QbG.js";import"./ZIndexLayer-BcDwNHGX.js";import"./ActivePoints-Djg9xCE5.js";import"./Dot-BgtKn9fG.js";import"./RegisterGraphicalItemId-CJ_I0CZl.js";import"./GraphicalItemClipPath-CmYuvuXv.js";import"./SetGraphicalItem-CMYrG93h.js";import"./useAnimationId-Be_3bM2l.js";import"./getRadiusAndStrokeWidthFromDot-BgQkEg5F.js";import"./graphicalItemSelectors-CuKPbzwY.js";import"./index-o2N_x1RI.js";import"./ChartSizeDimensions-9kzbcyaa.js";import"./OffsetShower-DBzvXmYz.js";import"./PlotAreaShower-BzkhZKlK.js";const N={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
