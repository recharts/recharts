import{e as t}from"./iframe-BJmj21Iv.js";import{R as c}from"./arrayEqualityCheck-DUr5Baor.js";import{C as d}from"./ComposedChart-Qt-NTGDC.js";import{A as l}from"./Area-CYtsv73l.js";import{R as h}from"./RechartsHookInspector-niLfVp7l.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BRnWZzOd.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DbAa2EPs.js";import"./hooks-B5MTKyny.js";import"./axisSelectors-CjDiZ-xu.js";import"./zIndexSlice-COvs_Sat.js";import"./CartesianChart-DEbVCltq.js";import"./chartDataContext-Cx9KpUyq.js";import"./CategoricalChart-B8_cyiQX.js";import"./Curve-DSyQRjp9.js";import"./types-BB2yvksg.js";import"./Layer-CfTs1qEr.js";import"./ReactUtils-B_n9e2df.js";import"./Label-B5aPNwUF.js";import"./Text-DA6O7Yy4.js";import"./DOMUtils-CQprm85Q.js";import"./ZIndexLayer-h8hw7e3y.js";import"./ActivePoints-BJiO-RId.js";import"./Dot-C-sAwJUZ.js";import"./RegisterGraphicalItemId-DTHmNv35.js";import"./GraphicalItemClipPath-CzdqANMv.js";import"./SetGraphicalItem-DUq8N8zo.js";import"./useAnimationId-BtjxpnPj.js";import"./getRadiusAndStrokeWidthFromDot-D1oY8r7_.js";import"./graphicalItemSelectors-DawDrmP9.js";import"./index-Bcx4MYAQ.js";import"./ChartSizeDimensions-DzMxt8cg.js";import"./OffsetShower-Do6Xki0H.js";import"./PlotAreaShower-CQq3hYEg.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
