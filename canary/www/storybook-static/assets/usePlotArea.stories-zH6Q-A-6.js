import{R as t}from"./iframe-CGMPGT_Z.js";import{z as a}from"./RechartsWrapper-DQJBpYXH.js";import{R as p}from"./zIndexSlice-BwRFWyAI.js";import{C as n}from"./ComposedChart-DdDYeqHZ.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-DkMyEWjM.js";import{X as l}from"./XAxis-DbuLqOFS.js";import{Y as h}from"./YAxis-ph0fLQn1.js";import{L as c}from"./Legend-C0TB2Q7_.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-05Xj8Dk4.js";import"./get-cF5BDHN6.js";import"./axisSelectors-nBPX2Xba.js";import"./throttle-eL-EEQ3_.js";import"./index-DVV9xQIw.js";import"./index-BFunbtNY.js";import"./polarAxisSelectors-BIscasf0.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DhJmdG6x.js";import"./index-Cc9Sc31K.js";import"./index-JIsP8NnX.js";import"./renderedTicksSlice-h35w6byl.js";import"./index-ClDVUaDb.js";import"./fillDefinitions-J_g-z9QL.js";import"./CartesianChart-BQtC3GTu.js";import"./chartDataContext-Be9WERVf.js";import"./CategoricalChart-CNkpe0ib.js";import"./getRadiusAndStrokeWidthFromDot-2C3aWHdg.js";import"./Layer-BT_Vpx95.js";import"./Curve-B6JD92Z8.js";import"./types-BG6mJK46.js";import"./step-C3GvXaRE.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-mfmNhCBT.js";import"./Label-BCblnQ7e.js";import"./Text-DLnj5LmN.js";import"./ZIndexLayer-9BCkhjyY.js";import"./ActivePoints-BPzkwPAB.js";import"./Dot-BgWcOT9t.js";import"./activeStyles-Dr2Cpwdi.js";import"./useAnimationId-BO_xR5GW.js";import"./Symbols-CySejNnI.js";import"./symbol-X4EmnsFS.js";import"./ErrorBarContext-BlCnepik.js";import"./SetGraphicalItem-x_4gBiT9.js";import"./ActiveShapeUtils-C3kE7Ldm.js";import"./useEffectiveDataKey-BosH_tQ0.js";import"./CartesianAxis-B1TiLRwW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-CgxUiewk.js";import"./uniqBy-Dmo8Jc_P.js";import"./iteratee-D1qU_gcL.js";import"./isArguments-yB-y1yaH.js";const gt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ut=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'usePlotAreaExample',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin} style={args.style}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    width: '100%',
    height: 400,
    margin: {
      top: 30,
      right: 170,
      bottom: 30,
      left: 120
    },
    style: {
      border: '1px solid #ccc'
    }
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as UsePlotArea,ut as __namedExportsOrder,gt as default};
