import{e as t}from"./iframe-CoPAm7V1.js";import{R as p}from"./arrayEqualityCheck-b4a3wn0-.js";import{C as m}from"./ComposedChart--N9Ah0Mu.js";import{A as r}from"./Area-DslQb6uZ.js";import{R as s}from"./RechartsHookInspector-CfbHdkme.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-OnP709yn.js";import"./PolarUtils-DGkU6n7f.js";import"./RechartsWrapper-DeO9xugK.js";import"./hooks-BDoK-oN_.js";import"./axisSelectors-Cdwi4Gmi.js";import"./zIndexSlice-CV1CLEn_.js";import"./CartesianChart-DHc8LGBh.js";import"./chartDataContext-482lKGc9.js";import"./CategoricalChart-L_hDSvwE.js";import"./Curve-DDvcpmM9.js";import"./types-BF6A7chk.js";import"./Layer-BHClijQk.js";import"./ReactUtils-B2MREsDE.js";import"./Label-BN0l3Vc3.js";import"./Text-D8eyFLL7.js";import"./DOMUtils-B7UiVnHW.js";import"./ZIndexLayer-DI7Wag2n.js";import"./ActivePoints-BGzQPzt_.js";import"./Dot-Cyp9zk51.js";import"./RegisterGraphicalItemId-Cz_MWvVU.js";import"./GraphicalItemClipPath-VLyW1X2z.js";import"./SetGraphicalItem-D7kJJVje.js";import"./useAnimationId-BwvCPaTs.js";import"./getRadiusAndStrokeWidthFromDot-BOOk7ozS.js";import"./graphicalItemSelectors-BJJxd4bN.js";import"./index-gyMa1MpJ.js";import"./ChartSizeDimensions-BPsfgCbk.js";import"./OffsetShower-CKApfiLz.js";import"./PlotAreaShower-DYf9p6xN.js";const N={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
