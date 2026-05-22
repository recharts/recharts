import{e}from"./iframe-DF4bgTei.js";import{g as i}from"./arrayEqualityCheck-BMFJWZLR.js";import{C as a}from"./ComposedChart-DBY9LGHW.js";import{p}from"./Page-DPte-9pC.js";import{C as n}from"./CartesianGrid-BvvRwqJF.js";import{X as s}from"./XAxis-DbY3ezb1.js";import{Y as c}from"./YAxis-D734sO1U.js";import{L as d}from"./Line-BRJiVivl.js";import{R as g}from"./ReferenceLine-DBrtu1z5.js";import{R as f}from"./RechartsHookInspector-D-0gsnbs.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BXVR8Nu8.js";import"./immer-MYTD12gY.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BQPl6oVo.js";import"./index-BTdRTt63.js";import"./hooks-XeIQ09GK.js";import"./axisSelectors-r3e8Ogcr.js";import"./d3-scale-Dig20Cak.js";import"./string-yHBgcFlJ.js";import"./zIndexSlice-zLQdFJPR.js";import"./renderedTicksSlice-CPjOMDMT.js";import"./CartesianChart-DiQ110-r.js";import"./chartDataContext-nbJQ4Evh.js";import"./CategoricalChart-BwOuhOYL.js";import"./CartesianAxis-OtzrWNBq.js";import"./Layer-B2y3FrWZ.js";import"./Text-Cn-CsKa2.js";import"./DOMUtils-C5ULhfnp.js";import"./Label-BpQxBJRP.js";import"./ZIndexLayer-k5HrhQv7.js";import"./types-D1G2vCVO.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-BOvv8LQu.js";import"./step-BNKRdB7Z.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-NJgg5Z7A.js";import"./useAnimationId-UfrY9hCr.js";import"./ActivePoints-DmxnIX1w.js";import"./Dot-BYGa6gij.js";import"./RegisterGraphicalItemId-BXLg-7qN.js";import"./ErrorBarContext-FGV68ztp.js";import"./GraphicalItemClipPath-DJtNLijn.js";import"./SetGraphicalItem-CZCtNcvF.js";import"./getRadiusAndStrokeWidthFromDot-gX3jCxFw.js";import"./ActiveShapeUtils-CkfODQkB.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BJloLEZI.js";import"./ChartSizeDimensions-BYrQZ-ie.js";import"./OffsetShower-adDhQ1RV.js";import"./PlotAreaShower-CsKiIBy8.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(f,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const fe=["Segment"];export{t as Segment,fe as __namedExportsOrder,ge as default};
