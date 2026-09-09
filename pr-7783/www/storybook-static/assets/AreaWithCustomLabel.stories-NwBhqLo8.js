import{R as r}from"./iframe-DzgNGLlq.js";import{R as c}from"./zIndexSlice-CTnIst4D.js";import{C as d}from"./ComposedChart-BLITsJxL.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BaXpJmL8.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-uLx0gES7.js";import"./index-BQnnRDe7.js";import"./index-8oVCWn1c.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CaF46lB1.js";import"./isWellBehavedNumber-BgtbXlLK.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CboTFEd7.js";import"./axisSelectors-94eYl4rY.js";import"./d3-scale-yT9SK4Da.js";import"./index-C14b3CKC.js";import"./index-Xa_KNetQ.js";import"./renderedTicksSlice-Bkx7Xpqk.js";import"./index-Dbv9pvOZ.js";import"./CartesianChart-Dev9z_OT.js";import"./chartDataContext-BBsc4T1N.js";import"./CategoricalChart-CJCvkzIF.js";import"./Layer-OlcmJ5EJ.js";import"./AnimatedItems-Cm23KMMu.js";import"./Label-B2-HhKmy.js";import"./Text-Cmcmp6Rw.js";import"./DOMUtils-qoFWhjfZ.js";import"./useId-lk8BfN7M.js";import"./useBackwardsCompatibleTheme-CWFDA9S4.js";import"./ZIndexLayer-BSDazUEj.js";import"./useAnimationId-CKHGdmz-.js";import"./ActivePoints-DkCNlDk1.js";import"./Dot-BwV8U2lv.js";import"./types-jKlbb9F_.js";import"./RegisterGraphicalItemId-CGkeXCMx.js";import"./GraphicalItemClipPath-0iLoH1-r.js";import"./SetGraphicalItem-BCo8L_08.js";import"./getRadiusAndStrokeWidthFromDot-BoQ0loRr.js";import"./ActiveShapeUtils-O11gFqO3.js";import"./Curve-jqISDG95.js";import"./step-CuPD0mOn.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-BAh9vCkO.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
