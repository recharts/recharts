import{R as e}from"./iframe-BFFmTTDr.js";import{R as i}from"./zIndexSlice-DQM058wc.js";import{C as n}from"./ComposedChart-SSXf6_RY.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-27H1Xe6J.js";import{X as s}from"./XAxis-CUKTZ0Q0.js";import{Y as c}from"./YAxis-zUGAKEHc.js";import{L as d}from"./Line-B1_198wi.js";import{R as g}from"./ReferenceLine-CXJOdLrC.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-C1mDwWe8.js";import"./index-B0ZyvmjF.js";import"./index-p_2WOCPr.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C4cHyrTj.js";import"./isWellBehavedNumber-EAZXLIW4.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-W63MnO3r.js";import"./axisSelectors-BasDhOYS.js";import"./d3-scale-CB2_PHYv.js";import"./index-DQJjMFyh.js";import"./index-BkJjG_2i.js";import"./renderedTicksSlice-CucX-QZC.js";import"./index-C0jb6csl.js";import"./CartesianChart-lCgugd9d.js";import"./chartDataContext-CP53CgNH.js";import"./CategoricalChart-mbieolFi.js";import"./CartesianAxis-nbQLlPRi.js";import"./Layer-BuPOal-_.js";import"./Text-m1jHD_i9.js";import"./DOMUtils-DhZiPaLo.js";import"./useId-ByStve5U.js";import"./useBackwardsCompatibleTheme-EBoDvW3e.js";import"./Label-CVuMucY6.js";import"./ZIndexLayer-V0Jr5gGg.js";import"./types-CeA3gQcd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-E9YFTGyr.js";import"./step-Dp068KI0.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BCqULUvu.js";import"./useAnimationId-CSU3KRrf.js";import"./ActivePoints-CKDoUYi7.js";import"./Dot-VdwfLdwk.js";import"./RegisterGraphicalItemId-Fjnl2b5Z.js";import"./ErrorBarContext-nDEpYIsF.js";import"./GraphicalItemClipPath-BoCgP3xh.js";import"./SetGraphicalItem-BH8-Rn7Q.js";import"./getRadiusAndStrokeWidthFromDot-DP3QTkY-.js";import"./ActiveShapeUtils-CqP12PJd.js";import"./useGraphicalItemIdentity-CpgNQJzS.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
