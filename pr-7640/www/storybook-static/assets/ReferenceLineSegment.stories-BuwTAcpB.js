import{R as e}from"./iframe-tjnA4ZJo.js";import{R as i}from"./zIndexSlice-C0N8aUUS.js";import{C as a}from"./ComposedChart-C0wVbOjh.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-CX-XzHb5.js";import{X as s}from"./XAxis-C_h8MhtB.js";import{Y as c}from"./YAxis-BN_pqP4r.js";import{L as d}from"./Line-Cwid8INE.js";import{R as g}from"./ReferenceLine-nlbK6zql.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BG5Cbw48.js";import"./index-BTfui88R.js";import"./index-BBMNndk4.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Bpk1yIxn.js";import"./isWellBehavedNumber-C0zpNc8z.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CWJ-Ct21.js";import"./index-BXBph9CX.js";import"./index-zHF4-EZF.js";import"./axisSelectors-kO8GHbei.js";import"./d3-scale-DO15g-NA.js";import"./renderedTicksSlice-cCRvnCrJ.js";import"./CartesianChart-Fpuc0WuY.js";import"./chartDataContext-Czgamfqs.js";import"./CategoricalChart-4thYKElI.js";import"./CartesianAxis-CBg_pQkI.js";import"./Layer-BffJbX--.js";import"./Text-D3he8dQP.js";import"./DOMUtils-Bpsfg4Oe.js";import"./useBackwardsCompatibleTheme-WfOg4bTb.js";import"./Label-CYvlsQvC.js";import"./ZIndexLayer-J8-hOCa0.js";import"./types-B1JXlqQN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-CyJ2f9jM.js";import"./step-OCCE-5TJ.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-6MMSMcYJ.js";import"./useAnimationId-1S4zeXgZ.js";import"./ActivePoints-BiBnoeEb.js";import"./Dot-3hZpkGF4.js";import"./RegisterGraphicalItemId-CPAkHit-.js";import"./ErrorBarContext-B_e3sY13.js";import"./GraphicalItemClipPath-CVEv0QyJ.js";import"./SetGraphicalItem-Bw7kOs9y.js";import"./getRadiusAndStrokeWidthFromDot-CaYPlNA5.js";import"./ActiveShapeUtils-D6_9Syl7.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ce={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const de=["Segment"];export{t as Segment,de as __namedExportsOrder,ce as default};
