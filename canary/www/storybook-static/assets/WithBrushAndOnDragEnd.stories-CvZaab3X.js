import{R as t}from"./iframe-BKOly897.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-MuW0IoWE.js";import{B as p}from"./BarChart-CjLH86Lx.js";import{X as l}from"./XAxis-CAN01VgH.js";import{Y as h}from"./YAxis-B-vCHNYJ.js";import{B as x}from"./Brush-C4sOh927.js";import{B as c}from"./Bar-CUOogcGr.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DBtmfAg5.js";import"./throttle-Dj0bMbq4.js";import"./index-Bgsd-oxC.js";import"./index-CcRpQNf3.js";import"./RechartsWrapper-BR-O-n81.js";import"./axisSelectors-DAovfJtb.js";import"./polarAxisSelectors-Dd8oI3jG.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-FWOlMe5i.js";import"./index-BW-0cZWE.js";import"./index-DAFveYs2.js";import"./renderedTicksSlice-CNCxbMiN.js";import"./index-DlD_trIo.js";import"./CartesianChart-yrdLDQCk.js";import"./ZIndexPortal-DaAvwAYM.js";import"./CategoricalChart-BtQg_BZ4.js";import"./CartesianAxis-B19wq6cj.js";import"./Layer-DdqSdn0F.js";import"./Text-B-p-4nXu.js";import"./pageBackground-ByY2ru8v.js";import"./ZIndexLayer-BgIgZbDQ.js";import"./Label-BqeeWfBr.js";import"./dataEntryStyles-DNa-AVoZ.js";import"./types-BW57dsKE.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-CHIFisD0.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-dSQZJlx4.js";import"./useAnimationId-Dwkyu_pp.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CmV0wYzT.js";import"./tooltipContext-Dy1516kb.js";import"./RegisterGraphicalItemId-DXgo6Kex.js";import"./ErrorBarContext-CQ65MipX.js";import"./activeStyles-C5fI4Bwm.js";import"./SetGraphicalItem-BKFEq2Vz.js";import"./getZIndexFromUnknown-D3BNFson.js";import"./useEffectiveDataKey-BLEvHhBq.js";import"./omit-60X9AB9Q.js";import"./isArguments-yB-y1yaH.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
