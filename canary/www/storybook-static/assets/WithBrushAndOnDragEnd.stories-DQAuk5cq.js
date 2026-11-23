import{R as t}from"./iframe-DmqRNFpA.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-B1K-Cx6E.js";import{B as p}from"./BarChart-Dw8uWWp5.js";import{X as l}from"./XAxis-D3OnHsd5.js";import{Y as h}from"./YAxis-BVwyU1u1.js";import{B as x}from"./Brush-D08j8ek8.js";import{B as c}from"./Bar-BigJiKPB.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BjqyIxlF.js";import"./throttle-DniwHdPI.js";import"./index-DLLiFttT.js";import"./index-DKIkITg9.js";import"./RechartsWrapper-CTNqlU94.js";import"./axisSelectors-CgQoXC7y.js";import"./polarAxisSelectors-DfZjHeTi.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-a0YrBx9c.js";import"./index-DugFJa8I.js";import"./index-D2BlTs7T.js";import"./renderedTicksSlice-rJsNFgC5.js";import"./index-7-eYjlBn.js";import"./fillDefinitions-D0KLDOLI.js";import"./CartesianChart-DvjgB_s_.js";import"./chartDataContext-7iFWy2pv.js";import"./CategoricalChart-BK3tVtDO.js";import"./CartesianAxis-B7FOD29F.js";import"./Layer-BMG2yPM5.js";import"./Text-CUDSRJfa.js";import"./ZIndexLayer-Rp2F5wBf.js";import"./Label-CGOHFUUI.js";import"./types-ClR1fgnQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-ClWs31k0.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D2jF24kk.js";import"./useAnimationId-BfPOVraS.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-wD2P373B.js";import"./tooltipContext-DRFTWGzc.js";import"./ErrorBarContext-BaRUKqrY.js";import"./activeStyles-2GMTQ11y.js";import"./SetGraphicalItem-B1qkE8Ui.js";import"./getZIndexFromUnknown-BPyNJBsM.js";import"./useEffectiveDataKey-1IVWV8C0.js";import"./omit-GwFxkX5l.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
