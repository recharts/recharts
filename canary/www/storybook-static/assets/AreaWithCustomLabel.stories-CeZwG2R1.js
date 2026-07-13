import{R as e}from"./iframe-upOKpTfC.js";import{R as c}from"./zIndexSlice-3kJy4_5s.js";import{C as d}from"./ComposedChart-XkmqlV9y.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-D-zLD_JI.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DFA1f5tU.js";import"./index-fzhcIN9D.js";import"./index-BjDbck5L.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-C5MbGZTR.js";import"./isWellBehavedNumber-DrMtPoxC.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BGh022Wu.js";import"./index-C-2GXdQU.js";import"./index-Bjw8W24w.js";import"./renderedTicksSlice-_aeWYehA.js";import"./axisSelectors-Bm__5HSH.js";import"./d3-scale-BoRQfYQu.js";import"./CartesianChart-C0cpSp27.js";import"./chartDataContext-CULDGz5L.js";import"./CategoricalChart-CtBwRsb8.js";import"./Layer-Bv6NwOOo.js";import"./AnimatedItems-DNy5Onjp.js";import"./Label-CWWfz4NX.js";import"./Text-CuI103ie.js";import"./DOMUtils-BQfF-HWt.js";import"./ZIndexLayer-CN5osLDH.js";import"./useAnimationId-ypM0JLm_.js";import"./ActivePoints-CvqveQ6d.js";import"./Dot-CWeDp1FL.js";import"./types-Bdshst7h.js";import"./RegisterGraphicalItemId-CKwYBx4V.js";import"./GraphicalItemClipPath-CwmaU6d7.js";import"./SetGraphicalItem-DYmFEset.js";import"./getRadiusAndStrokeWidthFromDot-CMxxoR3Y.js";import"./ActiveShapeUtils-DdQ7UgVU.js";import"./Curve-D2bD0YW0.js";import"./step-DhetwtCK.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-DPG-mFl6.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
