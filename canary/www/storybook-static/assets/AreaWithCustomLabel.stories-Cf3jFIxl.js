import{R as e}from"./iframe-DNYOsiJO.js";import{R as c}from"./zIndexSlice-BYsyPOtl.js";import{C as d}from"./ComposedChart-DhpLFFry.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-ChAIQ71a.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DhLz3mrQ.js";import"./index-CpvOcg5A.js";import"./index-B-scg1za.js";import"./get-DvCBXc2H.js";import"./resolveDefaultProps-BPA_kNXr.js";import"./isWellBehavedNumber-BdiH4iwW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D4XAWs0V.js";import"./index-BghJ0rJu.js";import"./index-DN5tCymc.js";import"./renderedTicksSlice-B3G44Ect.js";import"./axisSelectors-BU0FKw5j.js";import"./d3-scale-Cm3hMOK_.js";import"./CartesianChart-CJ0aqbjB.js";import"./chartDataContext-ALZLxkDM.js";import"./CategoricalChart-Dgn8q3Cx.js";import"./Layer-BZEyjxjb.js";import"./AnimatedItems-CfNYG8xc.js";import"./Label-DBVLreiQ.js";import"./Text-COQ57Hvt.js";import"./DOMUtils-DMxex0QR.js";import"./ZIndexLayer-B6YZY0_d.js";import"./useAnimationId-DniHu15m.js";import"./ActivePoints-B0cX4VGQ.js";import"./Dot-DPYiTUdf.js";import"./types-CfyGDdUv.js";import"./RegisterGraphicalItemId-PRQMqBjc.js";import"./GraphicalItemClipPath-C8T0qCgO.js";import"./SetGraphicalItem-DQ-8Rtbz.js";import"./getRadiusAndStrokeWidthFromDot-D7oiSawd.js";import"./ActiveShapeUtils-Dv5sca8G.js";import"./Curve-C7WD3Hug.js";import"./step-BkXisL-y.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-BWLE6_sA.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
