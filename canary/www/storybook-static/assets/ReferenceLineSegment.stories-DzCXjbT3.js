import{R as e}from"./iframe-_TSN2GeP.js";import{R as i}from"./zIndexSlice-D96uBoAp.js";import{C as n}from"./ComposedChart-z5izNflA.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-BshllkSB.js";import{X as s}from"./XAxis-BsztGX7X.js";import{Y as c}from"./YAxis-CFqjD2S5.js";import{L as d}from"./Line-idHL6Voh.js";import{R as g}from"./ReferenceLine-DbkgDBoL.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Cil6wORT.js";import"./index-CCkkuyTr.js";import"./index-CSNAsU0S.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-D9QDYjax.js";import"./isWellBehavedNumber-BNbTdqm3.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BXs5OB5c.js";import"./axisSelectors-Dd3nK3xc.js";import"./d3-scale-BkrsrexO.js";import"./index-DMuyjDG0.js";import"./index-lnFbewhe.js";import"./renderedTicksSlice-9FoMOBwW.js";import"./index-BghYN9OX.js";import"./CartesianChart-CBmykTvx.js";import"./chartDataContext-Beyv08KU.js";import"./CategoricalChart-DrCkbeNv.js";import"./CartesianAxis-DiCtkIDj.js";import"./Layer-9vgq1u7o.js";import"./Text-E_mkl092.js";import"./DOMUtils-FVlzESpl.js";import"./useId-BhIopQFv.js";import"./useBackwardsCompatibleTheme-B-7Qbbn2.js";import"./Label-mOwsaJBj.js";import"./ZIndexLayer-CuHtjJTp.js";import"./types-DD8CfvEw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-BfZHkOXV.js";import"./step-B86fSev8.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DzytQgaE.js";import"./useAnimationId-JMLdgXcg.js";import"./ActivePoints-CoOgGNlR.js";import"./Dot-DYuabF4m.js";import"./RegisterGraphicalItemId-DtZ0Q-pq.js";import"./ErrorBarContext-DL7P0RQ2.js";import"./GraphicalItemClipPath-CV0_mPKt.js";import"./SetGraphicalItem-BDNu96CY.js";import"./getRadiusAndStrokeWidthFromDot-CAf45XRU.js";import"./ActiveShapeUtils-B-Is-yHc.js";import"./useGraphicalItemIdentity-D0CKpQKL.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
