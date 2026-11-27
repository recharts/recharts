import{R as r}from"./iframe-CqOe7k5Y.js";import{R as c}from"./zIndexSlice-HvZ_KFp3.js";import{C as d}from"./ComposedChart-BeSg73-5.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-B8yf8gWn.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-uDtrY5a-.js";import"./get-CjriyByo.js";import"./throttle-BawAsSGW.js";import"./index-NjrwBPri.js";import"./index-Nzssfkwo.js";import"./RechartsWrapper-C6U1x4NS.js";import"./axisSelectors-HXuL0A3L.js";import"./polarAxisSelectors-DnFOpaLb.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-B6EefrnE.js";import"./index-C49j9LJv.js";import"./index-DQgKuLzP.js";import"./renderedTicksSlice-B-tkfTkQ.js";import"./index-CjpYzq4S.js";import"./fillDefinitions-BUUlO_ua.js";import"./CartesianChart-CGVfE0i2.js";import"./chartDataContext-B9y28Tuh.js";import"./CategoricalChart-Cm4y0z4v.js";import"./getRadiusAndStrokeWidthFromDot-iFUrCwsR.js";import"./Layer-CqFOI8aQ.js";import"./dataEntryStyles-CclxtIIf.js";import"./Label-yQ-nD2jU.js";import"./Text-N8PDZP4n.js";import"./ZIndexLayer-Bx6NEOZE.js";import"./ActivePoints-DOsR5596.js";import"./Dot-QqtvItF4.js";import"./types-DHkZz5Qp.js";import"./activeStyles-DyQy4djd.js";import"./useAnimationId-_GPHqvCi.js";import"./Symbols-DOIoBL3s.js";import"./symbol-Cf12ZYaI.js";import"./path-BBMZd4YL.js";import"./SetGraphicalItem-5gHOvcya.js";import"./ActiveShapeUtils-dZojZzcj.js";import"./Curve-C0AiDBmT.js";import"./step-C0xBjYaF.js";import"./useEffectiveDataKey-C_dNJO7p.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},mt=["CustomizedLabel"];var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
