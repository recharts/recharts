import{R as t}from"./iframe-B1Ov3CkI.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BZ09-fF4.js";import{B as p}from"./BarChart-CoNvQPc2.js";import{X as l}from"./XAxis-B8awpm7u.js";import{Y as h}from"./YAxis-CKqezMqR.js";import{B as x}from"./Brush-BvpCK7oE.js";import{B as c}from"./Bar-Bd7briHj.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DWDtOW2Y.js";import"./throttle-CU4m2LyG.js";import"./index-BZUg4nA9.js";import"./index-CKnkfWPE.js";import"./RechartsWrapper-CArKZuEM.js";import"./axisSelectors-CwNUFUW3.js";import"./polarAxisSelectors-BnryocK3.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BRiCZA2b.js";import"./index-DD4HlTuM.js";import"./index-DoKEjPdp.js";import"./renderedTicksSlice-7kuLifM3.js";import"./index-BMXSO3re.js";import"./fillDefinitions-C3NO0Lw1.js";import"./CartesianChart-ClQxKu1o.js";import"./chartDataContext-fgeg9aho.js";import"./CategoricalChart-C2LUjjE6.js";import"./CartesianAxis-CqVMCZWw.js";import"./Layer-DAwsvvog.js";import"./Text-B3OKn0GK.js";import"./ZIndexLayer-DQABw9Zs.js";import"./Label-DD8YxEOL.js";import"./types-ynn-_gFH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-lld3ulFL.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B3p2_n3w.js";import"./useAnimationId-DhG5SB-S.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BnGsUnBG.js";import"./tooltipContext-DmwNEoHL.js";import"./ErrorBarContext-CrvdUc7x.js";import"./activeStyles-D0wpO0Mw.js";import"./SetGraphicalItem-BOBKYCI5.js";import"./getZIndexFromUnknown-BWHNFfxa.js";import"./useEffectiveDataKey-DPX-1gIx.js";import"./omit-CWGZ1oMh.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
