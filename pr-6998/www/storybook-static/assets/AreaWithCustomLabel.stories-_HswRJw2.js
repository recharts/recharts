import{e as t}from"./iframe-faEGnlhT.js";import{R as c}from"./arrayEqualityCheck-C0DmTAi-.js";import{C as d}from"./ComposedChart-BvQ6aYug.js";import{A as l}from"./Area-Dq76gk-i.js";import{R as h}from"./RechartsHookInspector-DorgIABE.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-E1K0A3LW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C18N7NWG.js";import"./hooks-BCFTrc9K.js";import"./axisSelectors-B-QEn76s.js";import"./zIndexSlice-B9CGjDBz.js";import"./CartesianChart-BcS0gbJv.js";import"./chartDataContext--QJQie47.js";import"./CategoricalChart-DS6-A_Eu.js";import"./Curve-Digajzg7.js";import"./types-Bw-NWEAT.js";import"./Layer-BVbadyP2.js";import"./ReactUtils-DIvlatZp.js";import"./Label-DHVy6qmW.js";import"./Text-TFqO-ApL.js";import"./DOMUtils-z-S8PuYj.js";import"./ZIndexLayer-Dp_sNRVX.js";import"./ActivePoints-DUFMuXwg.js";import"./Dot--Iy9brq0.js";import"./RegisterGraphicalItemId-D75CZCwF.js";import"./GraphicalItemClipPath-Cxy9t3jj.js";import"./SetGraphicalItem-Dla_HDr3.js";import"./useAnimationId-KEEDc5eO.js";import"./getRadiusAndStrokeWidthFromDot-ngsgrZAG.js";import"./graphicalItemSelectors-DRuxD3FT.js";import"./index-ek5vanJI.js";import"./ChartSizeDimensions-BIBiiHxa.js";import"./OffsetShower-syvld0TV.js";import"./PlotAreaShower-LZVAobRV.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={coordinateWithValueData}>
          <Area dataKey="y" isAnimationActive={false} label={renderLabel} />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(n=(m=e.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const tt=["CustomizedLabel"];export{e as CustomizedLabel,tt as __namedExportsOrder,Z as default};
