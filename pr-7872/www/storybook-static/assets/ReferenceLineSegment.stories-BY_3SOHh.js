import{R as e}from"./iframe-Hl-NyIui.js";import{R as i}from"./zIndexSlice-CfmJ5m3S.js";import{C as n}from"./ComposedChart-BDadpkQJ.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-BKXW8HHN.js";import{X as s}from"./XAxis-dvgP8Xa0.js";import{Y as c}from"./YAxis-aV4oz1qa.js";import{L as d}from"./Line-Do1DfpvA.js";import{R as g}from"./ReferenceLine-BYjAwudT.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BbfdAojm.js";import"./index--xPFvF8G.js";import"./index-BDqTEc2Q.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Cef9-W_0.js";import"./isWellBehavedNumber-DkDVf3J3.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-6h9C2k7P.js";import"./axisSelectors-BUNPrG5h.js";import"./d3-scale-jS5aGAiZ.js";import"./index-DBpjU2SQ.js";import"./index-BofEEBUS.js";import"./renderedTicksSlice-CNE8P8TP.js";import"./index-D2iNSRAe.js";import"./CartesianChart-Ci5OoGHz.js";import"./chartDataContext-C-VJeLBh.js";import"./CategoricalChart-CArj-fEw.js";import"./CartesianAxis-B_3pRXW9.js";import"./Layer-CFBs8Wel.js";import"./Text-BrVNMlzX.js";import"./DOMUtils-CG6HmAln.js";import"./useId-DW-27Lrg.js";import"./useBackwardsCompatibleTheme-gSrU4sF5.js";import"./Label-B3PtgVX6.js";import"./ZIndexLayer-C3i-HdBs.js";import"./types-B1K9SbcX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-DylS8_W7.js";import"./step-DpF6rbyV.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-ChX6uVrd.js";import"./useAnimationId-DLNOJTSV.js";import"./ActivePoints-CVfZawzl.js";import"./Dot-DSN5jlp-.js";import"./RegisterGraphicalItemId-D1BMc2l2.js";import"./ErrorBarContext-D2c9lRCZ.js";import"./GraphicalItemClipPath-CzquVpfg.js";import"./SetGraphicalItem-BgE77ea4.js";import"./getRadiusAndStrokeWidthFromDot-Bo-OkCM4.js";import"./ActiveShapeUtils-D9ea8jTE.js";import"./useGraphicalItemIdentity-uh3z32K3.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
