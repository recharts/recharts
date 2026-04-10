import{e as t}from"./iframe-JWSOvVZL.js";import{R as c}from"./arrayEqualityCheck-DJxJsIgg.js";import{C as d}from"./ComposedChart-C3wId2he.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CujUpp22.js";import{R as u}from"./RechartsHookInspector-DbINuC6c.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Db3kyesD.js";import"./immer-Cx8sbOuB.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-_ZAgcFWH.js";import"./index-qboEQSUS.js";import"./hooks-D_fkqjif.js";import"./axisSelectors-BfW2jaQP.js";import"./d3-scale-Cvg0WP4x.js";import"./zIndexSlice-xDRQRS04.js";import"./renderedTicksSlice-D4Sds7TF.js";import"./CartesianChart-6CEzPVWQ.js";import"./chartDataContext-CGNvCd4v.js";import"./CategoricalChart-XXxbMYfW.js";import"./Curve-BSIyWE0E.js";import"./types-B3dpB15X.js";import"./step-NHTakNU6.js";import"./Layer-CVGwLCGQ.js";import"./ReactUtils-qs-97Ac8.js";import"./Label-Cxg_vq25.js";import"./Text-C1wuLOW9.js";import"./DOMUtils-BGNYNETS.js";import"./ZIndexLayer-DKFbEZ_O.js";import"./ActivePoints-XzqbnO-t.js";import"./Dot-DDYCZ56V.js";import"./RegisterGraphicalItemId-7hQHg__D.js";import"./GraphicalItemClipPath-BzNC4mI6.js";import"./SetGraphicalItem-Do9Jrivq.js";import"./useAnimationId-BDQqVS92.js";import"./getRadiusAndStrokeWidthFromDot-CGUx355X.js";import"./graphicalItemSelectors-caUpih74.js";import"./index-B-NDJh2x.js";import"./ChartSizeDimensions-B0YZDNOc.js";import"./OffsetShower-Pl0lZwIc.js";import"./PlotAreaShower-CT6U6KfM.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
