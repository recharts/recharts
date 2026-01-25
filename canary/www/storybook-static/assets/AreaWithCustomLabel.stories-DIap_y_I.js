import{e as t}from"./iframe-zYnk8EOr.js";import{R as c}from"./arrayEqualityCheck-R2aAAI7x.js";import{C as d}from"./ComposedChart-D5xvMhhv.js";import{A as l}from"./Area-7riOxwU6.js";import{R as h}from"./RechartsHookInspector-BM6dBg77.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CV8ibCPI.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-CuXPMym5.js";import"./hooks-B3MKPDpU.js";import"./axisSelectors-DsIocnZB.js";import"./zIndexSlice-BvNEMV0a.js";import"./CartesianChart-Bb7O5ezJ.js";import"./chartDataContext-93hSB1i9.js";import"./CategoricalChart-B_Ua5Q7Q.js";import"./Curve-BERjiOgY.js";import"./types-BQ3BmiiK.js";import"./Layer-B9ovT-3z.js";import"./ReactUtils-TEkJxkkD.js";import"./Label-GsPpBxAc.js";import"./Text-BKKp-XNT.js";import"./DOMUtils-BOegbNur.js";import"./ZIndexLayer-DbRKS04n.js";import"./ActivePoints-CohCjn8B.js";import"./Dot-D2_ksVUP.js";import"./RegisterGraphicalItemId-Xtx5eZl0.js";import"./GraphicalItemClipPath-BwpenKow.js";import"./SetGraphicalItem-CghMnI1R.js";import"./useAnimationId-C9zF9Z14.js";import"./getRadiusAndStrokeWidthFromDot-DGiV6eq7.js";import"./graphicalItemSelectors-BLhvCA_u.js";import"./index-C4mhfMdJ.js";import"./ChartSizeDimensions-DqnYIWpL.js";import"./OffsetShower-BnqP058z.js";import"./PlotAreaShower-Bzo9Sf9-.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
