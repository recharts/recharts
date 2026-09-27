import{R as r}from"./iframe-DjMXRMWw.js";import{R as c}from"./zIndexSlice-CtOSUbKS.js";import{C as d}from"./ComposedChart-BWguOzjW.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CUZlXnUw.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-inystY2z.js";import"./index-DVy8JuJj.js";import"./index-C8KOxsb8.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B1XIyHIw.js";import"./isWellBehavedNumber-umHPGaL1.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BnIn7gPv.js";import"./axisSelectors-CNz5a2R6.js";import"./d3-scale-CRgYiiwr.js";import"./index-DYIYCqg3.js";import"./index-Bhr5x-9R.js";import"./renderedTicksSlice-DVXswGI9.js";import"./index-BD7yu4TT.js";import"./CartesianChart-CDSIXDAD.js";import"./chartDataContext-DOQrMEHc.js";import"./CategoricalChart-DvjYEnPS.js";import"./Layer-CXKDxib5.js";import"./AnimatedItems-B8zijpSk.js";import"./Label-bBUf40Mc.js";import"./Text-BAKQyfL2.js";import"./DOMUtils-C8lW23C1.js";import"./useId-_ZeDNFzq.js";import"./useBackwardsCompatibleTheme-nOUNGopJ.js";import"./ZIndexLayer-BeupKQ39.js";import"./useAnimationId-DqHnZ7Fe.js";import"./ActivePoints-D8eJWPdK.js";import"./Dot-DcNcFyGg.js";import"./types-CHoZYlJ3.js";import"./RegisterGraphicalItemId-Dt04SWfb.js";import"./GraphicalItemClipPath-BWZ1AOYB.js";import"./SetGraphicalItem-7PkPViNi.js";import"./getRadiusAndStrokeWidthFromDot-D039ugpa.js";import"./ActiveShapeUtils-B380iXXR.js";import"./Curve-OU_i7PV7.js";import"./step-Cub6k3wO.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-CLXu1wVJ.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
