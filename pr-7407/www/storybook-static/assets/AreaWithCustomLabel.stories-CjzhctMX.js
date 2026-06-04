import{R as e}from"./iframe-cxp8IH44.js";import{R as c}from"./zIndexSlice-DVvPLO9J.js";import{C as d}from"./ComposedChart-1IEnSR6b.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-4ibz5Qdu.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BpTgB28d.js";import"./index-CJSUwDUV.js";import"./index-B9dWKkkc.js";import"./get-nRRBkHtC.js";import"./resolveDefaultProps-BXDigy9W.js";import"./isWellBehavedNumber-B-r9_3tz.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-9oJQLgI7.js";import"./index-CMrkNKT4.js";import"./index-BUvfJbFI.js";import"./renderedTicksSlice-BJt7M2Lj.js";import"./axisSelectors-zbfaG1VW.js";import"./d3-scale-DFFI4GOw.js";import"./string-B6fdYHAA.js";import"./CartesianChart-CmvmLWgk.js";import"./chartDataContext-BRXzicv6.js";import"./CategoricalChart-xGtZpTrE.js";import"./Layer-B0Ha3WJZ.js";import"./AnimatedItems-C411RvpV.js";import"./Label-C4cvj6qY.js";import"./Text-Bq45-f5m.js";import"./DOMUtils-BnT4arHk.js";import"./ZIndexLayer-jeREbB3U.js";import"./useAnimationId-B_RJXvak.js";import"./ActivePoints-B4uvin-c.js";import"./Dot-DdYUl2fA.js";import"./types-CPiShJxU.js";import"./RegisterGraphicalItemId-BwO4qHQJ.js";import"./GraphicalItemClipPath-B7_MorTP.js";import"./SetGraphicalItem-DEAw5QhZ.js";import"./getRadiusAndStrokeWidthFromDot-DjjQR4pM.js";import"./ActiveShapeUtils-DV6TMhk4.js";import"./Curve-BrvgjqsR.js";import"./step-D24hPJDM.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-DDBsCjT0.js";const it={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
