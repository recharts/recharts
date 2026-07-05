import{R as e}from"./iframe-CWavEj4K.js";import{R as c}from"./zIndexSlice-5FODTzGQ.js";import{C as d}from"./ComposedChart-5wlVBK1U.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BAIQ0BId.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Bkho8TEt.js";import"./index-CAI0wlC8.js";import"./index-BUN8uoaU.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Di3JUEKf.js";import"./isWellBehavedNumber-DmSAVoQw.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BHgaBn1E.js";import"./index-rtKProJN.js";import"./index-CB7M5YEf.js";import"./renderedTicksSlice-BaH7gash.js";import"./axisSelectors-XK5eG7GE.js";import"./d3-scale-BaBPlFPk.js";import"./CartesianChart-0mhtnzxI.js";import"./chartDataContext-B5TlaDO0.js";import"./CategoricalChart-DbdrFP36.js";import"./Layer-CGV1iRtS.js";import"./AnimatedItems-tOezhTob.js";import"./Label-BBFntxVE.js";import"./Text-DKOGU3E1.js";import"./DOMUtils-bwyz7eCe.js";import"./ZIndexLayer-BFe8VyCX.js";import"./useAnimationId-DfkBBgp-.js";import"./ActivePoints-Bl1BNxPS.js";import"./Dot-DxpmSLW5.js";import"./types-BmbikVaN.js";import"./RegisterGraphicalItemId-C4WMjaGC.js";import"./GraphicalItemClipPath-CrXxzkB7.js";import"./SetGraphicalItem-DS2vQ-KW.js";import"./getRadiusAndStrokeWidthFromDot-CWHux7lI.js";import"./ActiveShapeUtils-DeeBbphL.js";import"./Curve-Be2eVpFP.js";import"./step-De38Fzbp.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-D8g2BDdh.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
