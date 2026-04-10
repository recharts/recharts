import{e}from"./iframe-eZ9JX-07.js";import{R as i}from"./arrayEqualityCheck-Cj2Is5Mm.js";import{C as p}from"./ComposedChart-BHW-hoiz.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-DTESZ9zI.js";import{X as s}from"./XAxis-mp_eEoS6.js";import{Y as c}from"./YAxis-uS2rijQh.js";import{L as d}from"./Line-d0u3ebXE.js";import{R as g}from"./ReferenceLine-DCabqeR9.js";import{R as f}from"./RechartsHookInspector-BeG4gaTk.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CliKq00o.js";import"./immer-Dr1bFi29.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BUoHei1k.js";import"./index-CNMtCejR.js";import"./hooks-DpV54l8p.js";import"./axisSelectors-AGz0-S2g.js";import"./d3-scale-BKcomRju.js";import"./zIndexSlice-BusLYGIS.js";import"./renderedTicksSlice-CqnrbROG.js";import"./CartesianChart-BK9rkCv_.js";import"./chartDataContext-CvCw_h_X.js";import"./CategoricalChart-YrnJ6OFy.js";import"./CartesianAxis-DlLnH-y1.js";import"./Layer-B6nAt8jX.js";import"./Text-CRkMMQ59.js";import"./DOMUtils-D0fPz5DE.js";import"./Label-mBy1-y0R.js";import"./ZIndexLayer-DbJ2I37n.js";import"./types-CmytQtTQ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-DWnSk2Q-.js";import"./ActivePoints-RdCeodjM.js";import"./Dot-BOZkbRZB.js";import"./RegisterGraphicalItemId-BAw53RVk.js";import"./ErrorBarContext-Bpf6-6dn.js";import"./GraphicalItemClipPath-vABmGIfK.js";import"./SetGraphicalItem-By9FetZz.js";import"./useAnimationId-CSNZHJ-3.js";import"./getRadiusAndStrokeWidthFromDot-DN82KodC.js";import"./ActiveShapeUtils-BMNGvKsh.js";import"./isPlainObject-DLc4kyQA.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-_vtEiEA1.js";import"./Trapezoid-BBUAydEo.js";import"./Sector-Dv17oJda.js";import"./Symbols-CvJdDdpZ.js";import"./symbol-CdZf4kom.js";import"./step-CSEuamYk.js";import"./Curve-rjvi0w8u.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-0o7fnxnF.js";import"./ChartSizeDimensions-jqrtviWa.js";import"./OffsetShower-CGC6-4Ry.js";import"./PlotAreaShower-BaV83-c3.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(f,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
