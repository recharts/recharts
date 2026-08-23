import{R as e}from"./iframe-mnAzB4o-.js";import{R as i}from"./zIndexSlice-D6JZj8nu.js";import{C as a}from"./ComposedChart-CBdoahrj.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-BOdqfpIi.js";import{X as s}from"./XAxis-BJJ3SHcS.js";import{Y as c}from"./YAxis-CaUMjbmS.js";import{L as d}from"./Line-ClUmRFWF.js";import{R as g}from"./ReferenceLine-CzSMWYyZ.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DkA8wIil.js";import"./index-BVGAPrUY.js";import"./index-CtygltyQ.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DC3M7TEl.js";import"./isWellBehavedNumber-Csz_97LF.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C7l6xfyV.js";import"./index-DwcIeoVT.js";import"./index-UdOV9nJO.js";import"./axisSelectors-C1jFNzqn.js";import"./d3-scale-CRNCXhx2.js";import"./renderedTicksSlice-Bqv1L3Am.js";import"./CartesianChart-D3iAW6ju.js";import"./chartDataContext-d1JBVIv3.js";import"./CategoricalChart-Dvtv2sve.js";import"./CartesianAxis-BJUtWOS_.js";import"./Layer-Cr54uUjf.js";import"./Text-BI5zaK2n.js";import"./DOMUtils-CS3XthwK.js";import"./useId-DlzE9UHI.js";import"./useBackwardsCompatibleTheme-D4uIz6B3.js";import"./Label-CHzafVhK.js";import"./ZIndexLayer-B_AeVWGh.js";import"./types-CREZv15c.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-o9IX9QPv.js";import"./step-BYsm7KBD.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DKc9cClm.js";import"./useAnimationId-C2CD38MP.js";import"./ActivePoints-0ixA6i7h.js";import"./Dot-CbnujumB.js";import"./RegisterGraphicalItemId-CVIGTwbR.js";import"./ErrorBarContext-BqNwP9Uy.js";import"./GraphicalItemClipPath-2kfGKsY1.js";import"./SetGraphicalItem-C3b_Fk26.js";import"./getRadiusAndStrokeWidthFromDot-CGiQ8j25.js";import"./ActiveShapeUtils-CPpaX7pN.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
