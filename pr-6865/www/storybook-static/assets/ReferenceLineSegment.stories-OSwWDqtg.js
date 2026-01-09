import{e}from"./iframe-DCqI0XZE.js";import{R as i}from"./arrayEqualityCheck-HYppUqbL.js";import{C as a}from"./ComposedChart-BQWkPeDZ.js";import{C as p}from"./CartesianGrid-DdImbUj4.js";import{X as n}from"./XAxis-v6adQsXq.js";import{Y as s}from"./YAxis-B8A2N8DW.js";import{L as c}from"./Line-BIfiJ6dH.js";import{R as d}from"./ReferenceLine-BxFkQCn5.js";import{R as g}from"./RechartsHookInspector-fFyRgJJZ.js";import{p as f}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DeYA34uT.js";import"./PolarUtils-CVPwvSfi.js";import"./RechartsWrapper-CqZMRsqw.js";import"./hooks-D1LIxGLf.js";import"./axisSelectors-fdj65aw8.js";import"./zIndexSlice-DaD55gZL.js";import"./CartesianChart-DjU-EYVa.js";import"./chartDataContext-T8I8ugzh.js";import"./CategoricalChart-3Iob9H8U.js";import"./CartesianAxis-fqcCbsgg.js";import"./Layer-BuGX0g6x.js";import"./Text-CDyXfqgn.js";import"./DOMUtils-B_HAxUS-.js";import"./Label-4-POpI1D.js";import"./ZIndexLayer-C1uRVibY.js";import"./types-DHuf88Dj.js";import"./ReactUtils-B_rBW96b.js";import"./ActivePoints-DE-hR4pC.js";import"./Dot-Bi8GIran.js";import"./RegisterGraphicalItemId-D-lwaZ_v.js";import"./ErrorBarContext-Rv6Vd2e5.js";import"./GraphicalItemClipPath-BG8ZwsZs.js";import"./SetGraphicalItem-CD6yUE_R.js";import"./useAnimationId-PgeDRpeU.js";import"./getRadiusAndStrokeWidthFromDot-BoS6fH9m.js";import"./ActiveShapeUtils-BTx5WARf.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CpPAOcrn.js";import"./Trapezoid-BbcOya6W.js";import"./Sector-Cy_aXDIz.js";import"./Symbols-Cxsfovx2.js";import"./Curve-Y6fdEOBg.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BSYEM6yU.js";import"./ChartSizeDimensions-lrWbrtxv.js";import"./OffsetShower-bO0_8mku.js";import"./PlotAreaShower-CRs_o2Tz.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const se=["Segment"];export{t as Segment,se as __namedExportsOrder,ne as default};
