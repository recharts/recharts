import{R as e}from"./iframe-C98xM-14.js";import{R as i}from"./zIndexSlice-PFqQVngT.js";import{C as a}from"./ComposedChart-DEvNrsRG.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-EJt33FZ5.js";import{X as s}from"./XAxis-CsWwdt7Q.js";import{Y as c}from"./YAxis-CaqCP2Lk.js";import{L as d}from"./Line-vvPtX59c.js";import{R as g}from"./ReferenceLine-CNaaD8Ya.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Cpn-KPW0.js";import"./index-BfkVHUSN.js";import"./index-lWYWFl_c.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BpgNO45K.js";import"./isWellBehavedNumber-B0B1V1Mw.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DNpWLRvv.js";import"./axisSelectors-DE9vQUUE.js";import"./d3-scale-BIaFt0TH.js";import"./index-B33qjCts.js";import"./index-CRw9oTKs.js";import"./renderedTicksSlice-BVBdj9en.js";import"./index-Bwd0n8ve.js";import"./CartesianChart-DdfFkL89.js";import"./chartDataContext-BX4jELOi.js";import"./CategoricalChart-Cg6rdWul.js";import"./CartesianAxis-BhBvKKe-.js";import"./Layer-DV2USN9H.js";import"./Text-CdsOrPG8.js";import"./DOMUtils-Cyba50bX.js";import"./useId-gkj8hVD1.js";import"./useBackwardsCompatibleTheme-CnvikNkE.js";import"./Label-6WZ-bs73.js";import"./ZIndexLayer-_jlJOhPE.js";import"./types-C3nHa31Z.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-C4kxUnUy.js";import"./step-CKRTH0G6.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CTflnzuI.js";import"./useAnimationId-B6O86EG4.js";import"./ActivePoints-Bm8Ngiah.js";import"./Dot-BVHRbG7p.js";import"./RegisterGraphicalItemId-CrKJMoiy.js";import"./ErrorBarContext-eOyXWxlr.js";import"./GraphicalItemClipPath-Dn-XuIGK.js";import"./SetGraphicalItem-CJTGWUG8.js";import"./getRadiusAndStrokeWidthFromDot-BCR9SUwJ.js";import"./ActiveShapeUtils-bQFjdaPv.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const fe=["Segment"];export{t as Segment,fe as __namedExportsOrder,ge as default};
