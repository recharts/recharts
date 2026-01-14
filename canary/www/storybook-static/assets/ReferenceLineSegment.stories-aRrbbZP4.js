import{e}from"./iframe-BjYhBrjl.js";import{R as i}from"./arrayEqualityCheck-CNWOZzwZ.js";import{C as a}from"./ComposedChart-jXkond5b.js";import{C as p}from"./CartesianGrid-CYgd0LlL.js";import{X as n}from"./XAxis-CWT2ipPv.js";import{Y as s}from"./YAxis-BPJqNES7.js";import{L as c}from"./Line-B0hU4ZgF.js";import{R as d}from"./ReferenceLine-7GvxsdJL.js";import{R as g}from"./RechartsHookInspector-BYUxShfd.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CW-CYJ5T.js";import"./PolarUtils-DQj3EbdT.js";import"./RechartsWrapper-kzv9It-X.js";import"./hooks-Ddl0ZTMw.js";import"./axisSelectors-DEfYHCC1.js";import"./zIndexSlice-CZl4BXnF.js";import"./CartesianChart-DCPzGlsn.js";import"./chartDataContext-BU8YO9rr.js";import"./CategoricalChart-DF3wtmgo.js";import"./CartesianAxis-Bk_9WRuu.js";import"./Layer-DXlUs9xn.js";import"./Text-BkZHxLFB.js";import"./DOMUtils-BymtfGut.js";import"./Label-DVod4zfM.js";import"./ZIndexLayer-DHhRDpk5.js";import"./types-Cdxv11pV.js";import"./ReactUtils-BfHCN5KQ.js";import"./ActivePoints-B3Cg6Vyy.js";import"./Dot-CTyFlHPc.js";import"./RegisterGraphicalItemId-CbyAeKpp.js";import"./ErrorBarContext-Bfs-DHyT.js";import"./GraphicalItemClipPath-DwCyfGQq.js";import"./SetGraphicalItem-D87xV8bI.js";import"./useAnimationId-Da3IHhB2.js";import"./getRadiusAndStrokeWidthFromDot-CjQtZ2j8.js";import"./ActiveShapeUtils-C0Pv8fnx.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-G9VjTpux.js";import"./Trapezoid-dLSghC9y.js";import"./Sector-DDjBm9K3.js";import"./Symbols-Df7Es6QZ.js";import"./Curve-Dsad01Eu.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CwPjVI_1.js";import"./ChartSizeDimensions-D7d_cei-.js";import"./OffsetShower-DpV5TBrr.js";import"./PlotAreaShower-D3NMg3HB.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
