import{R as e}from"./iframe-B8S5mZni.js";import{R as i}from"./zIndexSlice-C7WPWBHj.js";import{C as n}from"./ComposedChart-BFmInjuY.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-tDRJN_IA.js";import{X as s}from"./XAxis-Del5mp5I.js";import{Y as c}from"./YAxis-CXfsjvSU.js";import{L as d}from"./Line-BI9PEbOh.js";import{R as g}from"./ReferenceLine-BTFcQou5.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DJQOHpml.js";import"./index-BRy-1fgE.js";import"./index-DkKi0J9U.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B-gwRbWC.js";import"./isWellBehavedNumber-TBIenFex.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DNwO_82A.js";import"./axisSelectors-Im4hMjdM.js";import"./d3-scale-siXpSW3b.js";import"./index-wxI64tZb.js";import"./index-CiAWbHQN.js";import"./renderedTicksSlice-BoqO-m_z.js";import"./index-DmW1QCPA.js";import"./CartesianChart-CYUUiu8V.js";import"./chartDataContext-B9Fl8ZXu.js";import"./CategoricalChart-za3sj-4w.js";import"./CartesianAxis-D2B7a931.js";import"./Layer-DKzqyPeV.js";import"./Text-DDGxlEP5.js";import"./DOMUtils-DwuCUUr8.js";import"./useId-7Q8874Q1.js";import"./useBackwardsCompatibleTheme-v1szHh_7.js";import"./Label-DZ6C1Cc6.js";import"./ZIndexLayer-OLi9LTWb.js";import"./types-BZDZh7Dp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-Ba1VZ5w3.js";import"./step-D9jBRyHm.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BPa7Tabb.js";import"./useAnimationId-DSiNOIGc.js";import"./ActivePoints-0LdIyAY7.js";import"./Dot-Dq-zru-b.js";import"./RegisterGraphicalItemId-CoAB0bbS.js";import"./ErrorBarContext-XJ_0JE40.js";import"./GraphicalItemClipPath-D8etsuAL.js";import"./SetGraphicalItem-bKrSk8yx.js";import"./getRadiusAndStrokeWidthFromDot-BV5HZWc_.js";import"./ActiveShapeUtils-BXPGLF8U.js";import"./useGraphicalItemIdentity-DMPVVD7J.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
