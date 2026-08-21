import{R as t}from"./iframe-6ekSSt-5.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-R_KvTYBp.js";import{B as p}from"./BarChart-B8pg1OsZ.js";import{X as l}from"./XAxis-XZmr7u64.js";import{Y as h}from"./YAxis-wEhmuCU5.js";import{B as x}from"./Brush-DNQq3nIO.js";import{B as c}from"./Bar-DAYEmab6.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-JjZtg2oI.js";import"./index-DAO7DwMJ.js";import"./index-CsVDbkb5.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DA4rmZEN.js";import"./isWellBehavedNumber-CkJkZDTh.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CJruUjAs.js";import"./index-Lx5OR-Dl.js";import"./index-CgnFSl-7.js";import"./axisSelectors-CsclQRZu.js";import"./d3-scale-DlyN1fPO.js";import"./renderedTicksSlice-CnpgwNhL.js";import"./CartesianChart-zH-5NwZD.js";import"./chartDataContext-DyyXPF9l.js";import"./CategoricalChart-DlA58TNH.js";import"./CartesianAxis-2ij8iPYj.js";import"./Layer-Caxtj8I7.js";import"./Text-9v-pfzjR.js";import"./DOMUtils-Crf9cx0d.js";import"./useId-BG9tPgK7.js";import"./useBackwardsCompatibleTheme-KnGuWCfH.js";import"./Label-CehMIv0c.js";import"./ZIndexLayer-CpjFLORN.js";import"./types-Bt2KWWGx.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-BWGnpjqe.js";import"./useAnimationId-C9PEopr_.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-K4g02Igp.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BiTIzsLo.js";import"./tooltipContext-mB6OrZpW.js";import"./RegisterGraphicalItemId-CARor3cI.js";import"./ErrorBarContext-bczhAX9Q.js";import"./GraphicalItemClipPath-Bt-KQwU_.js";import"./SetGraphicalItem-BztnRzJW.js";import"./getZIndexFromUnknown-BVm17RCq.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DWfDvKAL.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const ht=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,ht as __namedExportsOrder,lt as default};
