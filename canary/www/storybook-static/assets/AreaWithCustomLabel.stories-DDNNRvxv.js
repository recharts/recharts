import{e as t}from"./iframe-BZbOzzTY.js";import{R as c}from"./arrayEqualityCheck-D0qDv0Fd.js";import{C as d}from"./ComposedChart-BgDb9u1m.js";import{A as l}from"./Area-DrubZgQ5.js";import{R as h}from"./RechartsHookInspector-135t8dQu.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Dw2Mrgq2.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-Bx7P3ldu.js";import"./hooks-CeNJ-Qya.js";import"./axisSelectors-Cv1qfvr6.js";import"./zIndexSlice-J5rUHDmR.js";import"./CartesianChart-Bmuz99Xe.js";import"./chartDataContext-D5Kp386R.js";import"./CategoricalChart-BBkfjreJ.js";import"./Curve-LGs6YPsX.js";import"./types-CCRlLAaX.js";import"./Layer-Ca1ZcU8K.js";import"./ReactUtils-BZBgIdmA.js";import"./Label-D9W5dwQ-.js";import"./Text-Dp7XyQOy.js";import"./DOMUtils-vtRXHL3R.js";import"./ZIndexLayer-CLlHxURh.js";import"./ActivePoints-BRi6GRMs.js";import"./Dot-DfVv_DrD.js";import"./RegisterGraphicalItemId-DiEkoTQv.js";import"./GraphicalItemClipPath-Cs5ZE868.js";import"./SetGraphicalItem-8hrJSJHb.js";import"./useAnimationId-CbTMmgPX.js";import"./getRadiusAndStrokeWidthFromDot-CRFNvcSQ.js";import"./graphicalItemSelectors-BXArVv3q.js";import"./index--k4eFqf6.js";import"./ChartSizeDimensions-OWBI4sZr.js";import"./OffsetShower-BDJynaSn.js";import"./PlotAreaShower-DgtK3Nlq.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
