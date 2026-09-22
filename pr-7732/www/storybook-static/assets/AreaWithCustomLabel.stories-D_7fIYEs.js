import{R as r}from"./iframe-BJZoea5Q.js";import{R as c}from"./zIndexSlice-3SrN7G8I.js";import{C as d}from"./ComposedChart-DAHls3zr.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CEb-uQpO.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DhjtP12Z.js";import"./index-eqi9YN1t.js";import"./index-BDOUu_G8.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-p2HAfk0o.js";import"./isWellBehavedNumber-PsmwNW5h.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CEdFNSj2.js";import"./axisSelectors-10L_Paee.js";import"./d3-scale-Bo47ZJJr.js";import"./index-BdI0Temb.js";import"./index-Q3HRKpx2.js";import"./renderedTicksSlice-DjcslC9u.js";import"./index-ey4yeO--.js";import"./CartesianChart-DDkwxTw9.js";import"./chartDataContext-2iVlib8J.js";import"./CategoricalChart-DYS4mlap.js";import"./Layer-CY8EZbPL.js";import"./AnimatedItems-B1n61v19.js";import"./Label-CKHttH-g.js";import"./Text-C846DGO8.js";import"./DOMUtils-DMsPd0Jf.js";import"./useId-CgY4hBIS.js";import"./useBackwardsCompatibleTheme-cb-KLBvK.js";import"./ZIndexLayer-gq-nfNXC.js";import"./useAnimationId-DIbB0gmH.js";import"./ActivePoints-BIetIDgh.js";import"./Dot-CgLNu5xp.js";import"./types-DB2bYquS.js";import"./RegisterGraphicalItemId-lL7ggMEp.js";import"./GraphicalItemClipPath-BEj7XwPx.js";import"./SetGraphicalItem-BvBiLTUU.js";import"./getRadiusAndStrokeWidthFromDot-DajYH82O.js";import"./ActiveShapeUtils-t9roLBb8.js";import"./Curve-C2T2vEED.js";import"./step-DQt_azzu.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-CiHiONr1.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
