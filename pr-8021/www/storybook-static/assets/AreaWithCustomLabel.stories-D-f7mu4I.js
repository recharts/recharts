import{R as r}from"./iframe-TJn1iDy_.js";import{R as c}from"./zIndexSlice-DcxCrJas.js";import{C as d}from"./ComposedChart-CjLYC499.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-gJsL3PNd.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-boe4gmWF.js";import"./index-CAYNC06-.js";import"./index-BNRC9x_2.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-B1uePsee.js";import"./isWellBehavedNumber-BKYnvYyY.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CGWm-04h.js";import"./axisSelectors-BRmQ6VbT.js";import"./d3-scale-VVBOPfYG.js";import"./index-Cwz_ZaMA.js";import"./index-CAMm0n22.js";import"./renderedTicksSlice-SWpas3hv.js";import"./index-DfZWRiOw.js";import"./CartesianChart-a7iVuIbn.js";import"./chartDataContext-Lnk93lz4.js";import"./CategoricalChart-CtiAUO9e.js";import"./Layer-tyJENV3V.js";import"./activeStyles-C-8W4HoU.js";import"./Label-DOD1E2dd.js";import"./Text-Lhe6e02h.js";import"./pageBackground-CtZ35NZS.js";import"./useId-DKCqn9Eo.js";import"./useBackwardsCompatibleTheme-BsIvvZ0r.js";import"./ZIndexLayer-qm_XHo-2.js";import"./dataEntryStyles-XnzxZhd6.js";import"./useAnimationId-BdprCSjI.js";import"./ActivePoints-BHSnIp6Z.js";import"./Dot-DGaRCVJg.js";import"./types-Bczg7GWk.js";import"./RegisterGraphicalItemId-BU8lHAsW.js";import"./GraphicalItemClipPath-CEc-GXor.js";import"./SetGraphicalItem-DSOEOPaP.js";import"./getRadiusAndStrokeWidthFromDot-uMuQLm3-.js";import"./ActiveShapeUtils-BTqqsbMk.js";import"./Curve-DyBM506c.js";import"./step-L1YHvbsX.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-7HT13U9Y.js";const pt={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},st=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={coordinateWithValueData}>
          <Area dataKey="y" isAnimationActive={false} label={renderLabel} />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};export{t as CustomizedLabel,st as __namedExportsOrder,pt as default};
