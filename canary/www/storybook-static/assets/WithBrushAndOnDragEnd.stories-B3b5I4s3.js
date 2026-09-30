import{R as t}from"./iframe-CDSer5wk.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-B-lpBScO.js";import{B as p}from"./BarChart-DB9Hpwoq.js";import{X as l}from"./XAxis-CLZ8_tLg.js";import{Y as h}from"./YAxis-DN7TNoMj.js";import{B as x}from"./Brush-DaejJ2X4.js";import{B as c}from"./Bar-B2cdH9M1.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-fnP7_niv.js";import"./index-Mdu1MT_Q.js";import"./index-DPnG0BF_.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DTBx4E7L.js";import"./isWellBehavedNumber-Cbiw2L0f.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CkjZ8sdT.js";import"./axisSelectors-DSp6qoYe.js";import"./d3-scale-BNdPRZbv.js";import"./index-DV1Q8ly1.js";import"./index-SPPJq_2I.js";import"./renderedTicksSlice-Nk82yORn.js";import"./index-DbUyrogr.js";import"./CartesianChart-B7gL7VFT.js";import"./chartDataContext-SSvdGu54.js";import"./CategoricalChart-BazdXmMB.js";import"./CartesianAxis-DnSeAvbN.js";import"./Layer-BlrsPtdk.js";import"./Text-B-qlIjrY.js";import"./DOMUtils-COEpD6x9.js";import"./useId-SR9QF0F6.js";import"./useBackwardsCompatibleTheme-zogGwhJH.js";import"./Label-CDfUkOd_.js";import"./ZIndexLayer-BGJbwrqn.js";import"./types-DCfhmQQy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-C7ScRxUV.js";import"./useAnimationId-DsIt1eY5.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B9-QabtY.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BNDheO9x.js";import"./tooltipContext-BWklhKSb.js";import"./RegisterGraphicalItemId-BtK15Bh8.js";import"./ErrorBarContext-DAmUJr4k.js";import"./GraphicalItemClipPath-DlXs2ztm.js";import"./SetGraphicalItem-b1y0Bklu.js";import"./getZIndexFromUnknown-s7HsEvWj.js";import"./useGraphicalItemIdentity-DX00RNhI.js";import"./dataEntryStyles-st-w92pF.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
