import{R as e}from"./iframe-Z4zOoLz7.js";import{R as i}from"./zIndexSlice-07-9uDTC.js";import{C as n}from"./ComposedChart-Ci-r_zyP.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-CoLshd-b.js";import{X as s}from"./XAxis-vC51wnfX.js";import{Y as c}from"./YAxis-DcaBIqq9.js";import{L as d}from"./Line-D2Sd7QBy.js";import{R as g}from"./ReferenceLine-CqHnXiVL.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-9WzIUwC-.js";import"./index-DyaBjL-T.js";import"./index-xqTHFQSV.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DOQLwwUl.js";import"./isWellBehavedNumber-Ds32fXh1.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B6jGY5P2.js";import"./axisSelectors-D5RAwviA.js";import"./d3-scale-By1WrWdl.js";import"./index-DNpJ-y1s.js";import"./index-DU7fosbq.js";import"./renderedTicksSlice-XpkPmQP6.js";import"./index-YATDX38S.js";import"./CartesianChart-r7CDK1kg.js";import"./chartDataContext-B0vVK4FP.js";import"./CategoricalChart-D5-WelqS.js";import"./CartesianAxis-D0qgtLuE.js";import"./Layer-DROZCM5S.js";import"./Text-D1NXAhAr.js";import"./pageBackground-cgE2GIfC.js";import"./useId-d3zx3clY.js";import"./useBackwardsCompatibleTheme-DoS7t3mQ.js";import"./Label-CznRo0qq.js";import"./ZIndexLayer-CzgpVDV6.js";import"./types-BIzeqQN_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-B2kFPXHR.js";import"./step-Bz8uLEg2.js";import"./path-DyVhHtw_.js";import"./activeStyles-Clj_q_02.js";import"./useAnimationId-CclGmA5U.js";import"./dataEntryStyles-jPYjF1-F.js";import"./ActivePoints-Cf8I1OR_.js";import"./Dot-BYY6Lyl-.js";import"./ErrorBarContext-DyrSqIsA.js";import"./GraphicalItemClipPath-Dh8t0UHl.js";import"./SetGraphicalItem-D_Y4scs-.js";import"./getRadiusAndStrokeWidthFromDot-oWL_gOl_.js";import"./ActiveShapeUtils-DptdzhMF.js";import"./useGraphicalItemIdentity-Bz_dea2_.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
