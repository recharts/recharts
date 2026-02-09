import{e as t}from"./iframe-CtEwCT9X.js";import{R as c}from"./arrayEqualityCheck-H3JWu4Kp.js";import{C as d}from"./ComposedChart-CbuGECyR.js";import{A as l}from"./Area-BQhbcDDK.js";import{R as h}from"./RechartsHookInspector-DzvPF_wD.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-D4rIxQ8x.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-AnHxT7w4.js";import"./hooks-rcQ-gxvj.js";import"./axisSelectors-CLqmQnll.js";import"./zIndexSlice-C0NscEQ4.js";import"./CartesianChart-DROVOQUl.js";import"./chartDataContext-3NcgbJTI.js";import"./CategoricalChart-DA7sCUkZ.js";import"./Curve-CYu7zDaL.js";import"./types-BlQIDijQ.js";import"./Layer-BNdxATQx.js";import"./ReactUtils-BjGJq1or.js";import"./Label-4VfWqw9i.js";import"./Text-BjHYQlz2.js";import"./DOMUtils-B7ui-v2S.js";import"./ZIndexLayer-BGiHPSQp.js";import"./ActivePoints-CRykM8N_.js";import"./Dot-B6v6wM9O.js";import"./RegisterGraphicalItemId-g2iXfztY.js";import"./GraphicalItemClipPath-C8XfWWgk.js";import"./SetGraphicalItem-bKBrJsc3.js";import"./useAnimationId-DKUOkxb7.js";import"./getRadiusAndStrokeWidthFromDot-BLthc_nE.js";import"./graphicalItemSelectors-D3ATsXBN.js";import"./index-wj7KHo_g.js";import"./ChartSizeDimensions-yLUqjZ4u.js";import"./OffsetShower-2b6-cTCa.js";import"./PlotAreaShower-CQqB1CA9.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
