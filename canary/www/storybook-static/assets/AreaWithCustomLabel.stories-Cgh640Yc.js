import{e as t}from"./iframe-ZneQOoj5.js";import{R as c}from"./arrayEqualityCheck-BNajb9_C.js";import{C as d}from"./ComposedChart-BAOyItJh.js";import{A as l}from"./Area-tqFJQ0Zb.js";import{R as h}from"./RechartsHookInspector-o16may3G.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Ca5bm1S2.js";import"./PolarUtils-kb3Ynomj.js";import"./RechartsWrapper-Cti5RU63.js";import"./hooks-f5tcO63K.js";import"./axisSelectors-Bn4oM41D.js";import"./zIndexSlice-D_yw_EwD.js";import"./CartesianChart-CYjuCTh1.js";import"./chartDataContext-B0ByfYA8.js";import"./CategoricalChart-Dsfzrp1E.js";import"./Curve-D5OcxVms.js";import"./types-D_7qF1fe.js";import"./Layer-CxIF_InE.js";import"./ReactUtils-Bw9y5ciT.js";import"./Label-s2gAZUId.js";import"./Text-BSmPk6IU.js";import"./DOMUtils-CY6Iwyv6.js";import"./ZIndexLayer-DbAXPfU_.js";import"./ActivePoints-DBydqYpl.js";import"./Dot-EaxYnBY2.js";import"./RegisterGraphicalItemId-GDWraSC2.js";import"./GraphicalItemClipPath-D0RDiP4j.js";import"./SetGraphicalItem-xtvvD71Q.js";import"./useAnimationId-qX2h62Hn.js";import"./getRadiusAndStrokeWidthFromDot-CBuap8aJ.js";import"./graphicalItemSelectors-Cd6CAvac.js";import"./index-BhzpkJlR.js";import"./ChartSizeDimensions-DcPBcGoe.js";import"./OffsetShower-D0qLOk-K.js";import"./PlotAreaShower-kc5kHvIr.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
