import{R as e}from"./iframe-DeUe7xmC.js";import{R as i}from"./zIndexSlice-B-kuFUwH.js";import{C as n}from"./ComposedChart-XVsRLyio.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-CGQ_T7Vg.js";import{X as s}from"./XAxis-DZewVXuj.js";import{Y as c}from"./YAxis-EaFvavHr.js";import{L as d}from"./Line-CpopKWma.js";import{R as g}from"./ReferenceLine-BT-l4zTY.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D8_Vf5-y.js";import"./index-B3VftlGk.js";import"./index-CS0BzYwB.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-VBNHpirQ.js";import"./isWellBehavedNumber-XmFYrAHS.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-ClGwO2Ez.js";import"./axisSelectors-L5D3YGAp.js";import"./d3-scale-CKlOT7Hq.js";import"./index-D9wuu4lj.js";import"./index-CLX85w7H.js";import"./renderedTicksSlice-zQGjoh1b.js";import"./index-Cegj0e_Y.js";import"./CartesianChart-BRUE9SRS.js";import"./chartDataContext-CBR6ctH_.js";import"./CategoricalChart-DXh-O_P4.js";import"./CartesianAxis-DhJE-g8f.js";import"./Layer-CuQjvvoN.js";import"./Text-A2KhxUAH.js";import"./DOMUtils-BjCFSCOp.js";import"./useId-lxxddI0G.js";import"./useBackwardsCompatibleTheme-JgYEE_gV.js";import"./Label-CJwVVqdY.js";import"./ZIndexLayer-qWMWnECq.js";import"./types-BQuMJRU5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-DmgBVGdH.js";import"./step-CZi2V8Uw.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BsztCZc7.js";import"./useAnimationId-sq-3c3no.js";import"./ActivePoints-BeTkB1B9.js";import"./Dot-89j0vp4m.js";import"./RegisterGraphicalItemId-CVA94A2X.js";import"./ErrorBarContext-CCYjOK6U.js";import"./GraphicalItemClipPath-CO2IN5Qd.js";import"./SetGraphicalItem-DeV-JbkH.js";import"./getRadiusAndStrokeWidthFromDot-CID7eD-5.js";import"./ActiveShapeUtils-Cd6LbszL.js";import"./useGraphicalItemIdentity-DKt9Ij8h.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
