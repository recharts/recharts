import{R as e}from"./iframe-uEKx9k1N.js";import{R as c}from"./zIndexSlice-DY2SAwlF.js";import{C as d}from"./ComposedChart-wuX6tP4V.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BzBczU_F.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BszORo1S.js";import"./index-CSsm5ETf.js";import"./index-DPeMAw3v.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-ht_nEGGy.js";import"./isWellBehavedNumber-DQ4HTAG3.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B8Jh4kUL.js";import"./index-Du90D5xv.js";import"./index-CgS1QQ0H.js";import"./renderedTicksSlice-DY-iZALX.js";import"./axisSelectors-w7ZWZmhc.js";import"./d3-scale-CoMxsikp.js";import"./CartesianChart-BzS97Wq2.js";import"./chartDataContext-w4FL8Pti.js";import"./CategoricalChart-ablhttF3.js";import"./Layer-BH5XLyL8.js";import"./AnimatedItems-B35P9OvY.js";import"./Label-CitoXnqP.js";import"./Text-B8QKaTlG.js";import"./DOMUtils-CMP-Fz_P.js";import"./ZIndexLayer-ClIbinrc.js";import"./useAnimationId-ZeyHjL0b.js";import"./ActivePoints-BymWNzxJ.js";import"./Dot-F2Exn6rv.js";import"./types-BnkDZvgK.js";import"./RegisterGraphicalItemId-CTEk8rED.js";import"./GraphicalItemClipPath-BIARRVEG.js";import"./SetGraphicalItem-CwhlaQHa.js";import"./getRadiusAndStrokeWidthFromDot-DTQnNiya.js";import"./ActiveShapeUtils-BahjRs48.js";import"./Curve-DneOA6Ls.js";import"./step-F10w8TN4.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-BRveUiGI.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
