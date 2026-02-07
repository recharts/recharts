import{e}from"./iframe-BH4WSVJq.js";import{R as i}from"./arrayEqualityCheck-CP7zdH6j.js";import{C as a}from"./ComposedChart-DfoszhwC.js";import{C as p}from"./CartesianGrid-ChShBsrG.js";import{X as n}from"./XAxis-Co1hN3iA.js";import{Y as s}from"./YAxis-Dj6UBB19.js";import{L as c}from"./Line-B3K65Hzw.js";import{R as d}from"./ReferenceLine-DqTrFsRx.js";import{R as g}from"./RechartsHookInspector-C-rHiQ21.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-YH6ur84t.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-cR6befFD.js";import"./hooks-CsAFpvHN.js";import"./axisSelectors-DWE-oxLu.js";import"./zIndexSlice-DQh671qs.js";import"./CartesianChart-CnXNKoh0.js";import"./chartDataContext-px_EklfT.js";import"./CategoricalChart-BvpoJ5FY.js";import"./CartesianAxis-6RsVZvqn.js";import"./Layer-FSItnfZD.js";import"./Text-BUp1j61E.js";import"./DOMUtils-Cd95pt4E.js";import"./Label-BSQQrDO-.js";import"./ZIndexLayer-CiVdec-B.js";import"./types-BEfpPHVi.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-DW1hnj4j.js";import"./ActivePoints-DZW_-t1x.js";import"./Dot-KeJkGvxa.js";import"./RegisterGraphicalItemId-BYo0Vbbs.js";import"./ErrorBarContext-DRki-TWq.js";import"./GraphicalItemClipPath-DGOjr7en.js";import"./SetGraphicalItem-Blp2F8-c.js";import"./useAnimationId-BPcwtD5E.js";import"./getRadiusAndStrokeWidthFromDot-DJ87tJ-9.js";import"./ActiveShapeUtils-BnM7Jbce.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BrKooVgo.js";import"./Trapezoid-B_z9CYCL.js";import"./Sector-BpvDDX3s.js";import"./Symbols-BTckn8e4.js";import"./Curve-C54rJcUa.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-Cisc0CQR.js";import"./ChartSizeDimensions-CPQ4YyST.js";import"./OffsetShower-DYg0OjQP.js";import"./PlotAreaShower-C2wLpcp8.js";const se={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ce=["Segment"];export{t as Segment,ce as __namedExportsOrder,se as default};
