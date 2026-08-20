import{R as e}from"./iframe-BMoFzqLG.js";import{R as i}from"./zIndexSlice-D2eW6ynO.js";import{C as a}from"./ComposedChart--18maMFA.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-BD5heoZs.js";import{X as s}from"./XAxis-CPrZIqhG.js";import{Y as c}from"./YAxis-DTyCZ8Eb.js";import{L as d}from"./Line-DfDRU7Tf.js";import{R as g}from"./ReferenceLine-BKZWXLFo.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CMa4JKLf.js";import"./index-DNJh02LB.js";import"./index-CSdHnYZf.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-NXPPdTlK.js";import"./isWellBehavedNumber-Cv3QLhUl.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BMT8ka8g.js";import"./index-DW75A43Y.js";import"./index-CCv9Fz61.js";import"./axisSelectors-DYuvxT8H.js";import"./d3-scale-CdpdmGXg.js";import"./renderedTicksSlice-DvPuc11_.js";import"./CartesianChart-C7RJi03t.js";import"./chartDataContext-CDnovleA.js";import"./CategoricalChart-e4TDW-CP.js";import"./CartesianAxis-DOx4dBf7.js";import"./Layer-BF07rJeJ.js";import"./Text-CWW6I1yN.js";import"./DOMUtils-zP2FF411.js";import"./useId-Cuy8o_CS.js";import"./useBackwardsCompatibleTheme-CT0hL_b9.js";import"./Label-C2sliePj.js";import"./ZIndexLayer-Bb4jsnOQ.js";import"./types-DnNtWK32.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-Bj9SvhiQ.js";import"./step-CmTsx3cD.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DtpOcSHY.js";import"./useAnimationId-DECqttvr.js";import"./ActivePoints-CGL78uWV.js";import"./Dot-BKpqXb-J.js";import"./RegisterGraphicalItemId-BWT7SWLX.js";import"./ErrorBarContext-gECkpo90.js";import"./GraphicalItemClipPath-4HDTpBwl.js";import"./SetGraphicalItem-4-n_cNOG.js";import"./getRadiusAndStrokeWidthFromDot-Dr3SeLyV.js";import"./ActiveShapeUtils-Deesho2z.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ge=["Segment"];export{t as Segment,ge as __namedExportsOrder,de as default};
