import{R as r}from"./iframe-BH2TtHlY.js";import{R as c}from"./zIndexSlice-BUPzf8FY.js";import{C as d}from"./ComposedChart-DsOU5PTg.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BB1j22iT.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BaFcvJtj.js";import"./throttle-Dx7o9_lY.js";import"./index-Sghl8E88.js";import"./index-C9KoigcN.js";import"./RechartsWrapper-DzLFc6RH.js";import"./axisSelectors-DsRwL_k-.js";import"./polarAxisSelectors-CrYx-glo.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CXj_dWXw.js";import"./index-DPzL1RFj.js";import"./index-TbzLaF3S.js";import"./renderedTicksSlice-DLQHvIeX.js";import"./index-DbFZkhWq.js";import"./fillDefinitions-BmoMSVON.js";import"./CartesianChart-CdAq2ZGm.js";import"./chartDataContext-CW5gEqv4.js";import"./CategoricalChart-3Oqm6Z_m.js";import"./Layer-IM2jrBt3.js";import"./dataEntryStyles-oNDiL7vD.js";import"./Label-CIPQeI3a.js";import"./Text-CevbSlGY.js";import"./ZIndexLayer-Doizp3A4.js";import"./ActivePoints-B7PZUjv_.js";import"./Dot-yQhLEV_U.js";import"./types-DOMxGpI2.js";import"./activeStyles-C4DAj0Um.js";import"./useAnimationId-CDSf-pzR.js";import"./Symbols-CxGDxLq8.js";import"./symbol-Dum7koiK.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-Cr0BjIMT.js";import"./getRadiusAndStrokeWidthFromDot-Cst5_ZvX.js";import"./ActiveShapeUtils-CWwwV9zV.js";import"./Curve-CJ99zN7P.js";import"./step-ChPkaUxk.js";import"./useEffectiveDataKey-BXRZCQow.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},mt=["CustomizedLabel"];var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as CustomizedLabel,mt as __namedExportsOrder,at as default};
