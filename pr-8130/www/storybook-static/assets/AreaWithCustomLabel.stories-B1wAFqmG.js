import{R as r}from"./iframe-C0OVyiWZ.js";import{R as c}from"./zIndexSlice-8GqqcFEr.js";import{C as d}from"./ComposedChart-CDKrU3QJ.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DMSJgeVp.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CzOTGDv8.js";import"./throttle-D68qy_th.js";import"./index-Docwyysm.js";import"./index-ZerhtVY0.js";import"./RechartsWrapper-CTQttuVZ.js";import"./axisSelectors-D80ZAqVH.js";import"./polarAxisSelectors-DTm6eoEL.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-P-FUFzKf.js";import"./index-B1LAm-dY.js";import"./index-BpCkqUEo.js";import"./renderedTicksSlice-CUInauOX.js";import"./index-C5porGIG.js";import"./fillDefinitions-Bbw8sRrt.js";import"./CartesianChart-DeRNlyJ8.js";import"./ZIndexPortal-wZgZSnoL.js";import"./CategoricalChart-BEVcLfMu.js";import"./Layer-OalOUm3Y.js";import"./LabelList-D0ai-hpm.js";import"./Label-YEc5vJ1L.js";import"./Text-CW0hOv-I.js";import"./DOMUtils-C9FX__jF.js";import"./ZIndexLayer-lUVq37sV.js";import"./ActivePoints-BUz8lbCF.js";import"./Dot-b3sd19D9.js";import"./types-C-qeruIO.js";import"./activeStyles-D_QsSvZV.js";import"./useAnimationId-CezZ2glr.js";import"./dataEntryStyles-Cd6CZepp.js";import"./Symbols-BDZG6tZB.js";import"./symbol-BmFAGqI-.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-CFBhhEbP.js";import"./getRadiusAndStrokeWidthFromDot-DztWYVRU.js";import"./ActiveShapeUtils-DL-meZDZ.js";import"./Curve-C3dcNtoz.js";import"./step-CZORxbW4.js";import"./useEffectiveDataKey-AC38WMBQ.js";const pt={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},st=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
