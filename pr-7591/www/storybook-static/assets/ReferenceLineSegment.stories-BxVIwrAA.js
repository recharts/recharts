import{R as e}from"./iframe-BRjS3pa5.js";import{R as i}from"./zIndexSlice-XdBxArD4.js";import{C as a}from"./ComposedChart-BbCOodCR.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-DJbmJCvU.js";import{X as s}from"./XAxis-C08AGWpL.js";import{Y as c}from"./YAxis-BKuUSn8V.js";import{L as d}from"./Line-BnrW5em_.js";import{R as g}from"./ReferenceLine-BK8t4QjI.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BVKBaBan.js";import"./index-CTzNvEbv.js";import"./index-BBA_Z08e.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-CQjC3mbh.js";import"./isWellBehavedNumber-BpzQ2UFz.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-kdlfkWfS.js";import"./index-BBFKTPis.js";import"./index-JNqHplgB.js";import"./renderedTicksSlice-BqYlra_S.js";import"./axisSelectors-CG0YGbYa.js";import"./d3-scale-BkRq6yTg.js";import"./CartesianChart-CNsqprpw.js";import"./chartDataContext-UzO9iCYp.js";import"./CategoricalChart-CG1ra5Si.js";import"./CartesianAxis-Cffb3mHz.js";import"./Layer-BT4MOeWW.js";import"./Text-z_Sr8qFY.js";import"./DOMUtils-D9-UYNUT.js";import"./Label-Dttiw5NK.js";import"./ZIndexLayer-98YKZStn.js";import"./types-DRhRxFpq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-CTxTvR-3.js";import"./isBuffer-Crkas5dz.js";import"./Curve-BAtmvmuC.js";import"./step-DMngYI5d.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-51O2x23y.js";import"./useAnimationId-CRgssPqb.js";import"./ActivePoints-VQONApch.js";import"./Dot-D2cX8i8Q.js";import"./RegisterGraphicalItemId-BMfolY6u.js";import"./ErrorBarContext-CRJaMaH8.js";import"./GraphicalItemClipPath-CPBZ3hrs.js";import"./SetGraphicalItem-B-YWrUBQ.js";import"./getRadiusAndStrokeWidthFromDot-BUdbBqHd.js";import"./ActiveShapeUtils-pSZkQHNE.js";import"./CartesianScaleHelper-C9Oze4oB.js";const se={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ce=["Segment"];export{t as Segment,ce as __namedExportsOrder,se as default};
