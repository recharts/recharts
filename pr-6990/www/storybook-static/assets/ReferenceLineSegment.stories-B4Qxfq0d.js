import{e}from"./iframe-DEzN-0IH.js";import{R as i}from"./arrayEqualityCheck-Dj5rgmpF.js";import{C as a}from"./ComposedChart-DnQI112R.js";import{C as p}from"./CartesianGrid-MkBEUlX4.js";import{X as n}from"./XAxis-C9IejdiW.js";import{Y as s}from"./YAxis-ywkX_5u_.js";import{L as c}from"./Line-CK5GftQF.js";import{R as d}from"./ReferenceLine-DcOffwfO.js";import{R as g}from"./RechartsHookInspector-f3uqQnpf.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps--GysF_k-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D226X-in.js";import"./hooks-DVXAe2RE.js";import"./axisSelectors-DVjOWlPF.js";import"./zIndexSlice-BLXDXR0o.js";import"./renderedTicksSlice-C4pdhuYh.js";import"./CartesianChart-CKWYeFyd.js";import"./chartDataContext-DDAsV3h8.js";import"./CategoricalChart-ChS4DbUW.js";import"./CartesianAxis-34WftamX.js";import"./Layer-DoKHSLik.js";import"./Text-BWRoC5xn.js";import"./DOMUtils-CUVpLAf7.js";import"./Label-CwNS2FmH.js";import"./ZIndexLayer-DsNBC3BS.js";import"./types-MnMW5XmF.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BQDy0BEl.js";import"./ActivePoints-DHUEXfUz.js";import"./Dot-Dv2iwbT4.js";import"./RegisterGraphicalItemId-BvrhgEWi.js";import"./ErrorBarContext-D5xdE6Qk.js";import"./GraphicalItemClipPath-BhXQU-ZR.js";import"./SetGraphicalItem-k6zlk5Ce.js";import"./useAnimationId-DpL3ZrLE.js";import"./getRadiusAndStrokeWidthFromDot-DCgdaaPW.js";import"./ActiveShapeUtils-DdpV-Pge.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C2soG4U2.js";import"./Trapezoid-DvZgohrQ.js";import"./Sector-Cn8fxEII.js";import"./Symbols-CNlz260r.js";import"./Curve-Een90XLK.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-UhpklWmI.js";import"./ChartSizeDimensions-BGz0NRwX.js";import"./OffsetShower-Hv6zXz6F.js";import"./PlotAreaShower-xiASrx7K.js";const ce={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const de=["Segment"];export{t as Segment,de as __namedExportsOrder,ce as default};
