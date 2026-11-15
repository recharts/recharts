import{R as r}from"./iframe--N-T_hBz.js";import{R as c}from"./zIndexSlice-BrmEEgcV.js";import{C as d}from"./ComposedChart-Cmhus7DD.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CsryjhZ0.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BZdVkepW.js";import"./throttle-DiHBngta.js";import"./index-CltnTfg9.js";import"./index-C2LKm9xK.js";import"./RechartsWrapper-Dga53r6u.js";import"./axisSelectors-dSJNPUYj.js";import"./polarAxisSelectors-Ch50KZor.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-syhDUnOY.js";import"./index-DQLg1InC.js";import"./index-DSO52ANi.js";import"./renderedTicksSlice-C7C4TYLP.js";import"./index-BiiWPIDX.js";import"./fillDefinitions-DLkX59y8.js";import"./CartesianChart-DXdGkfOu.js";import"./chartDataContext-CXOzC9oO.js";import"./CategoricalChart-CbkCL8Oe.js";import"./Layer-1myxLhO2.js";import"./dataEntryStyles-CggySQjW.js";import"./Label-DcuyFpKL.js";import"./Text-B6x9BsBz.js";import"./ZIndexLayer-PDpl17Qr.js";import"./ActivePoints-BSj_UmGI.js";import"./Dot-MqsnkUih.js";import"./types-CDdNjsiG.js";import"./activeStyles-CQz5jccO.js";import"./useAnimationId-B0H5IbY6.js";import"./Symbols-DyIGA9sv.js";import"./symbol-Dc0-FYjy.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-BuNZMI4X.js";import"./getRadiusAndStrokeWidthFromDot-C_-ClNXz.js";import"./ActiveShapeUtils-DxAwIp1Y.js";import"./Curve-AUzua7kl.js";import"./step-BCTml7Sd.js";import"./useEffectiveDataKey-ehD4S_ma.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},mt=["CustomizedLabel"];var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
