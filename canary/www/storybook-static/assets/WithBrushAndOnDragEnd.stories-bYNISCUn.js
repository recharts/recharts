import{R as t}from"./iframe-DVXtBbhv.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CRXmCTqm.js";import{B as p}from"./BarChart-n3eJXEXx.js";import{X as l}from"./XAxis-BQ7gOxOo.js";import{Y as h}from"./YAxis-e33_-5yv.js";import{B as x}from"./Brush-B3k7189R.js";import{B as c}from"./Bar-BnVSJ396.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-eZCAl6aH.js";import"./throttle-CSTRLONy.js";import"./index-kgrSM8GI.js";import"./index-HiZVMws2.js";import"./RechartsWrapper-AdQm7Ax9.js";import"./axisSelectors-M5GsU3rg.js";import"./polarAxisSelectors-Jcl3obl_.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Ctk2L_AK.js";import"./index-BfyWBC3f.js";import"./index-CMkKBRRd.js";import"./renderedTicksSlice-ZV6qlBU2.js";import"./index-BZygq-Tx.js";import"./fillDefinitions-RTxS13Os.js";import"./CartesianChart-AaBKVVVh.js";import"./ZIndexPortal-D-pQJaCe.js";import"./CategoricalChart-DkOrwY__.js";import"./CartesianAxis-BnuaOFtw.js";import"./Layer-DvCe8pYL.js";import"./Text-vABaHyza.js";import"./DOMUtils-BAyS9uvf.js";import"./ZIndexLayer-CLiiJgzL.js";import"./Label-5Ji-gJCy.js";import"./types-DRd1AoLJ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-h2AkLue_.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DWRYsjhQ.js";import"./useAnimationId-mwIlAEpa.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-nIAhhh4O.js";import"./tooltipContext-DfrRO7K2.js";import"./dataEntryStyles-aRHeEgvk.js";import"./ErrorBarContext-DvlMCK3a.js";import"./activeStyles-C5r4Jq_u.js";import"./SetGraphicalItem-DIzHPpXP.js";import"./getZIndexFromUnknown-CVXE7EWA.js";import"./useEffectiveDataKey-sNV4f9xq.js";import"./omit-BAMjBdfC.js";import"./isArguments-yB-y1yaH.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,xt as __namedExportsOrder,ht as default};
