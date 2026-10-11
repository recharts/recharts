import{R as t}from"./iframe-CBWhl09v.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-B1AH5YJS.js";import{B as p}from"./BarChart-BUitomaB.js";import{X as l}from"./XAxis-tzQHqynD.js";import{Y as h}from"./YAxis-C5dVmWPc.js";import{B as x}from"./Brush-_kSEOLBy.js";import{B as c}from"./Bar-C5HaWseV.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-bJqzO9Ic.js";import"./index-BkuzBr4Q.js";import"./index-DAR39XB6.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CJSj2XgG.js";import"./isWellBehavedNumber-CSPLhkuq.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BU6mzVyD.js";import"./axisSelectors-B6qdSbwV.js";import"./d3-scale-BNKhe_xR.js";import"./index-D8EheK28.js";import"./index-rVwT5Wbe.js";import"./renderedTicksSlice-GOLzDKAI.js";import"./index-CFTfJwzV.js";import"./CartesianChart-BcuREG8f.js";import"./chartDataContext-CWF_m6e5.js";import"./CategoricalChart-Dvk5cwWF.js";import"./CartesianAxis-BGPUbFHg.js";import"./Layer-DxeVA2bX.js";import"./Text-fMbisw4f.js";import"./pageBackground-zeq0PAuW.js";import"./useId-KLEpqtFg.js";import"./useBackwardsCompatibleTheme-Z7_zoiGA.js";import"./Label-CJ9xjWYO.js";import"./ZIndexLayer-DmDmq8bi.js";import"./types-Dq74-fjW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./activeStyles-BZ5qRbpV.js";import"./useAnimationId-T7zgTeVd.js";import"./dataEntryStyles-CZ7XLNEq.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B0IEIFtA.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DJCIfDMk.js";import"./tooltipContext-CG3AKtRI.js";import"./ErrorBarContext-Bcceb6pe.js";import"./GraphicalItemClipPath-DGC1RDqu.js";import"./SetGraphicalItem-Dvg6XScA.js";import"./getZIndexFromUnknown-Dn3kwNvw.js";import"./useGraphicalItemIdentity-BtkPyjJj.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
