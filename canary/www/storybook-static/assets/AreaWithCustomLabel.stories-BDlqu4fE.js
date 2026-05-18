import{e as t}from"./iframe-CNlB-yu6.js";import{g as c}from"./arrayEqualityCheck-lQwJ1fam.js";import{C as d}from"./ComposedChart-CFG01hB_.js";import{a as l}from"./Coordinate-CcdTesrj.js";import{A as h}from"./Area-DIcR9ZVL.js";import{R as u}from"./RechartsHookInspector-D5_K6jhD.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-uksPlQVK.js";import"./immer-awn-juYO.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BAvxe-5M.js";import"./index-FVVlmF5D.js";import"./hooks-CzETKye0.js";import"./axisSelectors-Sb3f1ocW.js";import"./d3-scale-DgLwc5xh.js";import"./zIndexSlice-BueUxKyz.js";import"./renderedTicksSlice-BhtQt-EH.js";import"./CartesianChart-BAbFLAD3.js";import"./chartDataContext-B8Bgp5-9.js";import"./CategoricalChart-CCKvkIcs.js";import"./Curve-tmuRXssi.js";import"./types-CPecuUPI.js";import"./step-D1tlFFQW.js";import"./Layer-DZ6C1Fsa.js";import"./ReactUtils-CZXZiRZU.js";import"./Label-Bi7SkSuM.js";import"./Text-BkgbSJBB.js";import"./DOMUtils--5Ctvvni.js";import"./ZIndexLayer-DBrFOYBh.js";import"./ActivePoints-BJcxAugH.js";import"./Dot-Be-ydJG6.js";import"./RegisterGraphicalItemId-BYNQWvmg.js";import"./GraphicalItemClipPath-D754deXs.js";import"./SetGraphicalItem-DVSS-M3K.js";import"./useAnimationId-PuhsBKnu.js";import"./getRadiusAndStrokeWidthFromDot-YVqudBJv.js";import"./graphicalItemSelectors-C5S0MQyW.js";import"./index-DkFAXYsf.js";import"./ChartSizeDimensions-CofMKbAb.js";import"./OffsetShower-C20eLi2f.js";import"./PlotAreaShower-peVTKEtW.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const mt=["CustomizedLabel"];export{e as CustomizedLabel,mt as __namedExportsOrder,at as default};
