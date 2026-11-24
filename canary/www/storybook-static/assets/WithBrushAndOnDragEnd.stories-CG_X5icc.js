import{R as t}from"./iframe-CGMPGT_Z.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BwRFWyAI.js";import{B as p}from"./BarChart-Bf8Jry8d.js";import{X as l}from"./XAxis-DbuLqOFS.js";import{Y as h}from"./YAxis-ph0fLQn1.js";import{B as x}from"./Brush-CVUCoxMr.js";import{B as c}from"./Bar-bKUrY91T.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-05Xj8Dk4.js";import"./throttle-eL-EEQ3_.js";import"./index-DVV9xQIw.js";import"./index-BFunbtNY.js";import"./RechartsWrapper-DQJBpYXH.js";import"./axisSelectors-nBPX2Xba.js";import"./polarAxisSelectors-BIscasf0.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DhJmdG6x.js";import"./index-Cc9Sc31K.js";import"./index-JIsP8NnX.js";import"./renderedTicksSlice-h35w6byl.js";import"./index-ClDVUaDb.js";import"./fillDefinitions-J_g-z9QL.js";import"./CartesianChart-BQtC3GTu.js";import"./chartDataContext-Be9WERVf.js";import"./CategoricalChart-CNkpe0ib.js";import"./CartesianAxis-B1TiLRwW.js";import"./Layer-BT_Vpx95.js";import"./Text-DLnj5LmN.js";import"./ZIndexLayer-9BCkhjyY.js";import"./Label-BCblnQ7e.js";import"./types-BG6mJK46.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-mfmNhCBT.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CLE0n3dQ.js";import"./useAnimationId-BO_xR5GW.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C3kE7Ldm.js";import"./tooltipContext-BfxZXmmN.js";import"./ErrorBarContext-BlCnepik.js";import"./activeStyles-Dr2Cpwdi.js";import"./SetGraphicalItem-x_4gBiT9.js";import"./getZIndexFromUnknown-CQbFYYal.js";import"./useEffectiveDataKey-BosH_tQ0.js";import"./omit-jkCuCE8o.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    const [dragIndexes, setDragIndexes] = React.useState<BrushStartEndIndex>({
      startIndex: 0,
      endIndex: dateWithValueData.length - 1
    });
    return (
      // Calc compensates for the text above the chart
      <div style={{
        width: '100%',
        height: 'calc(100% - 84px)'
      }}>
        <div>
          Start index:
          {dragIndexes.startIndex}
        </div>
        <div>
          End index:
          {dragIndexes.endIndex}
        </div>
        <ResponsiveContainer>
          <BarChart data={dateWithValueData}>
            <XAxis dataKey="value" />
            <YAxis />
            <Brush dataKey="name" height={30} onDragEnd={indexes => {
              setDragIndexes(indexes as BrushStartEndIndex);
            }} />
            <Bar dataKey="value" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,lt as __namedExportsOrder,pt as default};
