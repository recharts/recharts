import{R as r}from"./iframe-DDlpcCnl.js";import{R as c}from"./zIndexSlice-IyRnOGSL.js";import{C as d}from"./ComposedChart-DTzVCjBN.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-Z97ecPcz.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DdcIcuy0.js";import"./throttle-BEGaSLni.js";import"./index-BrGVAlaK.js";import"./index-DgZ0S6kR.js";import"./RechartsWrapper-CEsAbTQz.js";import"./axisSelectors-DJ_js28E.js";import"./polarAxisSelectors-CmUB7T9A.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C8E3wvOe.js";import"./index-DQ5N6C5N.js";import"./index-CVLdebNc.js";import"./renderedTicksSlice-CDUEc77e.js";import"./index-DwERpMJ8.js";import"./fillDefinitions-B51hWH8m.js";import"./CartesianChart-EWd5fLMj.js";import"./ZIndexPortal-cCqCXZCV.js";import"./CategoricalChart-fIZxwY-X.js";import"./Layer-G7QHPTqV.js";import"./LabelList-D8buJxhL.js";import"./Label-CZPjkQy2.js";import"./Text-BYHxKQhi.js";import"./DOMUtils-CEWteLOc.js";import"./ZIndexLayer-6Wt9kpTG.js";import"./ActivePoints-sqb6X4Yl.js";import"./Dot-D-KXvVde.js";import"./types-9pREsRXw.js";import"./activeStyles-cdXgOxXT.js";import"./useAnimationId-BvctuRLt.js";import"./dataEntryStyles-DFT_PI06.js";import"./Symbols-CUes1UBB.js";import"./symbol-DbG6j_AG.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-tysqpR10.js";import"./getRadiusAndStrokeWidthFromDot-DKbshIsH.js";import"./ActiveShapeUtils-9MmIWSgd.js";import"./Curve-BE_oIUBL.js";import"./step-8fTxxi9s.js";import"./useEffectiveDataKey-DdYNwp-E.js";const pt={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},st=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
