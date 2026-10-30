import{R as t}from"./iframe-BvC_nX2I.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-Deux2KLj.js";import{B as p}from"./BarChart-CNiNGJKB.js";import{X as l}from"./XAxis-DJblgq_P.js";import{Y as h}from"./YAxis-Dnd7ECK6.js";import{B as x}from"./Brush-DCUVONFC.js";import{B as c}from"./Bar-eAuVQmvm.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DT691zhh.js";import"./throttle-CirueaOA.js";import"./index-CbvgqQkR.js";import"./index-C-6557Zz.js";import"./RechartsWrapper-YXBLwPUp.js";import"./axisSelectors-D1Op89Ra.js";import"./polarAxisSelectors-Bv7-VLAe.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-oQwuANVt.js";import"./index-CVNtrs8_.js";import"./index-Cthsl8Eg.js";import"./renderedTicksSlice-Bg6jRWvt.js";import"./index-C59oTpld.js";import"./CartesianChart-C1otsVa1.js";import"./ZIndexPortal-BgIvcEBP.js";import"./CategoricalChart-BNHZ2U_e.js";import"./CartesianAxis-CcuHoEVr.js";import"./Layer-BgbmxeTS.js";import"./Text-3ao1DtcI.js";import"./DOMUtils-DlV8uPCF.js";import"./pageBackground-BygNKisP.js";import"./ZIndexLayer-CJcw2vh_.js";import"./Label-CNqVbewr.js";import"./types-CcK0_WR7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./fillDefinitions-CZGVPI6N.js";import"./LabelList-CRaDVB5f.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CaXkiWJ0.js";import"./useAnimationId-CfSQBeBZ.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CHw2ZkCc.js";import"./tooltipContext-CZ7EZjaJ.js";import"./dataEntryStyles-DH8AExSk.js";import"./ErrorBarContext-p-ctGfT-.js";import"./activeStyles-D5yKyFeN.js";import"./SetGraphicalItem-P596Nxos.js";import"./getZIndexFromUnknown-DBLNDD0c.js";import"./useEffectiveDataKey-B9rISrD-.js";import"./omit-QtYQm21j.js";import"./isArguments-yB-y1yaH.js";const xt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},ct=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,ct as __namedExportsOrder,xt as default};
