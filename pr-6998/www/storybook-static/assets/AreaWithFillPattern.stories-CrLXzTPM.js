import{e as t}from"./iframe-faEGnlhT.js";import{R as p}from"./arrayEqualityCheck-C0DmTAi-.js";import{C as m}from"./ComposedChart-BvQ6aYug.js";import{A as r}from"./Area-Dq76gk-i.js";import{R as s}from"./RechartsHookInspector-DorgIABE.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-E1K0A3LW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C18N7NWG.js";import"./hooks-BCFTrc9K.js";import"./axisSelectors-B-QEn76s.js";import"./zIndexSlice-B9CGjDBz.js";import"./CartesianChart-BcS0gbJv.js";import"./chartDataContext--QJQie47.js";import"./CategoricalChart-DS6-A_Eu.js";import"./Curve-Digajzg7.js";import"./types-Bw-NWEAT.js";import"./Layer-BVbadyP2.js";import"./ReactUtils-DIvlatZp.js";import"./Label-DHVy6qmW.js";import"./Text-TFqO-ApL.js";import"./DOMUtils-z-S8PuYj.js";import"./ZIndexLayer-Dp_sNRVX.js";import"./ActivePoints-DUFMuXwg.js";import"./Dot--Iy9brq0.js";import"./RegisterGraphicalItemId-D75CZCwF.js";import"./GraphicalItemClipPath-Cxy9t3jj.js";import"./SetGraphicalItem-Dla_HDr3.js";import"./useAnimationId-KEEDc5eO.js";import"./getRadiusAndStrokeWidthFromDot-ngsgrZAG.js";import"./graphicalItemSelectors-DRuxD3FT.js";import"./index-ek5vanJI.js";import"./ChartSizeDimensions-BIBiiHxa.js";import"./OffsetShower-syvld0TV.js";import"./PlotAreaShower-LZVAobRV.js";const N={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
