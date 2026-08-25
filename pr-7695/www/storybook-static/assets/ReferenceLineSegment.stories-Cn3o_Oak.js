import{R as e}from"./iframe-DqR9Wcc8.js";import{R as i}from"./zIndexSlice-xGZRRsol.js";import{C as a}from"./ComposedChart-mWNBd2dn.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-DnLHzwag.js";import{X as s}from"./XAxis-D6ZHtCxW.js";import{Y as c}from"./YAxis-aADwIUIe.js";import{L as d}from"./Line-B9-enMa0.js";import{R as g}from"./ReferenceLine-DeegCrd5.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Die-14D_.js";import"./index-CbJoLlYH.js";import"./index-D7HcE4ER.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CE9KWHQ7.js";import"./isWellBehavedNumber-CwOhzfGR.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-1r2IRn89.js";import"./index-BM32474r.js";import"./index-Dri9MlSm.js";import"./axisSelectors-C4f15nEZ.js";import"./d3-scale-CAWaFyWJ.js";import"./renderedTicksSlice-D_2jrhVU.js";import"./CartesianChart-sKen-XIs.js";import"./chartDataContext-CtOkxvrA.js";import"./CategoricalChart-IMV6Cr9c.js";import"./CartesianAxis-1hhq5YML.js";import"./Layer-DIEU6Rsu.js";import"./Text-CCjVuIgd.js";import"./DOMUtils-gqBnduPC.js";import"./useId-DKdBWodA.js";import"./useBackwardsCompatibleTheme-CwCCGp3S.js";import"./Label-BYPDwyti.js";import"./ZIndexLayer-CGt7Qqz1.js";import"./types-CwWmwHzD.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-BJ-wJMc8.js";import"./step-BtguIK0L.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BnD_-gzN.js";import"./useAnimationId-BRWCn8G_.js";import"./ActivePoints-BTHz1vc8.js";import"./Dot-D1oj5oJp.js";import"./RegisterGraphicalItemId-DE2Efd51.js";import"./ErrorBarContext-mgM-6MAT.js";import"./GraphicalItemClipPath-DlZT7n4i.js";import"./SetGraphicalItem-Y-0P1f8y.js";import"./getRadiusAndStrokeWidthFromDot-CbfPJyLi.js";import"./ActiveShapeUtils-RlM9Arec.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
