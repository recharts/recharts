import{R as t}from"./iframe-BYch73GC.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-mAK65TxS.js";import{B as p}from"./BarChart-C52NztPj.js";import{X as l}from"./XAxis-DvBxon3R.js";import{Y as h}from"./YAxis-lTNE--Lq.js";import{B as x}from"./Brush-CenKlea-.js";import{B as c}from"./Bar-Be5Me8Bw.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BEoPPt7A.js";import"./index-BeTLkY2H.js";import"./index-Bc_o9NJn.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DWdkSMZg.js";import"./isWellBehavedNumber-BP9XFgrX.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BLQkthbe.js";import"./axisSelectors-B4VSjfJY.js";import"./d3-scale-B2BH8dUM.js";import"./index-BIGQU915.js";import"./index-Q_fYP1Tj.js";import"./renderedTicksSlice-BkcMIj-K.js";import"./index-D3IuKIwS.js";import"./CartesianChart-Cwhwr6-l.js";import"./chartDataContext-WIuoRrqx.js";import"./CategoricalChart-13njktaQ.js";import"./CartesianAxis-CWGo8wQX.js";import"./Layer-BCbhxOAa.js";import"./Text-C5jLRMCm.js";import"./DOMUtils-DGuhwttO.js";import"./useId-BzCCYXNS.js";import"./useBackwardsCompatibleTheme-BIqSCxVj.js";import"./Label-BRuA27Hh.js";import"./ZIndexLayer-CKmbkchN.js";import"./types-CIbUV0Xf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-D4BR2dBY.js";import"./useAnimationId-CPbSSa-W.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DpbOLOlD.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-p0MunX2r.js";import"./tooltipContext-DojgVIyB.js";import"./RegisterGraphicalItemId-C0FXSJZg.js";import"./ErrorBarContext-BZq9v9h8.js";import"./GraphicalItemClipPath-6dEZaUUD.js";import"./SetGraphicalItem-BJF1DUih.js";import"./getZIndexFromUnknown-BlYpE3BC.js";import"./useGraphicalItemIdentity-_0Nc-geg.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
