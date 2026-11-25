import{R as t}from"./iframe-Bpzk9XpD.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CybCXANO.js";import{B as p}from"./BarChart-BW7mIXwL.js";import{X as l}from"./XAxis-BP9q3ZDK.js";import{Y as h}from"./YAxis-h8NK-7C6.js";import{B as x}from"./Brush-BiMOQXrG.js";import{B as c}from"./Bar-BfXwiROK.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-C16rW2Tl.js";import"./get-CjriyByo.js";import"./throttle-BPowKzWT.js";import"./index-C_7DmI7l.js";import"./index-CBNlQ8jB.js";import"./RechartsWrapper-DlW5DJbf.js";import"./axisSelectors-BX6dGTcL.js";import"./polarAxisSelectors-C0HjJPCE.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-NmCyEWmm.js";import"./index-BoH8mfei.js";import"./index-Da9OH9g8.js";import"./renderedTicksSlice-B8rXaB1P.js";import"./index-DUebFUoz.js";import"./fillDefinitions-DV8KR0hl.js";import"./CartesianChart-v26TVdj4.js";import"./chartDataContext-DZdZASYb.js";import"./CategoricalChart-CZJOPWNu.js";import"./CartesianAxis-DyKfTr_o.js";import"./Layer-DCNhrIPV.js";import"./Text-Dqm35yMi.js";import"./ZIndexLayer-BSjRPeG2.js";import"./Label-eMApu8Ae.js";import"./types-BjOl9SGN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-CqhA2T9I.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-6Dmq4B9R.js";import"./useAnimationId-B2Y87b6z.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Px2nMQKl.js";import"./tooltipContext-D0ANBb_b.js";import"./ErrorBarContext-CEm3_QIT.js";import"./activeStyles-Dvq2y-2D.js";import"./SetGraphicalItem-BO8cE8zs.js";import"./getZIndexFromUnknown-b2quTXB_.js";import"./useEffectiveDataKey-Cem866lm.js";import"./omit-DcYFru-w.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
