import{R as e}from"./iframe-BFM8x9PA.js";import{R as i}from"./zIndexSlice-Dx9mYmyj.js";import{C as n}from"./ComposedChart-kK9tUW2C.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-BAwEJUXS.js";import{X as s}from"./XAxis-sqq-OrNO.js";import{Y as c}from"./YAxis-2TBACSCB.js";import{L as d}from"./Line-_czTNmY9.js";import{R as g}from"./ReferenceLine-D6r8Fe2L.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DqtHcGYb.js";import"./index-BWGXcjC4.js";import"./index-DVzpkoDY.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Bd_5xcSs.js";import"./isWellBehavedNumber-D4sYzu_F.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DYXkzF69.js";import"./axisSelectors-DiNaBi7F.js";import"./d3-scale-BV6eo-EO.js";import"./index-CngxH_6L.js";import"./index-BWjxNJoO.js";import"./renderedTicksSlice-CjeZk4XK.js";import"./index-CMQv9dM_.js";import"./CartesianChart-CkSZZlig.js";import"./chartDataContext-BTZBL-Eg.js";import"./CategoricalChart-Bte4O3H1.js";import"./CartesianAxis-DRX8HKZ_.js";import"./Layer-Be0Rd-Q7.js";import"./Text-D2FZ9-P8.js";import"./DOMUtils-eLbycdkH.js";import"./useId-BKuqsutR.js";import"./useBackwardsCompatibleTheme-BTrqDtcc.js";import"./Label-Br3cCz6i.js";import"./ZIndexLayer-DP5puj9b.js";import"./types-CNyTn7M4.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-C8AnJvF8.js";import"./step-BN1FmChO.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B1_R-VqI.js";import"./useAnimationId-B4FOQMwj.js";import"./ActivePoints-BCJal-aM.js";import"./Dot-CpCQ4QvO.js";import"./RegisterGraphicalItemId-Cv5_OQqk.js";import"./ErrorBarContext-BazLNBpB.js";import"./GraphicalItemClipPath-jUcNwVzc.js";import"./SetGraphicalItem-CfBe4xfA.js";import"./getRadiusAndStrokeWidthFromDot-b4U3g1Ny.js";import"./ActiveShapeUtils-Ct3yDoqv.js";import"./useGraphicalItemIdentity-CRa1F1Pi.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
