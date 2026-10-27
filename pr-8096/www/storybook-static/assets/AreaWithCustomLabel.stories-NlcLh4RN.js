import{R as r}from"./iframe-u5XvksY5.js";import{R as c}from"./zIndexSlice-qPjBbXUc.js";import{C as d}from"./ComposedChart-bB_CptVE.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-Bi1cY9Lq.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BLkmbHVR.js";import"./throttle-B8qtKcg2.js";import"./index-vwmUrPFZ.js";import"./index-CtoGLGiN.js";import"./RechartsWrapper-By94_cXW.js";import"./axisSelectors-Bi0OjrmZ.js";import"./polarAxisSelectors-D58IkYNc.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C5Gzvvl7.js";import"./index-BpuM8AnC.js";import"./index-HZYgYW5E.js";import"./renderedTicksSlice-CduAdCWE.js";import"./index-DkZbI5V5.js";import"./CartesianChart-9oGErKhp.js";import"./ZIndexPortal-B1bAvAqr.js";import"./CategoricalChart-BBgGbCCg.js";import"./Layer-DZaDPYK5.js";import"./LabelList-BkhbrOAx.js";import"./Label-VbOnr0hr.js";import"./Text-DCsWNeTw.js";import"./pageBackground-XEfDP_WE.js";import"./ZIndexLayer-Y9UkGb_Q.js";import"./ActivePoints-BV0ddqGy.js";import"./Dot-Wys9DpOC.js";import"./types-B_Vy1dAM.js";import"./activeStyles-CGX86F5-.js";import"./useAnimationId-BOOGmCHa.js";import"./dataEntryStyles-RGg8_IXa.js";import"./Symbols-dBRKeymS.js";import"./symbol-CdXzcvWo.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-kkTP1No9.js";import"./getRadiusAndStrokeWidthFromDot-bEnvbNkp.js";import"./ActiveShapeUtils-I4oRUBzq.js";import"./Curve-DQLFDL8K.js";import"./step-Bpvz6PO-.js";import"./useEffectiveDataKey-CHJtUCr7.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
