import{R as t}from"./iframe-C9H6nb8O.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-86DFZZsp.js";import{B as p}from"./BarChart-D2GHFYxb.js";import{X as l}from"./XAxis-CywV301b.js";import{Y as h}from"./YAxis-DXEeaYcv.js";import{B as x}from"./Brush-3K_I-zVM.js";import{B as c}from"./Bar-iYqbsiP0.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BnpdZ0b3.js";import"./index-DkNU9Jwj.js";import"./index-BTq_b2hA.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B_vS2EyS.js";import"./isWellBehavedNumber-BxcMlH1H.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bh_nwwHr.js";import"./axisSelectors-CaDgI8Oc.js";import"./d3-scale-BBLrtWMa.js";import"./index-DOD7xHyz.js";import"./index-d48a0T_2.js";import"./renderedTicksSlice-TzJYRiTZ.js";import"./index-ByTGeVXQ.js";import"./CartesianChart-Dy945WYe.js";import"./chartDataContext-BNqh0ME9.js";import"./CategoricalChart-BRBdOICb.js";import"./CartesianAxis-BWYBJgMt.js";import"./Layer-DNW7nupE.js";import"./Text-BU8Is9rY.js";import"./pageBackground-DsggDmpK.js";import"./useId-pZk3BoDa.js";import"./useBackwardsCompatibleTheme-K49OtSF_.js";import"./Label-6glZLWD6.js";import"./ZIndexLayer-DL3up6PN.js";import"./types-oEFxgIut.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./activeStyles-Dwr5_xBc.js";import"./useAnimationId-k6lITT5p.js";import"./dataEntryStyles-CmzRurqC.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DUAtv8-f.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Cv1ZH2em.js";import"./tooltipContext-B6G4DfLA.js";import"./ErrorBarContext-CBrxfbC1.js";import"./GraphicalItemClipPath-Cizji_0l.js";import"./SetGraphicalItem-B5C7hWKX.js";import"./getZIndexFromUnknown-Bwrut4wA.js";import"./useEffectiveDataKey-BpO8_klP.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
