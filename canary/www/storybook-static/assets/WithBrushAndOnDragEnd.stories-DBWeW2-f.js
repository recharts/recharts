import{R as t}from"./iframe-DFAuwNet.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BwFDZpKd.js";import{B as p}from"./BarChart-Crfijp5P.js";import{X as l}from"./XAxis-DCGzkxjE.js";import{Y as h}from"./YAxis-WC2qqL6y.js";import{B as x}from"./Brush-CJ4L_rjK.js";import{B as c}from"./Bar-BAPmjoQU.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-D4TP_Tl0.js";import"./index-D5vqZcHk.js";import"./index-XHGddEUW.js";import"./get-Bfs700CB.js";import"./resolveDefaultProps-DvMn3fRK.js";import"./isWellBehavedNumber-DOBIUQY2.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B5EEfMW7.js";import"./index-Bdvp9zfN.js";import"./index-CzPHYk5P.js";import"./renderedTicksSlice-C1GYWdqG.js";import"./axisSelectors-rO5_sQtu.js";import"./d3-scale-Bflz5-05.js";import"./string-B6fdYHAA.js";import"./CartesianChart-DsW2iWMz.js";import"./chartDataContext-qOKnmm5w.js";import"./CategoricalChart-F9q04IPB.js";import"./CartesianAxis-DrCLR5OG.js";import"./Layer-pSJwYJA9.js";import"./Text-D4VTZiA_.js";import"./DOMUtils-Cjgkd6jo.js";import"./Label-BiYGQ8wu.js";import"./ZIndexLayer-CzNUPV7f.js";import"./types-CKCIF696.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-ClcTqTcr.js";import"./AnimatedItems-BG4KszHn.js";import"./useAnimationId-BPtcTRZO.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-VpINru7-.js";import"./ActiveShapeUtils-CrgbqME0.js";import"./RegisterGraphicalItemId-CzkMeR6l.js";import"./ErrorBarContext-BoGExbnB.js";import"./GraphicalItemClipPath-DXkB_bbX.js";import"./SetGraphicalItem-CYy4gzAa.js";import"./getZIndexFromUnknown-CgfT03cm.js";import"./graphicalItemSelectors-DvYTlKS4.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
