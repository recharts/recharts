import{R as e}from"./iframe-CMIMGlWj.js";import{R as i}from"./zIndexSlice-wuzXiITR.js";import{C as n}from"./ComposedChart-m-Ee8JHE.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-3hhx0pRp.js";import{X as s}from"./XAxis-D-eD-ZKH.js";import{Y as c}from"./YAxis-QT5bDNHN.js";import{L as d}from"./Line-CNg6PROS.js";import{R as g}from"./ReferenceLine-EGjJ9yB6.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BCA5qR4E.js";import"./index-DwSr_A0C.js";import"./index-CWAjLZC8.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BjTUlmaN.js";import"./isWellBehavedNumber-BbJa2uqW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BgfG_ZAZ.js";import"./axisSelectors-Bmc6RJCp.js";import"./d3-scale-CuGTTQPB.js";import"./index-FLl3VRzC.js";import"./index-CywZrMsp.js";import"./renderedTicksSlice-C4raIVaG.js";import"./index-C3fJL_AW.js";import"./CartesianChart-DIp5NX_F.js";import"./chartDataContext-D68hLw7p.js";import"./CategoricalChart-DZk0PJqR.js";import"./CartesianAxis-Dlpx8iT-.js";import"./Layer-DEZqQRHO.js";import"./Text-BN1TaMnw.js";import"./pageBackground-DO_pzhaN.js";import"./useId-DTR3y050.js";import"./useBackwardsCompatibleTheme-MBdvqbhw.js";import"./Label-BNdyp9o_.js";import"./ZIndexLayer-D_EAZsge.js";import"./types-DSyx3F07.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-D4pLn_ye.js";import"./step-C3qFiRpn.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BjpwlZ4G.js";import"./useAnimationId-x76x2OiL.js";import"./ActivePoints-pcKLb4wT.js";import"./Dot-N3GD5m7g.js";import"./dataEntryStyles-TQ5R--o5.js";import"./ErrorBarContext-qJfLExSm.js";import"./GraphicalItemClipPath-BGm7g6KG.js";import"./SetGraphicalItem-DP6zOJ07.js";import"./getRadiusAndStrokeWidthFromDot-B-tnlovt.js";import"./ActiveShapeUtils-1w8yv5Vh.js";import"./useGraphicalItemIdentity-9tRqDWZI.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
