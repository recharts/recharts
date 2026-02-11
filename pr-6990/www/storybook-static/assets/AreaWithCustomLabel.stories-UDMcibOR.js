import{e as t}from"./iframe-uc6dFw_p.js";import{R as c}from"./arrayEqualityCheck-CQn2kQOi.js";import{C as d}from"./ComposedChart-CRYzJVTL.js";import{A as l}from"./Area-DoHgtYxo.js";import{R as h}from"./RechartsHookInspector-IvFhBGHX.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-kGpremEA.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DhOLU858.js";import"./hooks-vCWItnff.js";import"./axisSelectors-B8_chuAi.js";import"./zIndexSlice-WGd4Bakr.js";import"./renderedTicksSlice-nuZito-G.js";import"./CartesianChart-CgnwnU-y.js";import"./chartDataContext-Dmpd0AQd.js";import"./CategoricalChart-BjqK4Uyg.js";import"./Curve-IfIaqkcg.js";import"./types-BngWNVP1.js";import"./Layer-DswXiCbz.js";import"./ReactUtils-Bs-3TSfa.js";import"./Label-D0b7Dnqv.js";import"./Text-Bqz-nWjx.js";import"./DOMUtils-DBQIyNfT.js";import"./ZIndexLayer-CxICY6ph.js";import"./ActivePoints-D6pcWJRZ.js";import"./Dot-CbTtT0Am.js";import"./RegisterGraphicalItemId-Dzwld0hr.js";import"./GraphicalItemClipPath-DhRCGnFu.js";import"./SetGraphicalItem-DzzG5GId.js";import"./useAnimationId-BjF_cXy3.js";import"./getRadiusAndStrokeWidthFromDot-DXA4nmLv.js";import"./graphicalItemSelectors-Cr3y-GFZ.js";import"./index-C4cmB5lh.js";import"./ChartSizeDimensions-DgaeT0Q8.js";import"./OffsetShower-CN5uyxGG.js";import"./PlotAreaShower-rJfWFAXI.js";const tt={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={coordinateWithValueData}>
          <Area dataKey="y" isAnimationActive={false} label={renderLabel} />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(n=(m=e.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const et=["CustomizedLabel"];export{e as CustomizedLabel,et as __namedExportsOrder,tt as default};
