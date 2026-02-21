import{e as t}from"./iframe-Bu-inuC_.js";import{R as c}from"./arrayEqualityCheck-DU89AxsE.js";import{C as d}from"./ComposedChart-BDfQc7tS.js";import{A as l}from"./Area-QfK-iZe2.js";import{R as h}from"./RechartsHookInspector-kfypTTkJ.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CsH4psWY.js";import"./immer-XJQsdFk2.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DprTEw8A.js";import"./index-DtrjCIe1.js";import"./hooks-B2OsnqL5.js";import"./axisSelectors-Cj-Rs3MP.js";import"./d3-scale-BAf69j3g.js";import"./zIndexSlice-jAGqg83w.js";import"./renderedTicksSlice-CV5QPe8g.js";import"./CartesianChart-D_KSdiR0.js";import"./chartDataContext-CNWF4aQ0.js";import"./CategoricalChart-CbSijQZS.js";import"./Curve-SSe25XRS.js";import"./types-kezhLfGE.js";import"./step-CG3E5dJ5.js";import"./Layer-Dlph539k.js";import"./ReactUtils-CbatvDS3.js";import"./Label-Bztw_jsS.js";import"./Text-C9R9pE-c.js";import"./DOMUtils-D9MAnWMp.js";import"./ZIndexLayer-XPmioUZb.js";import"./ActivePoints-4FzqXwK2.js";import"./Dot-C-ngH4D5.js";import"./RegisterGraphicalItemId-D1pnqeqs.js";import"./GraphicalItemClipPath-Tj00x8Wp.js";import"./SetGraphicalItem-Brp5xTx2.js";import"./useAnimationId-BQHAYEwx.js";import"./getRadiusAndStrokeWidthFromDot-ClhAYeel.js";import"./graphicalItemSelectors-GBkV0GvX.js";import"./index-CiBd-8tu.js";import"./ChartSizeDimensions-BFqzoU52.js";import"./OffsetShower-D2S5vzbK.js";import"./PlotAreaShower-BXNxywRo.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
