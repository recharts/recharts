import{e as t}from"./iframe-DCw0tqQR.js";import{R as c}from"./arrayEqualityCheck-C2tBZ1Qy.js";import{C as d}from"./ComposedChart-wlPyi7zj.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-mvOBOMas.js";import{R as u}from"./RechartsHookInspector-Da0J_Xb_.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BCiQMHzG.js";import"./immer-DgwGzr0K.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DKHRd-Jp.js";import"./index-kR5_0WmK.js";import"./hooks-BPO7V1JU.js";import"./axisSelectors-CtQi-3sb.js";import"./d3-scale-BoxOwXVD.js";import"./zIndexSlice-pEXw6d_M.js";import"./renderedTicksSlice-Bz3CfhIT.js";import"./CartesianChart-ARcHu8Al.js";import"./chartDataContext-DTKyXvOp.js";import"./CategoricalChart-2d0K-n2g.js";import"./Curve-BWU1MAzM.js";import"./types-DB1MifHz.js";import"./step-C_4-RC3B.js";import"./Layer-DecK4sAB.js";import"./ReactUtils-ByaRZgWA.js";import"./Label-CVZgdgXC.js";import"./Text-DQrSc9C-.js";import"./DOMUtils-xep50AIj.js";import"./ZIndexLayer-BYzXZQRZ.js";import"./ActivePoints-Du2deo7S.js";import"./Dot-BE79MMoA.js";import"./RegisterGraphicalItemId-DNtaubKm.js";import"./GraphicalItemClipPath-DLhSizGK.js";import"./SetGraphicalItem-D17tmuod.js";import"./useAnimationId-S3q8t8Nn.js";import"./getRadiusAndStrokeWidthFromDot-BifHNKhN.js";import"./graphicalItemSelectors-Cv1vjDoD.js";import"./index-CbS5rSne.js";import"./ChartSizeDimensions-DnWIR9Zc.js";import"./OffsetShower-DCtIXei-.js";import"./PlotAreaShower-AaZ9KRHa.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
