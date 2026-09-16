import{R as r}from"./iframe-CUlWXK_q.js";import{R as c}from"./zIndexSlice-DM6pr2-S.js";import{C as d}from"./ComposedChart-BTSMlYc4.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-Cl6qfkTw.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-C_r5ITnz.js";import"./index-DeLCoNGq.js";import"./index-DkyNoZPG.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-D0jJQ7td.js";import"./isWellBehavedNumber-dgjlUMt0.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C5F4JVOA.js";import"./axisSelectors-BD41NxQw.js";import"./d3-scale-hq__MZkp.js";import"./index-B7A70wTi.js";import"./index-BLklzkKd.js";import"./renderedTicksSlice-BdBFpUvH.js";import"./index-BBeD-IIB.js";import"./CartesianChart-CRlJjBxC.js";import"./chartDataContext-NP5kWzmf.js";import"./CategoricalChart-BnjqCNZT.js";import"./Layer-DTo8-sn1.js";import"./AnimatedItems-DODKpEkU.js";import"./Label-CHddXrDn.js";import"./Text-Dwcbogye.js";import"./DOMUtils-C2wyshXr.js";import"./useId-xdSBMbRU.js";import"./useBackwardsCompatibleTheme-DPUtEB0l.js";import"./ZIndexLayer-CBqpLv67.js";import"./useAnimationId-JJOW80s5.js";import"./ActivePoints-B_yfpjG0.js";import"./Dot-DYyj6ZNH.js";import"./types-C9dSmSxn.js";import"./RegisterGraphicalItemId-CjUENZzL.js";import"./GraphicalItemClipPath-gLO2Kyz_.js";import"./SetGraphicalItem-CLwyvQ_z.js";import"./getRadiusAndStrokeWidthFromDot-DvN_DPnW.js";import"./ActiveShapeUtils-BTWGbocf.js";import"./Curve-D8NUv9dD.js";import"./step-Di3fwKYt.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-B9Lyw3Fg.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
