import{R as r}from"./iframe-CsUJaUxM.js";import{R as c}from"./zIndexSlice-DR8GOdx_.js";import{C as d}from"./ComposedChart-v1mD6g8I.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DpA0DwKi.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-jYQKZYpr.js";import"./index-DwbFMAfW.js";import"./index-CuzTPq-B.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-wCngT9vT.js";import"./isWellBehavedNumber-B1KHZ9NA.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-T8mD1Lc3.js";import"./axisSelectors-CPJkZcPs.js";import"./d3-scale-BlcUMonb.js";import"./index-B6LqR4R9.js";import"./index-LRMsLTDO.js";import"./renderedTicksSlice-DMUlxU_r.js";import"./index-BkMQdhAs.js";import"./CartesianChart-9AGq9zI6.js";import"./chartDataContext-Dl9PHzyn.js";import"./CategoricalChart-BPTMFHzn.js";import"./Layer-BL2WKRfB.js";import"./AnimatedItems-BwJboHDv.js";import"./Label-BBIMhlH3.js";import"./Text-Ca7ex0z4.js";import"./DOMUtils-DV9i-gvX.js";import"./useId-DskunR0V.js";import"./useBackwardsCompatibleTheme-CzetmO85.js";import"./ZIndexLayer-y8FwKDfZ.js";import"./useAnimationId-CIIiKuIL.js";import"./ActivePoints-DgXpbHzY.js";import"./Dot-3GIj0k7o.js";import"./types-DY32nFAv.js";import"./RegisterGraphicalItemId-BOfAVeru.js";import"./GraphicalItemClipPath-yorSgC5b.js";import"./SetGraphicalItem-y4Qrn0nd.js";import"./getRadiusAndStrokeWidthFromDot-qziiS-Bg.js";import"./ActiveShapeUtils-CrmNWRMG.js";import"./Curve-BBNZ0-qm.js";import"./step-E2BXM1O_.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-Dtj6CrmT.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};export{t as CustomizedLabel,pt as __namedExportsOrder,at as default};
