import{R as e}from"./iframe-CGMPGT_Z.js";import{R as i}from"./zIndexSlice-BwRFWyAI.js";import{C as n}from"./ComposedChart-DdDYeqHZ.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-xPIg11en.js";import{X as s}from"./XAxis-DbuLqOFS.js";import{Y as c}from"./YAxis-ph0fLQn1.js";import{L as d}from"./Line-DkMyEWjM.js";import{R as g}from"./ReferenceLine-DFv83Pcx.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-05Xj8Dk4.js";import"./throttle-eL-EEQ3_.js";import"./index-DVV9xQIw.js";import"./index-BFunbtNY.js";import"./RechartsWrapper-DQJBpYXH.js";import"./axisSelectors-nBPX2Xba.js";import"./polarAxisSelectors-BIscasf0.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DhJmdG6x.js";import"./index-Cc9Sc31K.js";import"./index-JIsP8NnX.js";import"./renderedTicksSlice-h35w6byl.js";import"./index-ClDVUaDb.js";import"./fillDefinitions-J_g-z9QL.js";import"./CartesianChart-BQtC3GTu.js";import"./chartDataContext-Be9WERVf.js";import"./CategoricalChart-CNkpe0ib.js";import"./CartesianAxis-B1TiLRwW.js";import"./Layer-BT_Vpx95.js";import"./Text-DLnj5LmN.js";import"./ZIndexLayer-9BCkhjyY.js";import"./Label-BCblnQ7e.js";import"./types-BG6mJK46.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-2C3aWHdg.js";import"./Curve-B6JD92Z8.js";import"./step-C3GvXaRE.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-mfmNhCBT.js";import"./ActivePoints-BPzkwPAB.js";import"./Dot-BgWcOT9t.js";import"./activeStyles-Dr2Cpwdi.js";import"./useAnimationId-BO_xR5GW.js";import"./Symbols-CySejNnI.js";import"./symbol-X4EmnsFS.js";import"./ErrorBarContext-BlCnepik.js";import"./SetGraphicalItem-x_4gBiT9.js";import"./ActiveShapeUtils-C3kE7Ldm.js";import"./useEffectiveDataKey-BosH_tQ0.js";import"./CartesianScaleHelper-C9Oze4oB.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},ge=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};export{t as Segment,ge as __namedExportsOrder,de as default};
