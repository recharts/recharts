import{R as e}from"./iframe-D_UL8fjK.js";import{R as c}from"./zIndexSlice-B8f2hTRD.js";import{C as d}from"./ComposedChart-CDUUKafl.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-OZr20Xgv.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-EbH1y2w7.js";import"./index-DNxkBCVe.js";import"./index-h-g40TxG.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Byb1qXS0.js";import"./isWellBehavedNumber-iC5WXlxZ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DnUEvc6-.js";import"./index-DmYZtYvi.js";import"./index-Bs4KGwv6.js";import"./axisSelectors-BNsSlswM.js";import"./d3-scale-5WraxJWy.js";import"./renderedTicksSlice-DZH5dqFY.js";import"./CartesianChart-C-1LzzB9.js";import"./chartDataContext-BZOn_6n4.js";import"./CategoricalChart-CtOYQTRo.js";import"./Layer-DErQ8LWn.js";import"./AnimatedItems-ZBM6OyTb.js";import"./Label-efHFABNJ.js";import"./Text-bynAhtfX.js";import"./DOMUtils-y3mUx3tY.js";import"./ZIndexLayer-CzKUyCGh.js";import"./useAnimationId-1dDzdKc5.js";import"./ActivePoints-BrIz1_y9.js";import"./Dot-CPC6zP8q.js";import"./types-D8jMk9wl.js";import"./RegisterGraphicalItemId-CO_dSij1.js";import"./graphicalItemIdentity-DUedU3Gi.js";import"./SetGraphicalItem-Bv1waFvM.js";import"./getRadiusAndStrokeWidthFromDot-DmFKBFPd.js";import"./ActiveShapeUtils-JCOSF6Qb.js";import"./Curve-VdPw19wo.js";import"./step-DBWLHasU.js";import"./path-DyVhHtw_.js";import"./RechartsThemeContext-DF-Xzw8d.js";import"./graphicalItemSelectors-DSFRQ2mt.js";const it={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const at=["CustomizedLabel"];export{t as CustomizedLabel,at as __namedExportsOrder,it as default};
