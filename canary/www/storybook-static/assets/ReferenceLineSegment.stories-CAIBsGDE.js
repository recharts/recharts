import{e}from"./iframe-Cn9771Nb.js";import{g as i}from"./arrayEqualityCheck-D-ixwH56.js";import{C as a}from"./ComposedChart-GHVX126K.js";import{p}from"./Page-DPte-9pC.js";import{C as n}from"./CartesianGrid-GyJpwBAe.js";import{X as s}from"./XAxis-CdGr2Iem.js";import{Y as c}from"./YAxis-TQXh0mQm.js";import{L as d}from"./Line-BKe7e15P.js";import{R as g}from"./ReferenceLine-CKrAeZyA.js";import{R as f}from"./RechartsHookInspector-ByD7qz5q.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DDTNdovN.js";import"./immer-Dn_-MauB.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-1z_kIANU.js";import"./index-BoXkF8M8.js";import"./hooks-O4XLkxr8.js";import"./axisSelectors-BMVy_6Bx.js";import"./d3-scale-BZXwjMGy.js";import"./zIndexSlice-B5zV17Bd.js";import"./renderedTicksSlice-CwaBKoDv.js";import"./CartesianChart-B8UuiIR4.js";import"./chartDataContext-DlTJMN40.js";import"./CategoricalChart-Doln_IjV.js";import"./CartesianAxis-DUvQ6ZkT.js";import"./Layer-CoWJhcnT.js";import"./Text-Ds1KECTG.js";import"./DOMUtils-CumEt8nf.js";import"./Label-DQheKZVl.js";import"./ZIndexLayer-DUDNhmE-.js";import"./types-BeorWpRA.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-qT1eTXpe.js";import"./step-BLbmOldc.js";import"./path-DyVhHtw_.js";import"./ReactUtils-CChdz-3q.js";import"./ActivePoints-bvsEPa1q.js";import"./Dot-D-dqVUjX.js";import"./RegisterGraphicalItemId-BPnyUTiw.js";import"./ErrorBarContext-DTo-1FhF.js";import"./GraphicalItemClipPath-B_ckz-a6.js";import"./SetGraphicalItem-CgvN0HNW.js";import"./useAnimationId-5N3XsSyx.js";import"./getRadiusAndStrokeWidthFromDot-Cr9kNYBa.js";import"./ActiveShapeUtils-CchfY29Y.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CIRzOza-.js";import"./ChartSizeDimensions-BsavwcKk.js";import"./OffsetShower-mfqGnir7.js";import"./PlotAreaShower-DtKJCQsO.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(f,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ge=["Segment"];export{t as Segment,ge as __namedExportsOrder,de as default};
