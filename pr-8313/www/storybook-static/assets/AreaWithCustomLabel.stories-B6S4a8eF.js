import{R as r}from"./iframe-Bpzk9XpD.js";import{R as c}from"./zIndexSlice-CybCXANO.js";import{C as d}from"./ComposedChart-OJyIgW0F.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CUGkvftb.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-C16rW2Tl.js";import"./get-CjriyByo.js";import"./throttle-BPowKzWT.js";import"./index-C_7DmI7l.js";import"./index-CBNlQ8jB.js";import"./RechartsWrapper-DlW5DJbf.js";import"./axisSelectors-BX6dGTcL.js";import"./polarAxisSelectors-C0HjJPCE.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-NmCyEWmm.js";import"./index-BoH8mfei.js";import"./index-Da9OH9g8.js";import"./renderedTicksSlice-B8rXaB1P.js";import"./index-DUebFUoz.js";import"./fillDefinitions-DV8KR0hl.js";import"./CartesianChart-v26TVdj4.js";import"./chartDataContext-DZdZASYb.js";import"./CategoricalChart-CZJOPWNu.js";import"./getRadiusAndStrokeWidthFromDot-BTTYYDZG.js";import"./Layer-DCNhrIPV.js";import"./dataEntryStyles-CqhA2T9I.js";import"./Label-eMApu8Ae.js";import"./Text-Dqm35yMi.js";import"./ZIndexLayer-BSjRPeG2.js";import"./ActivePoints-DF_bXbZk.js";import"./Dot-Dm4VIYOH.js";import"./types-BjOl9SGN.js";import"./activeStyles-Dvq2y-2D.js";import"./useAnimationId-B2Y87b6z.js";import"./Symbols-Bw3SJeUU.js";import"./symbol-Ce4tZNho.js";import"./path-BBMZd4YL.js";import"./SetGraphicalItem-BO8cE8zs.js";import"./ActiveShapeUtils-Px2nMQKl.js";import"./Curve-D_Dl1lOS.js";import"./step-D-E4uKVH.js";import"./useEffectiveDataKey-Cem866lm.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},mt=["CustomizedLabel"];var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
