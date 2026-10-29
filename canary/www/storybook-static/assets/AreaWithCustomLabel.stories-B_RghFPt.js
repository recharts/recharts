import{R as r}from"./iframe-CuGhPmlk.js";import{R as c}from"./zIndexSlice-BOf55cXv.js";import{C as d}from"./ComposedChart-BaRxWhmE.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BZ1KpyoR.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-JU216Ibw.js";import"./throttle-D0-4r1vg.js";import"./index-D9ZLEpwh.js";import"./index-CLkWjMz0.js";import"./RechartsWrapper-CkD6y7S6.js";import"./axisSelectors-Bzh2qDn8.js";import"./polarAxisSelectors-BwdXKLtW.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DH8f3Idv.js";import"./index-pU8qqa02.js";import"./index--76JpPy7.js";import"./renderedTicksSlice-DbYgrNox.js";import"./index-CxvEfTaS.js";import"./CartesianChart-CEtK8vTY.js";import"./ZIndexPortal-ClQ_oNM2.js";import"./CategoricalChart-DiUb-iYo.js";import"./Layer-C-miwaoG.js";import"./LabelList-T4o6_Eqe.js";import"./Label-B62wTY7D.js";import"./Text-L-8TUXNX.js";import"./pageBackground-DCo2yzAB.js";import"./ZIndexLayer-BtXB3z2o.js";import"./ActivePoints-Bn3lQzBu.js";import"./Dot-DK7HsTYP.js";import"./types-B0LhVrLk.js";import"./activeStyles-U82greWp.js";import"./useAnimationId-DwU2Zwh7.js";import"./dataEntryStyles-DpUTp7qZ.js";import"./Symbols-DiagS28o.js";import"./symbol-CetSzj0T.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-Csvl1Ioj.js";import"./getRadiusAndStrokeWidthFromDot-CE9VpvC8.js";import"./ActiveShapeUtils-BpXA90LR.js";import"./Curve-Cv9VJ7_-.js";import"./step-Bpop3Ls-.js";import"./useEffectiveDataKey-Q10jxXsl.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
