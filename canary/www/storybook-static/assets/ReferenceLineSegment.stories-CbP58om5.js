import{R as e}from"./iframe-Cw8P3hI7.js";import{R as i}from"./zIndexSlice-B6SrSko1.js";import{C as n}from"./ComposedChart-D83sxKrW.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-D4Wb-mhM.js";import{X as s}from"./XAxis-C7unxNtQ.js";import{Y as c}from"./YAxis-Bx4FAtcu.js";import{L as d}from"./Line-B7HdxR7c.js";import{R as g}from"./ReferenceLine-CW5HnU4g.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DncpYTAI.js";import"./index-hRfftI4p.js";import"./index-eEhk_OBC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CZK0CaSv.js";import"./isWellBehavedNumber--H7puUW6.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DvLLBked.js";import"./axisSelectors-BdH8dG4d.js";import"./d3-scale-Col4_9gh.js";import"./index-DNE8XmUi.js";import"./index-7P4EwiS4.js";import"./renderedTicksSlice-0hkvmYyZ.js";import"./index-C3ZLhd8h.js";import"./CartesianChart-D3LhbEp8.js";import"./chartDataContext-BishGWYu.js";import"./CategoricalChart-D-nlxD4a.js";import"./CartesianAxis-D3FnIIlC.js";import"./Layer-B6WOVeAl.js";import"./Text-lKkTsdpR.js";import"./pageBackground-DDrjrzvM.js";import"./useId-QOeP90DB.js";import"./useBackwardsCompatibleTheme-CjwvaY8l.js";import"./Label-D8Ksb0Iz.js";import"./ZIndexLayer-BaFHUXpS.js";import"./types-Cja1RPDM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-H-3Cg0VG.js";import"./step-Owe5mevZ.js";import"./path-DyVhHtw_.js";import"./activeStyles-BMrFolB2.js";import"./useAnimationId-DEkX1hYZ.js";import"./dataEntryStyles-Bh3IKYdr.js";import"./ActivePoints-D1HAeebE.js";import"./Dot-BPPIvgtF.js";import"./ErrorBarContext-CRE-8iE1.js";import"./GraphicalItemClipPath-DihUhOiW.js";import"./SetGraphicalItem-CCZzXSeX.js";import"./getRadiusAndStrokeWidthFromDot-0OZopViH.js";import"./ActiveShapeUtils-DrIy4kMk.js";import"./useEffectiveDataKey-Dh15qlQo.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
