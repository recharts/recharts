import{e as t}from"./iframe-7yPApSvt.js";import{R as c}from"./arrayEqualityCheck-BRhf3SEW.js";import{C as d}from"./ComposedChart-CAq2_OWg.js";import{A as l}from"./Area-DzGvFhSp.js";import{R as h}from"./RechartsHookInspector-BsW7gU1Y.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BvQpsjiF.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BuUb30Xi.js";import"./hooks-CULXbe6b.js";import"./axisSelectors-C9Ec7cF5.js";import"./zIndexSlice-CEDRpfjq.js";import"./CartesianChart-CIeTwbWT.js";import"./chartDataContext-ZZL8Xm-d.js";import"./CategoricalChart-BOXfpwGx.js";import"./Curve-DU3LHYbT.js";import"./types-OVAUyZ3J.js";import"./Layer-uYiMe6t4.js";import"./ReactUtils-C9q2a11f.js";import"./Label-DRJZdylN.js";import"./Text-COZE0ykR.js";import"./DOMUtils-CSR616sr.js";import"./ZIndexLayer-Qq2hiEM9.js";import"./ActivePoints-CY8-2aZT.js";import"./Dot-CTXw21tK.js";import"./RegisterGraphicalItemId-gdU_VBCL.js";import"./GraphicalItemClipPath-cXovOiV2.js";import"./SetGraphicalItem-CGoReTbO.js";import"./useAnimationId-DZFmgCE1.js";import"./getRadiusAndStrokeWidthFromDot-C3lHqLdB.js";import"./graphicalItemSelectors-hiRSllRr.js";import"./index-CTyUbB7m.js";import"./ChartSizeDimensions-D-ngX-PE.js";import"./OffsetShower-BazP2SAL.js";import"./PlotAreaShower-BquTH6Fu.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
