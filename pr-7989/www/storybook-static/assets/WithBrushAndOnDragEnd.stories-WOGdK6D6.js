import{R as t}from"./iframe-DW88jlWE.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DVK4421h.js";import{B as p}from"./BarChart-B2VVHEIH.js";import{X as l}from"./XAxis-DR4MLdhh.js";import{Y as h}from"./YAxis-uwKRdj5s.js";import{B as x}from"./Brush-rvxkqQXy.js";import{B as c}from"./Bar-BQqwZ5oe.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DdwERQOb.js";import"./index-CYoLVhib.js";import"./index-DKd_R_4T.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BeGeeMAY.js";import"./isWellBehavedNumber-DJEibIDK.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D6Qja1Rv.js";import"./axisSelectors-BvsqhHdG.js";import"./d3-scale-B9KsqEcg.js";import"./index-DGoH4J8D.js";import"./index-CTYHixiw.js";import"./renderedTicksSlice-CBsnm3d5.js";import"./index-DfrCmWVV.js";import"./CartesianChart-DB1uC4rj.js";import"./chartDataContext-DYk24gQd.js";import"./CategoricalChart-Bfzcp6tQ.js";import"./CartesianAxis-BAGJBH6f.js";import"./Layer-1wEz8tGE.js";import"./Text-BEy-xjYS.js";import"./pageBackground-D5Jdtqol.js";import"./useId-DsKCuo-O.js";import"./useBackwardsCompatibleTheme-DRnujEnS.js";import"./Label-woFms0xV.js";import"./ZIndexLayer-NojUaQJi.js";import"./types-CqLteoP0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./activeStyles-D70ZhOkY.js";import"./useAnimationId-CJ2VkiZA.js";import"./dataEntryStyles-BR960LqV.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BTJIjFU2.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-sQdrYNDC.js";import"./tooltipContext-BBMsUqm9.js";import"./ErrorBarContext-Cf7bjtdd.js";import"./GraphicalItemClipPath-BGSGPFhH.js";import"./SetGraphicalItem-CiG8FS9q.js";import"./getZIndexFromUnknown-C_N_5TMa.js";import"./useEffectiveDataKey-OZ4YR6rc.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,ht as __namedExportsOrder,lt as default};
