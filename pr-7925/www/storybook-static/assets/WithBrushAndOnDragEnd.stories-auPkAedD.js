import{R as t}from"./iframe-B-iIRDdh.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-xTQiy-H7.js";import{B as p}from"./BarChart-BDkD0mjH.js";import{X as l}from"./XAxis-CndG3lfF.js";import{Y as h}from"./YAxis-D6Burg2S.js";import{B as x}from"./Brush-BhvF5XMU.js";import{B as c}from"./Bar-DadnPNFg.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DMKMego8.js";import"./index-o1PLWRMQ.js";import"./index-DFxGa3DU.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BKBNf2xS.js";import"./isWellBehavedNumber-B6qwBi4A.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-3KdvU5vS.js";import"./axisSelectors-C60OKlJ4.js";import"./d3-scale-AYUreAhG.js";import"./index-NNc_ZKUS.js";import"./index-D_yufyJF.js";import"./renderedTicksSlice-DkP6y5za.js";import"./index-BazpKZZl.js";import"./CartesianChart-CmApzcJx.js";import"./chartDataContext-CX0jNdXw.js";import"./CategoricalChart-BfBkFmEt.js";import"./CartesianAxis-D-jVFU-k.js";import"./Layer-Dt4jm0MX.js";import"./Text-CBbsNly8.js";import"./DOMUtils-CixgR7ku.js";import"./useId-D2WPaoHG.js";import"./useBackwardsCompatibleTheme-C-V51dQO.js";import"./Label-CwIrwy70.js";import"./ZIndexLayer-CbH1OgN0.js";import"./types-zJ8KfHt8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-WEAzzrlF.js";import"./useAnimationId-CcMpnWIs.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BOjsrKl9.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-yQdvWiPD.js";import"./tooltipContext-CHGhmnyK.js";import"./RegisterGraphicalItemId-B76epDXu.js";import"./ErrorBarContext-BzZXG9TC.js";import"./GraphicalItemClipPath-DlnJdwTq.js";import"./SetGraphicalItem-BJKoCnbQ.js";import"./getZIndexFromUnknown-D7L5xpEb.js";import"./useGraphicalItemIdentity-B2EBH6VG.js";import"./dataEntryStyles-CRmBcoXI.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
