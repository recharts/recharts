import{R as e}from"./iframe-B-iIRDdh.js";import{R as i}from"./zIndexSlice-xTQiy-H7.js";import{C as n}from"./ComposedChart-aKLJJf8H.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-DIyhJCQ8.js";import{X as s}from"./XAxis-CndG3lfF.js";import{Y as c}from"./YAxis-D6Burg2S.js";import{L as d}from"./Line-Cbj4CeQN.js";import{R as g}from"./ReferenceLine-C-1iDihm.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DMKMego8.js";import"./index-o1PLWRMQ.js";import"./index-DFxGa3DU.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BKBNf2xS.js";import"./isWellBehavedNumber-B6qwBi4A.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-3KdvU5vS.js";import"./axisSelectors-C60OKlJ4.js";import"./d3-scale-AYUreAhG.js";import"./index-NNc_ZKUS.js";import"./index-D_yufyJF.js";import"./renderedTicksSlice-DkP6y5za.js";import"./index-BazpKZZl.js";import"./CartesianChart-CmApzcJx.js";import"./chartDataContext-CX0jNdXw.js";import"./CategoricalChart-BfBkFmEt.js";import"./CartesianAxis-D-jVFU-k.js";import"./Layer-Dt4jm0MX.js";import"./Text-CBbsNly8.js";import"./DOMUtils-CixgR7ku.js";import"./useId-D2WPaoHG.js";import"./useBackwardsCompatibleTheme-C-V51dQO.js";import"./Label-CwIrwy70.js";import"./ZIndexLayer-CbH1OgN0.js";import"./types-zJ8KfHt8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-CjV9ratN.js";import"./step-CLlPrIoa.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-WEAzzrlF.js";import"./useAnimationId-CcMpnWIs.js";import"./ActivePoints-D_regA9J.js";import"./Dot-BnQbbHjv.js";import"./RegisterGraphicalItemId-B76epDXu.js";import"./ErrorBarContext-BzZXG9TC.js";import"./GraphicalItemClipPath-DlnJdwTq.js";import"./SetGraphicalItem-BJKoCnbQ.js";import"./getRadiusAndStrokeWidthFromDot-PVXVFp_x.js";import"./ActiveShapeUtils-yQdvWiPD.js";import"./useGraphicalItemIdentity-B2EBH6VG.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
