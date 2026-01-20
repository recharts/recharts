import{e as t}from"./iframe-CZOKXyYX.js";import{R as c}from"./arrayEqualityCheck-ZCpvDDUM.js";import{C as d}from"./ComposedChart-Bhz_MiFn.js";import{A as l}from"./Area-CO5WJG3L.js";import{R as h}from"./RechartsHookInspector-B7tAaeEL.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BdIYVt_j.js";import"./PolarUtils-BdcP-kXS.js";import"./RechartsWrapper-BzS4jEvb.js";import"./hooks-Cs7Pyl2H.js";import"./axisSelectors-Cy9T5-14.js";import"./zIndexSlice-DkluUigR.js";import"./CartesianChart-CEGcX5i7.js";import"./chartDataContext-CGCgcL6T.js";import"./CategoricalChart-CueK-ohc.js";import"./Curve-Cn7M-l6J.js";import"./types-mDJez9wS.js";import"./Layer-ipPtt6GK.js";import"./ReactUtils-CKx1UPE3.js";import"./Label-wuyiSzGf.js";import"./Text-DBc2QLFr.js";import"./DOMUtils-BK6pK0qd.js";import"./ZIndexLayer-DuvPoAvp.js";import"./ActivePoints-DA6Kv2zk.js";import"./Dot-CpDEwrks.js";import"./RegisterGraphicalItemId-CT7gxHP9.js";import"./GraphicalItemClipPath-DG_FLSO_.js";import"./SetGraphicalItem-A4Aj3AlV.js";import"./useAnimationId-BrU_ieRo.js";import"./getRadiusAndStrokeWidthFromDot-CQrJkzNb.js";import"./graphicalItemSelectors-Bg9oV1_t.js";import"./index-Bq0EYqss.js";import"./ChartSizeDimensions-DcBo26mg.js";import"./OffsetShower-D0BahXva.js";import"./PlotAreaShower-D0tOLrH8.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
