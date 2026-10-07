import{R as r}from"./iframe-Cs_QEvnb.js";import{R as c}from"./zIndexSlice-DkQ_r41R.js";import{C as d}from"./ComposedChart-B4x9ib8K.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BP_0An5y.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Dy_oOifq.js";import"./index-CAK1Ad6q.js";import"./index-MOJSfEXi.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DexuDbrM.js";import"./isWellBehavedNumber-Cid5nUs7.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-LSBx4CxW.js";import"./axisSelectors-BjaL6nRE.js";import"./d3-scale-CEFQXImZ.js";import"./index-bdmoNa-p.js";import"./index-CyoiD9ix.js";import"./renderedTicksSlice-BwrC6eZ3.js";import"./index-CKqZwqIV.js";import"./CartesianChart-Der_Lez1.js";import"./chartDataContext-CDCJ_kQh.js";import"./CategoricalChart-CewNnnVL.js";import"./Layer-D-shTj0T.js";import"./AnimatedItems-CbRljsJB.js";import"./Label-AhMBQLf8.js";import"./Text-xCnIxjvW.js";import"./DOMUtils-BYSGKLNe.js";import"./useId-B0dpXwOa.js";import"./useBackwardsCompatibleTheme-CJoqqjxP.js";import"./ZIndexLayer-BGjzOXsU.js";import"./useAnimationId-CXhRBgnj.js";import"./ActivePoints-BbHlS5_x.js";import"./Dot-BlS3hK8R.js";import"./types-C9b0uGu7.js";import"./RegisterGraphicalItemId-rAn7D8nX.js";import"./GraphicalItemClipPath-DfPatAeC.js";import"./SetGraphicalItem-BtIj06CJ.js";import"./getRadiusAndStrokeWidthFromDot-CPpHwE7T.js";import"./ActiveShapeUtils-BhwN6W_6.js";import"./Curve-CeUIPmBM.js";import"./step-B6gEEVRS.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-DK8Vxub1.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={coordinateWithValueData}>
          <Area dataKey="y" isAnimationActive={false} label={renderLabel} />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};export{t as CustomizedLabel,pt as __namedExportsOrder,at as default};
