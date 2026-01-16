import{e as t}from"./iframe-DTjNyuRV.js";import{R as c}from"./arrayEqualityCheck-C4xGcSTy.js";import{C as d}from"./ComposedChart-D6xbDU0w.js";import{A as l}from"./Area-DJopZYTW.js";import{R as h}from"./RechartsHookInspector-euo4g-ug.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-SGcnM_aC.js";import"./PolarUtils-jGr_7wxa.js";import"./RechartsWrapper-Buv5ZAi-.js";import"./hooks-BKspSbbk.js";import"./axisSelectors-C5N0FKJg.js";import"./zIndexSlice-DRfn0LKt.js";import"./CartesianChart-oqf3iy5S.js";import"./chartDataContext-_UJlrEtw.js";import"./CategoricalChart-D9AJMhmv.js";import"./Curve-OPgUPtNu.js";import"./types-To9Ddb8E.js";import"./Layer-Bnob1t-w.js";import"./ReactUtils-338dS-Qh.js";import"./Label-BLKfXojP.js";import"./Text-Df79kjUu.js";import"./DOMUtils-Ckv5L2Ry.js";import"./ZIndexLayer-DQomkPs4.js";import"./ActivePoints-DGMmJbxW.js";import"./Dot-BEtD_ap4.js";import"./RegisterGraphicalItemId-DpE9EW2r.js";import"./GraphicalItemClipPath-C3b1vJcH.js";import"./SetGraphicalItem-B-b4IafD.js";import"./useAnimationId-DyTjjL6a.js";import"./getRadiusAndStrokeWidthFromDot-CBYLfGEK.js";import"./graphicalItemSelectors-DqkonIUB.js";import"./index-qnmfyn6T.js";import"./ChartSizeDimensions-C7n2xQzd.js";import"./OffsetShower-NiY8JQK2.js";import"./PlotAreaShower-B9h0VEbL.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
