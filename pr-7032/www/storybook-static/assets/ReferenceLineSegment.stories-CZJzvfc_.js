import{e}from"./iframe-Bu-inuC_.js";import{R as i}from"./arrayEqualityCheck-DU89AxsE.js";import{C as p}from"./ComposedChart-BDfQc7tS.js";import{C as a}from"./CartesianGrid-DprSPxu5.js";import{X as n}from"./XAxis-B7Sm-Q2v.js";import{Y as s}from"./YAxis-C2_h55z2.js";import{L as c}from"./Line-QmWmoYT_.js";import{R as d}from"./ReferenceLine-B-n3QByQ.js";import{R as g}from"./RechartsHookInspector-kfypTTkJ.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CsH4psWY.js";import"./immer-XJQsdFk2.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DprTEw8A.js";import"./index-DtrjCIe1.js";import"./hooks-B2OsnqL5.js";import"./axisSelectors-Cj-Rs3MP.js";import"./d3-scale-BAf69j3g.js";import"./zIndexSlice-jAGqg83w.js";import"./renderedTicksSlice-CV5QPe8g.js";import"./CartesianChart-D_KSdiR0.js";import"./chartDataContext-CNWF4aQ0.js";import"./CategoricalChart-CbSijQZS.js";import"./CartesianAxis-RY4R-JEB.js";import"./Layer-Dlph539k.js";import"./Text-C9R9pE-c.js";import"./DOMUtils-D9MAnWMp.js";import"./Label-Bztw_jsS.js";import"./ZIndexLayer-XPmioUZb.js";import"./types-kezhLfGE.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CbatvDS3.js";import"./ActivePoints-4FzqXwK2.js";import"./Dot-C-ngH4D5.js";import"./RegisterGraphicalItemId-D1pnqeqs.js";import"./ErrorBarContext-DApypuO7.js";import"./GraphicalItemClipPath-Tj00x8Wp.js";import"./SetGraphicalItem-Brp5xTx2.js";import"./useAnimationId-BQHAYEwx.js";import"./getRadiusAndStrokeWidthFromDot-ClhAYeel.js";import"./ActiveShapeUtils-BT0ZFYuE.js";import"./isPlainObject-Dg1QCtSt.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-ih3X5Nav.js";import"./Trapezoid-DN15z973.js";import"./Sector-K5K0caPh.js";import"./Symbols-CfIo9P3Y.js";import"./symbol-DCuuGdc1.js";import"./step-CG3E5dJ5.js";import"./Curve-SSe25XRS.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CiBd-8tu.js";import"./ChartSizeDimensions-BFqzoU52.js";import"./OffsetShower-D2S5vzbK.js";import"./PlotAreaShower-BXNxywRo.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(a,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
