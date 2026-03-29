import{e as t}from"./iframe-C5xSgLrQ.js";import{R as c}from"./arrayEqualityCheck-y9OahTCZ.js";import{C as d}from"./ComposedChart-Cii0yw7e.js";import{A as l}from"./Area-DN9F6PdT.js";import{R as h}from"./RechartsHookInspector-DGw_Tn__.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CvWnTU23.js";import"./immer-CibMA2Vd.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C6VkPGGy.js";import"./index-7mth2ygc.js";import"./hooks-D_Ct_jBZ.js";import"./axisSelectors-Cjz2FycN.js";import"./d3-scale-DSnNq-Zb.js";import"./zIndexSlice-Bh8d7RDS.js";import"./renderedTicksSlice-3asYpfwT.js";import"./CartesianChart-DEUFIUWW.js";import"./chartDataContext-DLPHSsFH.js";import"./CategoricalChart-CdAWxs2w.js";import"./Curve-BgNWnWhG.js";import"./types-BYICSsoS.js";import"./step-D0TR_J7h.js";import"./Layer-BwFEHJgH.js";import"./ReactUtils-BVTYGt8W.js";import"./Label-BiYutikV.js";import"./Text-D6Wg1Fki.js";import"./DOMUtils-DtO1NYEm.js";import"./ZIndexLayer-BcEHBZGv.js";import"./ActivePoints-jvxv4kw8.js";import"./Dot-CuQtPzJT.js";import"./RegisterGraphicalItemId-B7TKQ3nD.js";import"./GraphicalItemClipPath-2_yqp8aO.js";import"./SetGraphicalItem-DGqH91p1.js";import"./useAnimationId-CQohD0O1.js";import"./getRadiusAndStrokeWidthFromDot-BzTohH68.js";import"./graphicalItemSelectors-CTP79arQ.js";import"./index-DNx2k_-S.js";import"./ChartSizeDimensions-ChWtlIEh.js";import"./OffsetShower-ChplnW4p.js";import"./PlotAreaShower-UojNVDVn.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
