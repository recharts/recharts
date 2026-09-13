import{R as e}from"./iframe-B8ANsApq.js";import{R as i}from"./zIndexSlice-Ce8NeCcb.js";import{C as n}from"./ComposedChart-DPkaGwQ5.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-CPT33nDc.js";import{X as s}from"./XAxis-DCQ61JnD.js";import{Y as c}from"./YAxis-DqEKkvv0.js";import{L as d}from"./Line-Be9ktEtH.js";import{R as g}from"./ReferenceLine-ZiQFdZFV.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CG-pSLVK.js";import"./index-D6PdJg6F.js";import"./index-DeFSUeff.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CEZBLQnS.js";import"./isWellBehavedNumber-C7ukF8ee.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-soNVocgi.js";import"./axisSelectors-Cko3d0ja.js";import"./d3-scale-CsEPL9IW.js";import"./index-CLpz5dh6.js";import"./index-MxXQFx09.js";import"./renderedTicksSlice-DCIeAqty.js";import"./index-DgU7AYrg.js";import"./CartesianChart-Dm1UL_JN.js";import"./chartDataContext-SNmeHJ5h.js";import"./CategoricalChart-ZRjbnEpi.js";import"./CartesianAxis-DOZB_H9C.js";import"./Layer-DqVYjNpd.js";import"./Text-BYXQaTCF.js";import"./DOMUtils-BNNcxOqL.js";import"./useId-DgqgElmx.js";import"./useBackwardsCompatibleTheme-DqouWSCS.js";import"./Label-CKPEh0-k.js";import"./ZIndexLayer-B21fZXtG.js";import"./types-D5aIHjTg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-CICfeEYZ.js";import"./step-BOqwoOFd.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DxAfvNI2.js";import"./useAnimationId-DSZzieLY.js";import"./ActivePoints-BPsazN1k.js";import"./Dot-CY3bTNqg.js";import"./RegisterGraphicalItemId-BQAgbos5.js";import"./ErrorBarContext-mcf9_11T.js";import"./GraphicalItemClipPath-DhvNwCK-.js";import"./SetGraphicalItem-Dza8giNo.js";import"./getRadiusAndStrokeWidthFromDot-DANmnsHn.js";import"./ActiveShapeUtils-rZqGB1Eg.js";import"./useGraphicalItemIdentity-D-1HP-Kp.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
