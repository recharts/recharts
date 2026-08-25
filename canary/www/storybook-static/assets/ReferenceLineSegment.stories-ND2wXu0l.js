import{R as e}from"./iframe-D6azDvqV.js";import{R as i}from"./zIndexSlice-CJI37Eji.js";import{C as a}from"./ComposedChart-CmwmgTBj.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-ur55bmy2.js";import{X as s}from"./XAxis-Cf0m1xXe.js";import{Y as c}from"./YAxis-ltpxfQ5a.js";import{L as d}from"./Line-DXVG3ibe.js";import{R as g}from"./ReferenceLine-Spv7ZKt9.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-9sEg-owe.js";import"./index-De2T6Rdx.js";import"./index-CHbhJf8u.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-MMJ4Hspi.js";import"./isWellBehavedNumber-zgmweQfq.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CvaooULl.js";import"./index-8WeBRwf8.js";import"./index-CdRGzAoJ.js";import"./axisSelectors-Cuma3wLU.js";import"./d3-scale-BukzO1yu.js";import"./renderedTicksSlice-CP9ELeUi.js";import"./CartesianChart-DKfnJK9b.js";import"./chartDataContext-E0nEwP5U.js";import"./CategoricalChart-BwNlWuS2.js";import"./CartesianAxis-CnIKHaJW.js";import"./Layer-Dd-QkUnw.js";import"./Text-7Emw6cxV.js";import"./DOMUtils-ChR8PpsJ.js";import"./useId-D_J3zHys.js";import"./useBackwardsCompatibleTheme-Btt6Zxb8.js";import"./Label-Bq-FSxS9.js";import"./ZIndexLayer-BMP0BbGV.js";import"./types-ArXcJt3v.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-BtvAXlb-.js";import"./step-BjTVn7hc.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CFHSF17T.js";import"./useAnimationId-B0HxjIs3.js";import"./ActivePoints-D_5kSOug.js";import"./Dot-DipyiptT.js";import"./RegisterGraphicalItemId-utzXF_HC.js";import"./ErrorBarContext-CS85xpKd.js";import"./GraphicalItemClipPath-CEHJTCek.js";import"./SetGraphicalItem-CIh432wm.js";import"./getRadiusAndStrokeWidthFromDot-D9uGtCD-.js";import"./ActiveShapeUtils-nknSwnl4.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
