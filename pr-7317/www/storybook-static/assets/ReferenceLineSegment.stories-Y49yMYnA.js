import{e}from"./iframe-Cl35quqC.js";import{R as i}from"./arrayEqualityCheck-D9UIghxi.js";import{C as p}from"./ComposedChart-uUijpKq4.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-BYNeB4aW.js";import{X as s}from"./XAxis-FVKRUr2k.js";import{Y as c}from"./YAxis-WP2I3lgo.js";import{L as d}from"./Line-B6cjKV0J.js";import{R as g}from"./ReferenceLine-C4wtjn59.js";import{R as f}from"./RechartsHookInspector-BZ6jgrdq.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BhrqjrLa.js";import"./immer-CY0Lk3WW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-jOGgq2Y2.js";import"./index-_ky2ePMv.js";import"./hooks-CNddY0Tb.js";import"./axisSelectors-DeCbtXoM.js";import"./d3-scale-BkxfZ9aI.js";import"./zIndexSlice-DkkJQXQO.js";import"./renderedTicksSlice-BLU8jnqb.js";import"./CartesianChart-CGp9HSBf.js";import"./chartDataContext-ZINcULtA.js";import"./CategoricalChart-0NzQu1bM.js";import"./CartesianAxis-Dg85fGZU.js";import"./Layer-CeD-uJbZ.js";import"./Text-DNnOYqaK.js";import"./DOMUtils-DIh1PeI4.js";import"./Label-DLz8rNT7.js";import"./ZIndexLayer-H1bn9xe9.js";import"./types-D677_BtS.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-DZzHwFX5.js";import"./ActivePoints-B4P09zpr.js";import"./Dot-BR2Bc69w.js";import"./RegisterGraphicalItemId-BLnqRJKY.js";import"./ErrorBarContext-BQ7AUjVv.js";import"./GraphicalItemClipPath-Dk-2dIcR.js";import"./SetGraphicalItem-CECI28wk.js";import"./useAnimationId-BL2H4qbR.js";import"./getRadiusAndStrokeWidthFromDot-BWrVeHgV.js";import"./ActiveShapeUtils-DPlGMvpt.js";import"./isPlainObject-DrB0XJwF.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BZCtg9qm.js";import"./Trapezoid-CB0ArsDb.js";import"./Sector-HEQQPb1w.js";import"./Symbols-oEtpWgQJ.js";import"./symbol-BZKabVvR.js";import"./step-BlMx9OF4.js";import"./Curve-hm8tQy1x.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BdngFJZK.js";import"./ChartSizeDimensions-Dc6hCc8f.js";import"./OffsetShower-DCGl5kEz.js";import"./PlotAreaShower-D3XS0cIi.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(f,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
