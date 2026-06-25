import{R as t}from"./iframe-CpH4jn8g.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CMsbRcVo.js";import{B as p}from"./BarChart-DaYIcse5.js";import{X as l}from"./XAxis-BqLLe0Cs.js";import{Y as h}from"./YAxis-D5kjy0nv.js";import{B as x}from"./Brush-S2dX9o6f.js";import{B as c}from"./Bar-B_M6vUB_.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-C21IJxSF.js";import"./index--z9jIKZg.js";import"./index-wpdvZnuB.js";import"./get-DfDzGUS7.js";import"./resolveDefaultProps-DGN954Kv.js";import"./isWellBehavedNumber-6OhSnnoK.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-TUYhIbD6.js";import"./index-B6von4ou.js";import"./index-CB2lo7iV.js";import"./renderedTicksSlice-D-wmUWoC.js";import"./axisSelectors-Bq_vtAr0.js";import"./d3-scale-hekr18xW.js";import"./CartesianChart-BW_KV3Uo.js";import"./chartDataContext-CNUo9Q_N.js";import"./CategoricalChart-CJCbZaD2.js";import"./CartesianAxis-lejBVVP2.js";import"./Layer-CpyyR4fH.js";import"./Text-DxL0BXFO.js";import"./DOMUtils-BSMSB0a3.js";import"./Label-BID2wGRS.js";import"./ZIndexLayer-FLcdyCMW.js";import"./types-CDIAbI3v.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-CHsPQpje.js";import"./AnimatedItems-BjSZm7AL.js";import"./useAnimationId-DOUqN62f.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BETJzIFT.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DtM6eKjz.js";import"./RegisterGraphicalItemId-BwHF-Xvv.js";import"./ErrorBarContext-DQcN79r3.js";import"./GraphicalItemClipPath-CjdnX9P0.js";import"./SetGraphicalItem-BKY8M4LB.js";import"./getZIndexFromUnknown-Bv7SaV46.js";import"./graphicalItemSelectors-DfedSnqi.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const mt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,mt as __namedExportsOrder,dt as default};
