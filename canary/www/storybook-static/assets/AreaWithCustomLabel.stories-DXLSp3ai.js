import{R as r}from"./iframe-DkIbxCKI.js";import{R as c}from"./zIndexSlice-CHbZzwgN.js";import{C as d}from"./ComposedChart-AmLF4jNt.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DdlzuEx3.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CWb9XQe7.js";import"./index-yECzrrEn.js";import"./index-B09gEsNA.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BevWDyyN.js";import"./isWellBehavedNumber-fyAAr-BE.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CqxFYmG2.js";import"./axisSelectors-B_cE3_9l.js";import"./d3-scale-8ot6xaxi.js";import"./index-CgyukL1G.js";import"./index-x7Df9KyH.js";import"./renderedTicksSlice-DyBDLYr8.js";import"./index-BccjzSMV.js";import"./CartesianChart-CLeTDcJ1.js";import"./chartDataContext-CWOneN2n.js";import"./CategoricalChart-De8d0Fqy.js";import"./Layer-D7vk6n2M.js";import"./AnimatedItems-CIN2lrWw.js";import"./Label-DXoCOeOg.js";import"./Text-BbOUDRzF.js";import"./DOMUtils-BUKWldcd.js";import"./useId-8qRrdFWs.js";import"./useBackwardsCompatibleTheme-BwQOOq4w.js";import"./ZIndexLayer-BJyXs-Ro.js";import"./useAnimationId-DMHPZlQv.js";import"./ActivePoints-CzJuPhh_.js";import"./Dot-D2yhY2N9.js";import"./types-CwHWliOY.js";import"./RegisterGraphicalItemId-lA-3F1_K.js";import"./GraphicalItemClipPath-DKslCQDi.js";import"./SetGraphicalItem-CEswJxM0.js";import"./getRadiusAndStrokeWidthFromDot-CpjzEu0-.js";import"./ActiveShapeUtils-CMEDiyrE.js";import"./Curve-D-aQyXcF.js";import"./step-DQQJ3aEt.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-BZv1ZQCF.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
