import{R as e}from"./iframe-a8fM-7Cj.js";import{R as i}from"./zIndexSlice-B7KswQd6.js";import{C as n}from"./ComposedChart-BjiltZm-.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-D1-FT5PQ.js";import{X as s}from"./XAxis-CiRF9J92.js";import{Y as c}from"./YAxis-DeFLWHEC.js";import{L as d}from"./Line-CfiMME7R.js";import{R as g}from"./ReferenceLine-Cgpe2R_o.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CaMuYXI0.js";import"./index-BUD2jY61.js";import"./index-PFQMrolk.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DlXKv9jT.js";import"./isWellBehavedNumber-B_g3PQrc.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DeMmS_JM.js";import"./axisSelectors-DVs_A9Pl.js";import"./d3-scale-wNdoB6Dl.js";import"./index-Ke9S5-gf.js";import"./index-DRs5RvY7.js";import"./renderedTicksSlice-cjaWCzPx.js";import"./index-ZucSeVLn.js";import"./CartesianChart-DyOnhzMI.js";import"./chartDataContext-CMDG0z7K.js";import"./CategoricalChart-DQpuQH-u.js";import"./CartesianAxis-CtttCErg.js";import"./Layer-XxWBFlRD.js";import"./Text-Bo9ttyFU.js";import"./DOMUtils-BvC4n3H8.js";import"./useId-B5k2uM1L.js";import"./useBackwardsCompatibleTheme-CU11_u_K.js";import"./Label-KdQX6hx3.js";import"./ZIndexLayer-CUUoNHQJ.js";import"./types-DyUzdvoN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-BopOTfmu.js";import"./step-BGrDxD_7.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CVA7Axrg.js";import"./useAnimationId-DPUxtvyW.js";import"./ActivePoints-B8Jb8oVa.js";import"./Dot-DMPbfCPa.js";import"./RegisterGraphicalItemId-DUAbfK1e.js";import"./ErrorBarContext-DMuZxb5G.js";import"./GraphicalItemClipPath-D12XFDsM.js";import"./SetGraphicalItem-DMaklldD.js";import"./getRadiusAndStrokeWidthFromDot-C7Tnz6V8.js";import"./ActiveShapeUtils-0G9qNMVr.js";import"./useGraphicalItemIdentity-BpSFuYBx.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};export{t as Segment,fe as __namedExportsOrder,ge as default};
