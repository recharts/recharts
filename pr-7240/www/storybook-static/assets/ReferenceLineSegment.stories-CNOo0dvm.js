import{e}from"./iframe-BeDGORj6.js";import{R as i}from"./arrayEqualityCheck-JsAXyDLr.js";import{C as p}from"./ComposedChart-4gGlBLIt.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-Deq6GaMT.js";import{X as s}from"./XAxis-BWIHbalc.js";import{Y as c}from"./YAxis-DVelxUgb.js";import{L as d}from"./Line-CuUIamf-.js";import{R as g}from"./ReferenceLine-Bjf4pYSu.js";import{R as f}from"./RechartsHookInspector-CMV-TCMh.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-C99f34Mc.js";import"./immer-Cq48D3GD.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DzXrp2Yg.js";import"./index-Cjcxel70.js";import"./hooks-CZlzwV4c.js";import"./axisSelectors-BWLPVm14.js";import"./d3-scale-Dn9C_p1J.js";import"./zIndexSlice-f8r1nxA3.js";import"./renderedTicksSlice-sW53jx3E.js";import"./CartesianChart-B5AKLLNj.js";import"./chartDataContext-kI4vfNyg.js";import"./CategoricalChart-BaIwFCUZ.js";import"./CartesianAxis-Cg9ZZyb5.js";import"./Layer-Cb63g7eE.js";import"./Text-DVPNdnrr.js";import"./DOMUtils-BJyHcXDT.js";import"./Label-DIDBGhSu.js";import"./ZIndexLayer-CzXr4GKG.js";import"./types-C_8vdBSO.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-8jcv2sZp.js";import"./ActivePoints-BtnyqgRD.js";import"./Dot-C6wgbxew.js";import"./RegisterGraphicalItemId-Be6P2E9J.js";import"./ErrorBarContext-BP-aXdJD.js";import"./GraphicalItemClipPath-DuAL_izP.js";import"./SetGraphicalItem-CByUuzu8.js";import"./useAnimationId-Dpd_sVLz.js";import"./getRadiusAndStrokeWidthFromDot-C4aPZysO.js";import"./ActiveShapeUtils-CKh9-uWL.js";import"./isPlainObject-CPwWoDLp.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DmD5nffX.js";import"./Trapezoid-C6mcZG1p.js";import"./Sector-CvLn_4ix.js";import"./Symbols-BtXiAqa0.js";import"./symbol-Dz8LJwUL.js";import"./step-CdMW3WL_.js";import"./Curve-Cn7Yw6fj.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-qx6-V41S.js";import"./ChartSizeDimensions-W3vYP0Xa.js";import"./OffsetShower-SgjYM82s.js";import"./PlotAreaShower-k5ztxQce.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(f,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
