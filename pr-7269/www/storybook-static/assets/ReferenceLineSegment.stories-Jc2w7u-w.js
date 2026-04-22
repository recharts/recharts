import{e}from"./iframe-p2IvJPp5.js";import{R as i}from"./arrayEqualityCheck-MFpiNrgh.js";import{C as p}from"./ComposedChart-Cl8F1Prg.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-BNtK6pD-.js";import{X as s}from"./XAxis-TolWHMJv.js";import{Y as c}from"./YAxis-3lSAnX_i.js";import{L as d}from"./Line-BhX3KrEI.js";import{R as g}from"./ReferenceLine-oschpej4.js";import{R as f}from"./RechartsHookInspector-BTfDdL-Q.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-D-WOYVwL.js";import"./immer-C-3OxAJ7.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CC3JfRCb.js";import"./index-Bbr8AUP0.js";import"./hooks-BwAS4l5Q.js";import"./axisSelectors-BYVqkL8o.js";import"./d3-scale-_MVxtyqx.js";import"./zIndexSlice-DkiB7jtC.js";import"./renderedTicksSlice-BZEkjAjn.js";import"./CartesianChart-sJv9-h8P.js";import"./chartDataContext-RNMGpAdm.js";import"./CategoricalChart-CdP1Gioy.js";import"./CartesianAxis-C8slwFAS.js";import"./Layer-CAMhjis1.js";import"./Text-DybomHzv.js";import"./DOMUtils-JIJzz5BZ.js";import"./Label-dvxvBKxQ.js";import"./ZIndexLayer-DEFjE1si.js";import"./types-BUdqLlBz.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-DS7t9UEd.js";import"./ActivePoints-BszxelsK.js";import"./Dot-B9yHy92F.js";import"./RegisterGraphicalItemId-BMsKHjZL.js";import"./ErrorBarContext-RDHgQQ1P.js";import"./GraphicalItemClipPath-Du63Zh2t.js";import"./SetGraphicalItem-BFQTuzAF.js";import"./useAnimationId-DfX16akC.js";import"./getRadiusAndStrokeWidthFromDot-BV_w38gC.js";import"./ActiveShapeUtils-DiQy87fd.js";import"./isPlainObject-vfUJw-kg.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle--WL1ouFK.js";import"./Trapezoid-CfMC4Ru_.js";import"./Sector-DpIUnASU.js";import"./Symbols-st46PVLX.js";import"./symbol-D4aZHrvc.js";import"./step-BLz-mTOp.js";import"./Curve-ymYrUrgJ.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-M5GHmuSt.js";import"./ChartSizeDimensions-DmpIaGou.js";import"./OffsetShower-BlCTa7sz.js";import"./PlotAreaShower-BfA3uM21.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(f,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
