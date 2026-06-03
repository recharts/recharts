import{c as e}from"./iframe-DWpXT6OO.js";import{g as c}from"./zIndexSlice-BI8aBdB2.js";import{C as d}from"./ComposedChart-CMOLlSCj.js";import{a as l}from"./Coordinate-CcdTesrj.js";import{A as h}from"./Area-Neea-IRF.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-CtD26uCH.js";import"./index-C9JIL6RB.js";import"./index-CJpuQcHC.js";import"./get-CAMMj0jB.js";import"./resolveDefaultProps-CU4FGCoK.js";import"./isWellBehavedNumber-CW4w7lw5.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C7TEH3BS.js";import"./index-4-WnE7FO.js";import"./index-CnH4suYJ.js";import"./renderedTicksSlice-DwGC_mjp.js";import"./axisSelectors-D3pmM5ea.js";import"./d3-scale-CNTc-b9c.js";import"./CartesianChart-BL_alDPA.js";import"./chartDataContext-CQfTawPZ.js";import"./CategoricalChart-CQFeC6FI.js";import"./Curve-wqoEsp4f.js";import"./types-B1PNqcSi.js";import"./step-C03CUoTX.js";import"./path-DyVhHtw_.js";import"./Layer-DdIFnola.js";import"./ReactUtils-CGwSHaxd.js";import"./Label-BLTDXbDF.js";import"./Text-y6qBsXbA.js";import"./DOMUtils-x2D0RHyJ.js";import"./ZIndexLayer-Cqbl6fly.js";import"./ActivePoints-D8LyVTVu.js";import"./Dot-B_vusOKB.js";import"./RegisterGraphicalItemId-CI_L8duS.js";import"./GraphicalItemClipPath-Xef2qiO-.js";import"./SetGraphicalItem-Brjb-bLT.js";import"./useAnimationId-CbTt72_H.js";import"./getRadiusAndStrokeWidthFromDot-N8lTwYxy.js";import"./graphicalItemSelectors-BqceuPFh.js";const rt={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const ot=["CustomizedLabel"];export{t as CustomizedLabel,ot as __namedExportsOrder,rt as default};
