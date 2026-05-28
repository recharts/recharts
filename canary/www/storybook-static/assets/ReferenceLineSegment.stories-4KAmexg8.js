import{e}from"./iframe-UdgfSgbV.js";import{g as i}from"./arrayEqualityCheck-CicOt-ds.js";import{C as a}from"./ComposedChart-BcvZKN5E.js";import{p}from"./Page-DPte-9pC.js";import{C as n}from"./CartesianGrid-B6fmOyZU.js";import{X as s}from"./XAxis-B_T7-hQi.js";import{Y as c}from"./YAxis-CrK0nuKU.js";import{L as d}from"./Line-E0LiBgep.js";import{R as g}from"./ReferenceLine-BajF2j6p.js";import{R as f}from"./RechartsHookInspector-CthRFnLf.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DUahjl-e.js";import"./immer-D2PrSKKY.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-niwZzApw.js";import"./index-DugrSXtg.js";import"./hooks-YBktsx8t.js";import"./axisSelectors-DMRIE0Wb.js";import"./d3-scale-UW9tFBgt.js";import"./zIndexSlice-BZq2EGul.js";import"./renderedTicksSlice-l1jYlYN2.js";import"./CartesianChart-Cvpty9Rq.js";import"./chartDataContext-B4DzVMPi.js";import"./CategoricalChart-BUvemvV9.js";import"./CartesianAxis-DTJQvBIX.js";import"./Layer-DfoJX-WM.js";import"./Text-O_rmI639.js";import"./DOMUtils-CEz4_y1m.js";import"./Label-GqUuXqgi.js";import"./ZIndexLayer--K-LA7QR.js";import"./types-BRerldyT.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-Wo73DpX8.js";import"./step-CLnk6C4J.js";import"./path-DyVhHtw_.js";import"./ReactUtils-CpmrlivC.js";import"./ActivePoints-Cj3Tq79L.js";import"./Dot-CQmWQFNO.js";import"./RegisterGraphicalItemId-BLtUrA1U.js";import"./ErrorBarContext-BYjQvvS7.js";import"./GraphicalItemClipPath-qHH5OIPj.js";import"./SetGraphicalItem-sqFy1wuC.js";import"./useAnimationId-_H_C4I0e.js";import"./getRadiusAndStrokeWidthFromDot-Db_XWe9X.js";import"./ActiveShapeUtils-fzwtdy4J.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-D9bwHzxQ.js";import"./ChartSizeDimensions-ql6F2UUA.js";import"./OffsetShower-DEkhdigp.js";import"./PlotAreaShower-Coz6Wn-z.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(f,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
