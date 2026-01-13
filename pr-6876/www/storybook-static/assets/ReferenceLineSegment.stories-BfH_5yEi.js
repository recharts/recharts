import{e}from"./iframe-CUnLgpW-.js";import{R as i}from"./arrayEqualityCheck-CGwnIdvG.js";import{C as a}from"./ComposedChart-dHSji5Me.js";import{C as p}from"./CartesianGrid-4Fpib6wg.js";import{X as n}from"./XAxis-Ca50gTOu.js";import{Y as s}from"./YAxis-BiZg32ce.js";import{L as c}from"./Line-C6zgdqmO.js";import{R as d}from"./ReferenceLine-0m-Y_JeP.js";import{R as g}from"./RechartsHookInspector-Bx_AeU2-.js";import{p as f}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-3A21IoT3.js";import"./PolarUtils-B2H8NKZh.js";import"./RechartsWrapper-DlEqFuyr.js";import"./hooks-BodQywHm.js";import"./axisSelectors-CesYX3jk.js";import"./zIndexSlice-COAwGY7D.js";import"./CartesianChart-BId6Bjz9.js";import"./chartDataContext-C42Wd2jm.js";import"./CategoricalChart-BBiN7XHJ.js";import"./CartesianAxis-tcRV1YVy.js";import"./Layer-DqDgkHbR.js";import"./Text-Bzx_mpBH.js";import"./DOMUtils-rOWW9V75.js";import"./Label-BFTmbefL.js";import"./ZIndexLayer-CIJpz3dT.js";import"./types-Cya9OZ_P.js";import"./ReactUtils-ubByZwRx.js";import"./ActivePoints-pdYEbr7r.js";import"./Dot-b-hZt1Z5.js";import"./RegisterGraphicalItemId-BTAKxoZt.js";import"./ErrorBarContext-cEGm4-dJ.js";import"./GraphicalItemClipPath-DI1arc73.js";import"./SetGraphicalItem-BRf4oXtZ.js";import"./useAnimationId-DVbvIVcC.js";import"./getRadiusAndStrokeWidthFromDot-CLXj6G0s.js";import"./ActiveShapeUtils-CaB32_zp.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D-fUf-OO.js";import"./Trapezoid-D3rvFnZU.js";import"./Sector-CCBcQdor.js";import"./Symbols-B7Txi7cb.js";import"./Curve-BFHPlIj0.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-F2EJmSFt.js";import"./ChartSizeDimensions-BZ4xctFr.js";import"./OffsetShower-DfQZxxZ8.js";import"./PlotAreaShower-ajA77Kx1.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
