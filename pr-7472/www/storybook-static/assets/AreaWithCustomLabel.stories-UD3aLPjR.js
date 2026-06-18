import{R as e}from"./iframe-BY-61mf3.js";import{R as c}from"./zIndexSlice-D5LeFsJF.js";import{C as d}from"./ComposedChart-Bx2_Wy5f.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-kNf7g3W1.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-B9G3_Kxy.js";import"./index-DbrznSTp.js";import"./index-CqG97JZW.js";import"./get-CrMrHDfL.js";import"./resolveDefaultProps-BvLTVmPU.js";import"./isWellBehavedNumber-CxSUDioC.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-TrezbvJj.js";import"./index-CGSMpc0u.js";import"./index-Bdv48GrD.js";import"./renderedTicksSlice-JT8za5Hk.js";import"./axisSelectors-BLK3CBL0.js";import"./d3-scale-BkYTXwQ3.js";import"./string-B6fdYHAA.js";import"./CartesianChart-wc_TuFln.js";import"./chartDataContext-CBgaHz3-.js";import"./CategoricalChart-g-2efyUa.js";import"./Layer-o5jG4U6-.js";import"./AnimatedItems-ByNYS0z8.js";import"./Label-TO2FniFg.js";import"./Text-A8PySNC6.js";import"./DOMUtils-Dx1NP75k.js";import"./ZIndexLayer-BYFtOnRb.js";import"./useAnimationId-RV371va_.js";import"./ActivePoints-gSNPH_nK.js";import"./Dot-zxBqnqxW.js";import"./types-hvByNsoa.js";import"./RegisterGraphicalItemId-BSHaYjsq.js";import"./GraphicalItemClipPath-cu7yJN5z.js";import"./SetGraphicalItem-30kWDCTB.js";import"./getRadiusAndStrokeWidthFromDot-D4DkYcfN.js";import"./ActiveShapeUtils-CLaqj2t-.js";import"./Curve-BtPdoVvO.js";import"./step-BuJXjF2w.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-Ja1UlW4V.js";const it={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
