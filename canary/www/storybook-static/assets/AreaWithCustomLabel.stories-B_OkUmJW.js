import{e as t}from"./iframe-DRAz-MOV.js";import{R as c}from"./arrayEqualityCheck-C8643F2b.js";import{C as d}from"./ComposedChart-O_-CVA72.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-gOeC7175.js";import{R as u}from"./RechartsHookInspector-ZnBZyL4x.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DMSAaaR1.js";import"./immer-7dbUwIWB.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bq0uftOK.js";import"./index-BwgIdcXX.js";import"./hooks-DKliz_JR.js";import"./axisSelectors-B3X53-PT.js";import"./d3-scale-CP3jXnNI.js";import"./zIndexSlice-QFEsuJ_i.js";import"./renderedTicksSlice-C3sDnISd.js";import"./CartesianChart-D16-_KrV.js";import"./chartDataContext-DfgXfLVB.js";import"./CategoricalChart-mIZr-3BC.js";import"./Curve-rCu2vvgU.js";import"./types-BHj1SP9z.js";import"./step-DsP_EtiA.js";import"./Layer-7ou2jnr2.js";import"./ReactUtils-C_AD8QSo.js";import"./Label-BA834Vai.js";import"./Text-BfMqXVQN.js";import"./DOMUtils-BDvhlQed.js";import"./ZIndexLayer-BQfiKj8k.js";import"./ActivePoints-6EKZqhHa.js";import"./Dot-DXpzcep7.js";import"./RegisterGraphicalItemId-DNpPqdGB.js";import"./GraphicalItemClipPath-DkmmuFjC.js";import"./SetGraphicalItem-BOrXETUL.js";import"./useAnimationId-CSxRZUsd.js";import"./getRadiusAndStrokeWidthFromDot-bTkwdsC0.js";import"./graphicalItemSelectors-D37AROR-.js";import"./index-CJqTRlWb.js";import"./ChartSizeDimensions-B-YSta_X.js";import"./OffsetShower-DVMilrOo.js";import"./PlotAreaShower-B89WvJSc.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
