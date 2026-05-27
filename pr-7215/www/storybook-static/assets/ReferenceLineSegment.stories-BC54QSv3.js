import{e}from"./iframe-FqQriuOU.js";import{g as i}from"./arrayEqualityCheck-D81yCQ_E.js";import{C as a}from"./ComposedChart-C8Wy7GrP.js";import{p}from"./Page-DPte-9pC.js";import{C as n}from"./CartesianGrid-weOWy7UD.js";import{X as s}from"./XAxis-rE-0ziVR.js";import{Y as c}from"./YAxis-Bx3kycjW.js";import{L as d}from"./Line-4-mxtk0F.js";import{R as g}from"./ReferenceLine-Bpk-pL-u.js";import{R as f}from"./RechartsHookInspector-Bzl8PNqn.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CH-QvTob.js";import"./immer-majn-qZf.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CApzUvyj.js";import"./index-B7L9uR1Y.js";import"./hooks-B_UbI8Xu.js";import"./axisSelectors-_fK9ZDWF.js";import"./d3-scale-i74XhqWc.js";import"./string-yHBgcFlJ.js";import"./zIndexSlice-f7paLzdj.js";import"./renderedTicksSlice-C4IzMNte.js";import"./CartesianChart-DL9N19jV.js";import"./chartDataContext-8vaUd_eG.js";import"./CategoricalChart-D0upkKoq.js";import"./CartesianAxis-BeuIWSvD.js";import"./Layer-dRSSbr5y.js";import"./Text-DPCTz-gd.js";import"./DOMUtils-BuFom25w.js";import"./Label-CKdOaAhH.js";import"./ZIndexLayer-C869JS3k.js";import"./types-CfmOzYIG.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-bxiY4w-f.js";import"./step-DRejhJRi.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BOrN0e6v.js";import"./useAnimationId-CwJGQlGj.js";import"./ActivePoints-p2Wn9c62.js";import"./Dot-CoDBEdb8.js";import"./RegisterGraphicalItemId-W17uiJWi.js";import"./ErrorBarContext-BDkPCebh.js";import"./GraphicalItemClipPath-BYvnIWBH.js";import"./SetGraphicalItem-w0uUjr7L.js";import"./getRadiusAndStrokeWidthFromDot-Bl0IsbtV.js";import"./ActiveShapeUtils-DpMDeTgr.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-FNdgkUyx.js";import"./ChartSizeDimensions-BmkjlCCd.js";import"./OffsetShower-6wrSmmyT.js";import"./PlotAreaShower-MAtCIzZg.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(f,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const fe=["Segment"];export{t as Segment,fe as __namedExportsOrder,ge as default};
