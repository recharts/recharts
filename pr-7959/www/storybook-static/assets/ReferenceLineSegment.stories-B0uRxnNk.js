import{R as e}from"./iframe-D1Pqp3X7.js";import{R as i}from"./zIndexSlice-CC0vixK0.js";import{C as n}from"./ComposedChart-BLkMIV9V.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-Bu-cWsQQ.js";import{X as s}from"./XAxis-T7u0Y27W.js";import{Y as c}from"./YAxis-Bx5HOyiU.js";import{L as d}from"./Line-DYKbaseg.js";import{R as g}from"./ReferenceLine-BFufyGOV.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-ukQujWSR.js";import"./index-hC6YZk0S.js";import"./index-4O2rY_Cx.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BY3VWyF-.js";import"./isWellBehavedNumber-D9UYuuaw.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Dlv3UuBc.js";import"./axisSelectors-D2uT0zOX.js";import"./d3-scale-BBX2CRCX.js";import"./index-tZNJXdgS.js";import"./index-BxZa8ohf.js";import"./renderedTicksSlice-BfFvXFNo.js";import"./index-C4H2qa0s.js";import"./CartesianChart-C5RCyQJ8.js";import"./chartDataContext-Bgnde7n0.js";import"./CategoricalChart-B93ipspd.js";import"./CartesianAxis-By4dWd7I.js";import"./Layer-Bv1Fmb_W.js";import"./Text-B3gTwU4t.js";import"./pageBackground-BD-8uHz0.js";import"./useId-DZsUPY-C.js";import"./useBackwardsCompatibleTheme-yQkddBeS.js";import"./Label-CD1DJmaw.js";import"./ZIndexLayer-Bv7_Srb_.js";import"./types-CpySGoie.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-D1xsq6-l.js";import"./step-7AUpGbZt.js";import"./path-DyVhHtw_.js";import"./activeStyles-Bni41BPX.js";import"./useAnimationId-Bu_aUyhK.js";import"./dataEntryStyles-DesCUen4.js";import"./ActivePoints-BTUoBtm0.js";import"./Dot-q9DoNaCP.js";import"./ErrorBarContext-CR6eW5Ea.js";import"./GraphicalItemClipPath-BrZXwUEO.js";import"./SetGraphicalItem-DW-Ki2gV.js";import"./getRadiusAndStrokeWidthFromDot-8ztb8GwF.js";import"./ActiveShapeUtils-NtxvAIW2.js";import"./useEffectiveDataKey-D04u3iKL.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
