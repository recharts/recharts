import{R as r}from"./iframe-CtnQdIY7.js";import{R as c}from"./zIndexSlice-uhZ24fvC.js";import{C as d}from"./ComposedChart-CQbfWDL_.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CzqGXiTo.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BK98nfBm.js";import"./index-D6huCRxI.js";import"./index-DamwuQ06.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BhVUJJl8.js";import"./isWellBehavedNumber-BafIqGdu.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DnMXuDt4.js";import"./index-C7Llpbdk.js";import"./index-CsEievrw.js";import"./axisSelectors-RZmSNqcb.js";import"./d3-scale-DhrbdntK.js";import"./renderedTicksSlice-C6Ijq1lt.js";import"./CartesianChart-CtmjJLbI.js";import"./chartDataContext-CjvKHNlA.js";import"./CategoricalChart-DN8vznAz.js";import"./Layer-CrHPq_vq.js";import"./AnimatedItems-C-8qrP3C.js";import"./Label-qBa5cEUX.js";import"./Text-B-1OewBP.js";import"./DOMUtils-BvAafYtQ.js";import"./ZIndexLayer-DMqHwKfA.js";import"./useAnimationId-DN6fR6pH.js";import"./ActivePoints-pXmyAmZV.js";import"./Dot-C0XFWsWB.js";import"./types-CuvpKj9W.js";import"./RegisterGraphicalItemId-nrbEOJ2H.js";import"./GraphicalItemClipPath-DTrO8h0n.js";import"./SetGraphicalItem-CeeM15rn.js";import"./getRadiusAndStrokeWidthFromDot-B6TsNsTR.js";import"./ActiveShapeUtils-B0TODl5s.js";import"./Curve-maCREAuN.js";import"./step-Dqi6RR6U.js";import"./path-DyVhHtw_.js";import"./RechartsThemeContext-v9ngAxmb.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-BZA8fGlN.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const mt=["CustomizedLabel"];export{t as CustomizedLabel,mt as __namedExportsOrder,at as default};
