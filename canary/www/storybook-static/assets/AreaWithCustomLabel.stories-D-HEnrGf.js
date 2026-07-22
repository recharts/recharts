import{R as e}from"./iframe-CM9KFlpR.js";import{R as c}from"./zIndexSlice-i3oRyNLb.js";import{C as d}from"./ComposedChart-BliiGcYz.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-mrMAtBYY.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-De6mCLNM.js";import"./index-DWeI466K.js";import"./index-CIwJAIlL.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Ck7rGCA-.js";import"./isWellBehavedNumber-D6ap16Bm.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DaqDuaqH.js";import"./index-BQLe23-Y.js";import"./index-CO_J2hQh.js";import"./renderedTicksSlice-B9ba2EdW.js";import"./axisSelectors-gWKpmW3G.js";import"./d3-scale-BtCHm39u.js";import"./CartesianChart-Bh6VCjY7.js";import"./chartDataContext-Do1rIj0R.js";import"./CategoricalChart-DG8gXHxR.js";import"./Layer-CyTLoz3L.js";import"./AnimatedItems-Dc6JrbcK.js";import"./Label-8JT3S2zg.js";import"./Text-Z2Be4kdC.js";import"./DOMUtils-5L50_gtE.js";import"./ZIndexLayer-CLQFgWIH.js";import"./useAnimationId-OG1_HfMp.js";import"./ActivePoints-BWeInnwU.js";import"./Dot-kCj2iLyE.js";import"./types-BZH27c5K.js";import"./RegisterGraphicalItemId-BY7wzIRb.js";import"./GraphicalItemClipPath-mABwVFdR.js";import"./SetGraphicalItem-CktbvIN2.js";import"./getRadiusAndStrokeWidthFromDot-CWl-YjkB.js";import"./ActiveShapeUtils-BKApU02X.js";import"./Curve-DN_e8w4x.js";import"./step-DSranele.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-DJPuYJhE.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
