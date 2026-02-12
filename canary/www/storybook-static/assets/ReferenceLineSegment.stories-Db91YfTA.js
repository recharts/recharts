import{e}from"./iframe-3u-Q1UnB.js";import{R as i}from"./arrayEqualityCheck-4YdFFnIZ.js";import{C as a}from"./ComposedChart-B88mQwK1.js";import{C as p}from"./CartesianGrid-CXrPJC1I.js";import{X as n}from"./XAxis-Djkeo-gr.js";import{Y as s}from"./YAxis-Dj18iK3G.js";import{L as c}from"./Line-2FYNQdup.js";import{R as d}from"./ReferenceLine-DK98XvWj.js";import{R as g}from"./RechartsHookInspector-CGCoL2RB.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Cxetozbj.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DTxIwYKV.js";import"./hooks-CA6mXnfo.js";import"./axisSelectors-tXlpibGR.js";import"./zIndexSlice-DFZrsegf.js";import"./CartesianChart-CPrM6Y72.js";import"./chartDataContext-oduysAeX.js";import"./CategoricalChart-C1AjKJFD.js";import"./CartesianAxis-DNUlfq8v.js";import"./Layer-BUQITwlU.js";import"./Text-C0k6XBru.js";import"./DOMUtils-B1iHjA53.js";import"./Label-DEySkZO8.js";import"./ZIndexLayer-BBlPVpqD.js";import"./types-DeBO-UOQ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BnoVNewt.js";import"./ActivePoints-Cqa4c3Nf.js";import"./Dot-B1g7vVO3.js";import"./RegisterGraphicalItemId-C95CQYm2.js";import"./ErrorBarContext-CW31PIa7.js";import"./GraphicalItemClipPath-Cj9n1sb1.js";import"./SetGraphicalItem-BCGPdk9x.js";import"./useAnimationId-BDwu_fLm.js";import"./getRadiusAndStrokeWidthFromDot-Bk3bWelV.js";import"./ActiveShapeUtils-CBZ4ZZvz.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DqAeg9eu.js";import"./Trapezoid-Bk16eIfi.js";import"./Sector-Qrf6gufC.js";import"./Symbols-D9T0VuzY.js";import"./Curve-BQlmvtvx.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BW-nQ8nH.js";import"./ChartSizeDimensions-BtJ4zNfJ.js";import"./OffsetShower-CS2dm1Mz.js";import"./PlotAreaShower-DAGea8GQ.js";const se={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
