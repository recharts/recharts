import{R as e}from"./iframe-Bz2BdfN4.js";import{R as i}from"./zIndexSlice-CrpvQ3cZ.js";import{C as n}from"./ComposedChart-BId0bh4a.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-D_WKqQan.js";import{X as s}from"./XAxis-Dd1a0uMa.js";import{Y as c}from"./YAxis-BsNZ_B30.js";import{L as d}from"./Line-05lQBnag.js";import{R as g}from"./ReferenceLine-Cx4VlfHl.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-B-XPotXa.js";import"./index-m3Fpm_2g.js";import"./index-C_HDr07T.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CwyxmUze.js";import"./isWellBehavedNumber-CN1l9n-g.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BKy4IHB9.js";import"./axisSelectors-DHqPZzoA.js";import"./d3-scale-BYzlom2n.js";import"./index-Coj5AO7r.js";import"./index-D7YhX5lQ.js";import"./renderedTicksSlice-BaDfPCVK.js";import"./index-CC0XKx94.js";import"./CartesianChart-D9Oal9EV.js";import"./chartDataContext-BjNcuyRP.js";import"./CategoricalChart-Bq1JSSY0.js";import"./CartesianAxis-CSM2PXhl.js";import"./Layer-DzdETfRU.js";import"./Text-BBc8PFQR.js";import"./DOMUtils-DYVcve-D.js";import"./useId-BTmP1k4h.js";import"./useBackwardsCompatibleTheme-CuJrnw16.js";import"./Label-CorAy009.js";import"./ZIndexLayer-CfRVDFXb.js";import"./types-DhKwB64F.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-Di-YqH3x.js";import"./step-BuRQ76GT.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CrHQSA2B.js";import"./useAnimationId-DBdf0eRq.js";import"./ActivePoints-CCokz9Hm.js";import"./Dot-l8R5dmYj.js";import"./RegisterGraphicalItemId-T7-fSXxk.js";import"./ErrorBarContext-CeKdQ828.js";import"./GraphicalItemClipPath-DlHTJze-.js";import"./SetGraphicalItem-BSvf_Zq8.js";import"./getRadiusAndStrokeWidthFromDot-DcpCddvL.js";import"./ActiveShapeUtils-Ds6IyY6j.js";import"./useGraphicalItemIdentity-Ccoked2c.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
