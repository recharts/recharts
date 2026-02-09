import{e as t}from"./iframe-Ddtg6pJD.js";import{R as c}from"./arrayEqualityCheck-CG9XTfyR.js";import{C as d}from"./ComposedChart-BM48fs1-.js";import{A as l}from"./Area-BOMd3b4k.js";import{R as h}from"./RechartsHookInspector-CCfITcFS.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BClOIvLb.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-_aZbub_8.js";import"./hooks-DMJ48TSK.js";import"./axisSelectors-yUV1wcMm.js";import"./zIndexSlice-Ccg2qy_d.js";import"./CartesianChart-BJB0TrzH.js";import"./chartDataContext-rtX1npPB.js";import"./CategoricalChart-DEs3YJXi.js";import"./Curve-C-ksUiT7.js";import"./types-ClXtAg6j.js";import"./Layer-DFCJKk43.js";import"./ReactUtils-Cw8MXjHP.js";import"./Label-DVFU8Pe0.js";import"./Text-Dr3Q50hE.js";import"./DOMUtils-ClD35WUk.js";import"./ZIndexLayer-BmeIxVaP.js";import"./ActivePoints-Ds6wCLcR.js";import"./Dot-CLk6qXvT.js";import"./RegisterGraphicalItemId-QH6oSkLG.js";import"./GraphicalItemClipPath-3Plpc9D_.js";import"./SetGraphicalItem-CMBgXv4K.js";import"./useAnimationId-CURyQWbL.js";import"./getRadiusAndStrokeWidthFromDot-dgSAwQ2V.js";import"./graphicalItemSelectors-DLxd3U73.js";import"./index-DxoUglm9.js";import"./ChartSizeDimensions-CSjlsLF1.js";import"./OffsetShower-B4ALlsP9.js";import"./PlotAreaShower-B9MEGcsm.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(n=(m=e.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const tt=["CustomizedLabel"];export{e as CustomizedLabel,tt as __namedExportsOrder,Z as default};
