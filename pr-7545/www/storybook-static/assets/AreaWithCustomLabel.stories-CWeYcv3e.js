import{R as e}from"./iframe-DMOF2lK6.js";import{R as c}from"./zIndexSlice-DhTc22fH.js";import{C as d}from"./ComposedChart-D3i3PjRq.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-v7pCvtoy.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DdV_xgY5.js";import"./index-CPzx0qn0.js";import"./index-DMOQZokV.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-y8-G4ZMe.js";import"./isWellBehavedNumber-dZNNr5ol.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-OXven1HQ.js";import"./index-D6CqkTNp.js";import"./index-CZ5vZ9qb.js";import"./renderedTicksSlice-Ba4-qyoV.js";import"./axisSelectors-CxjdpUYQ.js";import"./d3-scale-fRi62pfH.js";import"./CartesianChart-Dri7Y6-1.js";import"./chartDataContext-CTH0eIlx.js";import"./CategoricalChart-C3YmcWt7.js";import"./Layer-7eLuysDW.js";import"./AnimatedItems-BdaIVj2C.js";import"./Label-BEoMP2Su.js";import"./Text-Diu2UmEV.js";import"./DOMUtils-BbhpPFQ_.js";import"./ZIndexLayer-DUULPtO2.js";import"./useAnimationId-Djm7sZoE.js";import"./ActivePoints-Dw1JugLI.js";import"./Dot-DSdOAVgn.js";import"./types-CpWsykXF.js";import"./RegisterGraphicalItemId-CeE9Z4_x.js";import"./GraphicalItemClipPath-BUGzJbXN.js";import"./SetGraphicalItem-B-lQGR6o.js";import"./getRadiusAndStrokeWidthFromDot-EOdI7GLa.js";import"./ActiveShapeUtils-CJ8DXgxz.js";import"./Curve-DysNMUK1.js";import"./step-DvpijsBX.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-iCteOsSQ.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const it=["CustomizedLabel"];export{t as CustomizedLabel,it as __namedExportsOrder,ot as default};
