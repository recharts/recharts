import{R as r}from"./iframe-BQY4vSXy.js";import{R as c}from"./zIndexSlice-BdzVgEW0.js";import{C as d}from"./ComposedChart-B-_Frpte.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-By95nAwy.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-G77sf460.js";import"./throttle-CE5heSva.js";import"./index-CQxQDYts.js";import"./index-D-_6MOIc.js";import"./RechartsWrapper-BcRxM-Av.js";import"./axisSelectors-B45QX1Cb.js";import"./polarAxisSelectors-Bx2aNCzN.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-tF01g-yC.js";import"./index-CLE53NQ2.js";import"./index-CyLNMVoO.js";import"./renderedTicksSlice-xQ-Bbda9.js";import"./index-Bx1R-goW.js";import"./fillDefinitions-DSK0YdxC.js";import"./CartesianChart-r0bwZB67.js";import"./ZIndexPortal-CnsPtZ0q.js";import"./CategoricalChart-DH0FyAFC.js";import"./Layer-AUPxKI27.js";import"./LabelList-CALPxAES.js";import"./Label-mx5Rr5JL.js";import"./Text-CLBNZPUe.js";import"./DOMUtils-fCmVDggT.js";import"./ZIndexLayer-CAJurUsW.js";import"./ActivePoints-BFRx_fxi.js";import"./Dot-Cds0GrCQ.js";import"./types-Mj5dcoaz.js";import"./activeStyles-BMraSVhQ.js";import"./useAnimationId-qEoZ-4tT.js";import"./dataEntryStyles-CGibnImn.js";import"./Symbols-yVk86yax.js";import"./symbol-DVGalN_0.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-DSqeiOP9.js";import"./getRadiusAndStrokeWidthFromDot-DVA4wgZi.js";import"./ActiveShapeUtils-jWDRV1_r.js";import"./Curve-Prn3xfVK.js";import"./step-BwGNQI61.js";import"./useEffectiveDataKey-DjptVWbj.js";const pt={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},st=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
