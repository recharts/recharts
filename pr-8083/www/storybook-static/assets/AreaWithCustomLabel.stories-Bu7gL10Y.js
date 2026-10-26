import{R as r}from"./iframe-xm0njxpX.js";import{R as c}from"./zIndexSlice-BXJXmFQu.js";import{C as d}from"./ComposedChart-CTFFybCq.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DuUykGt8.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-B61AogRi.js";import"./throttle-CQYnjh9B.js";import"./index-sPTpvkxI.js";import"./index-BJuRFged.js";import"./RechartsWrapper-B8IVe3Ss.js";import"./axisSelectors-CvRpVDMX.js";import"./polarAxisSelectors-DQe6GYeu.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DRKVpWRJ.js";import"./index--0VHY1xY.js";import"./index-A2yfNmgu.js";import"./renderedTicksSlice-BXAMy43b.js";import"./index-BwWTg3c5.js";import"./CartesianChart-BJCMshR7.js";import"./chartDataContext-Dzgvzmie.js";import"./CategoricalChart-CF01fl7y.js";import"./Layer-BK3cybNP.js";import"./activeStyles-DbHXCiJk.js";import"./Label-S9WiqPCG.js";import"./Text-B0-TExiI.js";import"./pageBackground-DWSrNR00.js";import"./useId-BgEUuOn0.js";import"./ZIndexLayer-DyZHr2FP.js";import"./dataEntryStyles-6HljWj9B.js";import"./useAnimationId-CEkjnsp2.js";import"./ActivePoints-BjJpQq32.js";import"./Dot-CSz5GuhK.js";import"./types-dJ8tHIrH.js";import"./Symbols-DCRo0j9j.js";import"./symbol-BSoKxRAd.js";import"./path-DyVhHtw_.js";import"./RegisterGraphicalItemId-CvVXplwq.js";import"./SetGraphicalItem-BWe-V4S4.js";import"./getRadiusAndStrokeWidthFromDot-C3oN3ytl.js";import"./ActiveShapeUtils-BgjHc8Mn.js";import"./Curve-BAoUkSSw.js";import"./step-W8iSilzg.js";import"./useEffectiveDataKey-L1KgQlH4.js";const pt={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},st=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
