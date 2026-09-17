import{R as r}from"./iframe-Dpvc5Yjz.js";import{R as c}from"./zIndexSlice-Dho3i8T5.js";import{C as d}from"./ComposedChart-B3mWCRuK.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CNmFF2qF.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-ChqzHVQ0.js";import"./index-Bl2eW-CY.js";import"./index-CVG-Xgr5.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CRYxfVCI.js";import"./isWellBehavedNumber-C1q3yIjs.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Y3ZAzA3v.js";import"./axisSelectors-B0MCU6bk.js";import"./d3-scale-B7bmEbYw.js";import"./index-D1MAn6gI.js";import"./index-BGJHRM8B.js";import"./renderedTicksSlice-oAd8rZHP.js";import"./index-hEOzvS9k.js";import"./CartesianChart-AKEzFsPm.js";import"./chartDataContext-BXOKjidD.js";import"./CategoricalChart-kI0T_bBx.js";import"./Layer-DB4rVtgq.js";import"./AnimatedItems-Dqknvwue.js";import"./Label-DIzmtP1_.js";import"./Text-DV8ChouY.js";import"./DOMUtils-B1JUaPdm.js";import"./useId-BTdNu9Gm.js";import"./useBackwardsCompatibleTheme-CtPFlS3s.js";import"./ZIndexLayer-BroloYIp.js";import"./useAnimationId-8x9555ZS.js";import"./ActivePoints-_iSEV7nC.js";import"./Dot-BbHheHK4.js";import"./types-PTwxeL9Y.js";import"./RegisterGraphicalItemId-BrxaJpgc.js";import"./GraphicalItemClipPath-DoYX_rje.js";import"./SetGraphicalItem-WpaZzJ--.js";import"./getRadiusAndStrokeWidthFromDot-BNtk_UOf.js";import"./ActiveShapeUtils-B4yE9O3b.js";import"./Curve-D8gKKjbw.js";import"./step-CbGZbdjm.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-B6UUBA8h.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
