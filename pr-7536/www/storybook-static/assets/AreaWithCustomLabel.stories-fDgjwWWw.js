import{R as e}from"./iframe-GFu4u_Sr.js";import{R as c}from"./zIndexSlice-B5qFJFtI.js";import{C as d}from"./ComposedChart-aZQazbAt.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-7iO7R1h-.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CQYhSY5q.js";import"./index-J8ff_bgA.js";import"./index-BoT4UeUf.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-B2kj8vGo.js";import"./isWellBehavedNumber-BzBjtwBe.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-GJPBo-3J.js";import"./index-fFvV_i1o.js";import"./index-CFslUPNA.js";import"./renderedTicksSlice-Dhv-F3Ii.js";import"./axisSelectors-CITTcs7P.js";import"./d3-scale-XJfpe2FZ.js";import"./CartesianChart-5jGrrHiW.js";import"./chartDataContext-ABcCQ5OY.js";import"./CategoricalChart-DaWqkQxP.js";import"./Layer-rjKJbMCf.js";import"./AnimatedItems-BMr3q6ws.js";import"./Label-DJGaBZN0.js";import"./Text-CHl4arA0.js";import"./DOMUtils-BV_Da9To.js";import"./ZIndexLayer-DO98mi6X.js";import"./useAnimationId-DHrR_uSV.js";import"./ActivePoints-BKnSZj52.js";import"./Dot-Cf60LmSz.js";import"./types-CpBB06eN.js";import"./RegisterGraphicalItemId-C2TZCZTY.js";import"./GraphicalItemClipPath-Dp-oK_MY.js";import"./SetGraphicalItem-BWFxWlyV.js";import"./getRadiusAndStrokeWidthFromDot-CavQSINe.js";import"./ActiveShapeUtils-DrDRZtp1.js";import"./Curve-d1fxHJEK.js";import"./step-CJ2svyaN.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-B3NohPBl.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const it=["CustomizedLabel"];export{t as CustomizedLabel,it as __namedExportsOrder,ot as default};
