import{e}from"./iframe-DHSCsAdF.js";import{R as i}from"./arrayEqualityCheck-DejELsrN.js";import{C as p}from"./ComposedChart-ClPTZor6.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-zapa5v6t.js";import{X as s}from"./XAxis-rIWvyQc_.js";import{Y as c}from"./YAxis-B3RnLl7T.js";import{L as d}from"./Line-xRKz7Lqu.js";import{R as g}from"./ReferenceLine-BlHCbbE_.js";import{R as f}from"./RechartsHookInspector-Bl_b1l7P.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DdBt44A0.js";import"./immer-B7vO4s3P.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DegZicoB.js";import"./index-CpBtaSsl.js";import"./hooks-Ed4LhnTQ.js";import"./axisSelectors-CI0vprku.js";import"./d3-scale-m9dtnhXI.js";import"./zIndexSlice-CsWdvizj.js";import"./renderedTicksSlice-BJJo2R47.js";import"./CartesianChart-OvkPOyqJ.js";import"./chartDataContext-CG3f3Y43.js";import"./CategoricalChart-DOIkqHpB.js";import"./CartesianAxis-BCj8T9-Z.js";import"./Layer-CgIzBpZ9.js";import"./Text-BU_Eo4vH.js";import"./DOMUtils-DnRUdIba.js";import"./Label-C3rJ2_4a.js";import"./ZIndexLayer-NxKSFRC9.js";import"./types-BJ3oAoHr.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CI0cWBwW.js";import"./ActivePoints-BU40hces.js";import"./Dot-BKOJ7ZOA.js";import"./RegisterGraphicalItemId-Co8itO9h.js";import"./ErrorBarContext-BnFLkwS3.js";import"./GraphicalItemClipPath-7TaZPKiL.js";import"./SetGraphicalItem-CGPj629n.js";import"./useAnimationId-DdH8uK_v.js";import"./getRadiusAndStrokeWidthFromDot-C6SN24Cr.js";import"./ActiveShapeUtils-D-9eavqk.js";import"./isPlainObject-DIsRAxNl.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D-nZJBYK.js";import"./Trapezoid-DaZMlX5v.js";import"./Sector-DwAaS_QE.js";import"./Symbols-ChUxQx2e.js";import"./symbol-Dw26CW2u.js";import"./step-BXBXLUST.js";import"./Curve-DdDf1hH6.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-C9zRLUqd.js";import"./ChartSizeDimensions-na2CXaMS.js";import"./OffsetShower-BYL_rrah.js";import"./PlotAreaShower-BF-kz2CC.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(f,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={500}>
        <ComposedChart data={pageData} margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" />
          <Line dataKey="uv" />
          <ReferenceLine segment={[{
          x: 'Page A',
          y: 0
        }, {
          x: 'Page E',
          y: 1500
        }]} />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ye=["Segment"];export{t as Segment,ye as __namedExportsOrder,Re as default};
