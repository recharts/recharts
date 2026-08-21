import{R as e}from"./iframe-Cuz0ArBZ.js";import{R as i}from"./zIndexSlice-BM2UDWO3.js";import{C as a}from"./ComposedChart-T-m9qZYj.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-CqIULUiF.js";import{X as s}from"./XAxis-BpKyP0dN.js";import{Y as c}from"./YAxis-Do03vVTX.js";import{L as d}from"./Line-7bfxR50O.js";import{R as g}from"./ReferenceLine-BpezRHQZ.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D2UP89es.js";import"./index-D4JBGtbh.js";import"./index-DJ25wrw2.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DFRYrt1w.js";import"./isWellBehavedNumber-BNR7n96m.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C1GsE6D6.js";import"./index-CnjN1eJY.js";import"./index-B7Kpo2ne.js";import"./axisSelectors-Uf2etwQJ.js";import"./d3-scale-BU8ngyGj.js";import"./renderedTicksSlice-DoN5idQ6.js";import"./CartesianChart-D4ZrgDD1.js";import"./chartDataContext-COxhzolJ.js";import"./CategoricalChart-b2JFE4qY.js";import"./CartesianAxis-pF-9QyGN.js";import"./Layer-BxHvVvNo.js";import"./Text-DWRXNVQj.js";import"./DOMUtils-DmogtD9z.js";import"./useId-CG7ic0vo.js";import"./useBackwardsCompatibleTheme-CTjF-q2C.js";import"./Label-CD264HLQ.js";import"./ZIndexLayer-B2d0C2Gc.js";import"./types-DHaro4o6.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-CQxBAVgQ.js";import"./step-D64yDiHt.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Bq9Cx-Mo.js";import"./useAnimationId-BcIXJdGX.js";import"./ActivePoints-Q8Q4Ocdm.js";import"./Dot-CF6FpX3d.js";import"./RegisterGraphicalItemId-B9mLA6kv.js";import"./ErrorBarContext-BXjCcKD5.js";import"./GraphicalItemClipPath-DwzWsDMq.js";import"./SetGraphicalItem-BNqnvDS1.js";import"./getRadiusAndStrokeWidthFromDot-CA2V7d8x.js";import"./ActiveShapeUtils-FehVzgEA.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
