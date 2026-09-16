import{R as e}from"./iframe-GoDWXF60.js";import{R as i}from"./zIndexSlice-rcyByprz.js";import{C as n}from"./ComposedChart-BNv_QKcO.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-ByDOxb50.js";import{X as s}from"./XAxis-Sd8wKWiC.js";import{Y as c}from"./YAxis-oTWrO0dZ.js";import{L as d}from"./Line-Cqf_UWfB.js";import{R as g}from"./ReferenceLine-CDs0xdHg.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BC2iKf2c.js";import"./index-BMGI6I6X.js";import"./index-B1wbuLB1.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DtF3WVtu.js";import"./isWellBehavedNumber-DVk2TMuq.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C5ODBaUh.js";import"./axisSelectors-BMoJ3285.js";import"./d3-scale-Dm23_hA9.js";import"./index-B5osc4Bz.js";import"./index-4L7QbpcF.js";import"./renderedTicksSlice-Cio8NKuI.js";import"./index-b9Wor0gC.js";import"./CartesianChart-Ev1lyziP.js";import"./chartDataContext-B5KQQNXg.js";import"./CategoricalChart-Cojbw-YR.js";import"./CartesianAxis-B6o5gRjs.js";import"./Layer-BmsCQfeY.js";import"./Text-DHajDoQn.js";import"./DOMUtils-BcP1iiu3.js";import"./useId-CHExwNNq.js";import"./useBackwardsCompatibleTheme-C39YasS8.js";import"./Label-TKBbCyEO.js";import"./ZIndexLayer-B3yNW9nz.js";import"./types-y5j7YtAw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-CRH1Pdo7.js";import"./step-5I62O3qM.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-C_43VQlt.js";import"./useAnimationId-Bb0rmRoM.js";import"./ActivePoints-BWgMdJzf.js";import"./Dot-CVU-ffNv.js";import"./RegisterGraphicalItemId-6e9wRMFk.js";import"./ErrorBarContext-RjE2YZS3.js";import"./GraphicalItemClipPath-pySZvy8y.js";import"./SetGraphicalItem-BKw5VKzR.js";import"./getRadiusAndStrokeWidthFromDot-DhWLpkDS.js";import"./ActiveShapeUtils-BMxJ69jq.js";import"./useGraphicalItemIdentity-2iH_0CiR.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
