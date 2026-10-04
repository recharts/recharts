import{R as t}from"./iframe-BRRwZ9OM.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-HqKAKynn.js";import{B as p}from"./BarChart-Jjypsrud.js";import{X as l}from"./XAxis-34NAxun3.js";import{Y as h}from"./YAxis-QWCMNG8w.js";import{B as x}from"./Brush-wIG9xsmW.js";import{B as c}from"./Bar-Bbdg2Kf-.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CI7PhwKd.js";import"./index-C-3qUDzk.js";import"./index-dIUimeeY.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CZ3dceSm.js";import"./isWellBehavedNumber-PSI2l2A6.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BuRv36IR.js";import"./axisSelectors-Duf7CX9E.js";import"./d3-scale-CSNIZQpC.js";import"./index-D46Km6-p.js";import"./index-BjAGoEo5.js";import"./renderedTicksSlice-D7aXzM-e.js";import"./index-Ce-PaXeC.js";import"./CartesianChart-DeYwOeaV.js";import"./chartDataContext-C1k0ydEu.js";import"./CategoricalChart-CWBsWl6U.js";import"./CartesianAxis-Dgab3bjn.js";import"./Layer-DaA93mOO.js";import"./Text-m4YXivgw.js";import"./DOMUtils-kcWo8Tu5.js";import"./useId-DqioIEDp.js";import"./useBackwardsCompatibleTheme-BRwc3p-N.js";import"./Label-BF1g4qnl.js";import"./ZIndexLayer-C1LIYZVJ.js";import"./types-BTYbdlsY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-Dxhu-tqD.js";import"./useAnimationId-WhlrcPo0.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DUtmhkWL.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DiAhe8wn.js";import"./tooltipContext-CxLEjHbB.js";import"./RegisterGraphicalItemId-x9sXDMnN.js";import"./ErrorBarContext-WHUbM02-.js";import"./GraphicalItemClipPath-5REgjKEh.js";import"./SetGraphicalItem-BVwAptcr.js";import"./getZIndexFromUnknown-DKrE3eCu.js";import"./useGraphicalItemIdentity-BCsXVCoB.js";import"./dataEntryStyles-rkDUn2gq.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
