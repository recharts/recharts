import{R as e}from"./iframe-BxrJSuEo.js";import{R as i}from"./zIndexSlice-BT09z8vD.js";import{C as n}from"./ComposedChart-7h-py7CY.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-DbFBg48z.js";import{X as s}from"./XAxis-BWu3iNn9.js";import{Y as c}from"./YAxis-CH4Eo4Zq.js";import{L as d}from"./Line-BpdOGrrm.js";import{R as g}from"./ReferenceLine-yVfHEYhg.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CoaYbzsD.js";import"./index-BhD1rzMR.js";import"./index-DGAZ_OJd.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-vU4RggVs.js";import"./isWellBehavedNumber-CpUOh-vc.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CWFnbdFS.js";import"./axisSelectors-JUmVyq34.js";import"./d3-scale-B5WK_JhK.js";import"./index-BHq5Sa6E.js";import"./index-CLaZmg3F.js";import"./renderedTicksSlice-CAPgIIpT.js";import"./index-Dd2r1808.js";import"./CartesianChart-D1XAoGxw.js";import"./chartDataContext-BsAxXToq.js";import"./CategoricalChart-Clhvfpfg.js";import"./CartesianAxis-rK53amZo.js";import"./Layer-NfsQLk-M.js";import"./Text-ChzbpadS.js";import"./DOMUtils-BV3IXFQQ.js";import"./useId-D7n7M89L.js";import"./useBackwardsCompatibleTheme-BBdb5Xlh.js";import"./Label-DaJavsxU.js";import"./ZIndexLayer-K4qh24Ap.js";import"./types-DWdcB5KA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-CJPHKOZN.js";import"./step-MKlG5seU.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-2V-RFRVt.js";import"./useAnimationId-BTkxH0KN.js";import"./ActivePoints-BclQBruf.js";import"./Dot-CcNc-KMS.js";import"./RegisterGraphicalItemId-BvxwJdeC.js";import"./ErrorBarContext-DuvrknuQ.js";import"./GraphicalItemClipPath-Cu9TKpDv.js";import"./SetGraphicalItem-xqqXYUDX.js";import"./getRadiusAndStrokeWidthFromDot-Cdya3Bfq.js";import"./ActiveShapeUtils-CodrMQ8l.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
