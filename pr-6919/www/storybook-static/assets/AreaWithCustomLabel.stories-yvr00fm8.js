import{e as t}from"./iframe-DTIyp44P.js";import{R as c}from"./arrayEqualityCheck-CROVUPPr.js";import{C as d}from"./ComposedChart-CuQFnUrF.js";import{A as l}from"./Area-4-w3Z2WM.js";import{R as h}from"./RechartsHookInspector-D8bdCWM1.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CEVdASN5.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-CMatZq67.js";import"./hooks-BoTdYeVb.js";import"./axisSelectors-DKeWHk_r.js";import"./zIndexSlice-CpP_hw3f.js";import"./CartesianChart-BYE7R-XT.js";import"./chartDataContext-DEKYo5U6.js";import"./CategoricalChart-DBE0EroA.js";import"./Curve-QqkAraw2.js";import"./types-CLTao0pZ.js";import"./Layer-CNvBRmF0.js";import"./ReactUtils-BtxPFKgx.js";import"./Label-CM6isse0.js";import"./Text-oi_VPtbj.js";import"./DOMUtils-51XpcVVM.js";import"./ZIndexLayer-J9Ech39_.js";import"./ActivePoints-BGCbkuuz.js";import"./Dot-CleSK0nt.js";import"./RegisterGraphicalItemId-Bq2lDHMm.js";import"./GraphicalItemClipPath-fQ9wLHT4.js";import"./SetGraphicalItem-BpKNPEn8.js";import"./useAnimationId-cUd_sss9.js";import"./getRadiusAndStrokeWidthFromDot-avL-XlUZ.js";import"./graphicalItemSelectors-BP3mVBb4.js";import"./index-DH6qoWff.js";import"./ChartSizeDimensions-AlgeFMWv.js";import"./OffsetShower-Ytqxw96A.js";import"./PlotAreaShower-IGOsRXvZ.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
