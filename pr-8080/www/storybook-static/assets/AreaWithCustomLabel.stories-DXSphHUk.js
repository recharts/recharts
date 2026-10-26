import{R as r}from"./iframe-Dckhh8TP.js";import{R as c}from"./zIndexSlice-DvqxU_fJ.js";import{C as d}from"./ComposedChart-CwkBXCx2.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BdK9IPQO.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DoWt88Bk.js";import"./throttle-nSMGIYBk.js";import"./index-BTZnO4jD.js";import"./index-BZ7EiUeE.js";import"./RechartsWrapper-DN3bSeN0.js";import"./axisSelectors-iU-8zlMU.js";import"./polarAxisSelectors-ClcX1Sfv.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CVKSBoJ3.js";import"./index-Bf6cRldK.js";import"./index-DfEyCTx4.js";import"./renderedTicksSlice-BoRV-MuC.js";import"./index-BEi4ZfWK.js";import"./CartesianChart-ds3qEH6n.js";import"./chartDataContext-CqDlrvyh.js";import"./CategoricalChart-DiJWdssm.js";import"./Layer-Gqc-Z-cf.js";import"./activeStyles-DNDVPQVu.js";import"./Label-BPfiwVrc.js";import"./Text-ixAKnQea.js";import"./pageBackground-Bsi5t8mD.js";import"./useId-BAdhA99P.js";import"./ZIndexLayer-DYLMgu3X.js";import"./dataEntryStyles-C1y9indW.js";import"./useAnimationId-DwypxVGS.js";import"./ActivePoints-DqM_7cwl.js";import"./Dot-DLFfnKNz.js";import"./types-orR6Wh5t.js";import"./Symbols-CuFQCUW8.js";import"./symbol-DC65CFDy.js";import"./path-DyVhHtw_.js";import"./RegisterGraphicalItemId-jdQ-nkDB.js";import"./SetGraphicalItem-B5R69AhG.js";import"./getRadiusAndStrokeWidthFromDot-BPZD6QvL.js";import"./ActiveShapeUtils-CZclTza4.js";import"./Curve-CPC4BdrH.js";import"./step-Be2Z97Jg.js";import"./useEffectiveDataKey-Dh_S8XsG.js";const pt={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},st=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
