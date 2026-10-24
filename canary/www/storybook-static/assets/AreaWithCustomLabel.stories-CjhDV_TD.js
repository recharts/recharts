import{R as r}from"./iframe-DwT3zBcw.js";import{R as c}from"./zIndexSlice-B1c8R-o4.js";import{C as d}from"./ComposedChart-BRJHnsZA.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-B27C9sUo.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-zQvI5ucF.js";import"./index-DaIIHj-7.js";import"./index-HzTW079l.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Cd4ZPAw9.js";import"./isWellBehavedNumber-sM73_qxP.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B-ytYCFw.js";import"./axisSelectors-C7AasPYQ.js";import"./d3-scale-DKCZEfGq.js";import"./index-C8mRu_Mi.js";import"./index-BGcjFl-p.js";import"./renderedTicksSlice-CIz6Ndsz.js";import"./index-Bk7-Tdy1.js";import"./CartesianChart-brTBebdD.js";import"./chartDataContext-UYYS7Vdp.js";import"./CategoricalChart-z4qVmpWN.js";import"./Layer-DTu28EsQ.js";import"./activeStyles-0kotXHCs.js";import"./Label-BJdAgAze.js";import"./Text-aRPMe4ci.js";import"./pageBackground-DsM-Z0Rr.js";import"./useId-Dw49XwJm.js";import"./useBackwardsCompatibleTheme-7icVFW3Y.js";import"./ZIndexLayer-DYMRbOsR.js";import"./dataEntryStyles-BzuS2ZGG.js";import"./useAnimationId-BjdF1-gz.js";import"./ActivePoints-DatcE_ix.js";import"./Dot-B9jMerXC.js";import"./types-CLejyp8C.js";import"./RegisterGraphicalItemId-BXXaOAlY.js";import"./SetGraphicalItem-BwU9qQSh.js";import"./getRadiusAndStrokeWidthFromDot-DuGu4d4H.js";import"./ActiveShapeUtils-DY08WDqW.js";import"./Curve-Bt6WU0fX.js";import"./step-Cf4wfTi4.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-BsFyVvUD.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
