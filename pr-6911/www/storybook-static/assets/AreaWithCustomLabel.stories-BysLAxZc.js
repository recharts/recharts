import{e as t}from"./iframe-B6AlQnM2.js";import{R as c}from"./arrayEqualityCheck-DOlZ0mCX.js";import{C as d}from"./ComposedChart-CFb7f_na.js";import{A as l}from"./Area-Bd6L8C1Q.js";import{R as h}from"./RechartsHookInspector-C4bhcvg_.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-osVefOLp.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-CexAAOIz.js";import"./hooks-CQRKljNW.js";import"./axisSelectors-CbxR9aKJ.js";import"./zIndexSlice-lMltdZop.js";import"./CartesianChart-lYw6K-4N.js";import"./chartDataContext-JLBHd2Mr.js";import"./CategoricalChart-Bzfkval9.js";import"./Curve-DTUwCS4t.js";import"./types-C25Y7m2H.js";import"./Layer-Cdn-3vsr.js";import"./ReactUtils-ODr0KtTw.js";import"./Label-CIaajA0c.js";import"./Text-BQHJk7TW.js";import"./DOMUtils-ookTrfW2.js";import"./ZIndexLayer-KOQQKvvO.js";import"./ActivePoints-CNKPkIr-.js";import"./Dot-DwI94pSl.js";import"./RegisterGraphicalItemId-BrQ42RrU.js";import"./GraphicalItemClipPath-CFBlDtHu.js";import"./SetGraphicalItem-BFhZLv7r.js";import"./useAnimationId-CsS9GYvF.js";import"./getRadiusAndStrokeWidthFromDot-L9FXfyyd.js";import"./graphicalItemSelectors-CtnSfe6Q.js";import"./index-CYGFbMYu.js";import"./ChartSizeDimensions-BY4lvFSe.js";import"./OffsetShower-IG_VUviu.js";import"./PlotAreaShower-DnDaw1Ql.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
